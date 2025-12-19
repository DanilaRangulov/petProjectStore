import React from 'react';
import classes from './Paragraph.module.scss'
interface ParagraphProps {
    title: string;
    textContent: string
}
const Paragraph = (props: ParagraphProps) => {
    const { title, textContent } = props;
    return (
        <div>
            <div className={'font-medium20'}>{title}</div>
            <div className={'font-regular16'}>{textContent}</div>
        </div>
    );
};

export default Paragraph;