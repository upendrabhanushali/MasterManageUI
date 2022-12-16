const InputField=(props)=>{
    return (
        <div className="form-group row mx-2" >
    <label for="delete-panel-Name" className="col-sm-2 col-form-label">{props.children}</label>
    <div className="col-sm-4">
      <input type={props.type} className="form-control" id="delete-panel-Name" placeholder={props.placeholder}></input>
    </div>
    </div>
    )
}
export default InputField