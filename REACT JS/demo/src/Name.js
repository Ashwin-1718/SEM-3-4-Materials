import React, { useState } from "react";

function Name({ name }) {
  return <h1>Welcome {name}</h1>;
}

function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {name && <Name name={name} />} 
    </div>
  );
}

export default App;