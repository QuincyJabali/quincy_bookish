import { useEffect, useState } from "react";
import NavbarComponent from "./NavbarComponent"
import axios from "axios";
import { useNavigate } from "react-router-dom";

const GetProductComponent = () => {
    let [products, setProducts] = useState([]);
    let [loading, setLoading] = useState("");
    let [error, setError] = useState("");

    let navigator = useNavigate()

    //Base url for image path from server 
    const img_url = "https://quincyj.alwaysdata.net/static/images/"

    //Create a function to fetch product from server
    const getProducts = async () => {
        setError("")
        setLoading("Fetching products. Please wait...");
        try {
            const response = await axios.get("https://quincyj.alwaysdata.net/api/get_products");
            console.log(response)
            if (response.status === 200) {
                setLoading("")
                setProducts(response.data)
            }
        } catch (error) {
            setLoading("");
            setError(error.message);
        }
    };

    useEffect(() => {
        getProducts();
    }, []);
    return (
        <div>
            <NavbarComponent />
            <div className="row">
                <h3 className="mt-5">Available Products</h3>
                <h6 className="text-warning">{loading}</h6>
                <h6 className="text-danger">{error}</h6>

                {products.map((product) => (
                    <div className="col-md-3 justify-content-center mb-4">
                        <div className="card shadow-margin">
                            <img src={img_url + product.product_image} alt="" className="product_img mt-4" />
                            <div className="card-body">
                                <h5 className="mt-2">{product.product_name}</h5>
                                <p className="text-muted">{product.product_description}</p>
                                <p className="text-danger">{product.product_author}</p>
                                <b className="text-warning">{product.product_cost}</b>
                                <br />
                                <br />
                                <button className="btn btn-danger" onClick={()=> {navigator("/makepayment",{state:{product}})}}>Purchase now</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default GetProductComponent;