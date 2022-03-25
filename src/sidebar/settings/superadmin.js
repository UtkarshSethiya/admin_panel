
import "antd/dist/antd.css";
import './admintable.css'
import Userdataservice from '../../components/collections/Usercollection'
import { useState,useEffect } from "react";
import Popupdelete from "./popupdelete";
import ReactTooltip from 'react-tooltip';
import { Link } from "react-router-dom";
import Popup from "./popup";
import { async } from "@firebase/util";
import { faWindowRestore } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "bootstrap";

function Superadmin({getuserid}){

    useEffect(()=>{
getUsers();
    },[])
  
const getUsers= async()=>{
    const data =await Userdataservice.getSuperadmin();
 
    setUser(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
   
}


const[popup,setpopup]= useState(false);
const[User,setUser]=useState([]);
const[popupdelete,setpopupdelete]=useState(false)
const[deleteid,setdeleteid]=useState([]);
const[editid,seteditid]=useState();
const[Role,setrole]=useState("Superadmin");
const[displaytype,setdisplaytype]=useState("hidden");
const[labeltype,setlabel]=useState("hidden")
const state="Not Applicable"

console.log(editid);
console.log(popupdelete);
    return(
        <div className="headtop home_cont"><pre></pre><pre></pre>
    <ReactTooltip/> <button data-tip="Add Superadmin"  className="adduserbutton" onClick={()=>{setpopup(true)}}> <i class="bi bi-person-plus-fill"></i> Add Superadmin</button>
{popup && <Popup state={state} Role={Role} labeltype={labeltype} displaytype={displaytype}  editid={editid} seteditid={seteditid} closebutton={setpopup} getUser={getUsers} />}
{popupdelete && <Popupdelete  deleteButton={setpopupdelete} deleteid={deleteid}   getUser={getUsers} />}

<pre></pre><pre></pre>
<div className="row">
<div className="col-md"></div>
    <div className="col-md-11 tablecont">

    <table class="table  table-striped "><ReactTooltip/>
  <thead  className="tableheading">
    <tr>
      <th  className="tableheader" scope="col col-md-1">#</th>
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
      <td className="tablecontent">{ doc.Role }</td>
      <td  className="tablecontent"> <button  data-tip="Edit" className="editbutton" onClick={(e)=>{setpopup(true); seteditid(doc.id)}}><i class="bi bi-pencil-square"></i> </button> <button data-tip="Delete" className=" deletebutton" onClick={(e)=>{setdeleteid(doc.id); setpopupdelete(true)}}> <i class="bi bi-trash3-fill"></i></button></td>
    </tr>
       );
   })}

    
  </tbody>
</table>

        
    </div><div className="col-md"></div>
    </div>
   

    </div>
    );

}
export default Superadmin;
