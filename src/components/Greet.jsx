//functional -> plain javascript
// return JSX
// html->XML, embedd javascript
//regular,arrow
import React from 'react'
export default function Greet(props) {
   // console.log(data);
console.log(props);
    let i=1;
    return (
        <>
            <div>Greeting to {props.name} ({props.years})</div>
           
        </>
    )
}
//export default Greet;
//First Letter Caps