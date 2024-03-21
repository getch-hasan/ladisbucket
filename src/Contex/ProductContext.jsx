import { createContext, useEffect, useState } from "react"

export const ProductContext = createContext({})
export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([])
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
      fetch('https://ledisbucket.onrender.com/api/v1/all/product')
          .then(res => res.json())
          .then(data => {
              setProducts(data.products)
              setFilteredProducts(data.products)
              
          })
  }, [])
    return <ProductContext.Provider value={{
         products,setProducts,filteredProducts,setFilteredProducts,

    }}> {children} </ProductContext.Provider>
}