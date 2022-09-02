import { Products } from "../../types/Products";
import AddToCart from "./AddToCart";
import "./productCard.scss";

export default function ProductCard(props:Products){
  return (
    <div className="product-card card">
      <div className="card-body">
        <div className="img-body">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="title text-center">
          {props.title}
        </div>
        <div className="info">
          <div className="price"><i className="fa fa-inr"></i> <span>{props.price}</span></div>
          <div className="rate">Rating: <span className="text-info">{props.rating.rate}</span></div>
        </div>
        <div className="buy-btn">
          <AddToCart {...props}/>
        </div>
      </div>
    </div>
  )
}