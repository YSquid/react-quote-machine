import "./App.css";
import React, {useState, useEffect} from 'react'

function App() {
  const [color, setColors] = useState('#D3D3D3')
  const [quotes, setQuotes] = useState([])
  const [randomQuote, setRandomQuote] = useState('')

  useEffect(() => {
    async function fetchQuotes() {
      const response = await fetch('https://type.fit/api/quotes');
      const jsonResponse = await response.json();
      setQuotes(jsonResponse);
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
            <h1 style={{color: color}}>{randomQuote.text}</h1>
            </div>
            <div id="quote-author">
            <h3 id="quote-author" style={{color: color}}>{randomQuote.author}</h3>
            </div>
          </div>
          <div id="quote-footer" className="card-footer">
            <button id="new-quote" className="btn btn-primary" onClick={newQuote}>New Quote</button>
            <a href='https://twitter.com' target="_blank" rel="noreferrer" id="tweet" className="btn btn-primary">Tweet</a>
          </div>
        </div>
        <div id="credit">
          <h2 style={{color: 'black'}}>Made by <a href="https://ahmadkariem.com" target="_blank" rel="noreferrer">Ahmad Kariem</a></h2>
        </div>
    </div>
  );
}

export default App;
