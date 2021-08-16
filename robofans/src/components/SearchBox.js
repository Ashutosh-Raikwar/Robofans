import React from 'react';

const SearchBox = ({searchChange}) => {
        return(
            <input type="text" placeholder="Search Robots" onChange={searchChange} 
            className="pa3 ba b-green bg-light-green"
            />
        )
}

export default SearchBox;