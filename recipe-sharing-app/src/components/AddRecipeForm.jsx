import React, { useState } from 'react';
import useReceiptStore from '../store/useReceiptStore';

const AddReceiptForm = () => {
    const [receipt, setReceipt] = useState({
        name: '',
        amount: '',
        date: '',
    });

    //initialize the receipt array from localStorage, if available.
   
    
    //Access receipts and the function to add a new receipt from the zustand store
    const {receipts, addReceipt, removeReceipt} = useReceiptStore();

    //handle changes to the input fields
    const handleChange = (e) => {
        setReceipt({...receipt, [e.target.name]:e.target.value})
    };

    //Handle form submission and save the receipt data to localStorage
    const handleSubmit = (e) => {
        e.preventDefault();
        addReceipt(receipt);//add the new receipt to the store

 //Save the new receipt to the receipts array
    //     const newReceipts = [...receipts, receipt];

     //save the updated receipts to localStorage
    //     localStorage.setItem('receipts', JSON.stringify(newReceipts));

    //update the state with the new receipts array
    //     setReceipt(newReceipts);

        //Reset the form
        setReceipt({
            name: '',
            amount: '',
            date: '',
        });
    };

    return(
        <div>
        <form onSubmit={handleChange}>
            <div>
                <label htmlFor='name'>Receipt Name</label>
                <input
                    type='text'
                    id='name'
                    name='name'
                    value={receipt.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor='amount'>Amount</label>
                <input
                    type='number'
                    id='amount'
                    name='namount'
                    value={receipt.amount}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor='date'>Date: </label>
                <input
                    type='date'
                    id='date'
                    name='date'
                    value={receipt.name}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" onClick={handleSubmit}>Add Receipt</button>
        </form>
        </div>
    );
};

export default AddReceiptForm;
