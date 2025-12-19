import React, {useEffect, useState} from 'react';
import classes from './PaginationController.module.scss'
import {PageDot} from "shared/ui/PageDot";
interface PaginationControllerProps {
    isLoading: boolean;
    isFetching: boolean;
    currentPage: number;
    total: number;
    setCurrentPage: (page: number) => void;
}
const PaginationController = (props: PaginationControllerProps) => {
    const { currentPage, total, setCurrentPage, isLoading, isFetching } = props;
    const [pages, setPages] = useState<Array<string | number>>([]);
    useEffect(() => {
        const lastPage = Math.floor(total / 6);

        const array: Array<string | number> = [0]

        let i;

        if ( currentPage - 2 <= 0) {
            i = 1
        } else {
            i = currentPage - 2
        }

        for(i; i <= currentPage + 2; i++) {
            array.push(i)

            if (i === lastPage - 1) {
                break;
            }
        }

        // не может быть Nan
        if(Math.abs(0 - currentPage) > 2) {
             array.splice(1, -1, '...')
        }

        if(lastPage - currentPage > 3) {
            array.splice(array.length, -1, '...')
        }

        array.push(lastPage)
        setPages([...array])

    }, [currentPage, total]);

    return (
        <div className={classes.PaginationController}>
            {
                pages.map((page, index) => (
                    <PageDot key={index} setCurrentPage={setCurrentPage} currentPage={currentPage} page={page}/>
                    )
                )
            }
        </div>
    );
};

export default PaginationController;