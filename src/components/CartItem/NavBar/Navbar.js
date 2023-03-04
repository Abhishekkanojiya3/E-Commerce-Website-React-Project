import { useContext } from "react";
import CartContext from "../../store/cart-context";
import classes from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

const NavBar = (props) => {
    const headCtx = useContext(CartContext)

    let quantity = 0
    headCtx.items.forEach((item) => {
        quantity = quantity + (item.quantity)
    });
    return (
        //     <Navbar bg="dark" expand="lg" variant="dark">
        //         <Container className = "mb-1">
        //         <Navbar.Brand href="#HOME" >HOME</Navbar.Brand>
        //    <Navbar.Brand href="#STORE">STORE</Navbar.Brand>
        //    <Navbar.Brand href="#ABOUT">ABOUT</Navbar.Brand>
        <
        header className = { classes.header } >
        <
        nav >
        <
        ul >
        <
        li >
        <
        NavLink activeclassname = { classes.active }
        to = "/home" >
        Home <
        /NavLink> <
        /li> <
        li >
        <
        NavLink activeclassname = { classes.active }
        to = "/store" >
        Store <
        /NavLink> <
        /li> <
        li >
        <
        NavLink to = "/about" >
        About <
        /NavLink> <
        /li> <
        button onClick = { props.onShow }
        className = { classes.button } >
        <
        span > Cart < /span> <
        span className = { classes.badge } > { quantity } < /span> <
        /button> <
        /ul> <
        /nav> <
        /header>
    );
};
export default NavBar;