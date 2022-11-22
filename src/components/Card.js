import React from "react";

const Card=({nametest,username,email,id}) => {
    return (
        <div className="tc bg-light-blue dib br3 pa3 ma2 grow">
            <img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{nametest}</h2>
                <p>{username}</p>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;