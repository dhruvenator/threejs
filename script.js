import * as THREE from 'three';
import { MUX21X1Data, INVD4Data, DFFSRData, MUXNEW,layerProperties } from './data.js';
import { OrbitControls } from "https://unpkg.com/three@0.112/examples/jsm/controls/OrbitControls.js";
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { OBJExporter } from 'three/addons/exporters/OBJExporter.js';
import { GUI } from 'dat.gui';
import { RoundedBoxGeometry } from 'three/examples/jsm/Addons.js';
// import NewMux from "/Users/dhruvix/Documents/twod/mux_json_5/MUX21X1_1_RT_5_360.json" assert {type: "json"};

// Defining constants that will be used throughout the script
const constants = {
    width: window.innerWidth,
    height: window.innerHeight,
    offsetScale: 1,
    greyColor: 0xDEDEDE,
    highlightOpacity: 1
};
const cellData = MUXNEW;

// Initializing certain neccessary items
const scene = new THREE.Scene();
const clock = new THREE.Clock();
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const camera = new THREE.PerspectiveCamera(75, constants.width / constants.height,1,5000);
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
const frontLight = new THREE.DirectionalLight(0xffffff, 1);
const backLight = new THREE.DirectionalLight(0xffffff, 1);
const lightTargetObject = new THREE.Object3D();
const exporter = new OBJExporter();

const clippingPlaneX= new THREE.Plane(new THREE.Vector3(1,0,0),-cellData.cellBbox[0][0]+5);
// Create clipping planes
const clippingPlaneY = new THREE.Plane(new THREE.Vector3(0, 1, 0), -cellData.cellBbox[0][1]+5);  // Y-axis clipping
const clippingPlaneZ = new THREE.Plane(new THREE.Vector3(0, 0, 1), 500);  // Z-axis clipping
const gui=new GUI();
gui.add(clippingPlaneX, 'constant', -cellData.cellBbox[1][0]-5 , -cellData.cellBbox[0][0]+5).name('X Clipping Position').onChange(updateClippingPlanes);
gui.add(clippingPlaneY, 'constant', -cellData.cellBbox[1][1]-5 , -cellData.cellBbox[0][1]+5).name('Y Clipping Position').onChange(updateClippingPlanes);
gui.add(clippingPlaneZ, 'constant', -500, 500).name('Z Clipping Position').onChange(updateClippingPlanes);

// Event listeners for checkbox & slider controls
document.getElementById('clipX').addEventListener('change', toggleClipX);
document.getElementById('clipY').addEventListener('change', toggleClipY);
document.getElementById('clipZ').addEventListener('change', toggleClipZ);

document.getElementById('xClipSlider').addEventListener('input', (e) => {
    clippingPlaneX.constant = parseFloat(e.target.value);
    updateClippingPlanes();
});

document.getElementById('yClipSlider').addEventListener('input', (e) => {
    clippingPlaneY.constant = parseFloat(e.target.value);
    updateClippingPlanes();
});

document.getElementById('zClipSlider').addEventListener('input', (e) => {
    clippingPlaneZ.constant = parseFloat(e.target.value);
    updateClippingPlanes();
});

// Default state for clipping
let clipXEnabled = false;
let clipYEnabled = false;
let clipZEnabled = false;

function toggleClipX() {
    clipXEnabled = !clipXEnabled;
    document.getElementById('xClipSlider').disabled = !clipXEnabled;
    updateClippingPlanes();
}

function toggleClipY() {
    clipYEnabled = !clipYEnabled;
    document.getElementById('yClipSlider').disabled = !clipYEnabled;
    updateClippingPlanes();
}

function toggleClipZ() {
    clipZEnabled = !clipZEnabled;
    document.getElementById('zClipSlider').disabled = !clipZEnabled;
    updateClippingPlanes();
}

function updateClippingPlanes() {
    const planes = [clippingPlaneX,clippingPlaneY,clippingPlaneZ];
    // Update renderer's clipping planes
    renderer.clippingPlanes = planes;
    renderer.localClippingEnabled = true;
}
// Setup scene and renderer (Your existing setup)

const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('canvas.webgl') });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(render);

function render() {
    renderer.render(scene, camera);
}
updateClippingPlanes();
document.addEventListener('DOMContentLoaded', () => {
    // Camera is positioned at the center of the cell bounding box, 1000 units directly above
    camera.position.x = (cellData.cellBbox[0][0] + cellData.cellBbox[1][0]) / 2;
    camera.position.y = (cellData.cellBbox[0][1] + cellData.cellBbox[1][1]) / 2; // -450
    camera.position.z = 1000;
    scene.add(camera);

    // Lighting at the camera's position and behind the object
    scene.add(ambientLight);
    lightTargetObject.position.set(camera.position.x, camera.position.y, 0);
    scene.add(lightTargetObject);
    frontLight.position.set(camera.position.x, camera.position.y, camera.position.z);
    frontLight.target = lightTargetObject;
    scene.add(frontLight);
    backLight.position.set(camera.position.x, camera.position.y, -camera.position.z);
    backLight.target = lightTargetObject;
    scene.add(backLight);

    // Add the shapes that we create from each layer to the scene
    addShapes(cellData);

    // Render everything on the canvas
    const canvas = document.querySelector('canvas.webgl');
    // const renderer = new THREE.WebGLRenderer({
    //     canvas: canvas
    // });
    // renderer.setSize(constants.width, constants.height);
    // renderer.setAnimationLoop(render);
    const cameraControls = new OrbitControls(camera, renderer.domElement);
    cameraControls.target.set((cellData.cellBbox[0][0] + cellData.cellBbox[1][0]) / 2, (cellData.cellBbox[0][1] + cellData.cellBbox[1][1]) / 2, 0);
    window.addEventListener('click', highlightObjects, false);
    // // Enable clipping globally
    // renderer.clippingPlanes = [clippingPlane,clippingPlaneX];
    // renderer.localClippingEnabled = true;

    animate();

    // Helper functions for the animation
    function animate() {
        requestAnimationFrame(animate);
            // Move the clipping plane dynamically along the Y-axis
        // if (clippingPlane.constant > 2) clippingPlane.constant = -5; 
        render();
    }
    // function render() {
    //     var delta = clock.getDelta();
    //     cameraControls.update(delta);
    //     renderer.render(scene, camera);
    // }

    // const sceneData = exporter.parse(scene);
    // console.log(sceneData);
    // saveFile(sceneData, `${cellData.cellName}.obj`);
    // const dataURL = renderer.domElement.toDataURL("image/png");
    // const link = document.createElement("a");
    // link.href = dataURL;
    // link.download = 'MUX.png';
    // link.click();
});

const createBox = (coords, heightPos, layerProperties) => {
    const [start, end] = coords;
    const geometry = new RoundedBoxGeometry(end[0] - start[0], end[1] - start[1], heightPos[1] - heightPos[0],10,7);
    //const geometry = new THREE.BoxGeometry(end[0] - start[0], end[1] - start[1], heightPos[1] - heightPos[0]);
    const material = new THREE.MeshStandardMaterial({color: layerProperties.color, transparent: true, opacity: layerProperties.opacity, metalness:0, roughness: 1});
    const box = new THREE.Mesh(geometry, material);
    box.position.set(
        (start[0] + end[0]) / 2,
        (start[1] + end[1]) / 2,
        (heightPos[0] + heightPos[1]) / 2
    );
    scene.add(box);
};

const createCylinder = (coords, heightPos, layerProperties) => {
    const [start, end] = coords;
    const r = 20;
    const geometry = new THREE.CylinderGeometry(r, r, end[0] - start[0], 24); 
    const material = new THREE.MeshBasicMaterial({color: layerProperties.color, transparent: true, opacity: layerProperties.opacity}); 
    const cylinder = new THREE.Mesh(geometry, material);
    cylinder.rotation.z = Math.PI / 2;
    cylinder.position.set(
        (start[0] + end[0]) / 2,
        (start[1] + end[1]) / 2,
        (heightPos[0] + heightPos[1]) / 2
    );
    scene.add(cylinder);
};

const createDiamond = (coords, heightPos, layerProperties) => {
    const [start, end] = coords;
    const r = (heightPos[1]-heightPos[0])/2;
    const geometry = new THREE.CylinderGeometry(r, r, end[0] - start[0], 4);
    const material = new THREE.MeshStandardMaterial({color: layerProperties.color, transparent: true, opacity: layerProperties.opacity, metalness:0, roughness: 1}); 
    const diamond = new THREE.Mesh(geometry, material);
    diamond.rotation.z = Math.PI / 2;
    diamond.position.set(
        (start[0] + end[0]) / 2,
        (start[1] + end[1]) / 2,
        (heightPos[0] + heightPos[1]) / 2
    );
    scene.add(diamond);
};

const createText = (textData, heightOffset) => {
    const loader = new FontLoader();
    const [text, x, y] = textData;
    loader.load( 'https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function ( font ) {
        const textGeometry = new TextGeometry(text, {
            font: font,
            size: 20,
            depth: 1
        });
        const textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
        const textMesh = new THREE.Mesh(textGeometry, textMaterial);
        textMesh.position.set(x, y, heightOffset);
        scene.add(textMesh);
    });
};

const addShapes = (cellData) => {
    const layers = cellData.layers;
    for (let layerKey in layers) {
        const layer = layers[layerKey];
        if (layer.layerNumber in layerProperties) {
            const layerProps = layerProperties[layer.layerNumber]
            let offsetStart = constants.offsetScale * layerProps.offset;
            let offsetEnd = constants.offsetScale * (layerProps.offset + layerProps.height);
            const heightPos = [offsetStart, offsetEnd];
            if (layer.layerDT === 1) {
                layer.data.forEach(textData => {
                    createText(textData, offsetEnd);
                });
            }
            else if (layerProps.shape === 'box') {
                layer.data.forEach(coords => {
                    createBox(coords, heightPos, layerProps);
                });
            }
            else if (layerProps.shape === 'diamond') {
                layer.data.forEach(coords => {
                    createDiamond(coords, heightPos, layerProps);
                });
            }
            else if (layerProps.shape === 'cylinder') {
                layer.data.forEach(coords => {
                    createCylinder(coords, heightPos, layerProps);
                });
            }
        } else {
            console.log(`Layer ${layer.layerNumber} is ignored`);
        }
    }
};

function getObjectsTouchingBFS(selectedObject, maxLevel=2) {
    const touchingObjects = [selectedObject];
    const checkedObjects = new Set();
    checkedObjects.add(selectedObject);
    const objectQ = [[selectedObject, 0]];
    let level = 0
    let currObj = null;
    while (objectQ.length > 0 && level < maxLevel) {
        [currObj, level] = objectQ.shift();
        const selectedBox = new THREE.Box3().setFromObject(currObj);
        console.log(currObj, level);
        // Iterate through all objects in the scene
        scene.children.forEach(obj => {
            if (!checkedObjects.has(obj) && obj.isMesh) {
                // Create a bounding box for the current object
                const objectBox = new THREE.Box3().setFromObject(obj);
                // Check if the bounding boxes intersect
                if (selectedBox.intersectsBox(objectBox)) {
                    touchingObjects.push(obj);
                    checkedObjects.add(obj);
                    objectQ.push([obj, level + 1]);
                }
            }
        });
    }
    return touchingObjects;
}

function highlightObjects(event) {
    // Calculate mouse position in normalized device coordinates (-1 to +1) for both components.
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    // Calculate objects intersecting the ray.
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);
    // Reset the opacity of all objects in the scene
    scene.children.forEach(obj => {
        if (obj.isMesh) { // Check if the object is a mesh
            if (obj.originalColor !== undefined) {
                obj.material.color.set(obj.originalColor);
            } else {
                obj.originalColor = obj.material.color.getHex();
            }
        }
    });
    if (intersects.length > 0) {
        const touchingObjects = getObjectsTouchingBFS(intersects[0].object);
        console.log(`There are ${touchingObjects.length} intersected objects`, touchingObjects);
        // Set the opacity of non-intersected objects to 0.2
        scene.children.forEach(obj => {
            if (obj.isMesh && !touchingObjects.includes(obj)) {
                obj.material.color.set(constants.greyColor);
            }
        });
    }
}

function saveFile(text, filename) {
    const blob = new Blob([text], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    URL.revokeObjectURL(link.href);
}
// // Existing code ...
// var flipped=false;
// // Handle user input for moving the clipping plane
// document.addEventListener('keydown', (event) => {
//     const step = 0.5;  // The step value for moving the plane
//     var miny=-cellData.cellBbox[0][1];//75
//     var maxy=-cellData.cellBbox[1][1];//-525
//     var minx=-cellData.cellBbox[0][0];//30
//     var maxx=-cellData.cellBbox[1][0];//30
//     if (event.key === 'w') {  // Move the clipping plane up along the Y-axis
//         clippingPlane.constant -= step;
//     } else if (event.key === 's') {  // Move the clipping plane down along the Y-axis
//         clippingPlane.constant += step;
//     }
//     else if(event.key==='d'){
//         clippingPlaneX.constant-=step;
//     }
//     else if(event.key==='a'){
//         clippingPlaneX.constant+=step;
//     }
//     // Flip the clipping plane when thebar is pressed
//     if (event.key === ' ') {  // Spacebar key (flip the clipping plane)
//         clippingPlane.normal.negate();  // Flip the normal vector
//         clippingPlaneX.normal.negate();
//         console.log('Flipped Clipping Plane:', clippingPlane.normal);
//         flipped=!flipped;
//     }
//     console.log(`Min x= ${minx}`);
//     console.log(`Max x= ${maxx}`);
//     console.log(clippingPlaneX.constant);
//     // // Optional: Add limits to prevent it from going too far
//     if(flipped){
//         clippingPlane.constant = Math.min(clippingPlane.constant, -maxy); //525
//         clippingPlane.constant = Math.max(clippingPlane.constant, -miny); //-75 
//         clippingPlaneX.constant = Math.min(clippingPlaneX.constant,-maxx);
//         clippingPlaneX.constant=Math.max(clippingPlaneX.constant,-minx);       

//     }
//     else{
//         clippingPlane.constant = Math.min(clippingPlane.constant, miny);//75
//         clippingPlane.constant = Math.max(clippingPlane.constant, maxy);//-525
//         clippingPlaneX.constant = Math.min(clippingPlaneX.constant,minx);
//         clippingPlaneX.constant=Math.max(clippingPlaneX.constant,maxx);
//     }
// });

// Existing animation loop ...
