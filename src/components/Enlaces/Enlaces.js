import React, {useState, useEffect} from "react";
import './Enlaces.css';
import { Link, Route, useLocation } from "wouter";
import ListOfGifs from "../ListOfGifs/ListOfGifs";
import { useGIFS } from "../../hooks/useGIFS";


export default function Enlaces () {

    const [keyword, setKeyword] = useState('')
    // devuelve 2 cosas. La primera es el path donde estas. La segunda es una funcion de callback
    const [path, pushLocation] = useLocation()

    const {loading, gifs} = useGIFS()

    const handleSubmit = event => {
        event.preventDefault()
        pushLocation(`/search/:${keyword}`)
    }

    const handleChange = event => {
        setKeyword(event.target.value)
    }

    return <div className="enlaces-gifs">
        <form className="busqueda" onSubmit={handleSubmit}>
            <input className="barra-busqueda" placeholder="Gifs de..." onChange={handleChange} type='text' value={keyword}></input>
        </form>

        <Link className="enlace" to="/search/:eren">Gifs de Eren Yaeger</Link>
        <Link className="enlace" to="/search/:asta">Gifs de Asta</Link>
        <Link className="enlace" to="/search/:lelouch">Gifs de Lelouch</Link>
        <Link className="enlace" to="/search/:blackclover">Gifs de Black Clover</Link>
    </div>
}