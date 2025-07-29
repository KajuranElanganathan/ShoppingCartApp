import { useEffect,useState } from "react"
import ProductCard from "../Components/ProductCard";
import "./Shop.css";
function Shop(){



    const [prods, setprods] = useState([])
    const [loading, setLoading] = useState(true)
    
    
    
    useEffect(() => {
        fetch(('https://fakestoreapi.com/products'))
        .then(response=>response.json())
        .then(response=>
                setprods(response),
                setLoading(false),
                
        )},[]);


    return (
    <div className="ShopContainer">
      <h1>Shop page</h1>
      {loading ? (
        "Loading..."
      ) : (
        <div className="grid">
          {prods.map((prods) => (
            <ProductCard key={prods.id} prods={prods} />
          ))}
        </div>
      )}
    </div>
  );
}




export default Shop;