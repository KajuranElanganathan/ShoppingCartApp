import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useCart } from "../CartContext";
import "./Navbar.css";

function Navbar(){

const {cartItems} = useCart();

let x = cartItems.length;





return(

    
    <nav>

        <ul>

            <li><Link to = "/">Home</Link></li>
            <li><Link to = "/shop">Shop</Link></li>
            <li>
                <Link to = "/cart">Cart</Link> 
                <span className= "cart-count">{x}</span>
                
            </li>

        </ul>


        
        
    </nav>


)



}

export default Navbar