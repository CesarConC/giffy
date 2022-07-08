import {apiKey, API_URL} from './settings'

const fromApiResponseToGifs = apiResponse => {
    const {data = []} = apiResponse
    return data
}


export default function getTrendingSearchs() {
    const apiURL = `${API_URL}/trending/searches?api_key=${apiKey}`

    // asi se hace una llamada a una api. MUY INTERESANTE

    return fetch(apiURL)
      .then(res => res.json())
      .then(fromApiResponseToGifs)
}