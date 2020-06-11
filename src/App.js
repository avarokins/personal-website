import React from 'react';
import NavBar, { ElementsWrapper } from 'react-scrolling-nav';
import './App.css';
import VideoComponent from './Components/VideoComponent'
import ProjectsComponent from './Components/ProjectsComponent.js'
import BackgroundComponent from './Components/BackgroundComponent'
import ContactComponent from './Components/ContactComponent'

function App() {

  const navbarItems = [{
    label: "Home",
    target: "item-1"
    }, {
    label: "Projects",
    target: "item-2"
    }, {
    label: "Background",
    target: "item-3"
    }, {
    label: "Contact",
    target: "item-4"
    },]  

  return (
    <div className="App">
      <NavBar
        items={navbarItems}
        offset={-80} 
        height={50}
        duration={500} 
        delay={0}
        navWidth={120}
        coverWidth={900}
        backgroundColor={"#000"}
        ></NavBar>
      <h1 className="myName" >Avarokin Raj Saini</h1>
      <div className="container">
        <ElementsWrapper items={navbarItems}>
          <VideoComponent name="item-1"></VideoComponent>
          <ProjectsComponent name="item-2"></ProjectsComponent>
          <BackgroundComponent name="item-3" ></BackgroundComponent>
          <ContactComponent name="item-4" ></ContactComponent>
        </ElementsWrapper>
      </div>
    </div>
  );
}

export default App;