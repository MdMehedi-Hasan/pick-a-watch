import React from 'react';
import Aside from '../aside/Aside';
import Cards from '../cards/Cards';
import './body.css'

const Body = () => {
    return (
        <div className='grid'>
            <Cards></Cards>
            <Aside></Aside>
        </div>
    );
};

export default Body;