import { useState, createContext,useContext } from "react";


const CartContext = createContext();

    
    //children is just a react keyword that reps the nested components inside the cartprovider component.
export const CartProvider =({children}) => {
    
    
    const [cartItems,updateCart] = useState([]);

    const addToCart = (item) =>{

        updateCart((prev)=> [...prev,item])


    }

    const removeFromCart = (id) =>{

        updateCart((prev)=>prev.filter((item) => item.id!== id));
    }
    
    const clearCart = () => {

        updateCart([]);

    };

    return (

        <CartContext.Provider value = {{cartItems,addToCart,removeFromCart,clearCart}}>
            {children}
        </CartContext.Provider>

    );
    

} 

export const useCart = () => useContext(CartContext) // custom hook which returns the values above