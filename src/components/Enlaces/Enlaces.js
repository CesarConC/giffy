import React, {useCallback, useS} from "react";
import './Enlaces.css';
import { Link, Route, useLocation } from "wouter";
import ListOfGifs from "../ListOfGifs/ListOfGifs";
import { useGIFS } from "../../hooks/useGIFS";
import LazyTrending from "../TrendingSearches";
import SearchForm from "../SearchForm";
import useTitle from "../../hooks/useTitle";


export default function Enlaces () {


    // devuelve 2 cosas. La primera es el path donde estas. La segunda es una funcion de callback
    const [path, pushLocation] = useLocation()
    const {loading, gifs, k} = useGIFS('pokemon')

    const handleSubmit = useCallback(({key}) => {
        pushLocation(`/search/:${key}`)

    }, [pushLocation])

    //if (Object.keys(gifs).length != 0) {

    return <div>
        <div className="enlaces-gifs">
            <SearchForm onSubmit={handleSubmit} />
        </div>
        <div className="resultado">
            <h4>Última busqueda</h4>
            <ListOfGifs params={{k}} />
            <LazyTrending />
        </div>

        
    </div>
        
   // }

    /*return <div className="enlaces-gifs">
        <form className="busqueda" onSubmit={handleSubmit}>
            <input className="barra-busqueda" placeholder="Gifs de..." onChange={handleChange} type='text' value={key}></input>
        </form>  
    </div>*/
}