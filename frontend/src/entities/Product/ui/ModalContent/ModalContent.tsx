import React from 'react';
import {ProductCardModel} from "../../model/types/types";
import {Paragraph} from "shared/ui/Paragraph";
import classes from './ModalContent.module.scss'
const ModalContent = (props: ProductCardModel) => {
    const {title, category, imageUrl, price, description} = props
    return (
        <div className={classes.wrapper}>
            <div className={classes.ModalContent}>
                <div className={classes.topContent}>
                    <div className={'font-medium20'}>{title}</div>
                    <div className={'font-regular18'}>{category}</div>
                </div>
                <div className={classes.imageContent}>
                    <img src={imageUrl} alt={title} />
                </div>
                <Paragraph title={'Описание'} textContent={description}/>
            </div>
        </div>
    );
};

export default ModalContent;