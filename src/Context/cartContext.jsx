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

    const clear = () =>{
        setCart([])
    }
    
    const isInCart = (id) => {
        return cart.some((prod)=> prod.id===id)
    }
    
    const removeItem = (id) => {
        setCart(cart.filter((prod)=> prod.id!==id))
    }
   }

   

    return(
        
        <cartContext.Provider value={{cart, saludo,addToCart, itemsInCart}}>
            {props.children}
        </cartContext.Provider>
    )
}