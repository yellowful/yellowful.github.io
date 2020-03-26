import React from 'react'
import Card from './Card'


const CardList = ({robots}) => {
    // if(true){
    //     throw new Error('Noooooo')
    // }

    const cardComponent = robots.map(
        (items) => {
            return (
                <Card key={items.id} id={items.id} name={items.name} hair_color={items.hair_color} />
            )
        }
    )

        return (
            <div>
                {cardComponent}
            </div>
        )
};

export default CardList;