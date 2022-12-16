const Button=(props)=>{
    return(
        <button type={props.type} onClick={props.click} className="btn btn-dark px-4 m-4" >{props.children}</button>
    )
}
export default Button