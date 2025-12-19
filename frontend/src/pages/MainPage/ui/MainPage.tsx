import React from 'react';
import classes from './MainPage.module.scss'
import ProductsWidget from "entities/Product/ui/ProductsWidget/ProductsWidget";
const MainPage = () => {
    return (
        <div className={`container ${classes.MainPage}`}>
            <ProductsWidget/>
        </div>
    );
};

export default MainPage;