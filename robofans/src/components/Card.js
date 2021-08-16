import React from 'react';

const Card = ({id,name,email}) => {
    return (
        <div className="bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5">
        <img src={`https://robohash.org/${id}?set=set4&size=200x200`} alt="No Image found"  />
        <h2>{name}</h2>
        <p>{email}</p>
        </div>
    )
    
}

export default Card;