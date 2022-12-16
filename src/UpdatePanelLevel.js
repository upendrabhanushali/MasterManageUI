import React from "react"
function UpdatePanelLevel()
{
   return(
        <>

        <h1 className="mt-4 ms-4">Edit Panel Level Master</h1>      
<form >
  <div className="form-outline " style={{margin:"30px"}}>
  <div className="form-group row" >
    <label for="update-panel-id" class="col-sm-2 col-form-label" >Panel Level ID </label>
    <div class="col-sm-2">
      <input type="text" class="form-control col-sm-2" id="update-panel-id" placeholder="Enter Panel Level ID"></input>
    </div>
    </div>
  </div>
<div className="form-outline " style={{margin:"30px"}} >
  <div class="form-group row" >
    <label for="update-panel-Name" class="col-sm-2 col-form-label">Panel Level Name</label>
    <div class="col-sm-10">
      
           <select>
                <option value="blank" hidden> </option>
                <option value="Practice Head">Practice Head</option>
                <option value="Talent Acquistion">Talent Acquistion</option>
                <option value="Admin">Admin</option>
                <option value="Candidate">Candidate</option>                
            </select>
            
    </div>
  </div>
</div>
    <span>
        <button type="submit" className="btn btn-dark m-3 px-5">Update</button>      
        <button type="button" className="btn btn-dark px-5" >Cancel</button> </span>            
        </form>
        </>
    )
}

export default UpdatePanelLevel;