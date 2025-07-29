import {useCart} from "../CartContext"


function CartPage(){
    const {cartItems} = useCart();
    const {removeFromCart} = useCart();
    
    


    return (
    <div>

    {cartItems.map((item, index) => (


       

        <div key={index}>
            
        <p>{item.title}</p>
        <p>${item.price}</p>
        <button onClick={() => removeFromCart(item.id)}>Remove</button>
        <img src={item.image} alt={item.title} width="100" />

        </div>
    ))}

    </div>
    );



}

export default CartPage;