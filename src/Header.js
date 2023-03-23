import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { Link} from "react-router-dom";
import { SportsBasketball } from '@mui/icons-material';
import {useStateValue} from "./StateProvider";
import {auth}  from "./firebase" ;

function Header() {
   const[{basket,user},dispatch]=useStateValue();  
   const handleAuthentication=()=>{
      if(user){
         auth.signOut();
      }  
   }
   
  return (
    <div className='header'>
         <Link to="/">
         <img className="header__logo"     
             src="https://pngimg.com/uploads/amazon/amazon_PNG25.png"
         />
          </Link>
        <div className="header__search">
            <input className="header__searchInput" type="text"/>
            <SearchIcon className="header__searchIcon "/>
         </div>

         <div className="header__nav">       
              <Link to={!user && '/login'}>
                  <div  onClick={handleAuthentication}  className="header__option">
                     <span className="header__optionLineOne">Hello {!user ?'Guest':user.email}</span>
                     <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
                  </div>
              </Link>

              <div className="header__option">
                 <span className="header__optionLineOne">reutrns</span>
                 <span className="header__optionLineTwo">& orders</span>
              </div>

              <div className="header__option">
                 <span className="header__optionLineOne">your</span>
                 <span className="header__optionLineTwo">prime</span>
              </div>
           
         </div>
         <Link to="/Checkout">
         <div className="header__optionBasket">
         <ShoppingBasketIcon className />
         <span className="header__optionLineTwo header__basketCount">{basket.length}</span>
         </div>
         </Link>



    </div>
  )
}

export default Header   