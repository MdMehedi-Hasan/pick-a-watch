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
        <h1>Props vs State?</h1>
        <p><strong>Ans:</strong> Props data is passed from one component to another but state data is passed within the component only. Props are immutable wherease state is mutable.Props can be used with state and functional components but State can be used only with the state components. Props are read only but state is both read & write. </p>
            </div>
            </div>
    );
};

export default Bonus;