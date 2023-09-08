import React, { useRef, useEffect, useState, useCallback } from "react";
import styles from "./styles.module.scss";

export default function WebgiViewer() {
    const canvasRef = useRef(null);
    const [webgi, setWebgi] = useState(null);

    const setupViewer = useCallback(async () => {
        if (!webgi) return;
        const viewer = new webgi.ViewerApp({
            canvas: canvasRef.current,
        });

        const camera = viewer.scene.activeCamera;
        const position = camera.position;
        const target = camera.target;

        await viewer.addPlugin(webgi.GBufferPlugin)
        await viewer.addPlugin(new webgi.ProgressivePlugin(32))
        await viewer.addPlugin(new webgi.TonemapPlugin(true))
        await viewer.addPlugin(webgi.GammaCorrectionPlugin)
        await viewer.addPlugin(webgi.SSRPlugin)
        await viewer.addPlugin(webgi.SSAOPlugin)
        await viewer.addPlugin(webgi.BloomPlugin)

        viewer.renderer.refreshPipeline();

        await viewer.load("/phone.glb");

        viewer.getPlugin(webgi.TonemapPlugin).config.clipBackground = true;

        viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: true });

        window.scrollTo(0, 0);

        let needsUpdate = true;

        viewer.addEventListener("preFrame", () => {
            if (needsUpdate) {
                camera.positionTargetUpdated(true);
                needsUpdate = false;
            }
        });
    }, [webgi]);

    useEffect(() => {
        const { ViewerApp, AssetManagerPlugin, TonemapPlugin, GBufferPlugin, ProgressivePlugin, GammaCorrectionPlugin, SSRPlugin, SSAOPlugin, BloomPlugin } = require("webgi");
        setWebgi({ ViewerApp, AssetManagerPlugin, TonemapPlugin, GBufferPlugin, ProgressivePlugin, GammaCorrectionPlugin, SSRPlugin, SSAOPlugin, BloomPlugin });
    }, []);

    useEffect(() => {
        if (!webgi) return;
        setupViewer();
    }, [webgi, setupViewer]);

    return (
            <canvas
                className={styles.webgicanvas}
                ref={canvasRef}
            />
    );
}
