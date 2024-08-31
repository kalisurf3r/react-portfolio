import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import './global.css'

function App() {

  return (
    <>
    <Navbar />
    <main className="mx-3 bg-black">
      <Outlet />
    </main>
    <Footer />
    </>
  )
}

export default App
