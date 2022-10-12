import { useHttp } from "../hooks/http.hooks";

const useCardService = () => {
    const _apiBase = 'http://172.20.29.34:3001/api/other/fullCard';
    const {loading, request, error, clearError} = useHttp();

    const getCardRes = async () => {
       
       const res = await request(`${_apiBase}`);
       return _cardRes(res);
    }
    const _cardRes = (metaData) =>{
        console.log(metaData);
        return{
            img: metaData.img,
            text: metaData.text,
            inputText: metaData.inputText
        }
    }
    return {loading, error, clearError, getCardRes};
}
export default useCardService;