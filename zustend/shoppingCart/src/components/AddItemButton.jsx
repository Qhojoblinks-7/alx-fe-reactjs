import React from 'react'
import useCartStore from '../store/userCartStore'

function AddItemButton (){
    //Selector to subscribe only to 'addItem
    const addItem = useCartStore((state) => state.addItem);

    const handleAddItem = () => {
        //add a new item to the cart (this could be dynamic in real app)
        const newItem ={
            id: Date.now(),
            name: 'New Item',
            price: 20,
        }
        addItem(newItem);
    };

    return (
        <button onClick={handleAddItem}> Add Item</button>
    );
}

export default AddItemButton;