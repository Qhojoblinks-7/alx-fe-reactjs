import React from 'react'
import useCartStore from '../store/userCartStore'

function CartTotal () {
    //Selector to subscribe only to the 'total' part of the state
    const total = useCartStore((state) => state.total);

    return (
        <div>
            <h3>Total Price: ${total}</h3>
        </div>
    );
}

export default CartTotal;