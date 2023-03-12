import { useState, useContext } from "react";
import AuthContext from "../store/auth-context";
import { useHistory } from "react-router-dom";
import classes from './Login.module.css';

const Login = () => {
        const logCtx = useContext(AuthContext);
        const history = useHistory();
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [isLogin, setIsLogin] = useState(true);
        const [isLoading, setIsLoading] = useState(false);

        const emailHandler = (e) => {
            setEmail(e.target.value)
        };
        const passwordHandler = (e) => {
            setPassword(e.target.value)
        };

        const loginHandler = (e) => {
            e.preventDefault();
            setIsLoading(true);

            let url;
            if (isLogin) {
                url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAATNZgSjhcwtpuQ0rIgN6w83W5FAYhmI0'
            } else {
                url =
                    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAATNZgSjhcwtpuQ0rIgN6w83W5FAYhmI0";
            }
            fetch(url, {
                    method: "POST",
                    body: JSON.stringify({
                        email: email,
                        password: password,
                        returnSecureToken: true,
                    }),
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                .then((res) => {
                    setIsLoading(false);
                    if (res.ok) {
                        return res.json();
                    } else {
                        return res.json().then((data) => {
                            let errorMessage = "Authentication failed";
                            if (data.error.message) {
                                errorMessage = data.error.message;
                            }
                            throw new Error(errorMessage);
                        });
                    }
                })
                .then((data) => {
                    logCtx.login(data.idToken, data.email);
                    history.replace("/store");
                })
                .catch((err) => {
                    alert(err.message)
                });

            setEmail('');
            setPassword('');

        };
        const switchAuthHandler = () => {
            setIsLogin((prevState) => !prevState);
        };

        return ( <
            section className = { classes.auth } >
            <
            form onSubmit = { loginHandler } >
            <
            h1 > { isLogin ? "login" : "sign up" } < /h1> <
            div className = { classes.control } >
            <
            label htmlFor = "email" > Your Email: < /label> <
            input id = "email"
            type = "email"
            value = { email }
            onChange = { emailHandler }
            required /
            >
            <
            /div> <
            div className = { classes.control } >
            <
            label htmlFor = "password" > Your Password: < /label> <
            input id = "password"
            type = "password"
            value = { password }
            onChange = { passwordHandler }
            required /
            >
            <
            /div> <
            div className = { classes.actions } > {!isLoading && ( <
                    button type = "submit" > { isLogin ? "login" : "Sign up" } < /button>
                )
            } {
                isLoading && < p > Sending request... < /p>} {
                        /* <button
                                type="button"
                                className={classes.toggle}
                                onClick={switchAuthHandler}
                            >
                                {isLogin ? "Create new account" : "Login with existing account"}
                            </button> */
                    } <
                    /div> <
                    /form> <
                    /section>
            );

        };

        export default Login;