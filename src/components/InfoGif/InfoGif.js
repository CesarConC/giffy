import React, {useContext, useEffect, useState} from "react";
import GifsContext from "../../context/GifsContext";
import getSingleGif from "../../services/getSingleGif";
import Gif from "../Gifs/Gifs";
import './InfoGif.css'
import useTitle from "../../hooks/useTitle";


export default function InfoGif({params}) {
    const {gifs, setGifs} = useContext(GifsContext)
    let gif = false
    
    for (let i = 0; i < Object.keys(gifs).length; i++) {
        const buen_id = params.id.slice(1)
        if (gifs[i]['id'] == buen_id) {
            gif = gifs[i]
        }
    }    

    const [gifFromCache, setGifFromCache] = useState(gif)

    useEffect(function () {
        if (!gifFromCache) {
            getSingleGif(params)
                .then(nuevoGif => (setGifFromCache(nuevoGif)))
        }
    }, [params.id, gifFromCache])

    const title = gifFromCache ? gifFromCache.title : ''

    useTitle({title})

    if (!gifFromCache) return null

    return <div className="info-div">
        <h3>{gifFromCache.title}</h3>
        <Gif {...gifFromCache} />
    </div>
    
    
    
}