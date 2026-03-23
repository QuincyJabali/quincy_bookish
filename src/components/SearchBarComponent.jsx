// import axios from "axios"
// import { useState } from "react"
// const SearchBarComponent = ()=> {
//     let [input,setInput]=useState("")

//     const getData =async (value) => {
       
        
//        try {
//         const response = await axios.get("https://quincyj.alwaysdata.net/api/get_products")
//         if (response === 200){
//             setInput(response.data)
//         }
//        } catch (error) {
        
//        }
//     }

  
//     return(
//         <div id="input-wrapper" onSubmit={getData}>
//             <input type="text"
//              placeholder="search" 
//              onChange={(e)=>{setInput(e.target.value)}}  
//              value={input}
//              className="search"
//              />
//              <button className="btn btn-outline-success">search</button>
//         </div>
//     )
// }
// export default SearchBarComponent;

import React, { useState, useEffect, useMemo  } from 'react';

function DataFilterComponent() {
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Replace with your actual API call
    fetch('https://quincyj.alwaysdata.net/api/product_details')
      .then(response => response.json())
      .then(data => {
        setOriginalData(data);
        setFilteredData(data); // Initially, all data is filtered data
      });
  }, []);
  // ...

  // ... (fetch and state code from step 1) ...

const memoizedFilteredData = useMemo(() => {
  if (!searchTerm) return originalData;

  return originalData.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
}, [originalData, searchTerm]);
// ...


return(
        <div>
        // ... inside DataFilterComponent render ...
<input
  type="text"
  placeholder="Search by name..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
/>
{/* // ... */}

{/* // ... inside DataFilterComponent render ... */}
{memoizedFilteredData.length > 0 ? (
  <ul>
    {memoizedFilteredData.map(item => (
      <li key={item.id}>{item.name}</li>
    ))}
  </ul>
) : (
  <p>No matching results found.</p>
)}


        </div>
    )
}

    
