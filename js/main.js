import * as THREE from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
let targetObject = null;

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls( camera, renderer.domElement );

const ambientLight = new THREE.AmbientLight(0x404040, 30)
scene.add(ambientLight)

const spotLight = new THREE.SpotLight(0xffffff, 30)
spotLight.position.set(0, 4, 0)
scene.add(spotLight)

const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
//scene.add( cube );

const gltfLoader = new GLTFLoader()
const url = './gltf/monkey.gltf';
gltfLoader.load(url, (gltf) => {
  const root = gltf.scene;
  scene.add(root);
  });

camera.position.z = 5;

function animate() {

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render( scene, camera );

}