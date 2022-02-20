import './Signin.css'
import { Link } from "react-router-dom";
import logo from '../images/bizlogo.png'
import chat from '../images/chatimage.png'
function Forgetpassword(){

    return(
        <div className='signin_container'>
        <div className='row'>
   <div className='col'></div>
   <div className='col-md-4 maincontainer '>
   <div className='text-center mb-4'>
   <img src={logo} height='100%' width='40%'></img>
   </div>
   <form className='form_cont'>
  <div className="mb-3"><pre></pre><pre></pre>
   <h3 className='signin'>Forgot Password</h3><pre></pre>
    <input type="email" className="form-control fonticons" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="&#xf0e0;  Email" required/>
    
  </div>
 
  <div className='text-center'><button type="submit" className="submitbutton">Send Email</button></div>
  <div className='text-center'>
  <Link to='/' className='downtext'>Already have an account? Log in </Link>
<pre></pre>
  </div>
 
  
</form>




   </div>
   <div className='col'></div>

        </div>
        <img src={chat} className='chatimage' height='100%' width='30%'></img>
        </div>
    );
}
export default Forgetpassword;