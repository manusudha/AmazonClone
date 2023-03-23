import React from 'react'
import "./Checkout.css"
import Subtotal from "./Subtotal";
import {useStateValue} from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct"
function Checkout() {
  const[{basket,user},dispatch]=useStateValue();
  return (
    <div className="checkout">

         <div className="checkout__left">
            <img  className="checkout__ad"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Coupons/Carnival-Dec22/PC_Coupon_header.gif"
                alt=""
            />
            <div >
                <h3> Hello,{!user ?'Guest':user.email} </h3>

                <h2 className="checkout__title"> your sopping Basket</h2>
                {basket.map(item => (
                  <CheckoutProduct
                  id   ={item.id}
                  title={ item.title}
                  image={item.image}
                  price={item.price} 
                />
                 ))}
                {/*CheckoutProduct*/}
                {/*CheckoutProduct*/}
                {/*CheckoutProduct*/}
                {/*CheckoutProduct*/}
            </div>

         </div>
         
         <div className="checkout__right">
            <Subtotal/>


         </div>


    </div>
  )
}

export default Checkout