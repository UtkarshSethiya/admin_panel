import './mychat.css'

function Mychat(){
    var today = new Date();
var date = today.getDate() +'-'+(today.getMonth()+1)+'-'+today.getFullYear()+','+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    return(<div className="d-flex">
       
        <div className="chat_cont  ">
            <div className="mychat_container ">My Chat</div>
            <div className=" chat_section_container border">
                <a href='#' className='chat_section'>Active(2)</a>
                <a href='#' className='chat_section'>Missed(1)</a>
                <a href='#' className='chat_section'>Closed(1)</a>
               
            </div>
            <div className='bg-primary border-bottom '>
              <div className='p-2 d-flex justify-content-between'>
               <div className='text-light operatorname '><i class=" bi bi-person-circle"></i> Operator |#1<br></br><span >hi</span></div>
               <div className='operatordate'>19 Feb<br></br> </div>
            
              </div>
              
            </div>
            <div className='bg-primary '>
              <div className='p-2 d-flex justify-content-between'>
               <div className='text-light operatorname '><i class=" bi bi-person-circle"></i> Operator |#2<br></br><span >hello</span></div>
               <div className='operatordate'>19 Feb<br></br> </div>
            
              </div>
              
            </div>
           
 
        </div>



        <div className='event_container  '>
<div className='event_heading border-down border-end border-start'>
    <div>
<i class="bi bi-globe"></i></div>

<div className='heading_content'>
  <div className='event_content_top'>#1
 
  </div>
   <div  className='event_content_down'>
   <i class="bi bi-stack"></i> Event Name
   <i class="ms-3 bi bi-bezier"></i> Event Details
   <span className='ms-4 border p-0.5 ps-1 pe-1 rounded-pill'>
   <i class=" bi bi-person-circle"></i> Event Year <i class="bi ddown bi-caret-down-fill"></i>
   </span>
  
  </div>


  </div>
 
  <div className='threedots'> <i class=" bi bi-three-dots-vertical"></i></div>
</div>
<div className='chat_window border '>

</div>
<div className='chat_option_container border'>
<div className='chat_option'>
<span className='border border-danger chat_option_button  ps-1 pe-1'><i class="bi bi-chat-text-fill"></i> Chat Missed</span>
<span className='border border-secondary end_chat_button ps-1 pe-1'>End Chat</span>
</div>

</div>

        </div>

        <div className='userdetails_container col '>
         

<div className='user_container border-down d-flex'>
    <div>
    <i class="bi usericon bi-person-circle"></i>
    </div>

    <div className='detailsection '>
   <div className='ps-2 detailname'>Operator</div>
   <div className='ps-2 detailadress'>Kasaragod,Kerela,India</div>

    </div>
   
    
    </div>
    <div className='datesection'>
    <i class="bi bi-calendar3"></i> {date} (GMT +05:30)
    </div>
    <div className='infosection'>
    <i class="bi infoicon bi-info-circle-fill"></i><a href='#'> More Details</a>
    </div>
    
    <div className='moredetails_container border-top mt-2 '>
<div className='moredetails d-flex'>
    <div className='detailtype'>Type</div>
    <div className='detailtype_right'>Returning Visitor</div>
</div>
<div className='moredetails d-flex'>
    <div className='detailtype'>Source</div>
    <div className='detailtype_right'><i class="bi bi-windows"></i></div>
</div>
<div className='moredetails d-flex'>
    <div className='detailtype'>IP address</div>
    <div className='detailtype_right'>103.151.188.27</div>
</div>
<div className='moredetails d-flex'>
    <div className='detailtype'>Landing Page</div>
    <div className='detailtype_right'>URL</div>
</div>
<div className='moredetails d-flex'>
    <div className='detailtype'>Lead Score</div>
    <div className='detailtype_right'>26</div>
</div>
<div className='moredetails d-flex'>
    <div className='detailtype'>Opportunity</div>
    <div className='detailtype_right'><i class="bi bi-speedometer2"></i> 3.85%</div>
</div>
    </div>
    </div>
 
       
    </div>)
}

export default Mychat;