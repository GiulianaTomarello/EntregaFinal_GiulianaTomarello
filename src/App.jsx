import React from "react";
import "./App.css";
import ItemDetailContainer from "./components/ItemDetail/ItemDetailContainer";
import Container from "./components/ItemList/Container";
import NavBar from "./components/NavBar/NavBar";
import { CartContextProvider } from "./Context/cartContext";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import CartView from "./components/CartView/CartView";
import ThankYou from "./components/Thank you/ThankYou";
 
function App() {
  return (
    <div className="App">
      <CartContextProvider>
    <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="*" element={<h1>La página ingresada no existe</h1>}/>
        <Route path="/" element={<Container />}/>
        <Route path="/category/:idCategory" element={<Container />}/>
        <Route path="/detail/:id" element={<ItemDetailContainer />}/>
        <Route path="/cart" element={<CartView />}/>
        <Route path="/ThankYou/:idOrder" element={<ThankYou/>}/>

      </Routes>
    </BrowserRouter>
    </CartContextProvider>
    </div>
  );
}

export default App;
