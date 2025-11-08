import * as THREE from 'three'


//                                                       --Create scene--
const scene = new THREE.Scene();
//                                        (fov, aspect-ratio,                        near, far)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const canvas = document.querySelector('#c');

const renderer = new THREE.WebGLRenderer({antialias: true, canvas});

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);



//                                                       --Create mesh (visible object)--
const geometry =  new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshPhongMaterial({color: 0xff6347});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

//                                                       --Create mesh instances--
// instances function
function makeInstance(geometry_, color_, x_position) {
    const material = new THREE.MeshPhongMaterial({color: color_});

    const cube = new THREE.Mesh(geometry_, material);

    scene.add(cube);

    cube.position.x = x_position;

    return cube;
}

const cubes = [
    makeInstance(geometry, 0xFFFD37, 2),
    makeInstance(geometry, 0x1e90ff, -2),
    makeInstance(geometry, 0x234f1e, 4),
    makeInstance(geometry, 0xee82ee, -4)
]





camera.position.z = 5;
camera.lookAt(scene.position);

//                                                       --Create lighting--
const color = 0xffffff;
const intensity = 3
const light = new THREE.DirectionalLight(color, intensity);
light.position.set(-1, 2, 4);
scene.add(light);




//                                                       --Render animation loop--
function animate() {

    cubes.forEach((cubeInstance, index) => {
        // We use the index to make each cube rotate at a slightly different rate
        // for a more dynamic and visually distinct animation.
        const rotationSpeed = 0.01 + (index * 0.005);
        
        // Rotate around the X-axis
        cubeInstance.rotation.x += rotationSpeed; 
        
        // Rotate around the Y-axis
        cubeInstance.rotation.y += rotationSpeed;
    });

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);
