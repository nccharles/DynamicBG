import "./App.css";
import React, { useState } from "react";

const App = () => {
  const [bg, setBg] = useState("grey");
  const [name, setName] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    if(name===""){
    return  alert("Please Enter the Background")
    }
    e.target.reset();
    setBg(name);
    setName("");
  };
  const onChange = (e) => {
    setName(e.target.value);
  };
  return (
    <div style={{background:`${bg}`}} className="App">
      <form onSubmit={onSubmit}>
        <input type="text" name="name" onChange={onChange} />
        
        <button style={{background:`${bg}`,color:"#fff"}}>{bg}</button>
      </form>
    </div>
  );
};

export default App;
