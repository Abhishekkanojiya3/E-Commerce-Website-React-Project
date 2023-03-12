import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({

    token: "",
    email: "",

    isLoggedIn: false,

    login: (token) => {},

    logout: () => {},

});


export const AuthContextProvider = (props) => {
    const initialToken = localStorage.getItem("token");
    const [token, setToken] = useState(initialToken);
    const initialEmail = localStorage.getItem('email');
    const [email, setEmail] = useState(initialEmail);
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    // const userIsLoggedIn = !!token;

    useEffect(() => {
        setIsLoggedIn(!!token);
    }, [token]);

    const loginHandler = (token, email) => {
        console.log("Logging in with token: ", token);
        setToken(token);

        localStorage.setItem("token", token);
        setIsLoggedIn(true);
        setEmail(email);
        localStorage.setItem('email', email.replace('@', '').replace('.', ''));
        console.log("isLoggedIn: ", isLoggedIn);
    };




    const logoutHandler = () => {
        setToken(null);

        localStorage.removeItem("token");
        localStorage.removeItem("email");

    };


    const cartcontextVal = {



        token: token,
        email: email,

        isLoggedIn: isLoggedIn,

        login: loginHandler,

        logout: logoutHandler,

    };




    return (

        <
        AuthContext.Provider value = { cartcontextVal } >

        { props.children }

        <
        /AuthContext.Provider>

    );

};




export default AuthContext;