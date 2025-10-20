import logo from './logo.svg';
import './App.css';
import ButtonClick from "./buttonClick.js"
import MyInput from './MyInput.js';
import MyForm from "./MyForm.js"
import Scoreboard from "./chanlleng.js"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
                  <ButtonClick/>
                  <MyInput/>
                  <MyForm/>
                  <Scoreboard/>
      </header>
    </div>
  );
}

export default App;
