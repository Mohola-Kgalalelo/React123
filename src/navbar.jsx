import React, { useState } from 'react'
import './App.css'

function Navbar() {
    const [nav, setNav] = useState(0)

    return (
        <>
        <div className="navbar">
            <button className="button1"><a href="https://tribute123.netlify.app/"><p>Tribute Page Project</p></a></button>
            <button className="button2"><a href="https://palindromecheck124.netlify.app/"><p>Palindrome Checker Project</p></a></button>
            <button className="button3"><a href="https://documentation-page123.netlify.app/"><p>Technical documentation Project</p></a></button>
        </div>
        </>
    )
}

export default Navbar