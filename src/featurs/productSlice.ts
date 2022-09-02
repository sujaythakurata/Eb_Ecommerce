import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Products } from "../types/Products";


interface IProduct{
  products:Products[],
  type:string,
  status:string;
};

const initialState:IProduct = {
  products:[],
  type:"",
  status:""
};

const getProducts = createAsyncThunk( "product/getProduct", async (type:string)=> {
  try{
      let url;
      if(type === "All") url = "https://fakestoreapi.com/products";
      else url = "https://fakestoreapi.com/products/categories/"+type;
      const products = await axios.get(url);
      return {products: products.data, type:type};
  }catch(err:any){
    return err.message;
  }
});


export const productSlice = createSlice({
  name:"products",
  initialState,
  reducers:{},
  extraReducers:(builder)=>{
    builder.addCase(getProducts.fulfilled, (state, action)=>{
      state.status = "success";
      state.products = action.payload.products;
      state.type = action.payload.type;
    })
    .addCase(getProducts.pending, (state, action)=>{
      state.status = "loading";
    })
    .addCase(getProducts.rejected, (state, action)=>{
      state.status = "reject";
    })
  }
});

export default productSlice.reducer;
export { getProducts };