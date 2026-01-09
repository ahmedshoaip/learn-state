import { useState } from "react";
export default function MyForm() {
  const [getData, setData] = useState({
    name: "",
    email: "",
    textArea: "",
    check: false,
    status: "",
  });
  return (
    <form>
      <label>Name</label>
      <input
        type="text"
        placeholder="Enter your name"
        onChange={(e) => {
          setData({ ...getData, name: e.target.value });
        }}
        value={getData.name}
      />
      <hr></hr>
      <label>Email:</label>
      <input
        type="email"
        placeholder="Enter your email"
        onChange={(e) => {
          setData({ ...getData, email: e.target.value });
        }}
        value={getData.email}
      />
      <hr></hr>
      <label>send massege</label>
      <textarea
        value={getData.textArea}
        onChange={(e) => {
          setData({ ...getData, textArea: e.target.value });
        }}
      />
      <hr></hr>
      <label>checkbox</label>
      <input
        type="checkbox"
        onChange={(e) => {
          setData({ ...getData, check: e.target.checked });
        }}
      />
      <hr></hr>
      <div>
        <input type="radio" name="status" value="teacher" onChange={(e)=>{
          setData({...getData, status:e.target.value})
        }}/> teacher
        <input type="radio" name="status" value="student"
        onChange={(e)=>{
          setData({...getData, status:e.target.value})
        }}
        />student
      </div>
    </form>
  );
}
