
import "antd/dist/antd.css";
import './admintable.css'
import Userdataservice from '../../components/collections/Usercollection'
import { useState,useEffect } from "react";
import Popupdelete from "./popupdelete";
import { where,query,collection,orderBy,getDocs } from "firebase/firestore";
import Popup from "./popup";
import { useLocation, Link } from "react-router-dom";
import {db} from '../../firebase'
import Errorbox from "./errorbox";

function Chatoperator({setnochatadmin}){


  const Chatcollectionref=collection(db,"Users");

  class Chatadminservice{
    getChatadmins=()=>{
      const q = query(Chatcollectionref, where("Role", "==", "Operator"),where("Operatorid", "==",state));
  return getDocs(q)
  }
  }

const chatservice= new Chatadminservice();
    useEffect(()=>{
getUsers();
    },[])
   
    const location = useLocation();
  const state = location.state;
  console.log(state);


const[maxchatoperator,setmaxchatoperator]=useState(0);

const getUsers= async()=>{
 
    const data =await chatservice.getChatadmins();
    const subscriber= await Userdataservice.getUser(state);
    console.log(subscriber.data().Maxchatadmin); 
setmaxchatoperator(subscriber.data().Maxchatadmin)
 setUser(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
  
}

function addhandler(){
  if(User.length>=maxchatoperator){
    setpopup(false);
    seterrorbox(true);
  }
  else{
    setpopup(true)
    seterrorbox(false);
  }
}

const[popup,setpopup]= useState(false);
const[User,setUser]=useState([]);
const[popupdelete,setpopupdelete]=useState(false)
const[deleteid,setdeleteid]=useState([]);
const[editid,seteditid]=useState();
const[Role,setrole]=useState("Operator")
const[labeltype,setlabel]=useState("hidden")
const[displaytype,setdisplaytype]=useState("hidden");
const[errorbox,seterrorbox]=useState(false);
console.log(User.length);
setnochatadmin(User.length);

    return(
        <div className="headtop home_cont"><pre></pre><pre></pre>
         <button className="adduserbutton" onClick={addhandler}> <i class="bi bi-person-plus-fill"></i> Add Chat Operator</button>
{popup && <Popup chatdmincount={User.length} state={state} displaytype={displaytype} labeltype={labeltype}  Role={Role} setrole={setrole} editid={editid} seteditid={seteditid} closebutton={setpopup} getUser={getUsers} />}
{popupdelete && <Popupdelete state={state}  deleteButton={setpopupdelete} deleteid={deleteid}   getUser={getUsers} />}
{errorbox && <Errorbox  seterrorbutton={seterrorbox} />}
<pre></pre><pre></pre>
<div className="row">
 <div className="col-md"></div>
    <div className="col-md-11 tablecont">

    <table class="table  table-striped ">
  <thead  className="tableheading">
    <tr>
      <th className="tableheader" scope="col col-md-1">#</th>
      <th className="tableheader" scope="col col-md-2">Name</th>
      <th className="tableheader col-1 text-start" scope="col col-md-2 ">Email</th>
      <th className="tableheader" scope="col col-md-2 ">Role</th>
      <th className="tableheader" scope="col col-md-1 ">Action</th>
    </tr>
  </thead>
  <tbody>
   {User.map((doc,index)=>{
       return(
           <tr key={doc.id}>
      <th className="tablecontent" scope="row">{index+1}</th>
      <td className="tablecontent ">{doc.Name}</td>
      <td className="tablecontent text-start">{doc.Email}</td>
      <td className="tablecontent">{doc.Role}</td>
      <td className="tablecontent"><button className="editbutton" onClick={(e)=>{setpopup(true); seteditid(doc.id);  }}><i class="bi bi-pencil-square"></i> </button> <button className="deletebutton" onClick={(e)=>{setdeleteid(doc.id); setpopupdelete(true)}}> <i class="bi bi-trash3-fill"></i></button></td>
    </tr>
       );
   })}

    
  </tbody>
</table>

        
    </div>   <div className="col-md"></div>
    </div>
 

    </div>
    );

}
export default Chatoperator;

