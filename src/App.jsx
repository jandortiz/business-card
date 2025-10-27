import "./App.css"

import ProfileImage from "./components/ProfileImage"
import Description from "./components/Description"
import About from "./components/About"
import Interests from "./components/Interests"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="app-div">
      <ProfileImage />
      <Description />
      <About />
      <Interests />
      <Footer />
    </div>
  )
}