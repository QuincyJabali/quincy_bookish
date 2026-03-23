import axios from "axios";
import { useState } from "react";

const FooterComponent = () => {
  let [email,setEmail]=useState("");
  let [review,setReview]=useState("");
  let [loading,setLoading]=useState("")
  let [success,setSuccess]=useState("")
  let [error,setError]=useState("")


const handleSubmit = async (e)=>{
  e.preventDefault()
   setLoading("Please wait.....")
   setSuccess("")
   setError("")

   try {
    const review_data = new FormData();
    review_data.append("email",email);
    review_data.append("review",review);

    const response =await axios.post( "https://quincyj.alwaysdata.net/api/review",review_data);

    if (response.status === 200) {
                setSuccess(response.data.message);
                setLoading("")
                setEmail("")
                setReview("")
               
            }
    
   } catch (error) {
      console.log(error)
            setLoading("");
            setError(error.message)
   }

}

  return (
    <div className="row bg-light footer p-4 mt-3 text-center text-light">
      <footer className="site-footer">
        <div className="footer-content ">
          <p>&copy;2026 Bookish</p>
          

          <div className="row">
            <div className="col-md-4">
            <h4>About Us</h4>
            <p>We are a platform that sells and facilitates the exchange of books. we pride ourselves on honest work and fair dealing</p>
          </div>

          <div className="col-md-4">
            <h5 className="text-warning">{loading}</h5>
            <h5 className="text-danger">{error}</h5>
            <h5 className="text-success">{success}</h5>
            <form onSubmit={handleSubmit}>
              <input type="email" 
              placeholder="Enter your email"
              className="form-control my-3"
              onChange={(e)=>{setEmail(e.target.value)}}
              required/>

              <textarea
              placeholder="Enter your review"
               className="form-control"
               onChange={(e)=>{setReview(e.target.value)}}
               required
               >

              </textarea>
              <br />

              <button className="btn btn-danger">Submit</button>
            </form>
          </div>

          <div className="col-md-4">
            <h4>Contact Us</h4>
            <p>If you have any wish for customer service you can reach out to us through the following number: +254799073812</p>
          </div>
          </div>
          

          {/* <div className="footer-links">
            <a href="/about">About Us/</a>
            <a href="/contact">Contact/</a>
            <a href="/privacy">Privacy Policy</a>
          </div> */}
        </div>
      </footer>
    </div>
  );
};
export default FooterComponent;
