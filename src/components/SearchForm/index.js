import React, {useState} from "react";
import useTitle from "../../hooks/useTitle";
import './index.css';

function SearchForm ({ onSubmit }) {
    const [key, setKeyword] = useState('')

    const handleSubmit = event => {
        event.preventDefault()
        
        onSubmit({key})
    }

    const handleChange = event => {
        setKeyword(event.target.value)
    }

    
    return (
        <form className="busqueda" onSubmit={handleSubmit}>
            <label for="buscar">Busca los gifs que más te gusten </label>
            <input id="buscar" name="buscar" className="barra-busqueda" placeholder="Gifs de..." onChange={handleChange} type='text' value={key}></input>
        </form>
    )
}


export default React.memo(SearchForm)