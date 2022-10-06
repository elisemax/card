class translateService {
    _apiBase = 'https://api.lecto.ai/v1/translate/text';
    postData = async (url, data) =>{
        const res = await fetch(url, {
            method:"POST",
            headers:{
                'Content-type':'application/json',
                'X-API-Key':'EWEVV26-APQ4FES-M79SP4J-3N29MNW'
            },
            credentials: 'include',
            body: data
        });
        return await res.json();
    };
    getText = async (data) => {
       const res = await this.postData(`${this._apiBase}`, data);
       return this._translatedText(res.texts[0]);
    }
    _translatedText = (metaData) =>{
        return{
            text: metaData.text,
        }
    }
}
export default translateService;//EWEVV26-APQ4FES-M79SP4J-3N29MNW //https://api.lecto.ai/v1/translate/text
