import React from 'react';
import './QuoteComponent.css';

const QuoteRender = ({colorQuote, author, quote, getQuote}) => {
    return (
        <div className="quote" style={{transition: 'background-color 3s', backgroundColor: colorQuote}}>
            <div className="quote__container">
                <p className="quote__content">{quote}</p>
                <small className="quote__author"><i>- {author}</i></small>           
            </div>
            <div className="quote__buttons">
                <button className="quote__button quote__button-get" onClick={() => getQuote()}>Get Quote</button>
            </div>
        </div>
    );
}




export default QuoteRender;