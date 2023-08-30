import React from 'react';
import logo from './logo.svg';

function App() {
  return (
    <div className="text-center">
      <header className="bg-slate-900 min-h-[100vh] flex flex-col items-center justify-center text-xl text-white">
        <img src={logo} className="animate-spin-slow h-[40vmin]" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="text-cyan-300"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
