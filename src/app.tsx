import React from "react"
import { createRoot } from "react-dom/client"
import Background from "./components/background"
import Logo from "./components/logo"
import Card from "./components/card"
import Contact from "./components/contact"

function App() {
    return <>
        <Background/>
        <header>
            <Logo />
            <nav className="navbar">
                <ul>
                    <li><a className="btn" href="#about">Rólam</a></li>
                    <li><a className="btn" href="#projects">Projektek</a></li>
                    <li><a className="btn" href="#contacts">Elérhetőség</a></li>
                </ul>
            </nav>
        </header>
        <main>
            <section id="about">
                <div>
                    <h1>Agócs Kevin</h1>
                    <h2>Videojáték-, webfejlesztő és programozó</h2>
                </div>
            </section>
            <section id="projects">
                <h1>Projektek</h1>
                <div className="grid">
                    <Card title="Béla labirintus" background="./img/bela-maze.png" href="https://github.com/agocs6921/bela-maze" />
                </div>
            </section>
            <section id="contacts">
                <Contact href="mailto:ismeretlen1024@gmail.com" icon="./img/email.svg" />
                <Contact href="https://github.com/agocs6921/" icon="./img/github.svg" />
            </section>
        </main>
        <footer>

        </footer>
    </>
}

createRoot(document.querySelector("#root")).render(<App/>)