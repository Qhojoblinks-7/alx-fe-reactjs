import { create } from 'zustand';
import {persist } from 'zustand/middleware'

//define the store for managing the receipts
const useReceiptStore = create(
    persist(
        (set) => ({
            receipts: [],
            //function to add a new receipt
            addReceipt: (receipt) => set((state) => ({receipts: [...state.receipts, receipt] })),
            //function tro remove a receipt by index
            removeReceipt: (index) => set((state) => ({receipts: state.receipts.filter((_, i) => i !== index) } )),

        }),
        {
            name: 'receipt-storage', //name for localStorage
            getStorage: () => localStorage, //specify the the storege (loocalStorage in this case)
        }
    )
);

export default useReceiptStore;