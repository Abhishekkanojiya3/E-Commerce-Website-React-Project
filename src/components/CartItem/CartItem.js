import CartContext from "../store/cart-context";
import { useContext } from "react";
import { Link } from "react-router-dom";
const CartItems = () => {
    const cartCtx = useContext(CartContext)
    const productsArr = [
        {
          title: "Colors",
          price: 100,
          imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
        },
        {
          title: "Black and white Colors",
          price: 50,
          imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
        },
        {
          title: "Yellow and Black Colors",
          price: 70,
          imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
        },
        {
          title: "Blue Color",
          price: 100,
          imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
        },
      ];
    let quantity=0
      
    const addToCart=(item)=>{
       // e.preventDefault()
       quantity=quantity+1;
       console.log(quantity)
       cartCtx.addItem({...item,quantity: quantity})
        console.log('added to cart')
      }

    return (
      <div>
        <h1 className="text-center p-4 mb-5 bg-warning text-white ">Music</h1>

        {productsArr.map((item) => (
          <ul className="text-center">
          <form key={item.title}>
            <h2>{item.title}</h2>
            <Link to={`/store/${item.title}`}>
            <img src={item.imageUrl} alt={item.title} />
          </Link>
            <h3>${item.price}</h3>
            <button type="button" className="btn btn-info" onClick={addToCart.bind(null,item)}>
              Add to Cart
            </button>
          </form>
          </ul>
        ))}
      </div>
    );
  };

  export default CartItems;