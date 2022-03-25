
import React,{useEffect,useState} from "react";
import Generalchatservice from "../../components/collections/GeneralChat";
import Chatdataservice from "../../components/collections/Chatcollection";
import Generaldelete from "./deletechat";
import {SendOutlined} from '@ant-design/icons';
import firebase from 'firebase/compat/app'
import { db } from "../../firebase";
import { where,query,collection,orderBy,getDocs,getDoc,doc } from "firebase/firestore";
import './General.css';
import { async } from "@firebase/util";

function Generalchatbox({chatid}){

    const Getchatname=collection(db,"Chats");
    const[generalchatname,setgeneralchatname] = useState("No Chats Selected");

    useEffect(()=>{
        getChats();
 
               },[])
  


const[Chat,setChat]=useState([]);
const[deletebox,setdeletebox]=useState(false)
const[deleteid,setdeleteid]=useState([])
const[deletemessage,setdeletemessage]=useState([])
const[text,settext]=useState("")
const[Sendername,setdisplayName]=useState("Admin")


let photoURL="";


 
       // using message collection for getting all chats
        const getChats= async()=>{
            const data =await Generalchatservice.getallChat();
         
            setChat(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
          
           
        }
        getChats();
   
        const getgeneralchatdetails=async()=>{
            try{
                const details= await Chatdataservice.getChat(chatid);
                setgeneralchatname(details.data().Name);
            }catch(err){
            console.log(err)
            }
            }
       
              

       
               







  const submitform=async(e)=>{
    e.preventDefault();
    const Chat={
text,
Sendername,
photoURL,
createdAt:firebase.firestore.FieldValue.serverTimestamp()

     

    }
    await Generalchatservice.addChat(Chat);
  settext('');
    getChats();
   
    
  } 
 

    return(<div className=' '> 
 
 {deletebox && <Generaldelete deletemessage={deletemessage} deleteid={deleteid} setdeletebox={setdeletebox} getChats={getChats} />}
   
<div className="  ">    
       
        <div className="">
         
            <div className="generalchat_container">
            <nav class=" navbar_cont ">
              <div class="container-fluid text-center ">
               <span class="navbar-brand  " >
    {generalchatname}
               </span>
              </div>
           </nav>
           <div className="messagecontainer">
             <div className="chatmessage_cont ms-1  ">

              {
                  Chat.map((doc)=>{
                      return(
                          <div className="receive_cont d-flex">
                        <div className="chatbox_cont ms-2 mt-2 mb-1" key={doc.id}>
                        <span className="usernamebox">{doc.Sendername} </span><br></br>
                        <div className="chatbox ">{doc.text}</div>
                    </div> <button data-tip="Delete" className=" deletebuttongeneral ms-1" onClick={(e)=>{ setdeletebox(true); setdeleteid(doc.id);setdeletemessage(doc.text)}}  > <i class="bi deleteusericon bi-trash3-fill"></i></button> </div>
                      );
                  })
              }

              
             </div>
            

           </div>
           
               <form onSubmit={submitform}>
               <div class="input-group mb-3">
  <input type="text" value={text} onChange={(e)=>{settext(e.target.value)}} class="form-control me-2" placeholder="Write Something.." aria-label="Recipient's username" aria-describedby="button-addon2" required />
  <button class="sendbutton" type="submit" id="button-addon2"><SendOutlined className="sendicon" ></SendOutlined></button>
  </div></form>

          
            </div>
    
        </div>


        </div>
    </div>)
}

export default Generalchatbox;