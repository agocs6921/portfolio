import React, { useState } from "react"
import { createRoot } from "react-dom/client"
import Background from "./components/Background"
import Logo from "./components/Logo"
import Card from "./components/Card"
import Contact from "./components/Contact"
import Modal from "./components/Modal"
import Show from "./utils/Show"
import BelaMaze from "./components/BelaMaze"

function App() {
    const [ modalVisible, setModalVisible ] = useState(false)
    const [ preview, setPreview ] = useState("")
    const [ demo, setDemo ] = useState(<></>)

    return <>
        <Background/>
        <Show when={modalVisible} >
            <Modal onClose={ () => setModalVisible(false) } {...{ preview, demo }} />
        </Show>
        <header>
            <Logo />
            <nav className="navbar">
                <ul>
                    <li><a className="nav-link" href="#about">Rólam</a></li>
                    <li><a className="nav-link" href="#projects">Projektek</a></li>
                    <li><a className="nav-link" href="#contacts">Elérhetőség</a></li>
                </ul>
            </nav>
        </header>
        <main>
            <section id="about">
                <div>
                    <h1>Agócs Kevin</h1>
                    <h2>Videojáték- és webfejlesztő, programozó</h2>
                </div>
            </section>
            <section id="projects">
                <Card
                    title="Béla labirintus"
                    background="./img/bela-maze.png"
                    href="https://github.com/agocs6921/bela-maze"
                    onClick={ () => {
                        setDemo(<BelaMaze/>)
                    } }
                    {...{ setModalVisible, setPreview }}
                />
            </section>
            <section id="contacts">
                
            </section>
        </main>
        <footer>
            <Contact href="mailto:ismeretlen1024@gmail.com" icon="./img/email.svg" />
            <Contact href="https://github.com/agocs6921/" icon="./img/github.svg" />
        </footer>
    </>
}

createRoot(document.querySelector("#root")).render(<App/>)