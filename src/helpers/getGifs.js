export const getGifs = async(category) =>{
    const url = `https://api.giphy.com/v1/gifs/search?api_key=ZglZh1sQ1nsPMxCZT68akRVby34RMqlp&q=${ encodeURI(category) }&limit=12&offset=0&rating=g&lang=en`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized.url
        }
    })
    return gifs
    }      