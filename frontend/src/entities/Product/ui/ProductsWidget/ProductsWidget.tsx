import React from 'react';
import {ItemsGrid} from "shared/ui/ItemsGrid";
import classes from './ProductsWidget.module.scss'
import ProductCard from "../ProductCard/ProductCard";
import {Filters} from "../../../../features/Filter";
import {productApi} from "../../model/api/productApi";
const ProductsWidget = () => {
    const [searchFilter, setSearchFilter] = React.useState('');
    const {
        data,
        fetchNextPage,
        isFetchingNextPage,
    } = productApi.useGetProductInfiniteQuery(searchFilter)

    const items = data?.pages.flatMap(page => page.items)

    return (
        <div className={`${classes.ProductsWidget} container`}>
            <Filters setTextState={(value) => setSearchFilter(value)}/>
            <ItemsGrid>
                {items && items.map(item => <ProductCard {...item} />)}
            </ItemsGrid>
        </div>
    );
};

export default ProductsWidget;