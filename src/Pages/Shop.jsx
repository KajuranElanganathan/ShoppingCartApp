import { useEffect,useState } from "react"
import ProductCard from "../Components/ProductCard";

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


    return(

        <div>

            <h1>Shop page</h1>

            <p>


                {loading ? "Loading..." : (prods.map((prods) => ( 
                    <div className="gird">
                    
                    <ProductCard key = {prods.card} prods = {prods}></ProductCard>

                    </div>
                    
                    
                )))}

            </p>

        </div>


    )






}

export default Shop;