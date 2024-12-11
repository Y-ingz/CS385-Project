import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Products from "./pages/Products";
import Index from "./pages/Index";
import CartProvider from "./contexts/Cart";
import './App.css';

// const Index = () => <h2>Hello from Home</h2>;

class App extends Component {
  render() {
    return (
      <CartProvider>
        <Router>
          <div className="App">
            <Header />
            <Route path="/" exact component={Index} />
            <Route path="/products/" exact component={Products} />
          </div>
        </Router>
      </CartProvider>
    );
  }
}

export default App;
