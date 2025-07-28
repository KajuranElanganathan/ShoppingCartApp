function ProductCard({prods}){

return(

    <div className ="Product Card">
        <h3>{prods.title}</h3>
        <p>{prods.price}</p>
        <img 
        src={prods.image} 
        alt="img" 
        width="150"
        height="150"
        style={{ objectFit: "contain" }}
        
    
        
        />





    </div>



)




}

export default ProductCard