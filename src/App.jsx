import React from "react";
import './App.css'
import Hero from './Components/Hero/Hero'
import Services from './Components/Services/Services'
import AOS from "aos";
import "aos/dist/aos.css";
import WhereToBuy from "./Components/Services/WhereToBuy";
import AppBanner from "./Components/Services/AppBanner";
import Footer from "./Components/Footer/Footer";
function App() {

  React.useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: 100,
      easing: "ease-in-cubic",
    });
  }, []);
  return (
    <>
    <main className=' overflow-x-hidden'>
      <Hero/>
      <Services/>
      <WhereToBuy/>
      <AppBanner/>
      <Footer/>
    </main>
    </>
  )
}

export default App
