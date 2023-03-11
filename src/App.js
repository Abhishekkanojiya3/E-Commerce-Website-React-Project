import React, { useState, useContext } from 'react';
import './App.css';
//import Modal from './components/CartItem/UI/Modal';
import Cart from './components/CartItem/Cart';
//import { Button } from 'react-bootstrap';
import CartItems from './components/CartItem/CartItem';
import NavBar from './components/CartItem/NavBar/Navbar';
import About from './components/pages/About';
import { Redirect, Route, Switch } from "react-router-dom";
import { CartProvider } from "./components/store/cart-context";
import { AuthContextProvider } from './components/store/auth-context';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Products from './components/pages/Products';
import Login from './components/pages/Login';
import AuthContext from './components/store/auth-context';
import HomePage from './components/pages/Homepage';
import Footer from './components/CartItem/NavBar/Footer';


function App() {
    const [showCart, setShowCart] = useState(false);
    //const authContext = useContext(AuthContext);

    const CartHandler = () => {
        setShowCart(true);
    };

    const cartCloseHandler = () => {
        setShowCart(false)
    }
    return ( <
        CartProvider >
        <
        AuthContextProvider >
        <
        NavBar onShow = { CartHandler }
        /> <
        h1 className = "text-center p-5 bg-secondary text-white" > The Generics < /h1> {
            showCart && < Cart onTap = { cartCloseHandler }
            />} <
            Switch >
                <
                Route exact path = "/" >
                <
                HomePage / >
                <
                /Route> <
                Route path = "/home" >
                <
                Home / >
                <
                /Route>

            <
            Route path = "/store"
            exact >
                <
                CartItems / >
                <
                /Route> <
                Route path = "/store/:title" >
                <
                Products / >
                <
                /Route> <
                Route path = "/about" >
                <
                About / >
                <
                /Route> <
                Route path = "/contact" >
                <
                Contact / >
                <
                /Route> <
                Route path = "/Login" >
                <
                Login / >
                <
                /Route> <
                Route path = "/Logout" >
                <
                Login / >
                <
                /Route> <
                /Switch> <
                Footer / >
                <
                /AuthContextProvider> <
                /CartProvider>
        );
    }

    export default App;