import {useState, useEffect, useContext, useReducer} from "react";
import getGifs from "../services/getGifs";
import GifsContext from '../context/GifsContext'

const INITIAL_PAGE = 0

export function useGIFS({ keyword } = {keyword: null}) {

    const {gifs, setGifs} = useContext(GifsContext)
    const [loading, setLoading] = useState(false)
    const [loadingNextPage, setLoadingNextPage] = useState(false)
    const [k, setK] = useState(0)
    const [page, setPage] = useState(INITIAL_PAGE)

    // useEffect se ejecuta cada vez que se renderiza el componente. Si el estado cambia,
    // se renderiza de nuevo el componente
    

    useEffect(function () {
      setLoading(true)
        let keywordToUse = 0
        // Recuperamos del storage la ultma keyword que se ha buscado
        if (keyword) {
          keywordToUse = keyword
        }
        else {
          keywordToUse = localStorage.getItem('lastKeyword')
        }
        if (keyword) {
          localStorage.setItem('lastKeyword', keyword)
        }
        console.log(keyword, keywordToUse, typeof keyword, typeof keywordToUse)
        if (keyword === undefined && keywordToUse === null) {
          setK('pokemon')
        }
        else {
          setK(keywordToUse.slice(1))
        }
        
        getGifs({keyword : keywordToUse}).then(gifs => setGifs(gifs))
        setLoading(false)
        
      
      
    }, [keyword, setGifs])


    useEffect(function () {
      console.log('pagina', page, INITIAL_PAGE)
      if (page != INITIAL_PAGE) {

        setLoadingNextPage(true)

        getGifs({keyword: k, page})
          .then(nextGifs => {
            setGifs(prevGifs => prevGifs.concat(nextGifs))
            setLoadingNextPage(false)

          })
      }
    }, [page])

    return {loading,loadingNextPage, gifs, k, setPage}
}



