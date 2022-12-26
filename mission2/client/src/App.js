import './App.css';
import PostList from './components/PostList';
import { useState } from 'react';
import Basket from './components/Basket';

function App() {
  const [CartItems, setCartItems] = useState([]);

  const onAddItem = (product) => {
    const exist = CartItems.find((x) => x.name === product.name);
    if (exist) {
      setCartItems(
        CartItems.map((x) =>
          x.name === product.name ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...CartItems, { ...product, qty: 1 }]);
    }
  }

  const onRemoveItem = (product) => {
    const exist = CartItems.find(x => x.name === product.name)
    if (exist.qty === 1) {
      setCartItems(CartItems.filter(x => x.name !== product.name))
    } else {
      setCartItems(CartItems.map(x =>
        x.name === product.name ? { ...exist, qty: exist.qty - 1 } : x
      ))
    }
  }

  const sendOrder = async () => {
    const orderData = await CartItems.map(item => JSON.stringify(item))
    console.log(orderData)

    setCartItems(
      CartItems.filter(x => false)
    )

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      mode: 'cors',
      body: JSON.stringify(orderData)
    }

    const response = await fetch('http://localhost:5000/products/', requestOptions);
    const data = await response.json();
    console.log(data)


  }

  return (
    <div>
      <PostList onAddItem={onAddItem} />
      <Basket
        onRemoveItem={onRemoveItem}
        onAddItem={onAddItem}
        sendOrder={sendOrder}
        CartItems={CartItems} />
    </div>
  );
}

export default App;