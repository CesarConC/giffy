// APP
/*
import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs';
import { Link, Route } from "wouter";

// http://localhost:3000/

function App() {

  return (
    <div className="App">
      <section className="App-content">
        <h1>App</h1>

        <Link to="/gif/:eren">Gifs de Eren Yaeger</Link>
        <Link to="/gif/:asta">Gifs de Asta</Link>
        <Link to="/gif/:lelouch">Gifs de Lelouch</Link>
        <Link to="/gif/:blackclover">Gifs de Black Clover</Link>

        <Route component={ListOfGifs} path="/gif/:keyword" />
      </section>
    </div>
  );
}

export default App;

// LISTOFGIFS

import React, {useState, useEffect} from "react";
import Gif from "./Gifs";
import getGifs from "../services/getGifs";
import './ListOfGifs.css'

export default function ListOfGifs ({ params }) {
    const {keyword} = params
    const [gifs, setGifs] = useState([])
    const [loading, setLoading] = useState(false)
 
    // useEffect se ejecuta cada vez que se renderiza el componente. Si el estado cambia,
    // se renderiza de nuevo el componente
  
    useEffect(function () {
      setLoading(true)
      getGifs({keyword}).then(gifs => setGifs(gifs))
      setLoading(false)
      
    }, [keyword])

    if (loading) {
      return <h2>Cargando...</h2>
    }

    return <div className="lista-gifs">
      {
        gifs.map(singleGif => 
          <Gif 
              key={singleGif.id}
              title={singleGif.title} 
              url={singleGif.url} 
              id={singleGif.id}
          />
        )
      }

    </div>
}

// 

import React from "react";
import './Gifs.css'

export default function Gif({ title, id, url }) {
    return (
        <a className="Gif" href={`#${id}`}>
            <h3>{title}</h3>
            <img alt={title} src={url}></img>
            <small>{id}</small>

        </a>
    )
}*/