import React from 'react';
import './quoteAuthor.scss';

const QuoteAuthor = (props) => (
    <p id="author">~{props.value}</p>
);

export default QuoteAuthor