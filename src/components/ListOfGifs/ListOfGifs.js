import React from "react";
import Gif from "../Gifs/Gifs"
import './ListOfGifs.css';
import { useGIFS } from "../../hooks/useGIFS";

export default function ListOfGifs ({ params }) {
    //console.log(params)
    const {keyword} = params
    const {loading, gifs, setPage} = useGIFS({keyword})

    /*
    const [gifs, setGifs] = useState([])
    const [loading, setLoading] = useState(false)
 
    // useEffect se ejecuta cada vez que se renderiza el componente. Si el estado cambia,
    // se renderiza de nuevo el componente
  
    useEffect(function () {
      setLoading(true)
      getGifs({keyword}).then(gifs => setGifs(gifs))
      setLoading(false)
      
    }, [keyword])
    */

    const handleNextPage = () => setPage(prevPage => prevPage + 1)

    if (loading) {
      return <h2>Cargando...</h2>
    }

    return <>
            <div className="lista-gifs">
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
            <div className="mas-gifs">
              <button className="obtener-mas-gifs" onClick={handleNextPage}>Más gifs</button>
            </div>
          </> 
}
