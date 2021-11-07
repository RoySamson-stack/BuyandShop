import React, { Component } from 'react';
import {BrowserRouter , Route, Routes, Link} from 'react-router-dom';


function Home() {
    return (
      <div>
        <header className="App-header">
          <title>Welcome</title>
          <Link to="/">Home</Link>
          <Link to="/store">Store</Link>
        </header> </div>
    );
  
}

export default Home;