import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs/ListOfGifs';
import { Link, Route } from "wouter";
import Enlaces from './components/Enlaces/Enlaces';
import Context from './context/StaticContext';
import InfoGif from './components/InfoGif/InfoGif';
import { GifsContextProvider } from './context/GifsContext';

// http://localhost:3000/

function App() {

  return (
    <Context.Provider value={{name:'Cesar'}}>   
    <div className="App">
      <section className="App-content">

        <h1><Link className="enlace" to="/">Mi App de Gifs</Link></h1>

        <GifsContextProvider>
        <Route component={Enlaces} path="/" />
        <Route component={ListOfGifs} path="/search/:keyword" />
        <Route component={InfoGif} path="/gif/:id" />
        </GifsContextProvider>
        
      </section>
    </div>
    </Context.Provider>
  );
}

export default App;
