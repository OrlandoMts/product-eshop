import React from "react";

const useInitialState = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
    const [quantity, setQuantity] = React.useState(1);

    const handleMenu = () => {
        setToggleMenu(!toggleMenu);
        console.log(toggleMenu);
    }

    const addQuantity = () => {
        setQuantity(quantity + 1);
        console.log(quantity);
    }

    const removeQuantity = () => {
        setQuantity(quantity - 1);
        console.log(quantity);
    }

    return {
        toggleMenu,
        handleMenu,
        quantity,
        addQuantity,
        removeQuantity,
    }
}

export { useInitialState }