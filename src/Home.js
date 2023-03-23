import React from 'react'
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
        <div className="home__container">
          <img
               className="home__image"
               src="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61l4i7aoY2L._SX3000_.jpg"
                      
          
          />

          <div className="home__row">
            <Product 
            id="1234" 
            title="Life's Amazing Secrets: How to Find Balance and Purpose in Your Life | Inspirational Zen book on motivation, self-development & healthy living"  
            image="https://m.media-amazon.com/images/I/41v9lLp-xUL.jpg" 
            price={121} 
            rating={4} 
            />

            <Product 
            id="1235"
            title="Karma" 
            image="https://m.media-amazon.com/images/I/51ewXeUdkvL._SY264_BO1,204,203,200_QL40_ML2_.jpg" 
            price={159} 
            rating={4} 
            />
            
          </div>
          <div className="home__row">
            <Product 
            id="1236" 
            title="boAt"
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61WqF8Y6HTL._AC_UL320_.jpg" 
            price={2000} 
            rating={3} 
            />

            <Product 
            id="1237" 
            title="boAt" 
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/61stQYWQO4L._AC_UL320_.jpg" 
            price={999} 
            rating={3}  
            />

            <Product 
            id="1238" 
            title="boAt" 
            image="https://m.media-amazon.com/images/W/WEBP_402378-T1/images/I/51NKpc-CnBL._AC_UL640_QL65_.jpg" 
            price={999} 
            rating={3} 
            />

          </div>
          <div className="home__row">
           <Product
           id="1239" 
           title="boAt"  
           image="https://m.media-amazon.com/images/I/71Y9kiW1wlL._AC_SX480_SY360_.jpg" 
           price={3000} 
           rating ={5}/>

          </div>









        </div>
    </div>
  )
}

export default Home



