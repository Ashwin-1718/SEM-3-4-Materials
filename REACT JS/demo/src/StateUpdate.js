import React, { useState } from "react";

export default function StateUpdate() {
    const [clr, setClr] = useState("Aqua");

    return (
        <>
            <div style={{ backgroundColor: clr, padding: "20px", color: "white", textAlign: "center" }}>
                <p>Selected Color: {clr}</p>
                <button onClick={() => setClr("Red")}>Red</button>
                <button onClick={() => setClr("Orange")}>Orange</button>
                <button onClick={() => setClr("Blue")}>Blue</button>
                <button onClick={() => setClr("Green")}>Green</button>
            </div>
        </>
    );
}