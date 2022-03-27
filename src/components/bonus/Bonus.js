import React from 'react';
import './bonus.css'

const Bonus = () => {
    return (
        <div>
        <div className='bonus'>
            <h1>How does React work?</h1>
            <p><strong>Ans:</strong> React is a JavaScript library which is maintained by Facebook. React creates a virtual DOM based on the real DOM. And it compares both DOM whenever any change occur. React also works with JSX (JavaScript XML). JSX is syntactic sugar means it gives you the exact feel of HTML code.</p>
        </div>
        <div className='bonus'>
        <h1>How useState works?</h1>
        <p><strong>Ans:</strong> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta, velit? Blanditiis fugit possimus veniam distinctio voluptatem adipisci, accusamus iste expedita laboriosam eius est aspernatur commodi maiores ratione repudiandae doloribus optio!</p>
            </div>
            </div>
    );
};

export default Bonus;