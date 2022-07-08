import React, {useState, useEffect} from "react";
import './Enlaces.css';
import { Link, Route, useLocation } from "wouter";
import ListOfGifs from "../ListOfGifs/ListOfGifs";
import { useGIFS } from "../../hooks/useGIFS";
import LazyTrending from "../TrendingSearches";


export default function Enlaces () {

    const [key, setKeyword] = useState('')
    // devuelve 2 cosas. La primera es el path donde estas. La segunda es una funcion de callback
    const [path, pushLocation] = useLocation()
    const {loading, gifs, k} = useGIFS('pokemon')

    const handleSubmit = event => {
        event.preventDefault()
        pushLocation(`/search/:${key}`)
    }

    const handleChange = event => {
        setKeyword(event.target.value)
    }

    if (Object.keys(gifs).length != 0) {
        
        return <div>
            <div className="enlaces-gifs">
                <form className="busqueda" onSubmit={handleSubmit}>
                    <label for="buscar">Busca los gifs que más te gusten </label>
                    <input id="buscar" name="buscar" className="barra-busqueda" placeholder="Gifs de..." onChange={handleChange} type='text' value={key}></input>
                </form>
            </div>
            <div className="resultado">
                <h4>Última busqueda</h4>
                <ListOfGifs params={{k}} />
                <LazyTrending />
            </div>

            
        </div>
        
    }

    return <div className="enlaces-gifs">
        <form className="busqueda" onSubmit={handleSubmit}>
            <input className="barra-busqueda" placeholder="Gifs de..." onChange={handleChange} type='text' value={key}></input>
        </form>  
    </div>
}