import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const text = 'Hello world';

const elem = (
    <div>
        <h2 className='text'>текст: {text}</h2>
        <input type="text" />
        <label htmlFor=""></label>
        <button tabIndex={0}>click</button>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    elem
);
