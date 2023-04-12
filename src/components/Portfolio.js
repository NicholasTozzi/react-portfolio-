import React, { useState } from "react";
import Nav from "./Nav";
import About from "./About";
import Resume from "./Resume";
import Footer from "./Footer";

function Portfolio() {
  //set state
  // const [portfolio, setPortfolio] = useState([]);

  //Return our components inside a div. This will be inserted to our root of our index.html
  return (
    <div>
      <Nav />
      <About />
      <Resume />
      <Footer />
    </div>
  );
}
export default Portfolio;
