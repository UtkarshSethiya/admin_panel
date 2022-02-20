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
import Settings from './sidebar/Settings';
import Signin from './credentials/Signin';


function App() {
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

</Routes>



    </>
  );
}

export default App;
