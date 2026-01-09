import { useState } from "react";
export default function Myinput(){
    const [value,setinput]=useState("");
    return(
        <>
        <label>Name:</label>
        <input value={value} onChange={changeinput} type="text" placeholder="Enter your name"/>
        </>
    )
    function changeinput(e){
setinput(e.target.value);        
    }
        
    }
