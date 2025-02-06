import { useState } from "react";

interface SearchBarProps
  {
   
}
  


 function SearchBar()
  {
 
   
    return (
      <>
        <div className="search-bar">
          <input type="text"
            placeholder="Search for jobs..."
            value={}
          onChange={handleInputChange}/>
      </div>
      </>
    )
  
  }

  

export default SearchBar;