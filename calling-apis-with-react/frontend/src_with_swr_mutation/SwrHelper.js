import useSWR from "swr";
import UuidStore from "./UuidStore";

export function fetcher(...args) {
    return fetch(...args).then(res => res.json());   
}

export function fetcherWithToken(...args) {
    if (args[1]) {
        if (args[1].headers) {
            args[1].headers["X-SESSION-TOKEN"] = UuidStore.value;
        } else {
            args[1].headers = { "X-SESSION-TOKEN": UuidStore.value };
        }
    } else {
        args[1] = { headers: { "X-SESSION-TOKEN": UuidStore.value } };
    }
    return fetch(...args).then(res => res.json());   
}

export function useCart() {
    const { data, error } = useSWR("http://localhost:3333/cart", fetcherWithToken);

    return {
        cart: data,
        isError: error,
        isLoading: !error && !data
    };
}