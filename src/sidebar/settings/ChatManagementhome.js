
import "antd/dist/antd.css";
import './admintable.css'
import Userdataservice from '../../components/collections/Usercollection'
import { useState,useEffect } from "react";
import Popupdelete from "./popupdelete";
import { Link } from "react-router-dom";
import Popup from "./popup";
import { async } from "@firebase/util";
import { faWindowRestore } from "@fortawesome/free-solid-svg-icons";
import Chatpopup from "./Chatmanagementpopup";

function ChatoperatorManagement({getuserid}){

    const[User,setUser]=useState([]);

const[operatorid,setoperatorid]=useState()

    useEffect(()=>{
getUsers();
    },[])
  
const getUsers= async()=>{
    const data =await Userdataservice.getSubscribers();
 
    setUser(data.docs.map((doc)=>({...doc.data(),id:doc.id})))

   
}

let mydata="Utkarsh"






console.log(operatorid);

    return(
        <div className="headtop home_cont"><pre></pre><pre></pre>
  

<pre></pre><pre></pre>

<h2>Chat Management</h2>
<div className="row">
<div className="col-md-1"></div>
    <div className="col-md-10  tablecont">

    <table class="table  table-striped ">
  <thead  className="tableheading">
    <tr>
      <th className="tableheader" scope="col ">#</th>
      <th className="tableheader  " scope="col ">Name</th>
      <th className="tableheader col-3 text-start" scope="col col-md-2 ">Email</th>
      <th className="tableheader" scope="col  ">Role</th>
   
      <th className="tableheader col-2 " scope="col  ">Action</th>
    </tr>
  </thead>
  <tbody>
   {User.map((doc,index)=>{
       return(
           <tr key={doc.id}>
      <th className="tablecontent" scope="row">{index+1}</th>
      <td className="tablecontent  ">{doc.Name}</td>
      <td className="tablecontent text-start">{doc.Email}</td>
      <td className="tablecontent">{doc.Role}</td>
     
    
      <td className="tablecontent text-center"><Link to="./Chats" state={doc.id} className="viewbutton"  onClick={(e)=>{setoperatorid(doc.id)}}> <i class="bi bi-eye-fill"></i> View Chats</Link></td>
    </tr>
       );
   })}

    
  </tbody>
</table>

        
    </div><div className="col-md-1"></div>
    </div>   


    </div>
    );

}
export default ChatoperatorManagement;
