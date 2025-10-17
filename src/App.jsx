import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import { HashRouter } from 'react-router-dom'
import Navbar from './navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="main">
        <div id="navigation"><p className="nav1"><a href="#nav1" >Languages</a></p><p className="nav2"><a href="#nav2">Framework</a></p><p className="nav3"><a href="#nav3">Projects</a></p><p className="nav4"><a href="#nav4">Contact</a></p></div>
        <div className="photo" ><img src="Photos/Me.jpg" id="Me" />
        <h2 className="intro">I'm Kgalalelo Fortune Moholeng.A front-end web developer specializing in creating user friendly, interactive and appealing websites.</h2></div>
        <div id="nav1"><h3 className="languages">Markup and Programming Languages</h3></div><div className="icons"><img src="Icons/Html.png" id="Html"/></div><div className="icons2"><img src="Icons/Css.png" id="Css"/></div><div className="icons3"><img src="Icons/Javascript.png" id="Javascript"/></div>
        <div id="nav2"><h3 className="languages2">Framework</h3></div><div className="icons4"><img src="Icons/React.png" id="React"/></div>
        <div id="nav3"><h3 className="projects">Projects</h3></div>
        <div>        
        <div className="navbar">
        <button className="button2"><a href="https://palindromecheck124.netlify.app/"><p className="items">Palindrome Checker Project</p></a></button>
        <button className="button1"><a href="https://tribute123.netlify.app/"><p className="items">Tribute Page Project</p></a></button>
        <button className="button3"><a href="https://documentation-page123.netlify.app/"><p className="items">Technical documentation Project</p></a></button></div></div>
        <div id="nav4"><h3 className="about">Contact Me</h3></div>
        <div><div></div><p className="about1">Email: fortunemoholeng@gmail.com</p><p className="about2">Telephone: 0692162869</p></div>
        <form>




        </form>
      </div>
      
    </>
  )
}

export default App
