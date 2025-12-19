import React, {useEffect} from 'react';
import {ItemsGrid} from "shared/ui/ItemsGrid";
import classes from './ProductsWidget.module.scss'
import ProductCard from "../ProductCard/ProductCard";
import {Filters} from "../../../../features/Filter";
import {productApi} from "../../model/api/productApi";
import PaginationController from "../PaginationController/PaginationController";
import {ProductCardModel} from "../../model/types/types";
const ProductsWidget = () => {
    const [searchFilter, setSearchFilter] = React.useState('');
    const [currentPage, setCurrentPage] = React.useState(0);

    const [currentItems, setCurrentItems] = React.useState<ProductCardModel[]>([]);

    const [total, setTotal] = React.useState<number | null>(null);

    const {
        data,
        isLoading,
        isFetching,
    } = productApi.useGetProductQuery(
        {
            pageNumber: currentPage,
            pageSize: 6,
            search: searchFilter
        }
    );
    useEffect(() => {
        if (!isLoading && !isFetching) {
            const items = Object.values(data?.pages[currentPage] ?? {}).flat()
            setCurrentItems(items)
            setTotal(data?.total ?? 0);
        }
    }, [isFetching, data, currentPage]);

    useEffect(() => {
        setCurrentPage(0);
    }, [searchFilter]);
    return (
        <div className={`${classes.ProductsWidget}`}>

            <div className={'font-bold32'}>Наш католог товаров</div>

            <Filters setTextState={(value) => setSearchFilter(value)}/>
            <ItemsGrid>
                {
                    currentItems.map((item, index) => <ProductCard key={index} {...item} />)
                }
            </ItemsGrid>
            {
                total != null
                &&
                <PaginationController
                    isFetching={isFetching}
                    isLoading={isLoading}
                    currentPage={currentPage}
                    total={total}
                    setCurrentPage={(value) => setCurrentPage(value)}
                />
            }
        </div>
    );
};

export default ProductsWidget;