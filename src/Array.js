import { use, useState } from "react";
  let nextName=4;

export default function MyArray() {
const [inputValue,setInputValue]=useState("");
  const [Devies,setDeviesList]=useState([
    {id:1,name:"Iphone"}
    ,{id:2,name:"Samsung"}
    ,{id:3,name:"Nokia"},

  ]);    
const listDevies=Devies.map((D)=>{
return <li key={D.id}>{D.name} <button onClick={()=>{
  handelClickDelet(D.id)
}}>Delet</button>

<button onClick={()=>{handelClickEdit(D.id)}}>Edit</button>

</li>
  
});
function handelClickDelet(id){
  const newDeviesList=Devies.filter((D)=>{
    return D.id!==id
  })
  setDeviesList(newDeviesList)
}
function handelClickAdd(){
  setDeviesList([...Devies,{id:nextName,name:inputValue}])
  nextName=nextName+1;
  console.log(nextName);
}

function handelClickEdit(id){
  // alert(id)

const newDevies=Devies.map((D)=>{

  
  if(D.id===id){
    console.log("true");
    
    let De={...Devies,name:D.name+" Edited"}
    return De;
  }else{
    return D
  }
  
}

)
  setDeviesList(newDevies)


}
return(
<>
<ul>
  {listDevies}
</ul>
<input value={inputValue} onChange={(e)=>{
  setInputValue(e.target.value)
}}/>
<button onClick={handelClickAdd}>Add Devies</button>
</>
)

}
