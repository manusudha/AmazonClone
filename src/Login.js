import React from 'react'
import "./Login.css";
import { Link,useHistory} from "react-router-dom"
import {  useState } from "react";
import {auth} from  "./firebase";
function Login() {
  const history = useHistory(); 
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('')  ;

  const signIn =e=>{
             e.preventDefault();
             //some fancy firebase login shitttt!
             auth
                 .signInWithEmailAndPassword(email,password)
                 .then(auth=>{
                     history.push(' / ')
                 })
                 .catch(error=>alert(error.message));
  }

  const register =e=>{
    e.preventDefault();
    auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth)=>{

             
          if(auth){
            history.push('/')  
          }
          //it succesfully created a new Email  and Password
        })
        .catch(error=>alert(error.message));
    //do  some fancy firebase login shitttt!

}
  return (

    <div className='login'>
        <Link to="/">
        <img className="login__logo"
        src="https://www.freepnglogos.com/uploads/amazon-png-logo-vector/woodland-gardening-amazon-png-logo-vector-8.png"  />
        </Link>
        <div className="login__container">
                <h1 >sign in</h1>
                <form>
                  <h5>E-mail</h5>
                  <input type='text' value={email} onChange={e=>setEmail(e.target.value)}/>
                  <h5>password</h5>
                  <input type='password' value ={password} onChange={e=>setPassword(e.target.value)}/>

                  <button  type='submit'  onClick={signIn}
                   className="login__signInButton">Sign In
                   </button>
                </form>
                <p>
                  By signing-in you agree to Amazon's
                  condition of use & sale.pleas see
                  our privacy Notice,our Cookies Notice
                  and our Interest-Based Ads 
                </p>
                <button onClick={register}
                  className="login__registerButton"> Create your amazon account
                </button>
        </div>

    </div>
  )
}

export default Login