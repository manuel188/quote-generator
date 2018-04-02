import React, {Component} from 'react';
import {render} from 'react-dom';
import QuoteContainer from './components/QuoteContainer.jsx';
import './app.css';

class App extends Component {
    render() {
        return <QuoteContainer />
    }
}


render(<App />, document.getElementById('react-container'));