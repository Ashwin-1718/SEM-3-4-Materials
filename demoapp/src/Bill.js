import React from "react";
import "./Bill.css"; 

function Bill() {
  const companyName = "AK Store";
  const logoUrl = "IMG/AK.jpg"; 
  const date = new Date().toLocaleDateString();

  const items = [
    { name: "Apple", price: 200, quantity: 30 },
    { name: "Banana", price: 150, quantity: 50 },
    { name: "Orange", price: 370, quantity: 25 }
  ];

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="bill-container">
      {/* Company Logo & Name */}
      <div className="bill-header">
        <img
          src={logoUrl}
          alt="Company Logo"
          className="bill-logo"
          onClick={() => alert(`Company Name: ${companyName}`)}
        />
        <h2 className="bill-company">{companyName}</h2>
      </div>

      <p className="bill-date">Date: {date}</p>

      {/* Bill Items */}
      <table className="bill-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Cost</th>
            <th>Qty</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Grand Total */}
      <h3
        className="bill-grand-total"
        onClick={() => alert(`Thanks for paying ${total}. Visit again!`)}
      >
        Grand Total: {total}
      </h3>
    </div>
  );
}

export default Bill;