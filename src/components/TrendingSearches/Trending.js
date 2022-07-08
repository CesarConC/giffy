import React, { useEffect, useState } from "react";
import getTrendingSearchs from "../../services/getTrendingSearchs";
import Categorias from "../Categorias/Categorias";

export default function TrendingSearches () {
    const [trends, setTrends] = useState([])

    useEffect(function () {
        getTrendingSearchs()
            .then(setTrends)
        console.log(trends)
    }, [])

    return <Categorias name='Tendencias' valores={trends}/>
}