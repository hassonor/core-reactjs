import { mutate } from "swr";
import UuidStore from "./UuidStore";

export function addCart(id) {
    fetch(
        "http://localhost:3333/cart", {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
                "X-SESSION-TOKEN": UuidStore.value
            },
            body: JSON.stringify({
                id: id
            })
        }).then(() => {
            mutate("http://localhost:3333/cart");
        });
}

export function updateCart(id, quantity) {
    if (quantity === 0) {
        fetch(
            "http://localhost:3333/cart", {
                method: "DELETE",
                headers: { 
                    "Content-Type": "application/json",
                    "X-SESSION-TOKEN": UuidStore.value
                },
                body: JSON.stringify({
                    id: id
                })
            }).then(() => {
                mutate("http://localhost:3333/cart");
            });
    } else {
        fetch(
            "http://localhost:3333/cart", {
                method: "PATCH",
                headers: { 
                    "Content-Type": "application/json",
                    "X-SESSION-TOKEN": UuidStore.value
                },
                body: JSON.stringify({
                    id: id,
                    quantity: quantity
                })
            }).then(() => {
                mutate("http://localhost:3333/cart");
            });    
    }
}

export function deleteCart(id) {
    fetch(
        "http://localhost:3333/cart", {
            method: "DELETE",
            headers: { 
                "Content-Type": "application/json",
                "X-SESSION-TOKEN": UuidStore.value
            },
            body: JSON.stringify({
                id: id
            })
        }).then(() => {
            mutate("http://localhost:3333/cart");
        });
}

export function clearCart() {
    fetch(
        "http://localhost:3333/cart", {
            method: "DELETE",
            headers: { 
                "Content-Type": "application/json",
                "X-SESSION-TOKEN": UuidStore.value
            }
        }).then(() => {
            mutate("http://localhost:3333/cart");
        });
}
