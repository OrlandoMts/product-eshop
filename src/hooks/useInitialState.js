import React from "react";

const useInitialState = () => {
    const [toggleMenu, setToggleMenu] = React.useState(true);

    const handleMenu = () => {
        setToggleMenu(!toggleMenu);
        console.log(toggleMenu);
    }

    return {
        toggleMenu,
        handleMenu
    }
}

export { useInitialState }