import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";

export const rtkApiService = createApi({
    reducerPath: 'api',
    keepUnusedDataFor: 300,
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api' }),
    endpoints: () => ({}),
});