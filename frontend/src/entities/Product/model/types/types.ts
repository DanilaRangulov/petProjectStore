export interface ProductQueryParams {
    pageNumber: number;
    pageSize: number;
    search: string;
}

export interface ProductResponse {
    pages: Record<number, ProductCardModel[]>
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