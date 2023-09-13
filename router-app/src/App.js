import React, { Component } from "react";
import { Route ,Routes,Switch } from "react-router-dom";
import NavBar from "./components/navbar";
import Products from "./components/products";
import Posts from "./components/posts";
import Home from "./components/home";
import Dashboard from "./components/admin/dashboard";
import ProductDetails from "./components/productDetails";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div className="content">
        <Routes>
          {/* route pass 3 additional props to its component */}
          {/* passing props to cmp in route */}
          <Route path="/products" render={(props) => <Products sortBy="newest" {...props}/>} />
          <Route path="/posts" Component={Posts} />
          <Route path="/admin" Component={Dashboard} />
          <Route path="/"  Component={Home} />
        </Routes>
          
          
        </div>
      </div>
    );
  }
}

export default App;
