import { Outlet } from "react-router-dom"
import Navbar from "./Components/Navbar"
import "./App.css"


function App() {

  return (

    <div style = {{margin: 0, padding: 0}}>

      <Navbar />
      <Outlet />
    </div>



  )
}

export default App
