import React from 'react';
import Card from './Card';
import { cars } from './Cars';

//import FooterCardList from './FooterCardList';

const CardList = () => {



    return (
        <>
            {cars.map((car, i) => {
                return (
                    <Card
                        id={cars[i].id}
                        make={cars[i].make}
                        model={cars[i].model}
                        year={cars[i].year} />
                )
            }
            )}
        </>
    );
}

export default CardList;