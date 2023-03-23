import React from 'react';
import  "./Product.css"; 
import {useStateValue} from "./StateProvider";

 
function Product({id,title,image,price,rating}) {
  const[{state,basket},dispatch]=useStateValue();
   
  const addToBasket =() =>{
    // dispatch the action in to the datalayer  
    dispatch({
      type:'ADD_TO_BASKET', 
      item:{
            id:id, 
            title:title,
            image:image,
            price:price,
            rating:rating,
      },  
    })
  }
  return (
    <div className="product">
        <img src={image} alt="" />

        <div className="product__info">

              <p>{title}</p>
              <p className="product__price">
                <small>₹</small>
                <small>{price}</small>
              </p>
 
              <div className="product__rating">
              {Array(rating).fill().map((_,i)=>(
                 <p>⭐</p>
               ))}
             
            

                </div>
        </div>
        
         <button onClick={addToBasket}>add to Basket</button>
        


    </div>
  )
}

export default Product