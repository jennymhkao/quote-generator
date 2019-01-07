import React from 'react';
import './quoteText.scss';

const QuoteText = (props) => (
    <p id="text">
        <span>"{props.value}</span>
    </p>
);

export default QuoteText;