import { Products } from "../../types/Products";
import "./addtocart.scss";
import { useAppDispatch, useAppSelector} from "../../states/hook";
import { addProduct, increment, decrement } from "../../featurs/cartSlice";
import Swal, { SweetAlertIcon } from 'sweetalert2'

export default function AddToCart(props:Products){
  const product:Products | undefined = useAppSelector((state)=>state.cart.products.find(data=>data.id === props.id));
  const dispatch = useAppDispatch();
  const showAlert = (type:SweetAlertIcon, msg:string)=>{
    Swal.fire({
      toast: true,
      icon: type,
      title: msg,
      position: 'top-end',
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    });
  }
  if(product === undefined)
    return (
      <button className="btn  btn-outline-dark cart-btn" onClick={()=>{
        dispatch(addProduct(props));
        showAlert("success", "Item added to cart");
      }}>Add To Cart</button>
    );
  else 
    return (
      <div className="increase-btn">
        <button className="btn btn-success" onClick={()=>{
          dispatch(increment({id:props.id}));
          showAlert("success", "Item added to cart");
        }}>
          <i className="fa fa-plus"></i>
        </button>
        <span>{product.quntity}</span>
        <button className="btn btn-danger" onClick={()=>{
          dispatch(decrement({id:props.id}));
          showAlert("warning", "Item removed from cart");
        }}>
          <i className="fa fa-minus"></i>
        </button>
      </div>
    ); 
}