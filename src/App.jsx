import Header from "./components/Header/Header"
import Hero from "./components/Hero/Hero"
import SectionSliders from "./components/SectionSliders/SectionSliders"
import CuadriculaFiltros from "./components/CuadriculaFiltros/CuadriculaFiltros"
import NuestraHistoria from "./components/nuestraHistoria/NuestraHistoria"
import EmailSection from "./components/EmailSection/EmailSection"
import Footer from "./components/Footer/Footer"

import "./animations/animations.css";

function App() {
  
  return (
    <>
      <Header/>
      <Hero/>
      <SectionSliders titulo="Novedades" id="novedades"/>
      <SectionSliders titulo="Destacados" id="destacados"/>
      <SectionSliders titulo="Ofertas" id="ofertas"/>
      <CuadriculaFiltros/>
      <NuestraHistoria/>
      <EmailSection/>
      <Footer/>
    </>
  )
}

export default App
