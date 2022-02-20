import './settings.css'
function Settings(){

    return(<div className='home_cont'>
        <h2 className='p-3 settingheading' ><i className="bi  bi-gear-fill"></i> Settings</h2>
 <div className='setting_menus_container p-5'>


 <div class="input-group mb-3"><i class="bi settingicon bi-easel2-fill"></i>
  <input type="text" class="form-control bg-light inputsettings shadow-none" placeholder="Add Event Site" aria-label="Recipient's username" aria-describedby="button-addon2" disabled />
  <button class="btn btn-primary shadow-none" type="button" id="button-addon2">Add</button>
</div>

     
 <div class="input-group mb-3"><i class="bi settingicon bi-person-workspace"></i>
  <select class="form-select shadow-none bg-light" id="inputGroupSelect02">
    <option selected >Add Operator</option>
    <option value="1">Visitor</option>
    <option value="2">Agent</option>
   
  </select>
  <button class="btn btn-primary shadow-none" type="button" id="button-addon2">Add</button>
</div>

<div class="input-group mb-3"><i class="bi settingicon  bi-globe2"></i>
  <select class="form-select shadow-none bg-light" id="inputGroupSelect02">
    <option selected >Add Website</option>
    <option value="1">Generate URL</option>
    <option value="2">Generate Pages</option>
   
  </select>
  <button class="btn btn-primary shadow-none" type="button" id="button-addon2">Add</button>
</div>
<div class="input-group mb-3"><i class="bi settingicon bi-bookmark-star-fill"></i>
  <input type="text" class="form-control bg-light inputsettings shadow-none" placeholder="Profieciency" aria-label="Recipient's username" aria-describedby="button-addon2" disabled />
  <button class="btn btn-primary shadow-none" type="button" id="button-addon2">Add</button>
</div>
<div class="input-group mb-3"><i class="bi settingicon bi-person-circle"></i>
  <input type="text" class="form-control bg-light inputsettings shadow-none" placeholder=" My Profile" aria-label="Recipient's username" aria-describedby="button-addon2" disabled />
  <button class="btn btn-primary shadow-none" type="button" id="button-addon2">Edit</button>
</div>
<div class="input-group mb-3"><i class="bi settingicon bi-file-earmark-bar-graph-fill"></i>
  <input type="text" class="form-control bg-light inputsettings shadow-none" placeholder="Reports" aria-label="Recipient's username" aria-describedby="button-addon2" disabled />
  <button class="btn btn-primary shadow-none" type="button" id="button-addon2">View</button>
</div>
 </div>
    </div>)
}

export default Settings;