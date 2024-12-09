import React from 'react'
import useCartStore from '../store/userCartStore'

function ClearCartButton (){
    //Selector to subscribe only to 'clearCart'
    const clearCart = useCartStore((state) => state.clearCart);

    return (
        <button onClick={clearCart}>Clear Cart</button>
    );
}

export default ClearCartButton;