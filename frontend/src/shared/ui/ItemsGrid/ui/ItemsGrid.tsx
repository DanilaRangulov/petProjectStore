import React from 'react';
import classes from './ItemsGrid.module.scss'
interface itemsGridProps {
    children: React.ReactNode
    className?: string
}
const ItemsGrid = (props: itemsGridProps) => {
    const {children, className} = props
    return (
        <div className={`${classes.itemsGrid} ${className}`}>
            <div className={classes.grid}>
                {children}
            </div>
        </div>
    );
};

export default ItemsGrid;