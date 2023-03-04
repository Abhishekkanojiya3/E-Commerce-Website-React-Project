import React, { useState } from "react";
const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeCart: (id) => {},
});

export const CartProvider = (props) => {
    const [items, setItems] = useState([]);
    const addToCart = (item) => {
        const exist = items.find((itemp) => itemp.id === item.id);
        if (exist) {
            setItems(
                items.map((itemp) =>
                    itemp.id === item.id ?
                    {...exist, quantity: exist.quantity + 1 } :
                    itemp
                )
            );
        } else {
            setItems([...items, {...item, quantity: 1 }]);
        }
    };

    const removeFromCart = (id) => {
        const res = items.filter((cutElm) => (cutElm.id !== id)); //.map(filterdItem => (setCartItems(filterdItem)))
        setItems(res)
    };

    const cartcontextVal = {
        items: items,
        totalAmount: 0,
        addItem: addToCart,
        removeCart: removeFromCart,
    };

    return ( <
        CartContext.Provider value = { cartcontextVal } > { props.children } <
        /CartContext.Provider>
    );
};

export default CartContext;