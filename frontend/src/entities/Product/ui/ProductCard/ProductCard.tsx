import React, {useCallback} from 'react';
import classes from './ProductCard.module.scss'
import {ProductCardModel} from "../../model/types/types";
import {Modal} from "../../../../shared/ui/Modal";
import ModalContent from "../ModalContent/ModalContent";
const ProductCard = (props: ProductCardModel) => {
    const {title, description, imageUrl, price, category} = props;
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    const onOpenModal = () => {
        setIsModalOpen(true);
    }
    const onCloseModal = useCallback(() => {
        setIsModalOpen(false);
    }, [])
    return (
        <div className={classes.ProductCard} onClick={onOpenModal}>
            <div className={classes.imageContent}>
                <img src={imageUrl} alt={title} />
            </div>

            <div className={'font-medium20'}>{title}</div>

            <div className={classes.bottom}>
                <span className={'font-regular16'}>
                    {category}
                </span>
                <span className={'font-regular18'}>
                    {price}
                </span>
            </div>
            <Modal isOpen={isModalOpen} onClose={onCloseModal}>
                <ModalContent {...props}/>
            </Modal>
        </div>
    );
};

export default ProductCard;