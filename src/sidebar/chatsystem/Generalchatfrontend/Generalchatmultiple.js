
import { useParams } from "react-router-dom";
import SingnInf from "./Signin";
import Chatf from "./Chat";
import {useAuthState} from 'react-firebase-hooks/auth'

import { auth } from "./firebasefrontend";
import React,{useState} from 'react';
import Signoutf from "./Signout";
import './general.css'

function Generalmultiple(props){
    console.log(props.id);

let {id}=useParams();
console.log(id);

const [guest,setguest]=useState('')
const guestnametransfer=(datafromsignup)=>{
setguest(datafromsignup)

}
const [user] = useAuthState(auth)

return(<div className="home_cont">

    {user ? <Chatf guest={guest}/>  : <SingnInf guestnametransfer_app={guestnametransfer}  />}
</div>)
}
export default Generalmultiple;

