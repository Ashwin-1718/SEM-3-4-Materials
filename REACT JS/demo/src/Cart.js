import { useEffect, useState } from "react";
import './Cart.css';

function Cart() {
    const [item, setItem] = useState('');
    const [submit, setSubmit] = useState([]);

    const handle = (event) => {
        event.preventDefault();
        if (!item.trim()) return;
        const newSubmit = [...submit, item];
        setSubmit(newSubmit);
        setItem('');
    };

    useEffect(() => {
        const cart = localStorage.getItem("cartItems");
        if (cart) {
            setSubmit(JSON.parse(cart));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(submit));
    }, [submit]);

    const remove = (index) => {
        const newSubmit = submit.filter((_, i) => i !== index);
        setSubmit(newSubmit);
    };

    return (
        <div className="cart-container">
            <div className="cart-box">
                <h1 className="cart-title">🛒 Your Shopping Cart</h1>

                <form onSubmit={handle} className="cart-form">
                    <input
                        type="text"
                        placeholder="Add an item..."
                        value={item}
                        onChange={(e) => setItem(e.target.value)}
                        className="cart-input"
                    />
                    <button type="submit" className="cart-button">Add</button>
                </form>

                <ul className="cart-list">
                    {submit.length === 0 ? (
                        <p className="cart-empty">Your cart is empty.</p>
                    ) : (
                        submit.map((item, index) => (
                            <li key={index} className="cart-item">
                                {item}
                                <button onClick={() => remove(index)} className="remove-button">
                                    Remove
                                </button>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    );
}

export default Cart;
