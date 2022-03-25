
import React,{useState,useEffect} from 'react';
import './popup.css'
import Userdataservice from '../../components/collections/Usercollection'
import firebase from 'firebase/compat/app'
import Superadmin from './superadmin';
function Popup({seteditid,closebutton,getUser,editid,Role,displaytype,labeltype,state,chatdmincount}) {
const[Name,setName]=useState("");
const[Email,setEmail]=useState("");
const[Password,setPassword]=useState("");
const[Profile_photo_path,setProfile]=useState("");
const[Maxchat,setMaxchat]=useState("");
const[Maxchatadmin,setMaxchatadmin]=useState("");
const[IP,setIP]=useState("");
const[timestamp,setTimestamp]=useState("");
const[Operatorid,setOperatorid]=useState("");
const[chatoperatorcount,setchatoperatorcount]=useState(0);
const[Chatcount,setChatcount]=useState(0);






  const  submitform= async (e) =>{
e.preventDefault();


const newUser={
  Name,
  Email,
  Password,
  Role,
  Profile_photo_path,
  Maxchat,
  Maxchatadmin,
  IP,
  timestamp,
  Operatorid:state,
  Chatoperatorcount:chatoperatorcount,
  Chatcount
}

const Chatoperatorcount={
  Chatoperatorcount:firebase.firestore.FieldValue.increment(1)
}

try{
  
  if(editid !==undefined || editid==" " ){
    await Userdataservice.updateUser(editid,newUser);
seteditid(undefined)
  }
  else{
    await Userdataservice.addUser(newUser);
    if(newUser.Role=="Operator"){
      await Userdataservice.updateUser(state,Chatoperatorcount)
    }
  }

  getUser();

  
}catch(err){
 
  console.log(err);
}

closebutton(false);
}
const edithandler= async()=>{
  try{
    const docSnap = await Userdataservice.getUser(editid);

    setName(docSnap.data().Name)
    setEmail(docSnap.data().Email)
    setPassword(docSnap.data().Password)
    setMaxchat(docSnap.data().Maxchat)
    setMaxchatadmin(docSnap.data().Maxchatadmin)
  }catch (err){
console.log(err)
  }

}



useEffect(()=>{
  console.log(editid)
  if(editid !==undefined || editid !==""){
edithandler();

  }

},[editid])


   
    return (
      <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button className='CloseBtn'
            onClick={() => {
              closebutton(false);
              seteditid(undefined);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h3>Add/Edit User</h3>
        </div>
        <div className="body">
        <form class="row  text-start p-3" onSubmit={submitform} >
      
    <div class="col-md-12">
      <label for="validationDefault01" class="form-label adminlabel">Name</label>
      <input type="text" value={Name} onChange={(e)=>{setName(e.target.value)}}  class="form-control" id="validationDefault01" placeholder="Enter  Name" required />
    </div>
    <div class="col-md-12">
      <label for="validationDefault02" class="form-label adminlabel">Email</label>
      <input type="email"  value={Email} onChange={(e)=>{setEmail(e.target.value)}}  class="form-control" placeholder="Enter  Email" id="validationDefault02"  required />
    </div>
   
    <div class="col-md-12">
    <label for="exampleInputPassword1" class="form-label adminlabel">Password</label>
    <input type="text"  value={Password} onChange={(e)=>{setPassword(e.target.value)}}  class="form-control" id="exampleInputPassword1" placeholder="Enter  Password" required /> 
    </div>
    
    <div id='maxchat' class="col-md-12">
      <label hidden={labeltype} for="validationDefault01" class="form-label adminlabel">Maxchat</label>
      <input type={displaytype} value={Maxchat} onChange={(e)=>{setMaxchat(e.target.value)}}  class="form-control" id="validationDefault01" placeholder="Enter Maxchat" required />
    </div>
    <div id='maxchatdmin' class="col-md-12">
      <label hidden={labeltype} for="validationDefault01" class="form-label adminlabel">Max Chatoperators</label>
      <input type={displaytype} value={Maxchatadmin} onChange={(e)=>{setMaxchatadmin(e.target.value)}}  class="form-control" id="validationDefault01" placeholder="Enter number of Max Chat admin" required />
    </div>
  
   
    <div class="col-12 text-center footer">
     <button  class="addsubmitbutton mt-2 " type="submit">Submit</button>
     <button type='button'
            onClick={() => {
              closebutton(false);
              seteditid(undefined);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
    </div>
  </form>
        </div>
       
      </div></div>
     
    );
  }
  
export default Popup;