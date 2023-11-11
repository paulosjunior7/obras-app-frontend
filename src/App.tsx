import { BrowserRouter } from "react-router-dom"
import { Router } from "./routes"
import Header from "./components/Header"
import Sidebar from "./components/Sidebar"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Sidebar>
          <Router />
        </Sidebar>
      </BrowserRouter >
    </>
  )
}

export default App
