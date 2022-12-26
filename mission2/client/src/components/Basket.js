import React from 'react';
import './Basket.css'

function Basket(props) {
    const { CartItems, onAddItem, onRemoveItem, sendOrder } = props;
    const itemsPrice = CartItems.reduce((a, c) => a + c.price * c.qty, 0);

    return (
        <div className='CartItems'>
            <h2>Cart Items</h2>
            <div>
                {CartItems.length === 0 && <div>Cart is Empty </div>}
            </div>
            <div>
                {CartItems.map((item) => (
                    <div key={item.name}>
                        <div><strong>{item.name}</strong></div>
                        <div>
                            <button onClick={() => onAddItem(item)} className="add">+</button>
                            <button onClick={() => onRemoveItem(item)} className="remove">-</button>
                        </div>
                        <div>
                            {item.qty} X ₪ {item.price.toFixed(2)}
                        </div>
                    </div>
                ))}
                {CartItems.length !== 0 && (
                    <div>
                        <div>Items Price: <strong>₪ {itemsPrice.toFixed(2)}</strong></div>
                        <br />
                        <button onClick={() => sendOrder()} className='btn_buyitems'>Send Order</button>
                    </div>

                )}
            </div>
        </div>
    );
}

export default Basket;