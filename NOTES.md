# THREE.JS COURSE NOTES

The fundamental components of three.js
    1. Renderer
    2. Camera
    3. Scene

You pass a scene and a camera to the renderer and it, the renderer, draws the 3D scene that's inside the
*frustum* of the camera as a 2D image to an HTML canvas.

What's a *frustum*?
    It is the pyramid like region of space that is visible to the virtual camera.
    It's primary purpose in three.js is to perform *Frustum Culling*.

What's Frustum Culling?
    Is an optimization technique where the renderer checks if an object is -entirely outside- the camera's frustum.
    If an object is determined to be outside it is culled.
    This process significantly reduces the number of polygons the GPU has to process, leading to better performance
    and higher frame rates.

It is bounded by 6 clipping planes:
    1. Near plane -> Objects closer than this plane are not rendered ––they are clipped
    2. Far plane -> Objects farther away than this plane are not rendered ––they are clipped
    Four sides plane -> These form the sides of the pyramid.
    3. Left
    4. Right
    5. Top
    6. Bottom

The fundamentals of 3D rendering
    1. Geometries -> Shape
    2. Materials -> Look and feel
    3. Meshes -> is a shell or boundary model that defines the object's surface, not its internal volume

What is a shader?  <https://www.youtube.com/watch?v=3mfvZ-mdtZQ>
    A small, specialized program that runs entirely on your GPU to calculate the final appearance of graphics.

What is the rendering pipeline? <https://www.youtube.com/watch?v=7qUuzRY5YwI>
    Is the conceptual model that dictates the sequence of steps of graphics system,
    primarily the GPU, must execute to convert a 3D scene's data (models, lights, camera)
    into a final 2D image on your screen.
    Generally divided into three major stages: Application, Geometry and Rasterization

Application

Geometry

Rasterization

## PROJECT STARTER PACK

### Command Line 

    npm create vite@latest <project-name> *(no '<>')*
    npm install
    npm install three

### Erase boilerplate code on main.js and style.css

### main.js BOILERPLATE

    // main.js
    import * as THREE from 'three';

    // 1. Scene setup
    const scene = new THREE.Scene();

    // 2. Camera setup
    // PerspectiveCamera(field of view, aspect ratio, near, far)
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // Example: Create a spinning cube
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // 4. Render Loop (Animation)
    function animate() {
        requestAnimationFrame(animate);

        // Rotate the cube on every frame
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;

        renderer.render(scene, camera);
    }

    // Handle window resizing
    window.addEventListener('resize', () => {
        // Update aspect ratio and size on resize
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    animate();

## Lighting

## Animations

## How to load 3D models

## MODULE_1:TEXTURES
