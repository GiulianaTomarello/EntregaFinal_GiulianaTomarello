
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs, doc, getDoc, query, where } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBgZYyqk6PRCAHESWfgKB6bBu1nclkYAhI",
  authDomain: "dulceida-bags.firebaseapp.com",
  projectId: "dulceida-bags",
  storageBucket: "dulceida-bags.appspot.com",
  messagingSenderId: "212828210296",
  appId: "1:212828210296:web:2ba465b92ea3a2d046598d",
  measurementId: "G-MT622ELKKY"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const DB = getFirestore(app)


export default async function getItems(){
    const colectionProductsRef = collection(DB, "products")
    const documentSnapshot = await getDocs(colectionProductsRef)

    const documentsData = documentSnapshot.docs.map((doc) => {
      return {
      ...doc.data(),
      id: doc.id,
    }
  })

    return documentsData
}

export async function getSingleItem(idParams){

  const docRef = doc(DB, "products", idParams)
  const docSnapshot = await getDoc(docRef)

 return{
  ...docSnapshot.data(),
  id: docSnapshot.id
 }
}

export async function getItemsByCategory(categoryParams) {
  const collectionRef = collection(DB, "products")
  const queryCat = query(collectionRef, where("category", "==", categoryParams))

  const documentSnapshot = await getDocs (queryCat)

  const documentsData = documentSnapshot.docs.map((doc) => {

    return{
      ...doc.data(),
      id: doc.id,
    }
  })
  return documentsData
}