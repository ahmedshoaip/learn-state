import { useState } from "react"
let Name="Ahmed"
export default function ButtonClick(){
let [name,setName]=useState("Ahmed")

function changeName(){
setName("Mohamed")
}
  return(
<di>
  <h1>{name}</h1>
  <button onClick={changeName}>ButtonClick</button>
</di>
  )
}