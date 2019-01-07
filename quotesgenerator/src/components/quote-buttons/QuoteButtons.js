import React  from 'react';
import { FaTwitter } from 'react-icons/fa';
import { FiRepeat } from 'react-icons/fi';
import './quoteButtons.scss';

const prepareAnchorForTwitter = (data) => {
  const { quote, author } = data; 
  const url = `https://twitter.com/intent/tweet?hashtags=freeCodeCamp&text='${quote} ~${author}'`;

  window.open(url, '_blank');
};

const QuoteButtons = (props) => (
  <div className="quoteButtons">
    <div title="Select new quote" id="new-quote" onClick={() => props.selectQuote()}>
      <FiRepeat/>
    </div> 
    <a id="tweet-quote" title="Tweet this quote" href="twitter.com/intent/tweet">
      <FaTwitter onClick={() => prepareAnchorForTwitter(props.selectedQuote)}/>
    </a>
  </div>
);

export default QuoteButtons;