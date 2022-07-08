import React, {useContext} from "react";
import Context from "../../context/StaticContext";
import GifsContext from "../../context/GifsContext";
import Gif from "../Gifs/Gifs";
import { type } from "@testing-library/user-event/dist/type";

export default function InfoGif({params}) {
    const {gifs, setGifs} = useContext(GifsContext)
    let gif = 0
    
    for (let i = 0; i < Object.keys(gifs).length; i++) {
        const buen_id = params.id.slice(1)
        if (gifs[i]['id'] == buen_id) {
            gif = gifs[i]
        }
    }    

    return <Gif {...gif} />
}