import './header.css'
import logo from '../images/bizlogo.png'
import { Link } from "react-router-dom";
function Header(){

  function radiobutton(){
let label=document.getElementById('labeldetails');
let radio=document.getElementById('flexSwitchCheckChecked');
if(radio.checked){
  label.innerHTML='Busy'
}
else{
  label.innerHTML='Available'
}
  }

    return(
        <div className='navbar_container border d-flex justify-content-space-between'>
            <div><img className='' src={logo} height='50px' width='90px'></img>
            
            </div>
         
         <div className='d-flex'>

         <div class="form-check mt-2 me-5 form-switch">
         <label class="form-check-label -" id='labeldetails' for="flexSwitchCheckChecked">Available</label>
  <input class="form-check-input radiocheck shadow-none" onClick={radiobutton} type="checkbox" id="flexSwitchCheckChecked"  />

</div>

         <div className='bellicon_container me-4'><i class="bi bellicon bi-bell"></i></div>
            <div class="dropdown_cont dropdown">
  <span class=" " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
  <i class="bi profileicon bi-person"></i>
  </span>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#"><i class="bi dropdown_icons bi-person-fill"></i> Profile</a></li>
    <li><Link to='/Forgetpassword' class="dropdown-item" href="#"><i class="bi dropdown_icons bi-keyboard-fill"></i> Change Password</Link></li>
    <li><Link to='/' class="dropdown-item" href="#"><i class="bi dropdown_icons bi-box-arrow-right"></i> Logout</Link></li>
  </ul> 
</div>
</div>      
            
        </div>
        
    );
}

export default  Header;