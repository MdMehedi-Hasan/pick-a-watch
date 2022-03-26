import React from 'react';
import Aside from '../aside/Aside';
import Cards from '../cards/Cards';
import './body.css'

const Body = (props) => {
    return (
        <div className='grid'>
            <Cards key={props.key}></Cards>
            <Aside></Aside>
        </div>
    );
};

export default Body;