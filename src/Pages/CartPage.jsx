import {useCart} from "../CartContext"
import "./CartPage.css";

function CartPage(){
    const {cartItems} = useCart();
    const {removeFromCart} = useCart();
    

    const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );


     return (
    <div className="CartContainer">
      {cartItems.map((item, index) => {
        return (
          <div className="CartItem" key={index}>
            <img src={item.image} alt={item.title} width="100" />
            <p>{item.title}</p>
            <p>${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        );
      })}

      <h2 className="TotalPrice">Total Price: ${totalPrice.toFixed(2)}</h2>
    </div>
  );
}
export default CartPage;