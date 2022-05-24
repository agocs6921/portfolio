import React from "react";

export default function Card(props: { background: string, title: string, href?: string, setPreview: (_: string) => void, setModalVisible: (_: boolean) => void }) {
    function onClick() {
        props.setModalVisible(true)
        props.setPreview(props.background)
    }

    return <>
        <div className="card" style={ { backgroundImage: `url(${props.background})` } }>
            <div onClick={ onClick } className="card-body" style={{ cursor: "pointer" }}>
                <h4 className="card-title" >{ props.title }</h4>
            </div>
        </div>
    </>
}