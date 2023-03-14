import React, { useState, useContext, lazy, Suspense } from 'react';
import './App.css';
//import Modal from './components/CartItem/UI/Modal';
import Cart from './components/CartItem/Cart';
//import { Button } from 'react-bootstrap';
// import CartItems from './components/CartItem/CartItem';
// import NavBar from './components/CartItem/NavBar/Navbar';
// import About from './components/pages/About';
import { Redirect, Route, Switch } from "react-router-dom";
// import  {CartProvider} from "./components/store/cart-context";
// import { AuthContextProvider } from './components/store/auth-context';
// import Home from './components/pages/Home';
// import Contact from './components/pages/Contact';
// import Products from './components/pages/Products';
// import Login from './components/pages/Login';
import AuthContext from './components/store/auth-context';
// import Footer from './components/CartItem/NavBar/Footer';

const CartItems = lazy(() =>
    import ("./components/CartItem/CartItem"));
const NavBar = lazy(() =>
    import ("./components/CartItem/NavBar/Navbar"));
const About = lazy(() =>
    import ("./components/pages/About"));
const Home = lazy(() =>
    import ("./components/pages/Home"));
const Contact = lazy(() =>
    import ("./components/pages/Contact"));
const Products = lazy(() =>
    import ("./components/pages/Products"));
const Login = lazy(() =>
    import ("./components/pages/Login"));
const Footer = lazy(() =>
    import ("./components/CartItem/NavBar/Footer"));




function App() {
    const [showCart, setShowCart] = useState(false);
    const authContext = useContext(AuthContext);
    const isLoggedIn = authContext.isLoggedIn;

    const CartHandler = () => {
        setShowCart(true);
    };

    const cartCloseHandler = () => {
        setShowCart(false)
    }
    return (
            // <CartProvider>
            //   <AuthContextProvider>
            <
            React.Fragment >
            <
            NavBar onShow = { CartHandler }
            /> <
            h1 className = "text-center p-5 bg-secondary text-white" > The Generics < /h1> {
                showCart && < Cart onTap = { cartCloseHandler }
                />} <
                Switch >

                    {
                        isLoggedIn && < Route path = "/home" >
                        <
                        Suspense > < Home / > < /Suspense> <
                        /Route>}

                        {
                            isLoggedIn && < Route path = "/store"
                            exact >
                                <
                                Suspense > < CartItems / > < /Suspense> <
                                /Route>} {
                                    isLoggedIn && < Route path = "/store/:title" >
                                        <
                                        Suspense > < Products / > < /Suspense> <
                                        /Route>} {
                                            isLoggedIn && < Route path = "/about" >
                                                <
                                                Suspense > < About / > < /Suspense> <
                                                /Route>} {
                                                    isLoggedIn && < Route path = "/contact" >
                                                        <
                                                        Suspense > < Contact / > < /Suspense> <
                                                        /Route>} {
                                                            !isLoggedIn && < Route path = "/Login" >
                                                                <
                                                                Suspense > < Login / > < /Suspense> <
                                                                /Route>} {
                                                                    isLoggedIn && < Route path = "/Logout" >
                                                                        <
                                                                        Suspense > < Login / > < /Suspense> <
                                                                        /Route>} <
                                                                        /Switch> <
                                                                        Suspense > < Footer / > < /Suspense> {
                                                                            /* </AuthContextProvider>
                                                                                </CartProvider> */
                                                                        } <
                                                                        /React.Fragment>
                                                                );
                                                        }

                                                    export default App;