import Header from './components/Header';
import { BrowserRouter , Routes,Route } from 'react-router-dom';
import Sidebar from './sidebar/Sidebar';
import './App.css';
import Mychat from './sidebar/Mychat';
import Home from './sidebar/home';
import General from './sidebar/chatsystem/General';
import One from './sidebar/chatsystem/One';
import Poll from './sidebar/chatsystem/Poll';
import Forgetpassword from './credentials/forgetpassword';
import Settings from './sidebar/settings/Settings';
import Signin from './credentials/Signin';
import Superadmin from './sidebar/settings/superadmin';

import React,{useState} from "react";
  import 'react-toastify/dist/ReactToastify.css';
import Popup from './sidebar/settings/popup';
import Chatoperatorhome from './sidebar/settings/chatoperatorhome';
import Chatoperator from './sidebar/settings/chatoperator';
import Subscriber from './sidebar/settings/Subsciber';
import Chatmanagementhome from './sidebar/settings/ChatManagementhome';
import Chatmanagement from './sidebar/settings/Chatmanagement';
import Generalmultiple from './sidebar/chatsystem/Generalchatfrontend/Generalchatmultiple'



function App() {
const[userid,setuserid]=useState([])
const[number_of_chatadmin,setnochatadmin]=useState(null);


let x;

  return (
    <>
   
   
  
  <Header/>

<Sidebar/>   
   <Routes>
   
   
   <Route path='/' element={<Home/>} />
<Route path='Mychat' element={<Mychat/>} />
<Route path='Chatsystem/General' element={<General/>} />
<Route path='Chatsystem/One-to-One' element={<One/>} />
<Route path='Chatsystem/Poll' element={<Poll/>} />
<Route path='/' element={<Signin/>} />
<Route path='/Forgetpassword' element={<Forgetpassword/>} />
<Route path='Settings' element={<Settings/>} />
<Route path='Settings/SuperadminManagement' element={<Superadmin    />} />
<Route path='Settings/SuperadminManagement/add' userid={userid} element={<Popup  />} />
<Route path='General_chat/:id'   element={<Generalmultiple/>} />
<Route path='Settings/CreteSubscriber' element={<Subscriber/>} />
<Route path='Settings/ChatoperatorManagement' element={<Chatoperatorhome/>} />
<Route path='Settings/ChatoperatorManagement/Chatoperators' element={<Chatoperator setnochatadmin={setnochatadmin}   />} />
<Route path='Settings/Chatmanagement' element={<Chatmanagementhome/>} />
<Route path='Settings/Chatmanagement/Chats' element={<Chatmanagement/>} />

</Routes>



    </>
  );
}

export default App;
