
import React,{useState,useEffect} from 'react';
import './delete.css'
import Generalchatservice from "../../components/collections/GeneralChat";
function Generaldelete({setdeletebox,getChats,deletemessage ,deleteid,getUser} ) {



  console.log(deleteid)

    const deletehandler= async(e)=>{
    e.preventDefault();

   try{

   await  Generalchatservice.deleteChat(deleteid)
     getUser();

   }catch(err){
 
   
  }
  
     getChats();  
    
  setdeletebox(false);
 

  
 
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
            setdeletebox(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <h6>Are you sure you want to delete this Messsage  ? <br></br> <span className='deletemessage'> ({deletemessage})</span></h6>
        </div>
        <div className="body">
     <form onSubmit={deletehandler}>
      <div class="col-12 text-center footer">
     <button  class="addsubmitbutton mt-2 " type="submit">Delete</button>
     <button type='button'
            onClick={() => {
              setdeletebox(false);
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
  
export default Generaldelete;