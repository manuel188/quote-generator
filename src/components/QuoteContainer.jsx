import React, { Component } from 'react';
import Axios from 'axios';
import QuoteRender from './QuoteRender.jsx';
import Quotes from '../quotes';

class QuoteContainer extends Component {

    constructor() {
        super();
        this.state = {
            author: '',
            quote: '',
            counter: 0
        }
        console.log(Quotes);
    }

    getQuote() {
        const quote = Quotes[this.state.counter];
        this.setState({quote: quote.quote, author: quote.author, counter: this.state.counter + 1});
    }

    getColorForQuote() {
        const colors = [
            "tomato",
            "indigo",
            "#FFC107",
            "#FF9800",
            "#009688",
            "#03A9F4",
            "#F44336"
        ];

        const colorIndex = Math.round(Math.random() * (colors.length - 1));
        return colors[colorIndex];
    }

    componentDidMount() {
        this.getQuote();
    }

    render() {
        const {author, quote} = this.state;
        const color = this.getColorForQuote();

        return <QuoteRender colorQuote={color} 
                            author={author} 
                            quote={quote} 
                            getQuote = {this.getQuote.bind(this)}
                />;
    }
}

export default QuoteContainer;