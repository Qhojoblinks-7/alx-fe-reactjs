import React from 'react'
import  useRecipeStore  from './recipeStore'


const ReceiptList = () => {
    const receipts = useRecipeStore(state => state.receipts);


    return (
        <div className="receipt-list">
          <h2>Saved Receipts</h2>
          {receipts.length > 0 ? (
            <ul>
              {receipts.map((receipt, index) => (
                <li key={index} className="receipt-item">
                  <div>
                    <h3>{receipt.title}</h3>
                    <p><strong>Date:</strong> {receipt.date}</p>
                    <p><strong>Amount:</strong> {receipt.amount}</p>
                    <p><strong>Category:</strong> {receipt.category}</p>
                  </div>
                  <button
                    className="remove-button"
                    onClick={() => removeReceipt(index)} // Remove receipt by index
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No receipts saved yet. Start adding some!</p>
          )}
        </div>
      );
    };
    
    export default ReceiptList;