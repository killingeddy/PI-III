import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import React, { useRef, useEffect } from "react";
import styles from "./styles.module.scss";
import * as THREE from "three";

export default function ThreeJsViewer() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);

        const controls = new OrbitControls(camera, renderer.domElement);

        const light = new THREE.DirectionalLight(0x006994, 1);
        light.position.set(1, 1, 1).normalize();
        scene.add(light);

        const loader = new GLTFLoader();
        loader.load("/models/whale.glb", (gltf) => {
            const model = gltf.scene;
            scene.add(model);
        });

        camera.position.set(10, 0, -10);

        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            renderer.render(scene, camera);
        };

        animate();

        window.addEventListener("resize", () => {
            const newWidth = window.innerWidth;
            const newHeight = window.innerHeight;

            camera.aspect = newWidth / newHeight;
            camera.updateProjectionMatrix();

            renderer.setSize(newWidth, newHeight);
        });
    }, []);

    return <canvas className={styles.threejscanvas} ref={canvasRef} />;
}
