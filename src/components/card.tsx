import React from "react";

export default function Card(props: { background: string, title: string, href?: string }) {
    return <>
        <div className="card" style={ { backgroundImage: `url(${props.background})` } }>
            <a className="card-link" href={ props.href ?? '' }>
                <h4 className="card-title" >{ props.title }</h4>
            </a>
        </div>
    </>
}