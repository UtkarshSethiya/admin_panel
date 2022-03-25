import './chat.css'
import './general.css'
import Signoutf from './Signout';
import Sendmessage from './Sendmessage';
import { auth,dbf } from './firebasefrontend';
import React, {useState,useEffect,useRef} from 'react'

function Chatf(props){

    


const scroll = useRef()

const [msg,setmsg]=useState([])
const [msg2,setmsg2]=useState([])

console.log(props.guest)

useEffect(()=>{
dbf.collection('Messages').orderBy('createdAt').limit(50).onSnapshot((snapshot)=>{
    setmsg(snapshot.docs.map(doc => doc.data()))
console.log(msg)

})






},[])





    return(<div>
       
<div className='row cont'>
    <div className='col-3'></div>
    <div className='col-md-6'>
       
    <div className=' msgs'>
       
<div className='nav'>
    <span className='guestname text-start'>Welcome! {props.guest}</span> 
    <div className='guestname text-center'>General Chat </div>
    <span><Signoutf/></span>
</div>
<div className='cont2' >


    {msg.map(({id,text,photoURL,Sendername,uid})=>(
   <div  >
       
    <div key={id}  className={`msg ${uid==auth.currentUser.uid ? 'send' : 'received'}`}  >


    <div className="p-0">
                        <span className="usernamebox">{Sendername} </span><br></br>
                        <span className="chatbox ">{text}</span>
                    </div>
   
   
    </div>
    
    </div>

))}</div><div className='ref' ref={scroll}> </div>
<Sendmessage scroll={scroll} displayname={props.guest} />
   
        </div>

</div>

</div>


 </div>

 );


}
export default Chatf;