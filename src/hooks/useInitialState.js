import React from "react";

const useInitialState = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
    const [toggleCart, setToggleCart] = React.useState(false);
    const [quantity, setQuantity] = React.useState(0);
    const [addItem, setAddItem] = React.useState(false);

    const handleMenu = () => {
        setToggleMenu(!toggleMenu);
        console.log(toggleMenu);
    }

    const handleCart = () => {
        setToggleCart(!toggleCart);
        console.log('cart');
    }

    const addQuantity = () => {
        setQuantity(quantity + 1);
        console.log(quantity);
    }

    const removeQuantity = () => {
        setQuantity(quantity - 1);
        console.log(quantity);
    }

    const resetQuantity = () => {
        setQuantity(0);
        return quantity;
    }

    const addItemToCart = () => {
        setAddItem(true);
    }

    return {
        toggleMenu,
        handleMenu,
        toggleCart,
        handleCart,
        quantity,
        resetQuantity,
        addQuantity,
        removeQuantity,
        addItem,
        addItemToCart,
    }
}

export { useInitialState }