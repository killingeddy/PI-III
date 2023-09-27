import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader";
import React, { useRef, useEffect } from "react";
import { AnimationMixer } from "three";
import * as THREE from "three";

export default function Object({ model, objPosition, color, wPerspective, hPerspective, timeScale }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
        renderer.setSize(wPerspective ? wPerspective : window.innerWidth, hPerspective ? hPerspective : window.innerHeight);

        const controls = new OrbitControls(camera, renderer.domElement);

        controls.enableZoom = false;

        const light = new THREE.DirectionalLight(parseInt(color), 1);
        light.position.set(1, 1, 1).normalize();
        scene.add(light);

        const loader = new GLTFLoader();
        var mixer = new AnimationMixer();

        loader.load(`/models/${model}.glb`, (gltf) => {
            const model = gltf.scene;
            scene.add(model);
            if (gltf.animations && gltf.animations.length > 0) {
                const animationMixer = new AnimationMixer(gltf.scene);
                gltf.animations.forEach((clip) => {
                    animationMixer.clipAction(clip).play();
                    animationMixer.timeScale = timeScale ? timeScale : 1;
                });
                mixer = animationMixer;
            } else {
                console.warn("No animations found in the GLB model.");
            }
        });

        camera.position.set(parseInt(objPosition.split(',')[0]), parseInt(objPosition.split(',')[1]), parseInt(objPosition.split(',')[2]));

        const animate = () => {
            requestAnimationFrame(animate);
            controls.update();
            mixer.update(0.01)
            if (scene && camera && renderer) {
                renderer.render(scene, camera);
            }
        };

        animate();
    }, [objPosition, model, color, wPerspective, hPerspective, timeScale]);

    return <canvas ref={canvasRef} />;
}
