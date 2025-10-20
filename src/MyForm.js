import { useState } from "react";
export default function MyForm() {
  // let [NameInput,setNameInput]=useState("")
  // let [EmailInput,setEmailInput]=useState("")

  let [myForm, SetForm] = useState({
    name: "",
    Email: "",
    age: "",
    genrall: "",
    isStudent: false,
    country: "",
    status: "",
  });

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <br></br>
        <br></br>
        <label>Name</label>
        <input
          value={myForm.name}
          onChange={(event) => {
            SetForm({ ...myForm, name: event.target.value });
          }}
        />
        <hr></hr>
        <label>Email</label>
        <input
          value={myForm.Email}
          onChange={(event) => {
            SetForm({ ...myForm, Email: event.target.value });
          }}
        />
        <hr></hr>
        <label>age</label>
        <input
          value={myForm.age}
          onChange={(event) => {
            SetForm({ ...myForm, age: event.target.value });
          }}
        />
        <hr></hr>
        <label for="student">Are you stutadent</label>
        <input
          id="student"
          type="checkbox"
          checked={myForm.isStudent}
          onChange={(event) => {
            SetForm({ ...MyForm, isStudent: event.target.checked });
          }}
        />
        <hr></hr>
        <select
          value={myForm.country}
          onChange={(event) => {
            SetForm({ ...MyForm, country: event.target.value });
          }}
        >
          <option>egypt</option>
          <option>Sk</option>
          <option>grmany</option>
        </select>
        <hr></hr>
        <div>
          <label for="students">students</label>
          <input
          value="students"
            type="radio"
            id="students"
            name="status"
            checked={myForm.status === "students"}
               onChange={(event)=>{SetForm({...MyForm,status:event.target.value})}}
          />
          <label for="techers">techers</label>
          <input
                   value="techers"


            type="radio"
            id="techers"
            name="status"
                      checked={myForm.status === "techers"}

            onChange={(event)=>{SetForm({...MyForm,status:event.target.value})}}
          />
        </div>
        <hr></hr>
        <textarea
          value={myForm.genrall}
          onChange={(event) => {
            SetForm({ ...MyForm, genrall: event.target.value });
          }}
        ></textarea>
        <button>Supmit</button>
      </form>
    </div>
  );
}
