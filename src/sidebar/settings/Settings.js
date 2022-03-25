import './settings.css';
import { Link } from "react-router-dom";
import Superadmin from './superadmin';
import { Icon } from '@iconify/react';
function Settings(){

    return(<div id='settingsback' className='home_cont container-fluid'>
<div className=' m-4 rolecont row '>

 <Link  to='./SuperadminManagement' className='d-flex text-center admin_cont me-3 border col-sm-3 p-2'>
 <div><Icon className='icon_admin' icon="wpf:administrator" /></div>
 <div><p className='managetext'>Superadmin Management</p></div>
 </Link>

 <Link  to='./OperatorManagement'className='d-flex text-center admin_cont me-3  border col-sm-3 p-2'>
 <div><Icon className='icon_admin' icon="subway:admin" /></div>
 <div><p className='managetext'>Operator Management</p></div>
 </Link>

 <Link  to='./ChatadminManagement' className='d-flex text-center admin_cont me-3  border col-sm-3 p-2'>
 <div><Icon className='icon_admin' icon="bxs:user" /></div>
 <div><p className='managetext'>Chatadmin Management</p></div>
 </Link>
<pre></pre>
 <div className='  rolecont row '>
 </div>
 <div className='d-flex text-center admin_cont me-3  border col-sm-3 p-2'>
 <div><Icon className='icon_admin' icon="akar-icons:chat-dots" /></div>
 <div><p className='ms-2 managetext'> Chat Management</p></div>
 </div>

 <div className='d-flex text-center admin_cont   border col-sm-3 p-2'>
 <div><Icon className='icon_admin' icon="teenyicons:password-solid" /></div>
 <div><p className='ms-2 managetext'>Password Management</p></div>
 </div>
</div>
<div class="btn-group dropend">
  <button type="button" class="btn btn-success dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
    Dropright
  </button>
  <ul class="dropdown-menu">
  <li className=''><Link to='./Chatsystem/General' className='droprightmenu_items' href='#'><i className="bi item_icons_drop bi-people-fill"></i> General Chat</Link></li>
  <li className=''><Link to='./Chatsystem/One-to-One' className='droprightmenu_items' href='#'><i className="bi item_icons_drop bi-person-workspace"></i> One-to-One Chat</Link></li>
  <li className=''><Link to='./Chatsystem/Poll' className='droprightmenu_items' href='#'><i className="bi item_icons_drop bi-bar-chart-fill"></i> Poll</Link></li>
  <li className=''><Link to='./Chatsystem/Poll' className='droprightmenu_items' href='#'><i className="bi item_icons_drop bi-bar-chart-fill"></i> Q&A</Link></li>
  </ul>
</div>
 
    </div>)
}

export default Settings;