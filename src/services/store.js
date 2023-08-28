import { configureStore } from "@reduxjs/toolkit";

import { articleApi } from "./article";

export const store = configureStore({ // a store is a global state
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer, //reducig the state to a single state
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(articleApi.middleware) // https://redux-toolkit.js.org/api/configureStore
});