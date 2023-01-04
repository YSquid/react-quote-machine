import "./App.css";
import React, {useState, useEffect} from 'react'
import {AiOutlineTwitter} from 'react-icons/ai'

function App() {
  const [color, setColors] = useState('#9494FF')
  const [quotes, setQuotes] = useState([])
  const [randomQuote, setRandomQuote] = useState('')

  useEffect(() => {
    async function fetchQuotes() {
      const response = await fetch('https://type.fit/api/quotes');
      const jsonResponse = await response.json();
      setQuotes(jsonResponse);
      let startingQuoteIndex = Math.floor(Math.random() * jsonResponse.length)
      setRandomQuote(jsonResponse[startingQuoteIndex])
    }
    fetchQuotes();
  }, []);

  const newQuote = () => {
    let quoteIndex = Math.floor(Math.random() * quotes.length)
    setRandomQuote(quotes[quoteIndex])
    let colors=[
      '#16a085',
      '#27ae60',
      '#2c3e50',
      '#f39c12',
      '#e74c3c',
      '#9b59b6',
      '#FB6964',
      '#342224',
      '#472E32',
      '#BDBB99',
      '#77B1A9',
      '#73A857'
  ]
  let colorIndex = Math.floor(Math.random() * colors.length)
  setColors(colors[colorIndex])
  }

  return (
    <div id="wrapper" className="App" style={{backgroundColor: color}}>
        <div id="quote-box" className="card">
          <div id="quote" className="card-body">
            <div id="quote-text">
            <h1 style={{color: color}}>"{randomQuote && randomQuote.text}"</h1>
            </div>
            <div id="quote-author">
            <h3 id="quote-author" style={{color: color}}>-{randomQuote && randomQuote.author}</h3>
            </div>
          </div>
          <div id="quote-footer" className="card-footer">
            <button id="new-quote" className="btn btn-primary" onClick={newQuote}>New Quote</button>
            <a href={'https://twitter.com/intent/tweet?hashtags=quotes&text=' + randomQuote.text + ' - ' + randomQuote.author} target="_blank" rel="noreferrer" id="tweet" className="btn btn-primary"><AiOutlineTwitter/></a>
          </div>
        </div>
        <div id="credit">
          <h2 style={{color: 'white'}}>Made by <a href="https://ahmadkariem.com" target="_blank" rel="noreferrer">Ahmad Kariem</a></h2>
        </div>
    </div>
  );
}

export default App;
