
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Products } from "../types/Products";

interface ICart{
  products:Products[],
  totalProduct:number,
  totalPrice:number,
  showQuntity:boolean
};

interface IProduct{
  id:number
}

const initialState:ICart = {
  products:[],
  totalProduct:0,
  totalPrice:0,
  showQuntity:false
};


export const userSlice = createSlice({
  name:"users",
  initialState,
  reducers:{
    addProduct:(state, action:PayloadAction<Products>)=>{
      const index:number = state.products.findIndex(d=>d.id === action.payload.id);
      let quntity:number = 1;
      if(index === -1)
        state.products.push({...action.payload, quntity:quntity});
      else{
        quntity = state.products[index].quntity + 1 ;
        state.products.splice(index,1);
        state.products.push({...action.payload, quntity:quntity});
      }
      state.totalPrice += Number(action.payload.price) * quntity;
      state.totalProduct += 1;
      state.showQuntity = true;
    },

    increment:(state, action:PayloadAction<IProduct>)=>{
      const index:number = state.products.findIndex(d=>d.id === action.payload.id);
      state.products[index].quntity++;
      state.totalProduct++;
      state.totalPrice += state.products[index].price;
    },
    decrement:(state, action:PayloadAction<IProduct>)=>{
      const index:number = state.products.findIndex(d=>d.id === action.payload.id);
      state.products[index].quntity--;
      state.totalProduct--;
      state.totalPrice -= state.products[index].price;
      if(state.products[index].quntity <= 0)
        state.products.splice(index, 1);
      if(state.totalProduct <=0 )
        state.showQuntity = false;
    }

  }

});

export default userSlice.reducer;
export  const { addProduct, increment, decrement } = userSlice.actions;