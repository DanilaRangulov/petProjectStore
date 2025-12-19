import React from 'react';
import classes from './Filters.module.scss'

interface FiltersProps {
    setTextState: (text: string) => void;
}

const Filters = (props: FiltersProps) => {
    const {setTextState} = props;
    const onChangeValue = (value: string) => {
        setTextState(value);
    }
    return (
        <div className={classes.Filters}>
            <div className={'font-medium20'}>Фильтр</div>
            <input
                name={'search'}
                className={'font-regular16'}
                placeholder={'Найти товары'}
                onChange={(e) => onChangeValue(e.target.value)}
            />
        </div>
    );
};

export default Filters;