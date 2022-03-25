import React from 'react'
import { auth } from './firebasefrontend';
import './sign.css'

function Signoutf(){
return(
 <div className='signout'>
    <button className='signoutbtn me-2 ' onClick={()=>auth.signOut()}>End Session</button>
 </div>

);

}
export default Signoutf;
