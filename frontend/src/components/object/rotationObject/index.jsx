import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import React, { useRef, useEffect } from "react";
import * as THREE from "three";

export default function ObjectRotation({ model, objPosition, color, wPerspective, hPerspective, timeScale }) {
    const canvasRef = useRef(null);
    const rotationSpeed = 0.01;

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
        renderer.setSize(1600, 900);

        const controls = new OrbitControls(camera, renderer.domElement);

        controls.enableZoom = false;

        const light = new THREE.DirectionalLight(parseInt(color), 1);
        light.position.set(0, 0, 1).normalize();
        scene.add(light);

        const loader = new GLTFLoader();

        loader.load(`/models/${model}.glb`, (gltf) => {
            const object = gltf.scene;
            scene.add(object);

            object.rotation.y = 0;
        });

        camera.position.set(parseInt(objPosition.split(',')[0]), parseInt(objPosition.split(',')[1]), parseInt(objPosition.split(',')[2]));

        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();

            scene.traverse((child) => {
                if (child.isMesh) {
                    child.rotation.y += rotationSpeed;
                }
            });

            renderer.render(scene, camera);
        };

        animate();
    }, [objPosition, model, color, wPerspective, hPerspective, timeScale]);

    return <canvas ref={canvasRef} />;
}
