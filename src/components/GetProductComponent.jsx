import { useEffect, useState } from "react";
import NavbarComponent from "./NavbarComponent";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {motion} from "framer-motion"
const GetProductsComponent = () => {
  let [products, setProducts] = useState([]);
  let [loading, setLoading] = useState("");
  let [error, setError] = useState("");
  let [horror, setHorror] = useState([]);
  let [thriller,setThriller]=useState([])  
  let [fantasy, setFantasy] = useState([]);
  let [history,setHistory]= useState([]);
  let [romance,setRomance]=useState([])
  let [selfhelp,setSelfhep]=useState([])
  let [biography,setBiography]=useState([])
  let [truecrime,setTruecrime]=useState([])
  let [autobiography,setAutobiography]=useState([])

  let [is_open,setIsOpen]=useState(false)


  let [search_word, setSearchWord] = useState("");
  let [filtered_products, setFilteredProducts] = useState([]);

  let navigator = useNavigate();

  // base url for image path from server
  const img_url = "https://quincyj.alwaysdata.net/static/images/";

  // create function to fetch products from server
  const getProducts = async () => {
    console.log("getting products");
    setError("");
    setLoading("Fetching products. Please wait...");

    try {
      const response = await axios.get(
        "https://quincyj.alwaysdata.net/api/get_products",
      );
      console.log(response);
      if (response.status === 200) {
        setLoading("");
        setProducts(response.data);

        let fantasy_cat = response.data.filter(
          (product) => product.product_category === "fantasy",
        );
        setFantasy(fantasy_cat);

        let horror_cat = response.data.filter(
          (product) => product.product_category === "horror",
        );
        setHorror(horror_cat);

        let thriller_cat = response.data.filter((product)=> product.product_category === "thriller",)
        setThriller(thriller_cat);

        let history_cat = response.data.filter((product)=> product.product_category === "historicalfiction" ,)
        setHistory(history_cat)

        let romance = response.data.filter((product)=> product.product_category === "romance" ,)
        setRomance(romance)

        let biography = response.data.filter((product)=> product.product_category === "biography" ,)
        setBiography(biography)

        let selfhelp = response.data.filter((product)=> product.product_category === "selfhelp" ,)
        setSelfhep(selfhelp)

        let autobiography = response.data.filter((product)=> product.product_category === "autobiography" ,)
        setAutobiography(autobiography)

        let truecrime = response.data.filter((product)=> product.product_category === "truecrime" ,)
        setTruecrime(truecrime)


      }
    } catch (error) {
      setLoading("");
      setError(error.message);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleSearch = (search_word) => {
    let filterd = products.filter((product) =>
      product.product_name.toLowerCase().includes(search_word.toLowerCase()),
    );
    setFilteredProducts(filterd);
  };

  useEffect(() => {
    handleSearch(search_word);
  }, [search_word]);

  return (
    <div>
      <NavbarComponent />
      <div className="row">
        <h3 className="mt-5">Available Products</h3>
        <h6 className="text-warning">{loading}</h6>
        <h6 className="text-danger">{error}</h6>

        <div className="row justify-content-center my-3">
          <div className="col-md-3">
            <input
              type="text"
              placeholder="Search Book by name"
              className="form-control"
              value={search_word}
              onChange={(e) => {
                setSearchWord(e.target.value);
              }}
            />
          </div>
        </div>

         {filtered_products.map((product) => (
          <div className="col-md-3 justify-content-center mb-4">
            <div className="card shadow card-margin">
              <img
                src={img_url + product.product_image}
                alt=""
                className="product_img mt-4"
              />

              <motion.div layout="position" 
                transition={{layout : {duration : 0.3 }}}
              onClick={()=> setIsOpen(!is_open)} 
              className="card-body">

                
                <h5 className="mt-2">{product.product_name}</h5>
                {is_open &&
                <motion.p className="text-muted">{product.product_description}</motion.p>
}               <p>read more -></p>
                <p className="text-danger">{product.product_author}</p>
                <b className="text-warning">{product.product_cost}</b>
                <br />
                <br />
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    navigator("/makepayment", { state: { product } });
                  }}
                >
                  Purchase Now
                </button>
              </motion.div>
            </div>
          </div>
        ))}


        <h2 className="text-center text-success  my-2 p-4"> <span>Fantasy</span></h2>

        {fantasy.map((product) => (
          <div className="col-md-3 justify-content-center mb-4">
            <div className="card shadow card-margin">
              <img
                src={img_url + product.product_image}
                alt=""
                className="product_img mt-4"
              />

              <motion.div layout="position" 
                transition={{layout : {duration : 0.3 }}}
              onClick={()=> setIsOpen(!is_open)} 
              className="card-body">

                
                <h5 className="mt-2">{product.product_name}</h5>
                {is_open &&
                <motion.p className="text-muted">{product.product_description}</motion.p>
}               <p>read more -></p>
                <p className="text-danger">{product.product_author}</p>
                <b className="text-warning">{product.product_cost}</b>
                <br />
                <br />
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    navigator("/makepayment", { state: { product } });
                  }}
                >
                  Purchase Now
                </button>
              </motion.div>
            </div>
          </div>
        ))}

        <h2 className="text-center text-success my-2 p-4"><span>Horror</span></h2>

         {horror.map((product) => (
          <div className="col-md-3 justify-content-center mb-4">
            <div className="card shadow card-margin">
              <img
                src={img_url + product.product_image}
                alt=""
                className="product_img mt-4"
              />

              <motion.div layout="position" 
                transition={{layout : {duration : 0.3 }}}
              onClick={()=> setIsOpen(!is_open)} 
              className="card-body">

                
                <h5 className="mt-2">{product.product_name}</h5>
                {is_open &&
                <motion.p className="text-muted">{product.product_description}</motion.p>
}               <p>read more -></p>
                <p className="text-danger">{product.product_author}</p>
                <b className="text-warning">{product.product_cost}</b>
                <br />
                <br />
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    navigator("/makepayment", { state: { product } });
                  }}
                >
                  Purchase Now
                </button>
              </motion.div>
            </div>
          </div>
        ))}

       

           <h2 className="text-center text-success my-2 p-4"><span>Thriller</span></h2>

            {thriller.map((product) => (
          <div className="col-md-3 justify-content-center mb-4">
            <div className="card shadow card-margin">
              <img
                src={img_url + product.product_image}
                alt=""
                className="product_img mt-4"
              />

              <motion.div layout="position" 
                transition={{layout : {duration : 0.3 }}}
              onClick={()=> setIsOpen(!is_open)} 
              className="card-body">

                
                <h5 className="mt-2">{product.product_name}</h5>
                {is_open &&
                <motion.p className="text-muted">{product.product_description}</motion.p>
}               <p>read more -></p>
                <p className="text-danger">{product.product_author}</p>
                <b className="text-warning">{product.product_cost}</b>
                <br />
                <br />
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    navigator("/makepayment", { state: { product } });
                  }}
                >
                  Purchase Now
                </button>
              </motion.div>
            </div>
          </div>
        ))}

        

         <h2 className="text-center text-success my-2 p-4"><span>Historical Fiction</span></h2>

         {history.map((product) => (
          <div className="col-md-3 justify-content-center mb-4">
            <div className="card shadow card-margin">
              <img
                src={img_url + product.product_image}
                alt=""
                className="product_img mt-4"
              />

              <motion.div layout="position" 
                transition={{layout : {duration : 0.3 }}}
              onClick={()=> setIsOpen(!is_open)} 
              className="card-body">

                
                <h5 className="mt-2">{product.product_name}</h5>
                {is_open &&
                <motion.p className="text-muted">{product.product_description}</motion.p>
}               <p>read more -></p>
                <p className="text-danger">{product.product_author}</p>
                <b className="text-warning">{product.product_cost}</b>
                <br />
                <br />
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    navigator("/makepayment", { state: { product } });
                  }}
                >
                  Purchase Now
                </button>
              </motion.div>
            </div>
          </div>
        ))}


         <h2 className="text-center text-success my-2 p-4"><span>Romance</span></h2>

         {romance.map((product) => (
          <div className="col-md-3 justify-content-center mb-4">
            <div className="card shadow card-margin">
              <img
                src={img_url + product.product_image}
                alt=""
                className="product_img mt-4"
              />

              <motion.div layout="position" 
                transition={{layout : {duration : 0.3 }}}
              onClick={()=> setIsOpen(!is_open)} 
              className="card-body">

                
                <h5 className="mt-2">{product.product_name}</h5>
                {is_open &&
                <motion.p className="text-muted">{product.product_description}</motion.p>
}               <p>read more -></p>
                <p className="text-danger">{product.product_author}</p>
                <b className="text-warning">{product.product_cost}</b>
                <br />
                <br />
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    navigator("/makepayment", { state: { product } });
                  }}
                >
                  Purchase Now
                </button>
              </motion.div>
            </div>
          </div>
        ))}


         <h2 className="text-center text-success my-2 p-4"><span>Self Help</span></h2>

         {selfhelp.map((product) => (
          <div className="col-md-3 justify-content-center mb-4">
            <div className="card shadow card-margin">
              <img
                src={img_url + product.product_image}
                alt=""
                className="product_img mt-4"
              />

              <motion.div layout="position" 
                transition={{layout : {duration : 0.3 }}}
              onClick={()=> setIsOpen(!is_open)} 
              className="card-body">

                
                <h5 className="mt-2">{product.product_name}</h5>
                {is_open &&
                <motion.p className="text-muted">{product.product_description}</motion.p>
}               <p>read more -></p>
                <p className="text-danger">{product.product_author}</p>
                <b className="text-warning">{product.product_cost}</b>
                <br />
                <br />
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    navigator("/makepayment", { state: { product } });
                  }}
                >
                  Purchase Now
                </button>
              </motion.div>
            </div>
          </div>
        ))}


         <h2 className="text-center text-success my-2 p-4"><span>Biography</span></h2>

         {biography.map((product) => (
          <div className="col-md-3 justify-content-center mb-4">
            <div className="card shadow card-margin">
              <img
                src={img_url + product.product_image}
                alt=""
                className="product_img mt-4"
              />

              <motion.div layout="position" 
                transition={{layout : {duration : 0.3 }}}
              onClick={()=> setIsOpen(!is_open)} 
              className="card-body">

                
                <h5 className="mt-2">{product.product_name}</h5>
                {is_open &&
                <motion.p className="text-muted">{product.product_description}</motion.p>
}               <p>read more -></p>
                <p className="text-danger">{product.product_author}</p>
                <b className="text-warning">{product.product_cost}</b>
                <br />
                <br />
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    navigator("/makepayment", { state: { product } });
                  }}
                >
                  Purchase Now
                </button>
              </motion.div>
            </div>
          </div>
        ))}


         <h2 className="text-center text-success my-2 p-4"><span>Autobiography</span></h2>

         {autobiography.map((product) => (
          <div className="col-md-3 justify-content-center mb-4">
            <div className="card shadow card-margin">
              <img
                src={img_url + product.product_image}
                alt=""
                className="product_img mt-4"
              />

              <motion.div layout="position" 
                transition={{layout : {duration : 0.3 }}}
              onClick={()=> setIsOpen(!is_open)} 
              className="card-body">

                
                <h5 className="mt-2">{product.product_name}</h5>
                {is_open &&
                <motion.p className="text-muted">{product.product_description}</motion.p>
}               <p>read more -></p>
                <p className="text-danger">{product.product_author}</p>
                <b className="text-warning">{product.product_cost}</b>
                <br />
                <br />
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    navigator("/makepayment", { state: { product } });
                  }}
                >
                  Purchase Now
                </button>
              </motion.div>
            </div>
          </div>
        ))}

         <h2 className="text-center text-success my-2 p-4"><span>True Crime</span></h2>

         {truecrime.map((product) => (
          <div className="col-md-3 justify-content-center mb-4">
            <div className="card shadow card-margin">
              <img
                src={img_url + product.product_image}
                alt=""
                className="product_img mt-4"
              />

              <motion.div layout="position" 
                transition={{layout : {duration : 0.3 }}}
              onClick={()=> setIsOpen(!is_open)} 
              className="card-body">

                
                <h5 className="mt-2">{product.product_name}</h5>
                {is_open &&
                <motion.p className="text-muted">{product.product_description}</motion.p>
}               <p>read more -></p>
                <p className="text-danger">{product.product_author}</p>
                <b className="text-warning">{product.product_cost}</b>
                <br />
                <br />
                <button
                  className="btn btn-danger"
                  onClick={() => {
                    navigator("/makepayment", { state: { product } });
                  }}
                >
                  Purchase Now
                </button>
              </motion.div>
            </div>
          </div>
        ))}
           

      </div>
    </div>
  );
};

export default GetProductsComponent;