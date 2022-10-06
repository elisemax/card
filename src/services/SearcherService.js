
class SearcherService {
    _apiBase = 'https://serpapi.com/search.json';
     getResource = async (url) => {
        let res = await fetch(url,{
            method:"GET",
            headers:{
                'Content-type':'application/json'
            },
            credentials: 'include',
            mode: 'no-cors'
        });
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        
        return await res.json();
    }
    getImage = async (qeury) => {
       
       const res = await this.getResource(`${this._apiBase}?q=${qeury}&tbm=isch&ijn=0`);
       console.log(res);
       return this._imageLink(res.search_information.images_results[0]);
    }
    _imageLink = (metaData) =>{
        return{
            position: metaData.position,
            thumbnail: metaData.thumbnail,
            source: metaData.source,
            title:metaData.title,
            link: metaData.link,
            original: metaData.original,
            is_product: metaData.is_product
        }
    }
}
export default SearcherService;