import { BrowserRouter } from "react-router-dom"
import { Navbar, Home, About, Expertise, Contact, Footer } from "./components"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <About />
      <Expertise />
      <Contact />
      <Footer />
    </BrowserRouter>
  )
}

export default App
