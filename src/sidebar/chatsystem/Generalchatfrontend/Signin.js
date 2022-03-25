import './sign.css';
import guestimage from './images/profile-user.png'
import firebase from 'firebase/compat/app';
import React,{useState} from 'react'
import { auth } from './firebasefrontend';
import {  signInAnonymously } from "firebase/auth";




function SingnInf(props){

const [guestname,setguestname]=useState('');

 function signingoogle(){
   const provider = new firebase.auth.GoogleAuthProvider();
   auth.signInWithPopup(provider);
 } 

function signinanonymous(e){
e.preventDefault()
  signInAnonymously(auth)
props.guestnametransfer_app(guestname)

}
console.log(guestname)

    return(
      <div className='row signincont'>
        <div className='col-4'></div>
      <div  className='sign col-md-4 border'>

<h1 ><span style={{color:'orangered'}}>Biz</span><span style={{color:'navy'}}>Chat</span></h1>

<hr></hr>


<form onSubmit={signinanonymous}>
<div class="input-group mb-4  justify-content-center ">
  <input type="text" className="inputform" value={guestname} onChange={(e)=>(setguestname(e.target.value))} placeholder="Enter Your Name" required />
  <div class="input-group-append">
    <button class="btnsignin"   type="submit">Proceed</button>
  </div>
</div>
</form>

      </div>
      </div>
    );


}
export default SingnInf;