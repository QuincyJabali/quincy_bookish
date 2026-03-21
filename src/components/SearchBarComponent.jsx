import axios from "axios"
import { useState } from "react"
const SearchBarComponent = ()=> {
    let [input,setInput]=useState("")

    const getData =async (value) => {
       
        
       try {
        const response = await axios.get("https://quincyj.alwaysdata.net/api/get_products")
        if (response === 200){
            setInput(response.data)
        }
       } catch (error) {
        
       }
    }

  
    return(
        <div id="input-wrapper" onSubmit={getData}>
            <input type="text"
             placeholder="search" 
             onChange={(e)=>{setInput(e.target.value)}}  
             value={input}
             className="search"
             />
             <button className="btn btn-outline-success">search</button>
        </div>
    )
}
export default SearchBarComponent;