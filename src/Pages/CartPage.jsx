import {useCart} from "../CartContext"


function CartPage(){
    const {cartItems} = useCart();
    const {removeFromCart} = useCart();
    

    const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );


    return (
  <div>
    {cartItems.map((item, index) => {
      return (
        <div key={index}>
          <p>{item.title}</p>
          <p>${item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
          <img src={item.image} alt={item.title} width="100" />
        </div>
      );
    })}


    <h2>Total Price: ${totalPrice.toFixed(2)}</h2>

  </div>
);



}

export default CartPage;