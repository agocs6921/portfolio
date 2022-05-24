import React from "react"
import PlayIcon from "./PlayIcon"

export default function Modal(props: { onClose?: () => void } ) {
    function onClose(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        if (e.target !== e.currentTarget) return

        props.onClose()
    }

    return <>
        <div onClick={ onClose } className="modal">
            <div className="modal-body">
                <div className="modal-window" />

                <button className="modal-play-btn">
                    <PlayIcon style={{ width: "75%", height: "75%" }} />
                </button>
            </div>
        </div>
    </>
}