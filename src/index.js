import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

//----------------------------Child-------------------------------
function Child({ parentCallback }) {
  const [newMessage, setNewMessage] = useState("");

  const sendData = () => {
    parentCallback(newMessage);
  };

  return (
    <div>
      <input onChange={(event) => setNewMessage(event.target.value)} />
      <button onClick={() => sendData()}>send to parent</button>
    </div>
  );
}

//-------------------------Parent-----------------------------------
function Parent() {
  const [message, setMessage] = useState("initial text");

  const callbackFunction = (childData) => {
    setMessage(childData);
  };

  return (
    <div className="App">
      <p>Parent message: {message}</p>
      <Child parentCallback={callbackFunction} />
    </div>
  );
}

//-------------------------final rendring--------------------------
const rootElement = document.getElementById("root");
ReactDOM.render(<Parent />, rootElement);
