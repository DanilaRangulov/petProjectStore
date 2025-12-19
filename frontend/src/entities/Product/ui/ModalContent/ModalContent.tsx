import React from 'react';
import {ProductCardModel} from "../../model/types/types";
import {Paragraph} from "shared/ui/Paragraph";
import classes from './ModalContent.module.scss'
import {Button} from "shared/ui/Button";
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

                <div className={classes.bottomContent}>

                    <Button>
                        Купить
                    </Button>

                <div className={classes.price}>
                    <span className={'font-regular18'}>Цена</span>
                    <span className={'font-bold24'}>{price} </span>
                </div>
                </div>
            </div>
        </div>
    );
};

export default ModalContent;