import React, {useContext} from "react";
import GifsContext from "../../context/GifsContext";
import Gif from "../Gifs/Gifs";
import './InfoGif.css'


export default function InfoGif({params}) {
    const {gifs, setGifs} = useContext(GifsContext)
    let gif = 0
    
    for (let i = 0; i < Object.keys(gifs).length; i++) {
        const buen_id = params.id.slice(1)
        if (gifs[i]['id'] == buen_id) {
            gif = gifs[i]
        }
    }    

    return <div className="info-div">
        <h3>{gif.title}</h3>
        <Gif {...gif} />
    </div>
    
}