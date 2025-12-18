import {rtkApiService} from "shared/api";
import {ProductPageParam, ProductResponse} from "../types/types";


export const productApi = rtkApiService.injectEndpoints({
    endpoints: (builder) => ({
        getPortfolio: builder.infiniteQuery<ProductResponse, void, ProductPageParam>({
            infiniteQueryOptions: {
                initialPageParam: {
                    pageNumber: 1,
                    pageSize: 10
                },
                getNextPageParam: (
                    lastPage,
                    allPages,
                    lastPageParam,
                    allPageParams,
                ) => {
                    const nextPage = lastPageParam.pageNumber + 1
                    const totalPages = Math.ceil(lastPage.total / lastPageParam.pageSize)
                    const remainingPages = totalPages - nextPage
                    if (remainingPages < 0) {
                        return undefined
                    }
                    return {
                        ...lastPageParam,
                        pageNumber: nextPage,
                    }
                },
                getPreviousPageParam: (
                    firstPage,
                    allPages,
                    firstPageParam,
                    allPageParams,
                ) => {
                    const prevPage = firstPageParam.pageNumber - 1
                    if (prevPage < 0) return undefined

                    return {
                        ...firstPageParam,
                        pageNumber: prevPage,
                    }
                },
            },
            query: ({ queryArg, pageParam }) => {
                const { pageNumber, pageSize } = pageParam;
                return {
                    url: 'product',
                    params: {
                        pageNumber,
                        pageSize,
                    },
                };
            },
        }),
    })
})