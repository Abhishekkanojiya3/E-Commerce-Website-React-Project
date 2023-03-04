import { useContext } from "react";
import CartContext from "../store/cart-context";
import Modal from "./UI/Modal";
import classes from './Cart.module.css';

const Cart = (props) => {
    const ctx = useContext(CartContext)

    const totalAmount = ctx.items.reduce((currNum, item) => {
        return item.price * item.quantity + currNum;
    }, 0);

    const minusItem = (id) => {
        ctx.removeCart(id);
    };


    const cartEle = ( <
        ul > {
            ctx.items.map((ele) => ( <
                li key = { ele.id }
                className = { classes["cart-items"] } >
                <
                div className = { classes.summary } > { ele.title } <
                span className = { classes.price } > $ { ele.price } < /span> <
                span className = { classes.amount } > { ele.quantity } < /span> <
                /div> <
                div className = { classes.actions } >
                <
                button onClick = { minusItem.bind(null, ele.id) } > Remove < /button> <
                /div> <
                /li>
            ))
        } <
        /ul>
    );
    return ( <
        Modal onTap = { props.onTap } >
        <
        div className = { classes.act } >
        <
        button onClick = { props.onTap } > x < /button> <
        /div> <
        h1 className = 'text-center' > CART < /h1>   { cartEle } <
        div className = { classes.act } > $ { totalAmount } < /div> <
        /Modal>
    )

};
export default Cart;