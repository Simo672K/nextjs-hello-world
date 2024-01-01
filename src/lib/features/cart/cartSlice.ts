import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "@/lib/store";
import { StaticImageData } from "next/image";

type CartItem = {
  id: number;
  itemName: string;
  image: string | StaticImageData;
  quantity: number;
};

// Define a type for the slice state
interface CartState {
  items: Array<CartItem>;
  numberOfCartItems: number;
}

// Define the initial state using that type
const initialState: CartState = {
  items: [],
  numberOfCartItems:0
};

export const cartSlice = createSlice({
  name: "cart",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      state.items.push(action.payload);
      state.numberOfCartItems= state.numberOfCartItems+1;
    },
    deleteItem: (state, action: PayloadAction<CartItem>) => {
      state.items.filter(item=> item.id !== action.payload.id);
      state.numberOfCartItems= state.numberOfCartItems-1;
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementItemQuantity: (state, action: PayloadAction<number>) => {
      const item= state.items.find(item=> item.id === action.payload) as CartItem;
      item.quantity= item.quantity+1;
      state.numberOfCartItems= state.numberOfCartItems + 1;
      
    },
    decrementItemQuantity: (state, action: PayloadAction<number>) => {
      const item= state.items.find(item=> item.id === action.payload) as CartItem;
      item.quantity= item.quantity-1;
      state.numberOfCartItems= state.numberOfCartItems-1;
      
    },
    resetCart: (state) =>{
      state= initialState;
    }
  },
});

export const { addItem, deleteItem, incrementItemQuantity } = cartSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectItems = (state: RootState) => state.cart.items;
export const selectnumberOfCartItems = (state: RootState) => state.cart.numberOfCartItems;

export default cartSlice.reducer;
