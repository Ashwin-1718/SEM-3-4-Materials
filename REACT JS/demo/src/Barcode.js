import JsBarcode from "jsbarcode";
import { useRef, useState } from "react";

function Barcode() {
    const [name, setName] = useState("");
    const [color, setColor] = useState("#000000"); // Default color to black
    const [height, setHeight] = useState(100); // Default height
    const [width, setWidth] = useState(2); // Default width
    const barcodeRef = useRef(null);

    const callBarcode = () => {
        if (name) {
            JsBarcode(barcodeRef.current, name, {
                format: "CODE128",
                displayValue: true,
                lineColor: color,
                height: Number(height), 
                width: Number(width), 
            });
        }
    };

    return (
        <>
            <h1>Barcode Generator</h1>

            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Input barcode text"
            />
            
            <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
            />
            
            <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                placeholder="Input height"
            />
            
            <input
                type="number"
                value={width}
                onChange={(e) => setWidth(e.target.value)}
                placeholder="Input width"
            />

            <button onClick={callBarcode}>Generate</button>
            <br />
            <svg ref={barcodeRef}></svg>
        </>
    );
}

export default Barcode;
