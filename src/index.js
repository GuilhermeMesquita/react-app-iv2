import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'
import App2 from './components/App2'

ReactDOM.render(
    <div>
        <App nome="Guilherme Rocha" />,
        <App2></App2>
    </div>,
    document.getElementById('root')
);