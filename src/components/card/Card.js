import '../../style/index.css';
import { useState, useEffect } from 'react';
import img from '../../resources/img/testImage.jpeg';
import useCardService from '../../services/CardService';


const Card = () => {
    const [card, setCard] = useState({});
    const [cardRevert, setCardRevert] = useState(false);
    useEffect(() => {
        updateCard();
    }, []);
    const updateCard = () => {
        cardRes.getCardRes().then(data => {
            setCard(data);
        });
        setCardRevert(!cardRevert);
        console.log(cardRevert);
    }
        
    const cardRes = useCardService();
    let cardStyle = 'relative preserve-3d  w-full h-full duration-1000';//group-hover:revert-card-y-180
    let cardStyleReverted = 'relative preserve-3d  w-full h-full duration-1000 revert-card-y-180';
    return (
      <div>
      <section className="bg-gray-900 h-screen flex justify-center items-center gap-x-16 text-white">
        <div className="w-[300px] h-[420px] bg-transparent group perspective-1000">
          <div className={cardRevert ? cardStyle : cardStyleReverted}>
            <div className='absolute backface-hidden border-2 w-full h-full bg-gradient-to-r from-sky-500 to-indigo-500'>
              <div className="flex justify-center items-center pt-32">
                <button onClick={()=>{
                    if (cardRevert) {
                        updateCard();
                        setCardRevert(!cardRevert);
                        console.log(cardRevert);
                    }
                }} className="bg-gradient-to-r from-pink-500 to-yellow-500 px-6 py-2 font-semibold text-white rounded-full -bottom-20">Try it now</button>
              </div>
            </div>
            <div className='absolute revert-card-y-180 backface-hidden w-full h-full border-2 bg-gradient-to-r from-sky-500 to-indigo-500'>
              <div className="grid grid-rows-2 grid-cols-1 gap-2 pr-4 pl-4 pt-4 m-10">
                <div><img src={card.img} alt="img" className="object-cover h-full w-full"/></div>
                <div>
                    <div className="text-stone-800 text-center pt-6 text-lg">{card.text}</div>
                    <div className="flex justify-center items-center pt-6">
                    <button onClick={()=>{setCardRevert(!cardRevert);console.log(cardRevert)}} className="bg-gradient-to-r from-pink-500 to-yellow-500 px-6 py-2 font-semibold text-white rounded-full -bottom-20 delay-500 duration-1000
                      group-hover:bottom-20 scale-0 group-hover:scale-100">Back</button></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    )};
    export default Card;