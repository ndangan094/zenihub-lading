import Contact from "components/Contact"
import Header from "components/Header"
import Introduce from "components/Introduce"
import Investor from "components/Investor"
import Journey from "components/Journey"
import Project from "components/Projects"
import RoadMap from "components/Roadmap"
import React from "react"
import "styles/App.css"

function App() {
  return (
    <div className="flex flex-col max-w-[1920px] mx-auto mb-40">
      <div>
        <Header />
        <Introduce />
        <Project />
        <Journey />
        <RoadMap />
        <Investor />
        <Contact />
      </div>
    </div>
  )
}

export default App
