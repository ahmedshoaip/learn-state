import { useState } from "react"
export default function MyInput(){
    const [value, setValue]=useState("")


    return (
        <>
        <label>Enter your Name</label>
        <input onChange={handelChangeInput} value={value} />
        </>
    )
function handelChangeInput(event){
    setValue(event.target.value)
    
}
}