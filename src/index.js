import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Home from './components/Home'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

ReactDOM.render(
    <Router>
        <Link to="/">Home</Link>
        <Link to="/tarefas">Tarefas</Link>

        <Route exact path="/" component={Home} />
        <Route path="/tarefas" component={App} />
    </Router>,
    document.getElementById('root')
);