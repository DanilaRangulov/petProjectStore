import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const rtkApiService = createApi({
    reducerPath: 'api',
    tagTypes: ['Product'],
    keepUnusedDataFor: 300,
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/api' }),
    endpoints: () => ({}),
});