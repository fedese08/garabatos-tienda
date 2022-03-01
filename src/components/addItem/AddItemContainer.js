import { addDoc, collection } from 'firebase/firestore'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'
import React, { useState } from 'react'
import { db } from '../../firebase'
import './AddItemContainer.css'

export default function AddItemContainer() {

    const [title, setTitle] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const [gender, setGender] = useState("")
    const [size, setNumber] = useState("")
    const [price, setPrice] = useState("")
    const [stock, setStock] = useState("")
    const [image, setImage] = useState([])

    const handleTitleChange = event => setTitle(event.target.value)
    const handleCategoryChange = event => setCategory(event.target.value)
    const handleDescriptionChange = event => setDescription(event.target.value)
    const handleGenderChange = event => setGender(event.target.value)
    const handleSizeChange = event => setNumber(event.target.value)
    const handlePriceChange = event => setPrice(event.target.value)
    const handleStockChange = event => setStock(event.target.value)
    const handleImagesChange = event => {
        let imgArray = [];
        for (let i = 0; i < 5; i++) {
            if (event.target.files[i] !== "undefined") {
                imgArray.push(event.target.files[i]);
            }
        }
        setImage(imgArray)
    }



    async function onSubmit(event){
        event.preventDefault()
        
        // Compruebo que todos los campos esten completos
        if (![title,category,gender,description].some(field => field === "")) {

            var imageURL = [];
            
            image.map (async(img) => {
                
                const storage = getStorage();
                const imageName = (+ new Date()).toString(36)
                const storageRef = ref(storage, `items/${imageName}`);
                const uploadTask = await uploadBytes(storageRef,img) 
                let url = await getDownloadURL(uploadTask.ref)
                imageURL.push(url)

            })

            const itemCollection = collection(db, `items`);
            
            const newItem = {
                title,
                category,
                description,
                size,
                price,
                stock,
                imageURL: imageURL,
            }
            
            addDoc(itemCollection, newItem)

        }else {
            alert("Completa todos los campos")
        }
    }


    
  return (
    <div className="form-product">
        <h1>Agregar un nuevo producto</h1>
        <form onSubmit={onSubmit}>
            <div className="form-container">
                <div className='input-item'>
                    <label id='nombre'>Nombre</label>
                    <label id='descripcion'>Descripcion</label>
                    <label id='numero'>Numero</label>
                    <label id='genero'>Genero</label>
                    <label id='categoria'>Categoria</label>
                    <label id='precio'>Precio</label>
                    <label id='stock'>Stock</label>
                </div>
                <div className='input-item'>
                    <input value={title} onChange={handleTitleChange} type="text"/>
                    <textarea value={description} onChange={handleDescriptionChange} type="text"/>
                    <input className="input-num" value={size} onChange={handleSizeChange} type="number"/>
                    <input value={gender} onChange={handleGenderChange} type="text"/>
                    <input value={category} onChange={handleCategoryChange} type="text"/>
                    <input className="input-num" value={price} onChange={handlePriceChange} type="number"/>
                    <input className="input-num" value={stock} onChange={handleStockChange} type="number"/>
                    <input type="file" name="file[]" onChange={(e) => {handleImagesChange(e)}} multiple="multiple"/>
                    <button id='btnNewItem' type="submit">AGREGAR</button>
                </div>
            </div>
        </form>
    </div>
  )
}
