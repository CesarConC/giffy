import React from "react";
import './Gifs.css';
import { Link, Route } from "wouter";

//<p>{title}</p>
export default function Gif({ title, id, url }) {
    return (
        <Link className="Gif" to={`/gif/:${id}`}>
            <small>{title}</small>
            <img className="imagen-gif" alt={title} src={url}></img>
        </Link>
    )
}