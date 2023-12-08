import { BrowserRouter } from "react-router-dom"
import { Navbar, Home, About } from "./components"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <About />
    </BrowserRouter>
  )
}

export default App
