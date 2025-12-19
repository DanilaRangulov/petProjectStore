import React, {useCallback, useEffect, useLayoutEffect, useRef, useState} from 'react';
import classes from './Modal.module.scss'
import {createPortal} from "react-dom";
import {classNames} from "../../../utils/classNames/classNames";
interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    className?: string;
}
const ANIMATION_TIME = 250
const Modal = (props: ModalProps) => {
    const {isOpen, onClose, children, className} = props;
    const [isClosing, setIsClosing] = React.useState(false);
    const [isMounted, setIsMounted] = useState(false);
    const [isOpening, setIsOpening] = React.useState(false);
    const rafRef = useRef<number>(null);
    const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

    const onCloseHandle = useCallback(() => {

        setIsOpening(false)
        setIsClosing(true);
        timerRef.current = setTimeout(() => {
            setIsClosing(false)
            timerRef.current = null
            setIsMounted(false)
            onClose()
        }, ANIMATION_TIME);

    }, [onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') {
            onCloseHandle()
        }
    }, [onCloseHandle])
    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation()
    }
    const mods: Record<string, boolean> = {
        [classes.opened]: isOpening,
        [classes.isClosing]: isClosing
    }
    useEffect(() => {
        if (isOpen) {
            document.documentElement.style.overflow = "hidden";
            window.addEventListener('keydown', onKeyDown);
            rafRef.current = requestAnimationFrame(() => setIsOpening(true))
        }
        return () => {
            document.documentElement.style.overflow = "";
            window.removeEventListener('keydown', onKeyDown);
            if (rafRef.current) cancelAnimationFrame(rafRef.current)
            if (timerRef.current) clearTimeout(timerRef.current);
        }
    }, [isOpen, onKeyDown]);

    useLayoutEffect(() => {
        if (isOpen) {
            setIsMounted(true)
        }
    }, [isOpen]);

    if (!isMounted) {
        return null;
    }
    return createPortal(
        <div className={classNames(classes.Modal, mods, [])}>
            <div className={classes.overlay} onClick={onCloseHandle}>
                <div className={classNames(classes.content, {}, [className])} onClick={onContentClick}>
                    <button className={classes.exitBtn} onClick={onCloseHandle}>
                        <div></div>
                        <div></div>
                    </button>
                    {children}
                </div>
            </div>
        </div>, document.body
    );
};

export default Modal;