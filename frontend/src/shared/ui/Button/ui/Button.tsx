import React, {ButtonHTMLAttributes} from 'react';
import classes from './Button.module.scss'
import {classNames} from "shared/utils/classNames/classNames";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
    className?: string;
}
const Button = (props: ButtonProps) => {
    const {children, ...restProps} = props;
    return (
        <button className={classNames(classes.btn, {}, ['font-regular18'])}>
            {children}
        </button>
    );
};

export default Button;