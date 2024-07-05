import { Brand, CTA, Navbar } from "./components/index";
import {
  Blog,
  Features,
  Footer,
  Header,
  WhatGPT3,
  Possibility,
} from "./containers/index";

import "./App.css";

function App() {
  return (
    <>
      <div className="App">
        <div className="gradient__bg">
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <CTA />
        <Blog />
        <Footer />
      </div>
    </>
  );
}

export default App;
