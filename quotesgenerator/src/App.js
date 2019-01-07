import React, { Component } from 'react';
import { getQuote } from './services';
import QuoteBox from './components/quote-box/QuoteBox';
import AppHeader from './components/app-header/AppHeader';
import AuthorFooter from './components/author-footer/AuthorFooter';

class App extends Component {
  constructor() {
    super();
    this.state = {
      quotes: [],
      selectedQuote: {},
      tweetLink: null,
    };
    this._getQuotes();
  }

selectQuote(quotesData) {
  const data = (quotesData) ? quotesData : this.state.quotes;
  const selectedQuote = data[Math.floor(Math.random() * data.length)];
  this.setState({
    ...this.state,
    selectedQuote
  });
}

_getQuotes() {
  getQuote()
  .then(data => {
    this.selectQuote(data);
    this.setState({
      ...this.state,
      quotes:data,
    });
  })
  .catch((error) => new Error(error));
}

render() {
  return (
    <div className>
      <AppHeader />
      <QuoteBox quotes={this.state.quotes} selectedQuote={this.state.selectedQuote} selectQuote={this.selectQuote.bind(this)}/>
      <AuthorFooter />
    </div>
  );
}
}

export default App;
