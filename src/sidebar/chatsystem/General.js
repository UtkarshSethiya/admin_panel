
import React,{useEffect,useState} from "react";
import Generalchatservice from "../../components/collections/GeneralChat";
import Chatdataservice from "../../components/collections/Chatcollection";
import Generaldelete from "./deletechat";
import {SendOutlined} from '@ant-design/icons';
import firebase from 'firebase/compat/app'
import { db } from "../../firebase";
import { where,query,collection,orderBy,getDocs,getDoc,doc } from "firebase/firestore";
import './General.css';
import Generalchatbox from "./Generalchatbox";

function General(){

//Chats collection calling list of generalchat

const GeneralChatcollectionref=collection(db,"Chats");
const[generalchat,setgeneralchat] = useState([]);
const[chatid,setchatid]=useState(null);

class getallGeneralChatservice{
  getGeneralchat=()=>{
    const q = query(GeneralChatcollectionref, where("Type", "==", "General Chat"));
return getDocs(q)
}

/*getchatname=(id)=>{

    const Chatdoc=doc(db,"Chats",id)
   
    return getDoc(Chatdoc);

}*/
}

const generalchatservice= new getallGeneralChatservice();



useEffect(()=>{
  getgeneralchat();

 // getgeneralchatname();

      },[])
     

const getgeneralchat= async()=>{
  const data =await generalchatservice.getGeneralchat();

  setgeneralchat(data.docs.map((doc)=>({...doc.data(),id:doc.id})))


}

/*const getgeneralchatname=async()=>{
  const chatname= await generalchatservice.getchatname(chatid);
  setgeneralchatname(chatname.data().Name);
 
}*/





//getting Subscribername



//Chats collection calling list of generalchat ends...



 
       // using message collection for getting all chats
        
  

    return(<div className=' d-flex  '> 


<div className="chat_cont  ">
  
<div className="mychat_container p-2 ">General Chat </div>
<div className="mychat_container2">
           {generalchat.map((doc)=>{
             return(
              <div className=' border-bottom sublist ' key={doc.id} onClick={(e)=>{ setchatid(doc.id)}}  >
              <div className='p-2 d-flex justify-content-between'  >
               <div className='  '><i class=" text-light bi bi-person-circle"></i> <span className="chatname">{doc.Name}</span><br></br><span className="subscribername" >Createdby: {doc.Createdby}</span></div>
               <div className='operatordate'>{doc.Status}<br></br> </div>
            
              </div>
              
            </div>
             );
           })}
        
        </div>
              
    

 
        </div>

       <div className="chatboxcontainer"><Generalchatbox chatid={chatid}  /></div> 

       
    </div>)
}

export default General;