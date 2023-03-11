import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({

    token: "",

    isLoggedIn: false,

    login: (token) => {},

    logout: () => {},

});


export const AuthContextProvider = (props) => {

    const [token, setToken] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    // const userIsLoggedIn = !!token;

    useEffect(() => {
        setIsLoggedIn(!!token);
    }, [token]);

    const loginHandler = (token) => {
        console.log("Logging in with token: ", token);


        setToken(token);

        localStorage.setItem("token", token);
        setIsLoggedIn(true);
        console.log("isLoggedIn: ", isLoggedIn);


    };




    const logoutHandler = () => {

        localStorage.removeItem("token");

        setToken(null);

    };


    const cartcontextVal = {



        token: token,

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