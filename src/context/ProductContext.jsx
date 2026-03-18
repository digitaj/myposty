import { createContext, useState } from "react";

// stage1 : create the conext
export const ProductContext = createContext();

//stage 2: create te provide
export const ProductProvider = ({children}) =>{
    
     const defaultProducts = [
        {
            id: 197656,
            name: "product1",
            price: 1200
        },
        {
            id: 127666,
            name: "product2",
            price: 1000
        }
    ]
    const [products, setProducts] = useState(defaultProducts);
    
    function delete_products(idToDelete){
        //    delete a product wit id parameter: filter our state: 
        // product and exclude a product wit id of of id parameter
        const filteredProducts = products.filter((prod)=>{
           return  prod.id != idToDelete
        });
        setProducts(filteredProducts)
    }


    return <ProductContext.Provider value={{products, setProducts, delete_products}}>
          {children}
    </ProductContext.Provider>
}