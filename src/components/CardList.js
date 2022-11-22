import React from "react";
import Card from "./Card";

const CardList=({test})=> {
    if (true) {
        throw new Error("Noo");
    }
    return (
        <div>
            {
                test.map((_user,i) => {
                    return (
                        <Card 
                                key={i} 
                                id={test[i].id} 
                                nametest={test[i].name} 
                                username={test[i].username} 
                                email={test[i].email} 
                        />
                    );
                })
             }
             
        </div>
    )
    
}

export default CardList