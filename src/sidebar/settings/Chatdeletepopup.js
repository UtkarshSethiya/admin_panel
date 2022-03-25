
import React,{useState,useEffect} from 'react';
import './popup.css'
import Chatdataservice from '../../components/collections/Chatcollection'
import firebase from 'firebase/compat/app'
import Userdataservice from '../../components/collections/Usercollection'
import { faL } from '@fortawesome/free-solid-svg-icons';
function Popupchatdelete({setdeletepopup,getChats,deleteid,state} ) {


  const Chatcount={
    Chatcount:firebase.firestore.FieldValue.increment(-1)
  }
  


    const deletehandler= async(e)=>{
    e.preventDefault();

   try{

   await Chatdataservice.deleteChat(deleteid);
   await Userdataservice.updateUser(state,Chatcount)


   }catch(err){
 
   
  }
  
  getChats()   
    
setdeletepopup(false)

  
 
    }

   /* useEffect(()=>{
      console.log(deleteid)
      if(deleteid !==undefined && deleteid !==""){
    
      }
    },[])*/


    return (
      <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button className='CloseBtn'
            onClick={() => {
                setdeletepopup(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h5>Are you sure you want to delete this Chat?</h5>
        </div>
        <div className="body">
     <form onSubmit={deletehandler}>
      <div class="col-12 text-center footer">
     <button  class="addsubmitbutton mt-2 " type="submit">Delete</button>
     <button type='button'
            onClick={() => {
                setdeletepopup(false);
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
  
export default Popupchatdelete;