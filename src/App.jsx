import React from "react";
import Cards from "./components/Cards/Cards.jsx";
import Video from "./components/Video/Video.jsx";
import CardsGroup from "./components/CardsGroup/CardsGroup.jsx";
import {Container} from "react-bootstrap";
import Parallax from "./components/Parallax/Parallax.jsx";
import {ParallaxProvider} from "react-scroll-parallax";

const App = () => {

  return (
      <ParallaxProvider>
          <Container className={"App"}>
              <CardsGroup />
              <Cards />
              <Video />
              <Parallax />
          </Container>
      </ParallaxProvider>
  )
}

export default App
