//Attribute onClick
//addEventListener
//1. Component itself
const Button=(props)=>{
    // const clickHandler=()=>{
    //     alert("clicked on button");

    // }
    return (
        // <button onClick={()=>{clickHandler()}}>{props.value}</button>
         <button onClick={props.click}>{props.value}</button>
    )
}
export default Button