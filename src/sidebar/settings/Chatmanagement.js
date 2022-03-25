import Chatpopup from "./Chatmanagementpopup";
import './admintable.css'
import { useState,useEffect } from "react";
import Popupchatdelete from "./Chatdeletepopup";
import { useLocation, Link } from "react-router-dom";
import { where,query,collection,orderBy,getDocs } from "firebase/firestore";
import Chatdataservice from '../../components/collections/Chatcollection'
import './admintable.css'
import {db} from '../../firebase'
function Chatmanagement(){
//
//
   




const[chatpopup,setchatpopup]=useState(false)
const[deletepopup,setdeletepopup]=useState(false);
const[User,setUser]=useState([]);
const[editid,seteditid]=useState(undefined)
const[deleteid,setdeleteid]=useState()
const location = useLocation();


const state = location.state;

const Chatref=collection(db,"Chats");

  class Chatservice{
    Sortchats=()=>{
      const q = query(Chatref, where("Subscriberid", "==",state));
  return getDocs(q)
  }
  }

const chatservice= new Chatservice();



useEffect(()=>{
    getChats();
        },[])
      
    const getChats= async()=>{
        const data =await chatservice.Sortchats();
     
        setUser(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
       
    }


return(<div className="home_cont headtop"> 

<pre></pre><pre></pre><pre></pre>
    <button data-tip="Add Superadmin"  className="adduserbutton" onClick={()=>{setchatpopup(true)}}> <i class="bi bi-person-plus-fill"></i> Add Chat</button>
<pre></pre><pre></pre><pre></pre>
   {chatpopup && <Chatpopup  state={state} seteditid={seteditid} editid={editid} getChats={getChats} setchatpopup={setchatpopup} />}
   {deletepopup && <Popupchatdelete state={state} getChats={getChats}  setdeletepopup={setdeletepopup}  deleteid={deleteid} />}

   <div className="row">
<div className="col-md"></div>
    <div className="col-md-11 tablecont">

    <table class="table  table-striped ">
  <thead  className="tableheading">
    <tr>
      <th  className="tableheader" scope="col col-md-1">#</th>
      <th className="tableheader" scope="col col-md-2">Name</th>
      <th className="tableheader col-1 text-start" scope="col col-md-2 ">Type</th>
      <th className="tableheader" scope="col col-md-2 ">Status</th>
      <th className="tableheader" scope="col col-md-1 ">Subscriber_id</th>
      <th className="tableheader" scope="col col-md-1 ">Action</th>
    </tr>
  </thead>
  <tbody>
   {User.map((doc,index)=>{
       return( 
           <tr key={doc.id}>
      <th className="tablecontent" scope="row">{index+1}</th>
      <td className="tablecontent ">{doc.Name}</td>
      <td className="tablecontent text-start">{ doc.Type }</td>
      <td className="tablecontent"> {doc.Status}</td>
      <td className="tablecontent"> {doc.Subscriberid}</td>
      <td  className="tablecontent"> <button  data-tip="Edit" onClick={(e)=>{setchatpopup(true); seteditid(doc.id)}} className="editbutton" ><i class="bi bi-pencil-square"></i> </button> <button data-tip="Delete" onClick={(e)=>{setdeleteid(doc.id); setdeletepopup(true)}} className=" deletebutton" > <i class="bi bi-trash3-fill"></i></button></td>
    </tr>
       );
   })}

    
  </tbody>
</table>

        
    </div><div className="col-md"></div>
    </div>
   




</div>)

}
export default Chatmanagement;