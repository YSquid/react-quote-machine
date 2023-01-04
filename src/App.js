import "./App.css";

function App() {
  return (
    <div id="wrapper" className="App">
        <div id="quote-box" className="card">
          <div id="quote" className="card-body">
            <div id="quote-text">
            <h1>Quote text</h1>
            </div>
            <div id="quote-author">
            <h3 id="quote-author">Quote author</h3>
            </div>
          </div>
          <div id="quote-footer" className="card-footer">
            <button id="new-quote" className="btn btn-primary">New Quote</button>
            <a href='https://twitter.com' target="_blank" rel="noreferrer" id="tweet" className="btn btn-primary">Tweet</a>
          </div>
        </div>
        <div id="credit">
          <h2>Made by <a href="https://ahmadkariem.com" target="_blank" rel="noreferrer">Ahmad Kariem</a></h2>
        </div>
    </div>
  );
}

export default App;
