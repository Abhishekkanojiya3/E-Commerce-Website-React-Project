import React, { useState, useEffect } from "react";
import axios from "axios";
const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
});

export const CartProvider = (props) => {
    // const [items,setItems] = useState([]);
    const [products, updateProducts] = useState([]);

    const [quantity, setQuantity] = useState(0);
    const userEmailId = localStorage.getItem('email');

    useEffect(() => {
        const productsQuantityHandler = () => {
            const itemsArray = [...products];
            const quantity = itemsArray.reduce((accum, item) => {
                return accum + item.quantity;
            }, 0);
            setQuantity(quantity);
        };
        productsQuantityHandler();
    }, [products])
    const addItemHandler = async(item) => {
        let itemsPresent = false;
        const newItemArray = [...products];
        console.log(newItemArray);
        const url = `https://crudcrud.com/api/8b025605a96147a88ecb738503fdf544/cart${userEmailId}`
        if (itemsPresent === false) {
            try {
                const response = await axios.post(url, item)
                updateProducts([...products, response.data]);
                console.log(response)
            } catch (err) {
                console.log(err)
            }
        } else {
            try {
                const updatedItem = newItemArray.forEach((element, index) => {
                    if (item.id === element.id) {
                        itemsPresent = true;
                        newItemArray[index].quantity = Number(item.quantity) + Number(newItemArray[index].quantity);
                    }
                })
                let temp = updatedItem._id
                console.log(temp)
                const putResponse = await
                axios.put(`https://crudcrud.com/api/8b025605a96147a88ecb738503fdf544/cart${userEmailId}/${temp}`, updatedItem)
                updateProducts([putResponse.data]);
            } catch (err) {
                console.log(err)
            }
        }
    };

    const removeItemHandler = (id) => {
        let hasItem = false;
        const newItemArray = [...products];
        newItemArray.forEach((element, index) => {
            if ((id === element.id) && element.quantity === 1) {
                hasItem = true;
                const temp = newItemArray.splice(index, 1);
                updateProducts(temp);
            } else if (id === element.id) {
                hasItem = true;
                newItemArray[index].quantity = Number(newItemArray[index].quantity) - 1;
            }
        });
        hasItem === false ? updateProducts([...products]) : updateProducts(newItemArray);
    };


    const cartcontextVal = {
        items: products,
        totalAmount: 0,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
    };

    return ( <
        CartContext.Provider value = { cartcontextVal } > { props.children } <
        /CartContext.Provider>
    );
};

export default CartContext;