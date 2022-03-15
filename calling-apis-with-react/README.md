### Advanced Data Retrieval

___

#### Pain Points

* Missing convenience/performance features (caching, pagination)
* Clumsy state management
* Ceremony

#### React Query (https://react-query.tanstack.com)

___

1. Console: `npm install react-query`
2. Application:

```
import {QueryClient, QueryClientProvider} from "react-query";
function App(){
...
return(
    <QueryClientProvider client={queryClient}>
    ...
    </QeuryClientProvider>
)
}
```

See for example the `App.js` in this project. See also example for mutation on `EventItem.js`.

#### SWR (https://swr.vercel.app)

___

1. Console: `npm install swr`
2. Application:

```
function fetcher(...args){
    return fetch(...args).then(
    res => res.json());
};
const {data, error} = useSWR("/cart",fetcher);
```

## Testing

___

* Mocking Fetch Calls with Mirage JS (https://miragejs.com)
* Stubbing APIs with json-server (https://github.com/typicode/json-server)
    1. `npm install json-server -g`
    2. `json-server --watch [json file] --port [PORT]



