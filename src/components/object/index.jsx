import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import React, { useRef, useEffect } from "react";
import styles from "./styles.module.scss";
import * as THREE from "three";

export default function Object({ model, position, color }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);

        const controls = new OrbitControls(camera, renderer.domElement);

        controls.enableZoom = false;

        const light = new THREE.DirectionalLight(parseInt(color), 1);
        light.position.set(1, 1, 1).normalize();
        scene.add(light);

        const loader = new GLTFLoader();
        loader.load(`/models/${model}.glb`, (gltf) => {
            const model = gltf.scene;
            scene.add(model);
        });

        camera.position.set(parseInt(position.split(',')[0]), parseInt(position.split(',')[1]), parseInt(position.split(',')[2]));

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
    }, [position, model, color]);

    return <canvas className={styles.threejscanvas} ref={canvasRef} />;
}
