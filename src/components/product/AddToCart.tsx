import { Products } from "../../types/Products";
import "./addtocart.scss";
import { useAppDispatch, useAppSelector} from "../../states/hook";
import { addProduct, increment, decrement } from "../../featurs/cartSlice";

export default function AddToCart(props:Products){
  const product:Products | undefined = useAppSelector((state)=>state.cart.products.find(data=>data.id === props.id));
  const dispatch = useAppDispatch();
  if(product === undefined)
    return (
      <button className="btn  btn-outline-dark cart-btn" onClick={()=>dispatch(addProduct(props))}>Add To Cart</button>
    );
  else 
    return (
      <div className="increase-btn">
        <button className="btn btn-success" onClick={()=>dispatch(increment({id:props.id}))}>
          <i className="fa fa-plus"></i>
        </button>
        <span>{product.quntity}</span>
        <button className="btn btn-danger" onClick={()=>dispatch(decrement({id:props.id}))}>
          <i className="fa fa-minus"></i>
        </button>
      </div>
    ); 
}