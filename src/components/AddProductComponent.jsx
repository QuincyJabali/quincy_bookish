import { useState } from "react";
import NavbarComponent from "./NavbarComponent";
import axios from "axios";

const AddProductComponent = () => {
    let [product_name, setProductName] = useState("");
    let [product_cost, setProductCost] = useState("");
    let [product_cartegory, setProductCartegory] = useState("");
    let [product_description, setProductDescription] = useState("");
    let [product_author,setProductAuthor] = useState("")
    let [product_image, setProductImage] = useState("");
    let [loading, setLoading] = useState("")
    let [success, setSuccess] = useState("")
    let [error, setError] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading("Please wait.....")
        setSuccess("")
        setError("")

        try {
            const product_data = new FormData()
            product_data.append("product_name", product_name);
            product_data.append("product_cost", product_cost);
            product_data.append("product_cartegory", product_cartegory);
            product_data.append("product_author", product_author)
            product_data.append("product_description", product_description);
            product_data.append("product_image", product_image);

            const response = await axios.post("https://quincyj.alwaysdata.net/api/add_product", product_data);
            console.log(response)
            if (response.status === 200) {
                setSuccess(response.data.message)
                setLoading("")
                setError("")


            }

        } catch (error) {
            console.log(error.message)
            setLoading("")
            setError(error.message)
        }
    }

    return (
        <div>
            <NavbarComponent />
            <div className="row justify-content-center mt-4">
                <div className="col-md-6 card shadow p-4">
                    <h2>Add Book</h2>
                    <h5 className="text-warning">{loading}</h5>
                    <h5 className="text-success">{success}</h5>
                    <h5 className="text-danger">{error}</h5>
                    <form onSubmit={handleSubmit}>
                        <input type="text"
                            placeholder="Product Name"
                            className="form-control"
                            value={product_name}
                            required
                            onChange={(e) => {
                                setProductName(e.target.value)
                            }}
                        />
                        <br />

                        <input type="number"
                            className="form-control"
                            placeholder="Enter cost"
                            value={product_cost}
                            required
                            onChange={(e) => {
                                setProductCost(e.target.value)
                            }}
                        />
                        <br />

                        <input type="text"
                            className="form-control"
                            placeholder="Enter author"
                            value={product_author}
                            required
                            onChange={(e) => {
                                setProductAuthor(e.target.value)
                            }}
                        />
                        <br />

                        <select
                            className="form-select"
                            value={product_cartegory}
                            required
                            onChange={(e) => {
                                setProductCartegory(e.target.value)
                            }}
                        >
                            <option value="">Select category</option>
                            <option value="Fantasy">Fantasy</option>
                            <option value="Romance">Romance</option>
                            <option value="Horror">Horror</option>
                            <option value="Mystery/Thriller">Mystery/Thriller</option>
                            <option value="Historical Fiction">Historical Fiction</option>
                            <option value="Self-Help">Self-Help</option>
                            <option value="Biography">Biography</option>
                            <option value="Memoir/Autobiography">Memoir/Autobiography</option>
                            <option value="True Crime">True Crime</option>
                        </select>
                        <br />

                        <textarea
                            className="form-control"
                            rows="5"
                            placeholder="Enter product description"
                            value={product_description}
                            required
                            onChange={(e) => {
                                setProductDescription(e.target.value)
                            }}
                        ></textarea>
                        <br />

                        <label htmlFor="" className="form-label" >
                            Product image
                        </label>
                        <input
                            type="file"
                            className="form-control"
                            accept="image/*"
                            required
                            onChange={(e) => {
                                setProductImage(e.target.files[0])
                            }}
                        />
                        <br />

                        <button className="btn btn-success">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddProductComponent;