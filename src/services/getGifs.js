import {apiKey, API_URL} from './settings'



export default function getGifs({ keyword = 'pandas', page = 0} = {}) {
    const apiURL = `${API_URL}/gifs/search?api_key=${apiKey}&q=${keyword}&limit=20&offset=${page * 20}&rating=g&lang=en`

    // asi se hace una llamada a una api. MUY INTERESANTE

    return fetch(apiURL)
      .then(res => res.json())
      .then(response => {
        const {data} = response
        const gifs = data.map(image => {
            const {images, title, id} = image
            const {url} = images.downsized_medium
            return { title, id, url }
        })
        return gifs
      })
}