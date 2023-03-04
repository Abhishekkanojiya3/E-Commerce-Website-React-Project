import React, { useState } from 'react';
import './App.css';
//import Modal from './components/CartItem/UI/Modal';
import Cart from './components/CartItem/Cart';
//import { Button } from 'react-bootstrap';
import CartItems from './components/CartItem/CartItem';
import NavBar from './components/CartItem/NavBar/Navbar';
import About from './components/pages/About';
import { Route, Routes } from 'react-router-dom';
import { CartProvider } from "./components/store/cart-context";
import Home from './components/pages/Home';


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
        h1 className = "text-center p-5 bg-secondary text-white" > The Generics < /h1> {
            showCart && < Cart onTap = { cartCloseHandler }
            />} <
            Routes >
                <
                Route path = "/home"
            element = { < Home / > } > < /Route> <
                Route path = "/store"
            element = { < CartItems / > } > < /Route> <
                Route path = "/about"
            element = { < About / > } > < /Route>

            <
            /Routes>


            <
            /CartProvider>
        );
    }

    export default App;