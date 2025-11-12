// const -> is block-scoped; it cannot be reassigned
// if const is used for an object, you cannot reasign that variable to a new object BUT you can alter the contents of the object itself
// it must be initialized at the time of declaration

// let -> is block-scoped; can be reassigned
// it does not have to be reassigned at the time of declaration —it's initialized to 'undefined'

// In summary, use const by default for any variable that won't be reassigned. 
// Use let only when you know the variable needs to be reassigned

import * as THREE from 'three'

// Scene
const scene = new THREE.Scene(); // you use 'new' when instatianting a new object -> you are calling a constructor function

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
};


// PerspectiveCamera
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height, 0.1, 1000);
camera.position.z = 5;


// WebGLRenderer
const renderer = new THREE.WebGLRenderer({
  antialias: true
});

renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);

// window resizing
window.addEventListener('resize', () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  
  camera.aspect = sizes.width / sizes.height;
  // must be called after updating the aspect ratio to apply the changes
  camera.updateProjectionMatrix();
  
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});


// single BoxGeometry centered at (0, 0, 0) -> geometry, material and mesh
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: 0xff0033});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Render or animation loop
let isMovingForward = true;
let isMovingSideways = true;

function animate() {
  
  cube.rotation.x += 0.001;
  cube.rotation.y += 0.001;

  // Use a variable for speed for industry-standard code
  const speed = 0.001; 
  const startZ = 5;
  const endZ = 10;

  const cubeSpeed = 0.001;
  const cubeXstart = 0;
  const cubeXfinish = 7;

  if (isMovingSideways) {
    cube.position.x += cubeSpeed;
    if (cube.position.x >= cubeXfinish) {
      isMovingSideways = false;
    }
  }
  else {
    cube.position.x -= cubeSpeed;
    if (cube.position.x <= cubeXstart) {
      isMovingSideways = true;
    }
  }


  if (isMovingForward) {
    camera.position.z += speed;
    
    // Switch direction when the maximum distance is reached
    if (camera.position.z >= endZ) {
      isMovingForward = false;
      }
    } 
  else {
      camera.position.z -= speed;

    // Switch direction when the minimum distance is reached
    if (camera.position.z <= startZ) {
      isMovingForward = true;
      }
    }

  // Log the position to the console for verification
  // console.log(`Current Z: ${camera.position.z.toFixed(2)}, Forward: ${isMovingForward}`);

  renderer.render(scene, camera);
};
renderer.setAnimationLoop(animate);
