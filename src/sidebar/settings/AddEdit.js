import React,{useState,useEffect} from "react";
import {useHistory,useParams} from 'react-router-dom';
import './addedit.css';
import { db } from "../../firebase";
import {toast} from "react-toastify";
const initialState = {
    Name:"",
    Email:"",
    Password:"",
    Role:""
}

function Addedit(){
const[Name,setName]=useState();
const[Email,setEmail]=useState();
const[Password,setPassword]=useState();

const[userdata,setUserdata]=useState({});




function submitform(event){

event.preventDefault();


}


return(<div className="home_cont">

<div className="formcont row pt-5">
    <div className="col-md-4"></div>
    <div className="col-md-4 formadd">
    <form class="row g-2" onSubmit={submitform}>
    <div class="col-md-12 text-center"> <label for="validationDefault01" class="form-label labelheading">Add/Edit Superadmin</label></div>
  <div class="col-md-12">
    <label for="validationDefault01" class="form-label adminlabel">Name</label>
    <input type="text" value={Name} onChange={(e)=>{setName(e.target.value)}} class="form-control" id="validationDefault01" placeholder="Enter Your Name" required />
  </div>
  <div class="col-md-12">
    <label for="validationDefault02" class="form-label adminlabel">Email</label>
    <input type="email" value={Email} onChange={(e)=>{setEmail(e.target.value)}} class="form-control" placeholder="Enter Your Email" id="validationDefault02"  required />
  </div>
 
  <div class="col-md-12">
  <label for="exampleInputPassword1" class="form-label adminlabel">Password</label>
  <input type="text" value={Password} onChange={(e)=>{setPassword(e.target.value)}} class="form-control" id="exampleInputPassword1" placeholder="Enter your Password" required /> 
  </div>
  

  <div class="col-md-12">
    <label for="validationDefault04" class="form-label adminlabel">Role</label>
    <select    placeholder="Choose"  class="form-select" id="validationDefault04" required>
    
      <option   selected>Superadmin</option>
    </select>
  </div>

 
  <div class="col-12 text-center">
   <button  class="addsubmitbutton mt-2 " type="submit">Submit</button>
  </div>
</form>
</div>
</div>
</div>);
}
export default Addedit;