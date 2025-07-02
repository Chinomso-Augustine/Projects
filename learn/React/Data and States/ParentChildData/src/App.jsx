import PromoHeading from './PromoHeading'; 

import './App.css'

//Parent component 
function Promo() {

  const data = {
    promoInfo: "30% off",
    newMessage: "What are you waiting for? Buy now!"
  }
  return (
    
    <div>

    {/*Passing data from parent to child component */}
      <PromoHeading 
      myPromoInfo ={data.promoInfo}
      myNewMessageInfo = {data.newMessage}
      />
    </div>  
  )
}

export default Promo
