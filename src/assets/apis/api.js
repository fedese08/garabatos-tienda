import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";



const getItems = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        // collection de mi db, referenciando la carpeta "items"
        // donde tengo mis productos
        const itemsCollection = collection(db, 'items');
        
        // obtengo los documentos
        getDocs(itemsCollection).then(snapshot => { // (snapshot = copia)
        // doc.data() obtiene todos los datos del item
        const products = snapshot.docs.map( (doc) => ({ id: doc.id, ...doc.data()}));
        resolve(products)

        }).catch (error => {
        console.log(error)
        reject(error)
        })
            }, 500)
    })
}


export {
    getItems,
}