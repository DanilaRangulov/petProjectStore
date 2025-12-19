import {rtkApiService} from "shared/api";
import {ProductQueryParams, ProductResponse} from "../types/types";
import {BaseQueryMeta} from "@reduxjs/toolkit/query";


export const productApi = rtkApiService.injectEndpoints({
    endpoints: (builder) => ({

        getProduct: builder.query<ProductResponse, ProductQueryParams>({
            query: ({pageNumber, pageSize, search}: ProductQueryParams) => ({ url: `product/?pageNumber=${pageNumber}&pageSize=${pageSize}&search=${search}` }),
            transformResponse: (data: ProductResponse) => data,
            providesTags: (result, error, arg) => [{ type: 'Product', arg }],

            merge: (currentCacheData, responseData, { arg }) => {
                currentCacheData.pages[arg.pageNumber] = responseData.pages[arg.pageNumber];
            },

            serializeQueryArgs: ({ endpointName, queryArgs }) =>
                `${endpointName}-${queryArgs.search}-${queryArgs.pageSize}`,

            forceRefetch: ({ currentArg, previousArg, endpointState }) => {
                const page = currentArg?.pageNumber
                if (page == null) return true;
                const cached = endpointState?.data as ProductResponse | undefined
                if (cached?.pages?.[page]) {
                    return false;
                } else {
                    return true;
                }
            },
        })
    })
})