import { useState } from "react"
let value="shoaip"
export default function ButtonClick(){
  let [name,setNmae]=useState(value)
 
  function buttonOnClick(){
    if( name == "Ahmed")
    {
      setNmae("Update")

    }
    else{

      setNmae("Ahmed")
    }
      
  }

  
  
return (
  <>
    <button onClick={buttonOnClick}>click</button>
    <h1>{name}</h1>
    </>
)
}
