import { useCart } from "../CartContext.jsx";


function ProductCard({prods}){


const {addToCart} = useCart();






return(

    <div className ="Product Card">
        <h3>{prods.title}</h3>
        <p>Price: ${prods.price}</p>
        <img 
        src={prods.image} 
        alt="img" 
        width="150"
        height="150"
        style={{ objectFit: "contain" }}
        
        
        />

        <div>
            <button className="btn" onClick={()=>addToCart(prods)}>Add to Cart</button>
        </div>
        
    </div>



)


}

export default ProductCard;