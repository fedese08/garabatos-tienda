const products = [
    { 
        id: 1,
        title: 'Zapatilla Atomik',
        description: 'Zapatilla de Atomik blanca con abrojo',
        price: 2500,
        imageURL: [
            "https://atomik.com.ar/wp-content/uploads/2021/02/DSCF3757.jpg",
            "https://atomik.com.ar/wp-content/uploads/2021/02/DSCF3757.jpg",
            "https://atomik.com.ar/wp-content/uploads/2021/02/DSCF3757.jpg"
        ],
        gender: "nene",
        category: "zapatilla",

    },
    { 
        id: 2,
        title: 'Zapato Marcel',
        description: 'Zapato de Marcel escolar marron',
        price: 3900,
        imageURL: [
            "https://marcelnet.com.ar/wp-content/uploads/2021/09/500N-MARRON-DIA.jpg",
            "https://marcelnet.com.ar/wp-content/uploads/2021/09/500N-MARRON-FRE.jpg",
            "https://marcelnet.com.ar/wp-content/uploads/2021/09/500N-MARRON-LAT-1024x1024.jpg",
            "https://marcelnet.com.ar/wp-content/uploads/2021/09/501N-NEGRO-BASE-1-1024x1024.jpg",
        ],
        gender: "nene",
        category: "zapato",

    },
    { 
        id: 3,
        title: 'Croc Amarilla',
        description: 'Croc amarilla ',
        price: 3200,
        imageURL: [
            "https://crocsarg.vtexassets.com/arquivos/ids/159552-800-auto?width=800&height=auto&aspect=true",
            "https://crocsarg.vtexassets.com/arquivos/ids/159554-800-auto?width=800&height=auto&aspect=true",
            "https://crocsarg.vtexassets.com/arquivos/ids/159558-800-auto?width=800&height=auto&aspect=true",
            "https://crocsarg.vtexassets.com/arquivos/ids/159556-800-auto?width=800&height=auto&aspect=true",
            "https://crocsarg.vtexassets.com/arquivos/ids/159560-800-auto?width=800&height=auto&aspect=true",
        ],
        gender: "unisex",
        category: "ojota",
    },
    
];


const getItems = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products);
        }, 500)
    })
}


export {
    getItems,
}