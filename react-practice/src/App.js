import React from "react";
import Navbar from "./Navbar/Navbar";
import Message from "./component/Message";
import Product from "./component/Product";
import Footer from "./component/Footer";
import Hero from "./Hero/Hero";
function App(){
  return <>
    <Navbar />
    <hr />
    <Hero />
    <hr/>
  <h1>HELLOOOO</h1>
  <Message/>
  <hr />
  <Product />
  <hr />
  <Footer />
  <hr />
  </>
}
export default App