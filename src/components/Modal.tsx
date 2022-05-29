import React, { useState } from "react"
import Show from "../utils/Show"
import PlayIcon from "./PlayIcon"

export default function Modal(props: { onClose?: () => void, preview?: string, demo?: JSX.Element } ) {
    const [ playing, setPlaying ] = useState(false)

    function onClose(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        if (e.target !== e.currentTarget) return

        setPlaying(false)

        props.onClose()
    }

    return <>
        <div onClick={ onClose } className="modal">
            <div className="modal-body">
                <div style={{ backgroundImage: `url(${props.preview})` }} className="modal-window">
                    <Show when={playing} >
                        { props.demo }
                    </Show>
                </div>

                <Show when={!playing}>
                    <button className="modal-play-btn">
                        <PlayIcon onClick={ () => setPlaying(true) } style={{ width: "75%", height: "75%" }} />
                    </button>
                </Show>
            </div>
        </div>
    </>
}