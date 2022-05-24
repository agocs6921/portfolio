import React from "react"

export default function Show(props: { children: JSX.Element[] | JSX.Element, when: boolean }) {
    return <>
        { props.when ? props.children : <></> }
    </>
}