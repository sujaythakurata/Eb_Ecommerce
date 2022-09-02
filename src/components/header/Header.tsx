import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.scss";
import { useAppSelector} from "../../states/hook";

export default function Header(){
  const [show, setShow] = useState('hide');
  const cartQuntity:number = useAppSelector((state)=>state.cart.totalProduct);
  const showQuntity:boolean = useAppSelector((state)=>state.cart.showQuntity);
  return (
    
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
      <NavLink className="navbar-brand" to={"/"}>Ecommerce</NavLink>
      <button className="navbar-toggler" type="button"  onClick={()=>{show === "hide"?setShow("show"):setShow("hide")}} data-toggle="collapse" data-target="#navbar-menu" aria-controls="navbar-menu" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={"collapse navbar-collapse "+show } id="navbar-menu">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className={({ isActive })=> isActive?"nav-link active":"nav-link"} to={"/"} >Products</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={({ isActive })=> isActive?"nav-link active":"nav-link"} to={"cart"}>
              <i className="fa fa-shopping-cart"></i>
              {showQuntity?<sup className="badge bg-danger rounded-pill">{cartQuntity}</sup>:''}
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>

  );
}