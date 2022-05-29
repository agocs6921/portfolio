import React, { useEffect, useRef } from "react"
import * as THREE from "three"
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js"
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader.js"
import * as TREEMODEL from "../misc/tree"

export default function Background() {
    let ref = useRef()

    useEffect(() => {
        const deg2rad = (deg: number) => deg * (Math.PI/180)
        const rad2deg = (rad: number) => rad * (180/Math.PI)

        const CAMERA = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight)
        CAMERA.position.set(0, 0, 20)
        const SCENE = new THREE.Scene()

        const RENDERER = new THREE.WebGLRenderer({ antialias: true })
        RENDERER.setSize(window.innerWidth, window.innerHeight)
        RENDERER.setAnimationLoop((time) => {
            RENDERER.render(SCENE, CAMERA)

            update(time)
        })
        //@ts-ignore
        ref.current.appendChild(RENDERER.domElement)

        window.addEventListener("resize", () => {
            CAMERA.aspect = window.innerWidth / window.innerHeight
            CAMERA.updateProjectionMatrix()

            RENDERER.setSize(window.innerWidth, window.innerHeight)
        })

        SCENE.add((() => {
            let direct = new THREE.DirectionalLight(new THREE.Color(0xf9d71c), 8)
            let angle = deg2rad(45)

            direct.rotation.set(angle, angle, angle)

            return direct
        })())
        SCENE.add(new THREE.AmbientLight(new THREE.Color(0x87ceeb), 8))
        SCENE.add(new THREE.Mesh(new THREE.BoxGeometry(1000, 1000, 1000), new THREE.MeshBasicMaterial({ side: THREE.BackSide, color: 0x87ceeb })))

        const TREE = (() => {
            const OBJLOADER = new OBJLoader()
            const MTLLOADER = new MTLLoader()

            let mat = MTLLOADER.parse(TREEMODEL.material, "")
            mat.preload()
            OBJLOADER.setMaterials(mat)

            return OBJLOADER.parse(TREEMODEL.geometry)
        })()
        TREE.position.y = -12
        SCENE.add(TREE)

        function update(time: number) {
            TREE.rotation.y = deg2rad(time / 50)
        }

    }, [])

    return <div ref={ref} className="background"/>
}