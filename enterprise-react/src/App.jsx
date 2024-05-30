import './App.css'
import ProductList from './components/ProductList'
import ProductDetails from './components/ProductDetails';
import {useState, useEffect} from "react"
import axios from "axios";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';



function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
    console.log(products);
}, [])

const fetchProducts = async () => {
    const res = await axios.get('https://dummyjson.com/products');
    setProducts(res.data.products);
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductList products={products}/>,
  },
  {
    path: "details/:id",
    element: <ProductDetails products={products}/>
  }
])
  return (
   <RouterProvider router={router}/>
  )
}

export default App
