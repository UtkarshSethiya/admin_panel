
import React,{useState,useEffect} from 'react';
import './popup.css'
import Chatdataservice from '../../components/collections/Chatcollection'
import firebase from 'firebase/compat/app'
import Userdataservice from '../../components/collections/Usercollection'
function Chatpopup({state, editid,setchatpopup,seteditid,getChats}) {


const [Name,setname]=useState("")

const [Chattype,setchattype]=useState("")
const[Status,setstatus]=useState("");
const[Subscriberid,setsubscriberid]=useState(state)
const[Subscribersname,setsubscribername]=useState("");
const getSubscribersname= async()=>{
  const getname =await Userdataservice.getUser(state);

  setsubscribername(getname.data().Name)
 
}
getSubscribersname();


  const  submitform= async (e) =>{
e.preventDefault();
 

const newChat={
  Name,
  Subscriberid,
  Type:Chattype,
  Status,
  Createdby:Subscribersname,
 Timestamp:firebase.firestore.FieldValue.serverTimestamp()
  
}

const Chatcount={
  Chatcount:firebase.firestore.FieldValue.increment(1)
}


try{
  
 if(editid !==undefined || editid==" " ){
    await Chatdataservice.updateChat(editid,newChat);

  }
  else{
    await Chatdataservice.addChat(newChat);
   await Userdataservice.updateUser(Subscriberid,Chatcount);

  }

  
}catch(err){
 
  console.log(err);
}

seteditid(undefined)
getChats();
setchatpopup(false);

}
const edithandler= async()=>{
  try{
    const docSnap = await Chatdataservice.getChat(editid);

    setname(docSnap.data().Name)
    setstatus(docSnap.data().Status)
    setchattype(docSnap.data().Type)
   
  }catch (err){
console.log(err)
  }

}



useEffect(()=>{
console.log(editid);
  if(editid !==undefined || editid !==""){
edithandler();

  }

},[editid])


   
    return (
      <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button className='CloseBtn'
            onClick={(e)=>{setchatpopup(false); seteditid(undefined)}}
          >
            X
          </button>
        </div>
        <div className="title text-center">
          <h3 className='text-center'>Add/Edit Chat</h3>
        </div>
        <div className="body">
        <form class="row  text-start p-3 " onSubmit={submitform} >
      
    <div class="col-md-12">
      <label for="validationDefault01" class="form-label adminlabel">Name</label>
      <input type="text" value={Name} onChange={(e)=>{setname(e.target.value)}} class="form-control" id="validationDefault01" placeholder="Enter Name of Chat"  />
    </div>
   

    <div class="col-md-12 "> <label for="validationDefault01" class="form-label adminlabel">Chat Type </label></div>

    <div class="input-group col-md-12">

  <select class="form-select"   onInput={(e)=>{setchattype(e.target.selectedOptions[0].text)}} id="inputGroupSelect04" aria-label="Example select with button addon" >
    <option selected>Select Chat Type</option>
    <option value="General ">General Chat</option>
    <option value="One to One">One to One Chat</option>
    <option value="Poll">Poll</option>
    <option value="Question  Answers">Question Answers</option>
  </select>
  
</div>
<div class="col-md-12 "> <label for="validationDefault01" class="form-label adminlabel">Status </label></div>

<div class="input-group col-md-12">
  <select  class="form-select"  onInput={(e)=>{setstatus(e.target.selectedOptions[0].text)}} id="inputGroupSelect04" aria-label="Example select with button addon" >
    <option selected>Select Status</option>
    <option value="Draft">Draft</option>
    <option value="Published">Published</option>
    <option value="Finished">Finished</option>
  </select>
  
</div>


  
  
   
    <div class="col-12 text-center footer">
     <button  class="addsubmitbutton mt-2 " type="submit">Submit</button>
     <button type='button'
           onClick={(e)=>{setchatpopup(false); seteditid(undefined)}}
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
  
export default Chatpopup;