import { BrowserRouter } from "react-router-dom"
import { Home, About, Expertise, Contact, Footer } from "./components"

const App = () => {
  return (
    <BrowserRouter>
      <Home />
      <About />
      <Expertise />
      <Contact />
      <Footer />
    </BrowserRouter>
  )
}

export default App
