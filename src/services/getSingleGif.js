import {apiKey, API_URL} from './settings'

const fromApiResponseToGifs = apiResponse => {
    const {data} = apiResponse
    const {images, title, id} = data
    const {url} = images.downsized_medium
    return { title, id, url }
}

export default function getSingleGif ({id}) {
    return fetch(`${API_URL}/gifs/${id.slice(1)}?api_key=${apiKey}`)
        .then(res => res.json())
        .then(fromApiResponseToGifs)
}