import React from 'react';
import useCartStore from '../store/userCartStore';

function CartItems() {
    //Selector to subscribe only 'itemList' part of the state
    //In other words it displays only the item list and nothing else
    const itemList = useCartStore((state) => state.itemList);

    //This selector subscribe only the updated list after deleting
    const removeItem = useCartStore((state) => state.removeItem);

    return (
        <div>
            <h3>Items in Cart</h3>
            <ul>
                {itemList.map((item) => (
                    <li key={item.id}>
                        {item.name} - ${item.price}
                        <button onClick={() => removeItem(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CartItems;