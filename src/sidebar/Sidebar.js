import './sidebar.css'
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';


function Sidebar(){

    return(<div className='sidebar_container'>
<ul className='list_container'>
<li className='list'>
    <Link to='./' className='item'><i className="bi item_icons bi-house-door-fill"></i><br></br>Home</Link>
</li><pre></pre>
<li className='list'>
    <Link to='./Mychat' className='item'><i className="bi item_icons bi-chat-left-fill"></i><br></br>My Chat</Link>
</li><pre></pre>
<li className='list'>
<div className="  dropend" >
  <span type="button" className=" dropdown-toggle   item"   data-bs-toggle="dropdown"  aria-expanded="false" >
  <i className="bi item_icons droprighticon  bi-chat-left-text-fill"></i><br></br><br></br><span className='span' >Chat</span>System
  </span>
  <ul className="dropdown-menu droprightmenu  "  >
  <li className=''><Link to='./Chatsystem/General' className='droprightmenu_items' href='#'><i className="bi item_icons_drop bi-people-fill"></i> General Chat</Link></li>
  <li className=''><Link to='./Chatsystem/One-to-One' className='droprightmenu_items' href='#'><i className="bi item_icons_drop bi-person-workspace"></i> One-to-One Chat</Link></li>
  <li className=''><Link to='./Chatsystem/Poll' className='droprightmenu_items' href='#'><i className="bi item_icons_drop bi-bar-chart-fill"></i> Poll</Link></li>
  <li className=''><Link to='./Chatsystem/Poll' className='droprightmenu_items' href='#'><i className="bi item_icons_drop bi-bar-chart-fill"></i> Q&A</Link></li>
  </ul>
</div>
</li><pre></pre>

<li className='list'>
<div className="  dropend">
  <span type="button" className=" dropdown-toggle   item"  data-bs-toggle="dropdown"  aria-expanded="false" >
  <i className="bi item_icons droprighticon bi item_icons bi-gear-fill"></i><pre></pre> Settings
  </span>
  <ul className="dropdown-menu  droprightmenusetting " >
  <li className='settingsmenu'><Link to='./settings/SuperadminManagement' className='droprightmenu_items' href='#'> <Icon className='item_icons_setting' icon="wpf:administrator" /> Superadmin Management</Link></li>
  <li className='settingsmenu'><Link to='./settings/CreteSubscriber' className='droprightmenu_items' href='#'><Icon className='item_icons_setting' icon="subway:admin" /> Create Subscriber</Link></li>
  <li className='settingsmenu'><Link to='./settings/ChatoperatorManagement' className='droprightmenu_items' href='#'><Icon className='item_icons_setting' icon="bxs:user" /> Create Chat Operators</Link></li>
  <li className='settingsmenu'><Link to='./Settings/Chatmanagement' className='droprightmenu_items' href='#'><Icon className='item_icons_setting' icon="akar-icons:chat-dots" /> Chat Management</Link></li>
  <li className='settingsmenu'><Link to='./settings'  className='droprightmenu_items' href='#'><Icon className='item_icons_setting' icon="teenyicons:password-solid" /> Change Password</Link></li>
  </ul>
</div>
</li><pre></pre>




</ul>

    </div>);

}

export default Sidebar;