import React from "react";

const SearchBox=({searchChange}) => {
    return (
        <div className="pa2"> 
            <input 
                className="pa3 tc ba b--gold bg-lightest-blue"
                typpe='search' 
                placeholder="search robots"
                onChange={searchChange}
            />

        </div>
    
    );
}

export default SearchBox;
