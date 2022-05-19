import React from "react";

export default function Contact(props: { icon: string, href: string }) {
    return <>
        <a href={ props.href }>
            <img style={{ width: "2rem", aspectRatio: "1/1" }} src={ props.icon } alt="" />
        </a>
    </>
}