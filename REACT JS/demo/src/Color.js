import { useState } from "react";

export default function Color() {
    const [color, setColor] = useState("");

    const colors = ["red", "blue", "green", "purple", "orange", "pink", "yellow", "teal", "black", "gray"];

    return (
        <div
            style={{
                textAlign: "center",
                padding: "20px",
                backgroundColor: color,
                transition: "background-color 0.5s ease-in-out",
                minHeight: "70vh",
            }}
        >
            <h1
                style={{
                    color: color === "black" ? "white" : "black",
                    transition: "color 0.5s ease-in-out",
                }}
            >
                Selected Color: {color || "None"}
            </h1>
            <div style={{ marginTop: "20px" }}>
                {colors.map((col) => (
                    <button
                        key={col}
                        onClick={() => setColor(col)}
                        style={{
                            backgroundColor: col,
                            color: col === "black" ? "white" : "black",
                            margin: "5px",
                            padding: "10px",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                            transition: "transform 0.2s",
                        }}
                        onMouseOver={(e) => (e.target.style.transform = "scale(1.1)")}
                        onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
                    >
                        {col.charAt(0).toUpperCase() + col.slice(1)}
                    </button>
                ))}
            </div>
        </div>
    );
}