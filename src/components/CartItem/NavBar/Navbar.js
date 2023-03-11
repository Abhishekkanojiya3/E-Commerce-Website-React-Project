import { useContext } from "react";
import CartContext from "../../store/cart-context";
import classes from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import AuthContext from "../../store/auth-context";

const NavBar = (props) => {
    const headCtx = useContext(CartContext)
    const authctx = useContext(AuthContext);
    const isLoggedIn = authctx.isLoggedIn;

    const logoutHandlerfn = () => {
        authctx.logout();
    };

    let quantity = 0
    headCtx.items.forEach((item) => {
        quantity = quantity + item.quantity
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
        section >
        <
        ul > {!isLoggedIn && ( <
                li >
                <
                NavLink activeClassName = { classes.active }
                to = "/Login" >
                Login <
                /NavLink> <
                /li>
            )
        } {
            isLoggedIn && ( <
                li >
                <
                NavLink activeClassName = { classes.active }
                to = "/home" >
                Home <
                /NavLink> <
                /li>
            )
        } {
            isLoggedIn && ( <
                li >
                <
                NavLink activeClassName = { classes.active }
                to = "/store" >
                Store <
                /NavLink> <
                /li>
            )
        } {
            isLoggedIn && ( <
                li >
                <
                NavLink activeClassName = { classes.active }
                to = "/about" >
                About <
                /NavLink> <
                /li>
            )
        } {
            isLoggedIn && ( <
                li >
                <
                NavLink activeClassName = { classes.active }
                to = "/contact" >
                Contact <
                /NavLink> <
                /li>
            )
        } {
            isLoggedIn && ( <
                li >
                <
                NavLink activeClassName = { classes.active }
                onClick = { logoutHandlerfn }
                to = "/Logout" >
                Logout <
                /NavLink> <
                /li>
            )
        } {
            isLoggedIn && ( <
                button onClick = { props.onshow }
                className = { classes.button } >
                <
                span > Cart < /span> <
                span className = { classes.badge } > { quantity } < /span> <
                /button>
            )
        } <
        /ul> <
        /section> <
        /header>
    );
};
export default NavBar;