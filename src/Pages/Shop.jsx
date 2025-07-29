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

            


                {loading ? "Loading..." : (prods.map((prods) => ( 
                    <div className="grid">
                    
                    <ProductCard key = {prods.id} prods = {prods}></ProductCard>

                    </div>
                    
                    
                )))}

            

        </div>


    )






}

export default Shop;