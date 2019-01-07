import React from 'react';
import QuoteText from '../quote-text/QuoteText';
import QuoteAuthor from '../quote-author/QuoteAuthor';
import QuoteButtons from '../quote-buttons/QuoteButtons';
import './quoteBox.scss';

const QuoteBox = (props) => (
    <div className="quoteBox" id="quote-box">
        <QuoteButtons selectedQuote={props.selectedQuote} selectQuote={props.selectQuote} />
        <QuoteText value={props.selectedQuote.quote} />
        <QuoteAuthor value={props.selectedQuote.author} />
    </div>
)

export default QuoteBox;