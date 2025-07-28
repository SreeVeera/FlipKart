import React from 'react';
import Carousel from 'react-material-ui-carousel'

import Item from '../header/Item.jsx';
export default function Example(props)
{
    const items = [
         {
    image: 'https://rukminim1.flixcart.com/fk-p-flap/3240/540/image/59cc03576ab30951.jpg?q=60',
            alt: "Add"
        },
         {
    image: 'https://rukminim2.flixcart.com/fk-p-flap/3240/540/image/151def37889b65ce.jpeg?q=60',
            alt: "Add"
        },
        {
    image: 'https://rukminim1.flixcart.com/fk-p-flap/3240/540/image/74f0ad81e44e6e6f.jpg?q=60',
            alt: "Add"
        }
    ];

    return (
        <Carousel autoplay={false}>
            {
                items.map((item) => <Item key={item.image} item={item} />)
            }
        </Carousel>
    )
}
