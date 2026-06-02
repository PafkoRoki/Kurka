import { useState } from 'react'
import reactLogo from './assets/react.svg'
import CardNav from './components/CardNav'
import Footer from './components/Footer'
import ProjectTile from "./components/ProjectTile";
import logo from './assets/logo.svg'

import './App.css'

function App() {

  const items = [
    {
      label: "About",
      bgColor: "rgb(252, 173, 86)",
      textColor: "#f0f0f0",
      links: [
        { label: "OPIS LOKALIZACJI", href: "/Lagoon/#info" },
        { label: "SPIS DZIAŁEK", href: "/Lagoon/#spis" },
        { label: "DLA DEVELOPERÓW", href: "/Lagoon/#dev" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "rgb(140, 214, 90)",
      textColor: "#f0f0f0",
      links: [
        { label: "MAPA INTERAKTYWNA", href: "/Lagoon/#map" },
        { label: "MODEL 3D", href: "/Lagoon/#model" }
      ]
    },
    {
      label: "Contact",
      bgColor: "rgb(112, 208, 220)", 
      textColor: "#f0f0f0",
      links: [
        { label: "790 820 114", href: "tel:+48790820114" },
        { label: "EMAIL ✉", href: "mailto:eranpro@wp.pl" }
      ]
    }
  ];

  return (
    <>
      <header className="header">
        
    <CardNav
      logo={logo}
      logoAlt="Company Logo"
      items={items}
      baseColor="hsla(0, 0%, 100%, 0.35)"
      menuColor="#2d2d2d"
      buttonBgColor="#f0f0f000"
      buttonTextColor="#f0f0f000"
      ease="power3.out"
      theme="dark"
      />

      </header>

<section className="hero-section" id="main">
    <h1>AK</h1>
</section>

<section className="section" id="portfolio">
    <h1>PROJEKTY</h1>
</section>
      <ProjectTile />

      <footer
        className="footer"
        id="contact"
      >

        <Footer />

      </footer>

    </>
  )
}

export default App
