import * as THREE from 'three'

// scene
const scene = new THREE.Scene();

// camera
const camera = new THREE.PerspectiveCamera();
camera.position.z = 5;

// renderer
const renderer = new THREE.WebGLRenderer(75, window.innerWidth/window.innerHeight, 0.1, 1000);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


// mesh
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: 0xffffff});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// animate function
function animate() {

    cube.position.x += 0.1;
    cube.position.y += 0.1;
    cube.position.z += 0.1;

    renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);
