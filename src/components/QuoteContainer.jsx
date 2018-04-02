import React, { Component } from 'react';
import Axios from 'axios';
import QuoteRender from './QuoteRender.jsx';


/**
 * TODO
 * 1. Component must show a quote at first render
 * 2. Component must show a new random quote everytime the user press the button 
 * 3. Component must show a button for share on facebook and twitter
 */

/*
    This class connects to the Quote API, get the response and passes to 
    the QuoteRender component
*/


class QuoteContainer extends Component {

    constructor() {
        super();
        this.state = {
            author: '',
            quote: ''
        }
    }

    getQuote() {
        const apiURL = "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=1";
        const apiKey = "wGqyzlzUYdmshw2jiMjnX6cE0hn1p1xKVKIjsnTalUISAv9FQu";

        const config = { 
            headers: {'X-Mashape-Key': apiKey}
        }
        
        Axios.get(apiURL, config)
            .then(({data}) => {
                const {author, quote} = data;
                this.setState({author, quote});
            }).catch(data => console.log(data));   

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