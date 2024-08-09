import React from 'react';
import {
  RouterProvider,
} from "react-router-dom";
// import logo from './logo.svg';
import Router from './router/Router';

function App() {
  return (
    <RouterProvider router={Router} />
  );
}

export default App;
