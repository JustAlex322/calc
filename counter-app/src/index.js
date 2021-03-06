import React from 'react';
import ReactDOM from 'react-dom';
import Calc from './Calc';

// comment this lines when you dont want to auto run ReactDOM.render
window.calc = {
    mount: () => {
        const el = document.getElementById('calc-app');
        ReactDOM.render(<Calc />, el);
    },
    
}

/* uncomment this block to "defer" ReactDOM.render and expose it globaly
window.ReactCounter = {
    mount: () => {
        const el = document.getElementById('counter-app');
        ReactDOM.render(<Counter />, el);
    },
    unmount: () => {
        const el = document.getElementById('counter-app');
        ReactDOM.unmountComponentAtNode(el);
    }
}
*/