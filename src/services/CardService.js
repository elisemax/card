
class CardService {
    _apiBase = 'http://172.20.29.35:3001/api/other/fullCard';
     getResource = async (url) => {
        let res = await fetch(url,{
            method:"GET",
            headers:{
                'Content-type':'application/json'
            }
        });
        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }
        
        return await res.json();
    }
    getCardRes = async () => {
       
       const res = await this.getResource(`${this._apiBase}`);
       console.log(res);
       return this._imageLink(res.data);
    }
    _cardRes = (metaData) =>{
        return{
            img: metaData.img,
            text: metaData.text,
            inputText: metaData.inputText
        }
    }
}
export default CardService;