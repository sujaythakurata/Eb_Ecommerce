import { Products } from "../../types/Products";
import "./addtocart.scss";

export default function AddToCart(props:Products){
  return (
    <button className="btn  btn-outline-dark cart-btn">
      Add To Cart
    </button>
  )
}