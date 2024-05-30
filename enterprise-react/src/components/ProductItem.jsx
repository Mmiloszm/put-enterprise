import { Link } from "react-router-dom"

/* eslint-disable react/prop-types */
const ProductItem = ({product}) => {
    return  <li >
    <Link to={`details/${product.id}`}>{product.title}</Link>
     {`(${product.brand})`}
</li>
}
export default ProductItem