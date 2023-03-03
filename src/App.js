import React, { useState } from 'react';
import './App.css';
//import Modal from './components/CartItem/UI/Modal';
import Cart from './components/CartItem/Cart';
//import { Button } from 'react-bootstrap';
import CartItems from './components/CartItem/CartItem';
import NavBar from './components/CartItem/NavBar/Navbar';

function App() {
    const [showCart, setShowCart] = useState(false);

    const CartHandler = () => {
        setShowCart(true);
    };

    const cartCloseHandler = () => {
        setShowCart(false)
    }
    return ( <
        div >
        <
        NavBar onShow = { CartHandler }
        /> <
        h1 className = "text-center p-5 bg-secondary text-white" > The Generics < /h1> <
        CartItems / > {
            showCart && < Cart onTap = { cartCloseHandler }
            />}


            <
            /div>
        );
    }

    export default App;