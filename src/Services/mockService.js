/* -------------- BACK-END -------------- */
import products from "../data/data";

function getItems(idCategory) {
  return new Promise((resolve) => {

    if (idCategory === undefined){
    setTimeout(() => {
      resolve(products);
    }, 2000);
  }
  else{
    setTimeout(() => {
      let itemrequested = products.filter((item) => item.category === idCategory);
      resolve(itemrequested);
    }, 2000);
  }
  });
}


export function getSingleItem(idparam) {
  return new Promise((resolve,rejeact) => {
    let itemrequested = products.find((item) => item.id === parseInt(idparam));

    if (itemrequested ===undefined) rejeact("no encontrado")
    setTimeout(() => {
      resolve(itemrequested);
    }, 2000);
  });
}

export default getItems;
