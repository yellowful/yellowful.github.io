import React from 'react'
import Card from './Card'


const CardList = ({robots}) => {
    // if(true){
    //     throw new Error('Noooooo')
    // }

    if (!robots.length){
        return<h1 className = 'tc'>Loading</h1>
    } else{        
//        debugger;
        const cardComponent = robots.map(
            (items) => {
                return (
                    <Card key={items.id} id={items.id} name={items.name} height={items.height} mass={items.mass}/>
                )
            }
        )

            return (
                <div>
                    {cardComponent}
                </div>
            )
    }
};

export default CardList;