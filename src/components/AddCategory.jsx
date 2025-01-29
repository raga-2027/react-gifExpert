
import React, { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        // console.log(target.value);
        setInputValue(target.value);
    }

    const onSumit = (event) => {
        event.preventDefault();
        // console.log(inputValue);
        const newImputValue = inputValue.trim();
        if( newImputValue.length <= 1) return;
        onNewCategory(newImputValue)
        setInputValue('');
        //setCategories(set => [inputValue, ...set])
       
    }

    return (
        <form onSubmit={onSumit}>
            <input
                type="text"
                placeholder='Buscar Gifs'
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    )
}
