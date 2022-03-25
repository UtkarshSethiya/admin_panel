import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; import
'bootstrap-css-only/css/bootstrap.min.css'; import
'mdbreact/dist/css/mdb.css';
import App from './App';

import Forgetpassword from './credentials/forgetpassword';
import { BrowserRouter , Routes,Route } from 'react-router-dom';
import Signin from './credentials/Signin';

ReactDOM.render(
 
  <BrowserRouter>

<Routes>
<Route path='/Forgetpassword' element={<Forgetpassword/>} />
<Route path='/' element={<Signin/>} />
<Route path='/dashboard/*' element={<App/>}/>
</Routes>
    </BrowserRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

