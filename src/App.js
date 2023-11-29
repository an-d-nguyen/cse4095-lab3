import React, { useState } from 'react';
import './App.css';

function App() {
  const jokes = [
    "Why did the scarecrow win an award? Because he was outstanding in his field!",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "Did you hear about the mathematician who’s afraid of negative numbers? He'll stop at nothing to avoid them!"
  ];

  const [currentJokeIndex, setCurrentJokeIndex] = useState(0);

  const showNextJoke = () => {
    setCurrentJokeIndex((prevIndex) => (prevIndex + 1) % jokes.length);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Jokes</h1>
        <p>{jokes[currentJokeIndex]}</p>
        <button onClick={showNextJoke}>Next Joke</button>
      </header>
    </div>
  );
}

export default App;
