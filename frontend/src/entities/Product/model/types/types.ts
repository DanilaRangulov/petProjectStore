export interface ProductPageParam {
    pageNumber: number;
    pageSize: number;
}

export interface ProductResponse {
    items: ProductCardModel;
    total: number;
}

export interface ProductCardModel {
    id: number;
    title: string;
    price: number;
    category: string;
    imageUrl: string;
    description: string;
}