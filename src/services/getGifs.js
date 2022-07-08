const apiKey = 'YljNhF2W5GzsOqXetExN5DzdP8OXmE0i'


export default function getGifs({ keyword = 'pandas' } = {}) {
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`

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