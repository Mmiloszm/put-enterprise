/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";

const ProductDetails = ({products}) => {
    const {id} = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
     const filtered = products.filter((product) => product.id == id)
     if (filtered.length > 0) {
        setProduct(filtered[0])
     }
    }, [id, products])
    
    return <div>
        {product == null ? null : 
        <div>
        <h1>
            {product.title}
        </h1>
        <div>
        {product.category}<br/>
        {product.brand}<br/>
        {product.description}<br/>
        {product.price}<br/>
        <img src={product.thumbnail} alt={product.title}/>
        <Link to="/">Back</Link>
        </div>
        </div>
        }
    </div>
}
export default ProductDetails