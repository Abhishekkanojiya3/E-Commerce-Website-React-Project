import { useContext, useState,useEffect } from "react";
import CartContext from "../store/cart-context";
import Modal from "./UI/Modal";
import classes from './Cart.module.css';
import axios from 'axios';

const Cart = (props) => {
  const crtCtx = useContext(CartContext);
  const [list, setList] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const removeCartHandler = async (id) => {
    console.log("Removing item with ID", id);
    const url = `https://crudcrud.com/api/ba042c4c7d2544578b441aa4312955d1/cart${
      localStorage.getItem("email").split("@")[0]
    }`;
    const res = await axios.delete(`${url}/${id}`);
    crtCtx.removeItem();
  };

  const userEmailId = localStorage.getItem("email");

  useEffect(() => {
    const fetchCartItems = async () => {
      const res = await axios.get(
        `https://crudcrud.com/api/ba042c4c7d2544578b441aa4312955d1/cart${userEmailId}`
      );
      const itemsWithId = res.data.map((item) => ({ ...item, id: item._id }));
      setList(itemsWithId);

      let newTotalAmount = 0;
      itemsWithId.forEach((item) => {
        newTotalAmount += item.price * item.quantity;
      });
      setTotalAmount(newTotalAmount);
    };
    fetchCartItems();
  }, [userEmailId, crtCtx]);

  const cartEle = (
    <ul>
      {list.map((ele) => (
        <li key={ele.id} className={classes["cart-items"]}>
          <div className={classes.summary}>
            {ele.title}
            <span className={classes.price}>${ele.price}</span>
            <span className={classes.amount}>{ele.quantity}</span>
          </div>
          <div className={classes.actions}>
            <button onClick={() => removeCartHandler(ele.id)}>Remove</button>
          </div>
        </li>
      ))}
    </ul>
  );
  return (
    <Modal onTap={props.onTap}>
      <div className={classes.act}>
        <button onClick={props.onTap}>x</button>
      </div>
      <h1 className="text-center">CART</h1>
      {cartEle}
      <div className={classes.act}>${totalAmount}</div>
    </Modal>
  );
};
export default Cart;