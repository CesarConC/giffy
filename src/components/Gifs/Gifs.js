import React from "react";
import './Gifs.css';
import { Link, Route } from "wouter";


export default function Gif({ title, id, url }) {
    return (
        <Link className="Gif" to={`/gif/:${id}`}>
            <h3>{title}</h3>
            <img alt={title} src={url}></img>
            <small>{id}</small>

        </Link>
    )
}