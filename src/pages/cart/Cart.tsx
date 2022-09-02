
import { useAppSelector } from "../../states/hook";
import { Products } from "../../types/Products";
import "./cart.scss";


export default function Cart(){
  const cartList = useAppSelector(state=>state.cart.products);
  const totalPrice = useAppSelector(state=>state.cart.totalPrice);
  const totalProduct = useAppSelector(state=>state.cart.totalProduct);
  return(
    <div className="cart-content">
      <table className="table table-bordered table-responsive-sm able-responsive-md able-responsive-lg">
        <thead>
          <tr>
            <th>#</th>
            <th></th>
            <th>Title</th>
            <th>Quntity</th>
            <th>Price</th>
            <th>Total Price</th>
          </tr>
        </thead>
        <tbody>
          {
            cartList.map((product:Products, index:number)=>{
              return <tr key={product.id}>
                <td>{index + 1}</td>
                <td className="short-img">
                  <img src={product.image} alt={product.title} />
                </td>
                <td>{product.title}</td>
                <td>{product.quntity}</td>
                <td>{product.price}</td>
                <td>{product.quntity*product.price}</td>
              </tr>
            })
          }
        </tbody>
        <tfoot>
          <tr className="table-dark">
            <td></td>
            <td></td>
            <td></td>
            <td>{totalProduct}</td>
            <td className="text-right">Total</td>
            <td colSpan={2} className="text-right">{totalPrice.toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  )


}