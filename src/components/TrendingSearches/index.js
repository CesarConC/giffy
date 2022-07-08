import React, {Suspense} from "react";
import useNearScreen from "../../hooks/useNearScreen";

// Con suspense y este import podemos caragr el javascript de las tendencias
// solo cuando haga falta, y asi separamos del resto de la app la carga
// de esa parte

// SIEMPRE HAY QUE INTENTAR EVITAR CARGAR COSAS QUE NO SEAN CRITICAS PARA EL USUARIO
// LAS TENDENCIAS HASTA QUE NO SE VEN NO SON CRITICAS

const TrendingSearches = React.lazy(
    () => import('./Trending')
)

export default function LazyTrending() {
    const {isNearScreen, fromRef} = useNearScreen()
    

    return <div ref={fromRef}>
        <Suspense fallback={null}>
            {isNearScreen ? <TrendingSearches /> : null}
        </Suspense>
        
    </div>
}

/*

el return podria tener esta otra forma y funcionaria igual

{
    isNearScreen ?
        <Suspense fallback={null}>
            <TrendingSearches />
        </Suspense> : null
}

Pero es mas complicado? de leer

*/