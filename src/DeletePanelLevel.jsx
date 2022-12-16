import React from "react"
import Button from "./UI/Button";
import InputField from "./UI/InputField"
function DeletePanelLevel()
{
    return(
        <>
        <h1 className="m-3" >Delete Panel Level Master</h1>       

        <form >
  
            <InputField placeholder={'Enter Panel Level ID'}>Panel Level ID</InputField>
            <br />
            <InputField placeholder={'Enter Panel Level Name'}>Panel Level Name</InputField>
         
            <Button>Delete</Button>
            
            <Button>Cancel</Button>
                   
        </form> 
        </>
    )
}
export default DeletePanelLevel;