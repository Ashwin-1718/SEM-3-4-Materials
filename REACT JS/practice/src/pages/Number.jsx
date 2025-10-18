import React, { useState } from "react";

const Number = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);
  const [color, setColor] = useState("");

  const handleMin = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (n1 === n2) {
      setResult("Both numbers are equal");
      setColor("blue");
    } else {
      setResult(Math.min(n1, n2));
      setColor("red");
    }
  };

  const handleMax = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (n1 === n2) {
      setResult("Both numbers are equal");
      setColor("blue");
    } else {
      setResult(Math.max(n1, n2));
      setColor("green");
    }
  };

  return (
    <div>
      <h2>Enter Two Numbers</h2>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Number 1"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Number 2"
        style={{ marginLeft: "10px" }}
      />
      <div style={{ marginTop: "10px" }}>
        <button onClick={handleMin}>MIN</button>
        <button onClick={handleMax} style={{ marginLeft: "10px" }}>
          MAX
        </button>
      </div>
      {result !== null && (
        <h3 style={{ color, marginTop: "20px" }}>{result}</h3>
      )}
    </div>
  );
};

export default Number;
