import {useState, useEffect, useContext} from "react";
import getGifs from "../services/getGifs";
import GifsContext from '../context/GifsContext'

export function useGIFS({ keyword } = {keyword: null}) {

    const {gifs, setGifs} = useContext(GifsContext)
    const [loading, setLoading] = useState(false)
    
    // useEffect se ejecuta cada vez que se renderiza el componente. Si el estado cambia,
    // se renderiza de nuevo el componente
  
    useEffect(function () {
      setLoading(true)

        // Recuperamos del storage la ultma keyword que se ha buscado
      const keywordToUse = keyword || localStorage.getItem('lastKeyword')
      if (keyword) {
        localStorage.setItem('lastKeyword', keyword)
      }

      getGifs({keyword : keywordToUse}).then(gifs => setGifs(gifs))
      setLoading(false)
      localStorage.setItem('lastKeyword', keyword)
      
    }, [keyword, setGifs])

    return {loading, gifs}
}



