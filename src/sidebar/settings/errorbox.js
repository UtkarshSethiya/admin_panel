
import React,{useState,useEffect} from 'react';
import './popup.css'
import Userdataservice from '../../components/collections/Usercollection'
function Errorbox({seterrorbutton}) {





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
                seterrorbutton(false);
            }}
          >
            X
          </button>
        </div>
        <div className="title">
          <p className='errormessage'>You have exceeded the number of Chatoperators allowed , for more Chatoperators contact Superadmin</p>
        </div>
        <div className="body">
   
      <div class="col-12 text-center footer">
     <button  class="btn-dark mt-2 "  onClick={() => {
          seterrorbutton(false);
            }} >Ok</button>
    
    </div>
   
        </div>
       
      </div></div>
     
    );
  }
  
export default Errorbox; 