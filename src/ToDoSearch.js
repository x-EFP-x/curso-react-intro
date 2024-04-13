import React from 'react';
import './ToDoSearch.css'

function ToDoSearch({searchValue, setSearchValue}) {

    return (
        <input
            placeholder="Cortar cebolla"
            className="search_input"
            value={searchValue}
            onChange={
                (event) => {
                    // esta es una funcion actualizadora del estado
                    setSearchValue(event.target.value);
                }
            } />
    );
}

export { ToDoSearch };