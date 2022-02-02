const products = [
    { 
        id: 1,
        title: 'Zapatilla Atomik',
        description: 'Zapatilla de Atomik blanca con abrojo',
        price: 2500,
        imageURL: "https://atomik.com.ar/wp-content/uploads/2021/02/DSCF3757.jpg", 
        images: [{
            im1: "https://atomik.com.ar/wp-content/uploads/2021/02/DSCF3757.jpg", 
            im2: "https://marcelnet.com.ar/wp-content/uploads/2021/09/500N-MARRON-DIA.jpg",
            im3: "https://atomik.com.ar/wp-content/uploads/2021/02/DSCF3757.jpg", 
            
        }],

        stock: [{
            "22": 2,"23": 3,"24": 1,"25":1,"26":1,"27":6,"28":1,"29":2,"30":2,"31":3,"32":4,"33":5,"34":1
        }],
    },
    { 
        id: 2,
        title: 'Zapato Marcel',
        description: 'Zapato de Marcel escolar marron',
        price: 3900,
        imageURL: "https://marcelnet.com.ar/wp-content/uploads/2021/09/500N-MARRON-DIA.jpg",
        
        stock: [{
            "22": 2,"23": 3,"24": 1,"25":1,"26":1,"27":6,"28":1,"29":2,"30":2,"31":3,"32":4,"33":5,"34":1
        }],
    },
    { 
        id: 3,
        title: 'Croc Amarilla',
        description: 'Croc amarilla ',
        price: 3200,
        imageURL: "https://crocsarg.vtexassets.com/arquivos/ids/159552-800-auto?width=800&height=auto&aspect=true",
        
        stock: [{
            "22": 2,"23": 3,"24": 1,"25":1,"26":1,"27":6,"28":1,"29":2,"30":2,"31":3,"32":4,"33":5,"34":1
        }],
    }
];


const getItems = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 2000)
    })
}


export {
    getItems,
}