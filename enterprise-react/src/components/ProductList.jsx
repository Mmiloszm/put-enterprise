import ProductItem from "./ProductItem";
import {useState} from "react";

/* eslint-disable react/prop-types */
const ProductList = ({products}) => {
    const [productFilter, setProductFilter] = useState("");

    return <div>
        <h1>List of products</h1>
        <div>
            <label htmlFor="filterText">Filter: </label>
            <input value={productFilter} id="filterText" onChange={e => setProductFilter(e.target.value)}/>
        </div>
        <ul>
            {products.filter((product) => {
                if (productFilter.length > 0){
                return product.title.includes(productFilter)
                }
                return true;
            }
            ).map((product) => 
           <ProductItem key={product.id} product={product}/>
            )}
        </ul>
        </div>
}
export default ProductList;