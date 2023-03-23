import { ListItem } from '@mui/material';
import React, {useState,useEffect}from 'react';
import "./Payment.css";
import {useStateValue}  from "./StateProvider";
import {Link,useHistory} from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import {CardElement,useStripe,useElements} from "@stripe/react-stripe-js";
import CurrencyFormat from  "react-currency-format";
import {getBasketTotal} from "./reducer"
import axios from "./axios";
function Payment() {
    const [{basket,user},dispatch ]= useStateValue(); 
    const history=useHistory();
    const stripe =useStripe();
    const elements=useElements();


     const[succeeded,setSucceeded]=useState(false);
     const [processing,setProcessing]=useState("")
     const[error,setError]=useState(null);
     const[disabled,setDisabled]=useState(true);
     const[clientSecret,setClientSecret]=useState(true);

     useEffect(( )=>{
            //generated the special strip secret which allow us to charge the customer
            const getClientSecret=async()=>{
               const response=await axios({
                  method:'post',
                  url:`/payments/create?total=${getBasketTotal(basket)*100} `
           });
           setClientSecret(response.data.clientSecret)
          }
          getClientSecret();

     },[basket])

     console.log('the secret is >>>>',clientSecret)
    const handleSubmit = async (event) => {
     //do all the fancy sripe stuff.......
     event.preventDefault();
     setProcessing(true);

      const payload =await stripe.confirmCardPayment(clientSecret,{
          payment_method:{
               card: elements.getElement(CardElement)
          }
      }).then(({paymentIntenr})=>{
       //paymentIntent=payment confirmation
       setSucceeded(true);
       setError(null);
       setProcessing(false)

       history.replace('/orders')
      })
    }
    const handleChange = event=>{
             // listen for  changes in the  CardElement
             //and  display any errors as the customer types their card details
             setDisabled(event.empty);
             setError(event.error ? event.error.message : "");

    }

  

  return (
    <div className="payment">
             <div className="payment__container">
                     <h1>
                          Checkout(
                            <Link to ="/checkout">{!basket?'0':basket.length} items</Link> 
                            )
                      </h1>
                 {/*payment section -delivery address */}
                   <div className="payment__section" >

                       <div  className="payment__title">
                            <h3>Delivery Address</h3>
                       </div>
                              
                       <div  className="payment__address">
                            <p>{!user?'Guest': user.email}</p>
                            <p>123 react lane</p>
                            <p>dombivali East</p>
                       </div>
                     
                   </div>

                 {/*payment section - review items    */}
                 <div className="payment__section" >
                      
                       <div  className="payment__title">
                            <h3>Delivery Address</h3>
                       </div>
                       <div  className="payment__items">
                                {basket.map(item => (
                                   <CheckoutProduct
                                        id   ={item.id}
                                      title={ item.title}
                                        image={item.image}
                                        price={item.price} 
                                    />
                                ))}
                       </div>
                          

                 </div>

                 {/*payment section -  payment method  */}
                 <div className="payment__section" >
                       <div className="payment__title">
                             <h3>payment method</h3> 
                       </div>           
                       
                       <div className="payment__details"> 

                            {/*strip magic will go here*/}
                            <form   onSubmit = {handleSubmit}>
                                <CardElement OnChange={handleChange} />
                          </form>
                           <div className='payment__priceContainer' >
                           < CurrencyFormat
                               renderText={(value)=>(
                                <>
                                    <p>
                                        Subtotal({basket.length}items):
                                        <strong>{value}</strong>
                                    </p>
                                   <small className="subtotal__gift">
                                        <input type="checkbox"/>this order contain gift
                                   </small>  
                                </>         
                               )}
                                   decimalScale={2}
                                   value={getBasketTotal(basket)}
                                   displayType={"text"}
                                   thousandSeparator={true}
                                   prefix={"₹ "}
                             />
                             <buttton  disabled={processing ||disabled || succeeded } >
                                <span>{processing ? <p>processing</p>:"BUY NOW"} </span>
                             </buttton>
                           </div>
                            {/*error*/}
                            {error && <div>{error }</div> }


                        </div>
                      
                  </div>

             </div>
    </div>
  )
}

export default Payment