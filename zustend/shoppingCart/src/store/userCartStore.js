// Explanation of the store:
// devtools middleware: This will allow you to inspect and debug the store state changes using Redux DevTools in your browser. The devtools middleware is wrapped around the persist middleware.
// persist middleware: This will persist the state of the cart to localStorage, meaning if you refresh the page, the state will remain. We're using localStorage as the storage method, and we specify the storage key as cart-storage.
// State and Actions: These are the same as in the previous example (with items and total), but now they will be persisted and available for debugging.




import { create } from 'zustand';
import {devtools, persist } from 'zustand/middleware'


const useCartStore = create(
    devtools(
        persist(
            (set) => ({
                itemList: [],
                total: 0,

                //action to add item
                addItem: (item) => set((state) =>{
                    const updateItemList = [...state.itemList, item];
                    const updateTotal = updateItemList.reduce((acc, curr) => acc + curr.price, 0);

                    return{
                        itemList: updateItemList,
                        total: updateTotal,
                    };
                }),

                //Action to remove item from the cart
                removeItem: (itemId) => set((state) => {
                    const updateItemList = state.itemList.filter(item => item.id !== itemId);
                    const updateTotal = updateItemList.reduce((acc, curr) => acc + curr.price, 0);

                    return {
                        itemList: updateItemList,
                        total: updateTotal
                    }
                }),

                clearCart: () => set(() => ({
                    itemList: [],
                    total: 0,
                })),
            }),

            {
                name: 'cart-storage', //the of the storage key
                getStorage: () => localStorage,
            }
        )
    )
);


export default useCartStore;