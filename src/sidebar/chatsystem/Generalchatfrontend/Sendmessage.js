import React,{useState} from 'react'
import { dbf,auth } from './firebasefrontend'
import firebase from 'firebase/compat/app'
import send from './images/send.png'
import './general.css'

function Sendmessage({scroll,displayname}){

  
      



console.log(displayname)
    
const [message,setmessage]=useState('')
const[Sendername,setdisplayname]=useState(displayname)
async function sendmessage(e){
e.preventDefault()
const {uid,photoURL}=auth.currentUser

await dbf.collection('Messages').add({
    
    text: message,
  photoURL,
 Sendername,
    uid,
    createdAt:firebase.firestore.FieldValue.serverTimestamp()
})






setmessage('')
scroll.current.scrollIntoView({ behavior: 'auto' })

}
return(
    <div className='sendmessage'>
       
        <form   onSubmit={sendmessage}>
            
            <div className='sendMsg' >
            <input className='input'  value={message} onChange={(e)=>setmessage(e.target.value)} placeholder='Write Something...' required></input>
            <button className='  btn1' type='submit'><img src={send}></img></button>
            </div>
        </form>
       
    </div>
)

}
export default Sendmessage;