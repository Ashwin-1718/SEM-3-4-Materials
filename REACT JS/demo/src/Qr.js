import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

 function Qr() {
  const [text, setText] = useState("");

  return (
    <>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text for QR code"
      />
      
      <br />
      {text && (
        <div>
            <QRCodeCanvas value={text} size={200} />
            <br />
            {text.startsWith("http") && <p>Link Is valid</p>}
            <a href={`https://api.qrserver.com/v1/create-qr-code/?data=${text}&size=200x200`} target="_blank" rel="noreferrer">
                Download QR Code
            </a>
        </div>
      )}
    </>
  );
}

export default Qr;