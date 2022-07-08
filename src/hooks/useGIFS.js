import {useState, useEffect, useContext} from "react";
import getGifs from "../services/getGifs";
import GifsContext from '../context/GifsContext'

export function useGIFS({ keyword } = {keyword: null}) {

    const {gifs, setGifs} = useContext(GifsContext)
    const [loading, setLoading] = useState(false)
    const [k, setK] = useState(0)

    // useEffect se ejecuta cada vez que se renderiza el componente. Si el estado cambia,
    // se renderiza de nuevo el componente
  

    useEffect(function () {
      setLoading(true)

        // Recuperamos del storage la ultma keyword que se ha buscado
        let keywordToUse = 0
        if (keyword) {
          keywordToUse = keyword
        }
        else {
          keywordToUse = localStorage.getItem('lastKeyword')
        }
        if (keyword) {
          localStorage.setItem('lastKeyword', keyword)
        }
        setK(keywordToUse.slice(1))
        getGifs({keyword : keywordToUse}).then(gifs => setGifs(gifs))
        setLoading(false)
        
      
      
    }, [keyword, setGifs])

    return {loading, gifs, k}
}



