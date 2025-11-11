# Tier 1: Core Setup & Minimal Response (1–7)

    Scene Initialization (Easy) 🏗️: Create a basic three.js setup: a Scene, a PerspectiveCamera, a WebGLRenderer, and a single BoxGeometry centered at (0, 0, 0).

    Full Viewport (Easy) 🖥️: Initialize the renderer and canvas to occupy 100% of the browser window (window.innerWidth, window.innerHeight).

    Basic Controls (Easy) 🕹️: Add OrbitControls and ensure they are updated in the render loop to allow user interaction.

    Initial Distortion (Easy) 🚩: Attach a basic resize handler (window.onresize) that only calls renderer.setSize(width, height). Observe and document the resulting visual stretch/distortion.

    Aspect Fix (Easy) ✅: Modify the resize handler to also update the camera.aspect property to fix the distortion.

    Projection Update (Easy) 📐: Realize the camera changes have no effect until the projection matrix is recalculated. Implement the necessary camera update method.

    DPI Optimization (Easy) 🌟: Set the renderer.setPixelRatio() property to window.devicePixelRatio once during initialization to ensure high-quality rendering on Retina screens.
