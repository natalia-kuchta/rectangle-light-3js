import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene();
scene.add(new THREE.AxesHelper(5))

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();

new OrbitControls(camera, renderer.domElement)


renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
const geometry = new THREE.BoxGeometry( 2, 2, 2 );
const material = new THREE.MeshStandardMaterial( { color: 0x808080 } );
const cube = new THREE.Mesh( geometry, material );
cube.position.z = -2;
scene.add( cube );
camera.position.z = 5;

[
    // [0,3],
    [3,0],
    // [0,-3],[-3,0],[3,3],[3,-3],[-3,-3],[-3,3]
].forEach(([x,y]) => {
    const light = new THREE.PointLight()
    light.position.x = x
    light.position.y = y
    scene.add(light)
    const helper = new THREE.PointLightHelper(light)
    scene.add(helper)
})

// const ambientLight = new THREE.AmbientLight()
// scene.add(ambientLight)

let index = 0;

function animate() {
    requestAnimationFrame(animate);


    // index+= 0.00001;

    // Rotate cube (Change values to change speed)
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    camera.rotateZ(0.001)

    renderer.render(scene, camera);
}

animate()