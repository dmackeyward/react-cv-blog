import React from "react"
import Header from "./components/Header"
import AboutMe from "./components/AboutMe"
import Skills from "./components/Skills"
import Footer from "./components/Footer"

function App() {
  return (
    <React.Fragment>
      <Header />
      <AboutMe />
      <Skills />
      <Footer />
    </React.Fragment>
  );
}

export default App;
