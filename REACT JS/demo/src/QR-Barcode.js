import React, { useRef, useState } from 'react';
import JsBarcode from 'jsbarcode';
import { QRCodeSVG } from 'qrcode.react';

function QR_Barcode() {
    const [text, setText] = useState('');
    const [color, setColor] = useState('#000000');
    const [height, setHeight] = useState(100);
    const [width, setWidth] = useState(2);
    const [type, setType] = useState('barcode');
    const barcodeRef = useRef(null);

    const generateBarcode = () => {
        if (text) {
            JsBarcode(barcodeRef.current, text, {
                format: 'CODE128',
                displayValue: true,
                lineColor: color,
                height: Number(height),
                width: Number(width),
            });
        }
    };

    const downloadImage = (filename, element) => {
        const svg = element.current;
        const svgData = new XMLSerializer().serializeToString(svg);
        const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
        const url = URL.createObjectURL(svgBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="p-4 max-w-md mx-auto space-y-4">
            <h1 className="text-xl font-bold">QR and Barcode Generator</h1>
            <input
                type="text"
                placeholder="Enter text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="p-2 border rounded w-full"
            />
            <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-full h-10"
            />
            <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="p-2 border rounded w-full"
            >
                <option value="barcode">Barcode</option>
                <option value="qr">QR Code</option>
            </select>
            {type === 'barcode' && (
                <>
                    <input
                        type="number"
                        placeholder="Height"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        className="p-2 border rounded w-full"
                    />
                    <input
                        type="number"
                        placeholder="Width"
                        value={width}
                        onChange={(e) => setWidth(e.target.value)}
                        className="p-2 border rounded w-full"
                    />
                    <button onClick={generateBarcode} className="p-2 bg-blue-500 text-white rounded w-full">Generate Barcode</button>
                    <svg ref={barcodeRef} className="my-4"></svg>
                    <button onClick={() => downloadImage('barcode.svg', barcodeRef)} className="p-2 bg-green-500 text-white rounded w-full">Download Barcode</button>
                </>
            )}
            {type === 'qr' && (
                <>
                    <QRCodeSVG value={text} size={256} className="my-4" />
                    <button onClick={() => downloadImage('qrcode.svg', barcodeRef)} className="p-2 bg-green-500 text-white rounded w-full">Download QR Code</button>
                </>
            )}
        </div>
    );
}

export default QR_Barcode;