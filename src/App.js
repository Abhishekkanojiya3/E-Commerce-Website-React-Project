import React, { useState, useContext } from 'react';
import './App.css';
//import Modal from './components/CartItem/UI/Modal';
import Cart from './components/CartItem/Cart';
//import { Button } from 'react-bootstrap';
import CartItems from './components/CartItem/CartItem';
import NavBar from './components/CartItem/NavBar/Navbar';
import { CartProvider } from "./components/store/cart-context";


function App() {
    const [showCart, setShowCart] = useState(false);

    const CartHandler = () => {
        setShowCart(true);
    };

    const cartCloseHandler = () => {
        setShowCart(false)
    }
    return ( <
        CartProvider >
        <
        NavBar onShow = { CartHandler }
        /> <
        h1 className = "text-center p-5 bg-secondary text-white" > The Generics < /h1> <
        CartItems / > {
            showCart && < Cart onTap = { cartCloseHandler }
            />}


            <
            /CartProvider>
        );
    }

    export default App;