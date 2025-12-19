import React from 'react';
import classes from './PageDot.module.scss'
import {classNames} from "../../../utils/classNames/classNames";

interface PageDotProps {
    setCurrentPage: (page: number) => void;
    currentPage: number;
    page: number | string;
}

const PageDot = (props: PageDotProps) => {
    const { setCurrentPage, currentPage, page } = props;

    const pagesMods: Record<string, boolean> = {
        [classes.currentDot]: currentPage === (Number(page)),
    }

    return (
        <div
             onClick={() => {
                 if (typeof page === 'number') setCurrentPage(page)
             }}
             className={classNames(classes.PageDot, pagesMods, ['font-medium20'])
             }
        >
            {
                typeof page === 'number' ? (page + 1) : page
            }
        </div>
    );
};

export default PageDot;