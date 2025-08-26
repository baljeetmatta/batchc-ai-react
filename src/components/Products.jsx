import { useLoaderData } from "react-router-dom";
import products from "../products.json"

const Products = () => {
    const loader = useLoaderData();
    return (
        <>
            <div>
                Products Page {products.length}
            </div>
        </>
    )
}
export default Products;