// import { useEffect, useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const GetProductComponent = () => {
//     let [products, setProducts] = useState([]);
//     let [loading, setLoading] = useState("");
//     let [error, setError] = useState("");
//     let [search_word,setSearchWord]=useState("")
//     let [filtered_products,setFilteredProducts]=useState([])

//     let navigator = useNavigate()

//     //Base url for image path from server 
//     const img_url = "https://quincyj.alwaysdata.net/static/images/"

//     //Create a function to fetch product from server
//     const getProducts = async () => {
//         setError("")
//         setLoading("Fetching products. Please wait...");
//         try {
//             const response = await axios.get("https://quincyj.alwaysdata.net/api/get_products");
//             console.log(response)
//             if (response.status === 200) {
//                 setLoading("")
//                 setProducts(response.data)
//             }
//         } catch (error) {
//             setLoading("");
//             setError(error.message);
//         }
//     };

//     useEffect(() => {
//         getProducts();
//     }, []);

//      const handleSearch = (search_word) => {
//     let filterd = products.filter((product) =>
//       product.product_name.toLowerCase().includes(search_word.toLowerCase()),
//     );
//     setFilteredProducts(filterd);
//   };

//   useEffect(() => {
//     handleSearch(search_word);
//   }, [search_word]);

//     return (
//         <div>
            
//             <div className="row">
//                 <h6 className="text-warning">{loading}</h6>
//                 <h6 className="text-danger">{error}</h6>

//                 <input type="text"
//                 placeholder="search here"
//                 className="form-control my-4 "
//                 style={{height:'40px',width:'20px'}}
//                 value={search_word}
//                 onChange={(e)=> setSearchWord(e.target.value)} />

//                 {filtered_products.map((product) => (
//                     <div className="col-md-3 justify-content-center mb-4">
//                         <div className="card shadow-margin">
//                             <img src={img_url + product.product_image} alt="" className="product_img mt-4" />
//                             <div className="card-body">
//                                 <h5 className="mt-2">{product.product_name}</h5>
//                                 <p className="text-muted">{product.product_description}</p>
//                                 <p className="text-danger">{product.product_author}</p>
//                                 <b className="text-warning">{product.product_cost}</b>
//                                 <br />
//                                 <br />
//                                 <button className="btn btn-danger" onClick={()=> {navigator("/makepayment",{state:{product}})}}>Purchase now</button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     )
// }

// export default GetProductComponent;