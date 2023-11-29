import React from 'react';
import './App.css';

function App() {
  const jokes = [
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "Did you hear about the mathematician who’s afraid of negative numbers? He'll stop at nothing to avoid them!"
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Jokes</h1>
        <ul>
          {jokes.map(joke => <li key={joke}>{joke}</li>)}
        </ul>
      </header>
    </div>
  );
}

export default App;
