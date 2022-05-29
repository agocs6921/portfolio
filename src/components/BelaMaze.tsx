import React, { useEffect, useRef } from "react";
import { generate } from "../misc/MazeGenerator";
import * as THREE from "three"
import BELA from "../misc/bela"

export default function BelaMaze() {
    const ref = useRef()
    const view = <div ref={ref} style={{ height: "100%" }} />

    useEffect(() => {
        const viewport = ref.current as HTMLDivElement

        const deg2rad = (deg: number) => deg * (Math.PI/180)
        const rad2deg = (rad: number) => rad * (180/Math.PI)

        const CAMERA = new THREE.PerspectiveCamera(90, viewport.offsetWidth / viewport.offsetHeight)
        const SCENE = new THREE.Scene()

        const RENDERER = new THREE.WebGLRenderer({ antialias: true })
        RENDERER.setSize(viewport.offsetWidth, viewport.offsetHeight) 
        viewport.appendChild(RENDERER.domElement) 
        
        let previousTime = new Date().getTime()
        RENDERER.setAnimationLoop(() => {
            update(new Date().getTime() - previousTime)
            
            RENDERER.render(SCENE, CAMERA) 

            previousTime = new Date().getTime()
        })        
        
        window.addEventListener("resize", updateRenderer)

        function updateRenderer() {
            CAMERA.aspect = viewport.offsetWidth / viewport.offsetHeight
            CAMERA.updateProjectionMatrix()

            RENDERER.setSize(viewport.offsetWidth, viewport.offsetHeight)
        }

        let degree = 0
        function update(delta: number) {            
            CAMERA.position.x = (x / 1.5) * Math.sin(deg2rad(degree)) + (x / 2)
            CAMERA.position.z = (y / 1.5) * Math.cos(deg2rad(degree)) + (y / 2)

            CAMERA.lookAt(new THREE.Vector3(x / 2, 0, y / 2))

            SKYBOX.position.set(CAMERA.position.x, CAMERA.position.y, CAMERA.position.z)

            degree += .5
        }

        const [x, y] = [8, 8]

        let maze = generate(x, y)
        
        CAMERA.position.y = ((x + y) / 2) * .5
        
        let susmak = new THREE.TextureLoader().load(BELA)

        const WALLMATERIAL = new THREE.MeshBasicMaterial({
            color: 0xffffff,
            map: susmak,
            side: THREE.DoubleSide
        })
        
        const WALLGEOMETRY = new THREE.PlaneGeometry(1, 1)

        const SKYBOX = new THREE.Mesh(new THREE.BoxGeometry(2000, 2000, 2000), new THREE.MeshBasicMaterial({
            color: 0xffffff,
            map: susmak,
            side: THREE.BackSide
        }))
        SCENE.add(SKYBOX)

        SCENE.add((() => {
            let floor = new THREE.Mesh(new THREE.PlaneGeometry(x, y), WALLMATERIAL)

            floor.position.x = x / 2 - .5
            floor.position.y = -.5
            floor.position.z = y / 2 - .5

            floor.rotation.x = deg2rad(90)

            return floor
        })())

        
        for (let i = 0; i < maze.length; i++) {
            let cell = maze[i]            
            let walls: THREE.Mesh[] = []
            
            if (cell.frontWall ) {
                let wall = new THREE.Mesh(WALLGEOMETRY, WALLMATERIAL)
                wall.position.set(cell.x, 0, cell.y - .5)
                walls.push(wall)
            }
            if ( cell.backWall ) {
                let wall = new THREE.Mesh(WALLGEOMETRY, WALLMATERIAL)
                wall.position.set(cell.x, 0, cell.y + .5)
                walls.push(wall)
            }
            if (cell.leftWall ) {
                let wall = new THREE.Mesh(WALLGEOMETRY, WALLMATERIAL)
                wall.position.set(cell.x - .5, 0, cell.y)
                wall.rotation.y = deg2rad(90)
                walls.push(wall)
            }
            if (cell.rightWall ) {
                let wall = new THREE.Mesh(WALLGEOMETRY, WALLMATERIAL)
                wall.position.set(cell.x + .5, 0, cell.y)
                wall.rotation.y = deg2rad(90)
                walls.push(wall)
            }
            
            SCENE.add(...walls)
        }
    }, [])

    return view
}