
import React,{useState,useEffect} from 'react';
import './popup.css'
import firebase from 'firebase/compat/app'
import Userdataservice from '../../components/collections/Usercollection'
function Popupdelete({deleteButton,getUser,deleteid,state} ) {





    const deletehandler= async(e)=>{
    e.preventDefault();
    const Chatoperatorcount={
      Chatoperatorcount:firebase.firestore.FieldValue.increment(-1)
    }

   try{
    const user= await Userdataservice.getUser(deleteid);
    console.log(user.data().Role)
    if(user.data().Role=="Operator"){
  
     await Userdataservice.updateUser(state,Chatoperatorcount)
   }

   await Userdataservice.deleteUser(deleteid)
     getUser();
     
   }catch(err){
 
   
  }
  
       
    
  deleteButton(false);
 

  
 
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
             deleteButton(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h5>Are you sure you want to delete this User ?</h5>
        </div>
        <div className="body">
     <form onSubmit={deletehandler}>
      <div class="col-12 text-center footer">
     <button  class="addsubmitbutton mt-2 " type="submit">Delete</button>
     <button type='button'
            onClick={() => {
              deleteButton(false);
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
  
export default Popupdelete;