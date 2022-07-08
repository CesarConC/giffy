import React, {useState, useEffect} from "react";
import { Link } from "wouter";
import './Categorias.css'

export default function Categorias (props) {
    const name = props.name
    const valores= props.valores
    console.log(valores)

    const resultado = valores.map(valor => {
                        <Link to={"/search/:" + valor}>{valor}</Link>
                        })

    return (
        <div className='categoria'>
            <h3 className="categoria-title">{decodeURI(name)}</h3>
            <ul className="categoria-list">
            {valores.map((singleOption) => (
                <li key={singleOption}>
                <Link className="categoria-link" to={`/search/${singleOption}`}>
                    {singleOption}
                </Link>
                </li>
            ))}
            </ul>
        </div>
    );
}


