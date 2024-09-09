import React, { useState } from "react";

function Child1({ parentCallback }) {
  const [newMessage, setNewMessage] = useState("");

  const sendData = () => {
    parentCallback(newMessage);
  };

  return (
    <div>
      <input onChange={event => setNewMessage(event.target.value)} />
      <button onClick={() => sendData()}>send to parent</button>
    </div>
  );
}

export default Child1;
