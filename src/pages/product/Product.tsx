import { useAppDispatch, useAppSelector } from "../../states/hook";
import { getProducts } from "../../featurs/productSlice";
import "./product.scss";
import { useEffect } from "react";
import ProductCard from "../../components/product/ProductCard";
import Fallback from "../fallback/FallBack";


export default function Product(){
  const productList = useAppSelector(state=>state.product.products);
  const status = useAppSelector(state=>state.product.status);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProducts("All"));
  }, []);
  return (

    <div className="product-container">
      {
      status !== "loading"?productList.map((data)=><ProductCard key={data.id} {...data}/>)
        :<Fallback/>
      }
    </div>

  )
}