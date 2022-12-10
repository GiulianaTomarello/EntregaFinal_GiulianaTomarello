import { createContext, useState  } from "react";

export const cartContext = createContext();


export function CartContextProvider(props){
   const saludo = "hola"


   
   const [cart, setCart] = useState([])

   function addToCart (product, count){
    let itemalreadyInCart =cart.findIndex(itemInCart => itemInCart.id === product.id)
    let newCart = [...cart]

    if(itemalreadyInCart !== -1){
        newCart[itemalreadyInCart].count += count
        setCart(newCart)
    }else{
   
    product.count = count;
    newCart.push(product)
    setCart(newCart)
    
   }
}

   function itemsInCart(){
    let total = 0
    cart.forEach((itemInCart) => (total= total+ itemInCart.count))
    return total
   }

    return(
        <cartContext.Provider value={{saludo,addToCart, itemsInCart}}>
            {props.children}
        </cartContext.Provider>
    )
}