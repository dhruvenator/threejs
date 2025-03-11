import * as THREE from 'https://unpkg.com/three@0.162.0/build/three.module.js';
import { OrbitControls } from "https://unpkg.com/three@0.112/examples/jsm/controls/OrbitControls.js";
import { FontLoader } from 'https://cdn.jsdelivr.net/npm/three@0.174.0/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'https://cdn.jsdelivr.net/npm/three@0.174.0/examples/jsm/geometries/TextGeometry.js';
import dat from "https://cdn.skypack.dev/dat.gui";
import { RoundedBoxGeometry } from 'https://cdn.jsdelivr.net/npm/three@0.174.0/examples/jsm/Addons.js';
// import { MUXNEW, layerProperties } from './data.js';
import INVD4NEW from '/Users/dhruvix/Documents/threejs/3DINVD4_1_RT_6_1.json' assert { type: 'json' };

const layerProperties = INVD4NEW.layerProperties;
const layerMap = INVD4NEW.layers;
const polygons = INVD4NEW.polygons;
const cellBbox = polygons[layerMap["10000/0"][0]].position;

// Defining constants that will be used throughout the script
const constants = {
    width: window.innerWidth,
    height: window.innerHeight,
    offsetScale: 1,
    greyColor: "#DEDEDE",
    highlightOpacity: 1,
    segments: 10,
    rounding: 7,
    nanoNum: 1
};

// Initializing certain neccessary items
const scene = new THREE.Scene();
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const camera = new THREE.PerspectiveCamera(75, constants.width / constants.height, 1, 5000);
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
const frontLight = new THREE.DirectionalLight(0xffffff, 1);
const backLight = new THREE.DirectionalLight(0xffffff, 1);
const lightTargetObject = new THREE.Object3D();
const gui = new dat.GUI();
let renderer = new THREE.WebGLRenderer({ antialias: true, logarithmicDepthBuffer: true, localClippingEnabled: true });

// Arrays to store the objects created in the scene
let sheets = [];
let boxes = [];
let diamonds = [];
let cylinders = [];
let textMeshes = [];
let z_start = 0;
let z_end = 0;

// Get z-axis start and end position
Object.keys(layerProperties).forEach(key => {
    let obj = layerProperties[key];
    z_start = Math.min(z_start, obj.offset);
    z_end = Math.max(z_start, obj.offset + obj.height);
});

// GUI parameters
const nanoSheetsParam = {
    Sheets: constants.nanoNum.toString()
}
const roundingParam = {
    Roundness: constants.rounding.toString()
}
gui.add(roundingParam, "Roundness").onChange(value => {
    constants.rounding = value;
    clearGeometry();
    addShapes();
});
gui.add(nanoSheetsParam,"Sheets").onChange(value => {
    constants.nanoNum = value;
    clearGeometry();
    addShapes();
});
const layerFolder = gui.addFolder('Layers');
const conductingFolder = gui.addFolder('Conducting Paths');
const layerDictionary = {};

// Clipping planes for the renderer
const clippingPlaneX = new THREE.Plane(new THREE.Vector3(1, 0, 0), -cellBbox[0][0] + 5);
const clippingPlaneY = new THREE.Plane(new THREE.Vector3(0, 1, 0), -cellBbox[0][1] + 5);
const clippingPlaneZ = new THREE.Plane(new THREE.Vector3(0, 0, 1), -z_start);
const clippingPlanes = [clippingPlaneX, clippingPlaneY, clippingPlaneZ];
gui.add(clippingPlaneX, 'constant', -cellBbox[1][0] - 5, -cellBbox[0][0] + 5).name('X Clipping Position').onChange(updateClippingPlanes);
gui.add(clippingPlaneY, 'constant', -cellBbox[1][1] - 5, -cellBbox[0][1] + 5).name('Y Clipping Position').onChange(updateClippingPlanes);
gui.add(clippingPlaneZ, 'constant', -z_end, -z_start).name('Z Clipping Position').onChange(updateClippingPlanes);

document.addEventListener('DOMContentLoaded', () => {
    // Camera is positioned at the center of the cell bounding box, 1000 units directly above
    camera.position.x = (cellBbox[0][0] + cellBbox[1][0]) / 2;
    camera.position.y = (cellBbox[0][1] + cellBbox[1][1]) / 2;
    camera.position.z = z_end + 500;
    scene.add(camera);

    // Change background color
    scene.background = new THREE.Color( constants.greyColor );

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
    addShapes();
    populateGUILayers();
    
    // Render everything on the canvas
    renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('canvas.webgl'), antialias: true, logarithmicDepthBuffer: true, localClippingEnabled: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    updateClippingPlanes();

    const cameraControls = new OrbitControls(camera, renderer.domElement);
    cameraControls.target.set((cellBbox[0][0] + cellBbox[1][0]) / 2, (cellBbox[0][1] + cellBbox[1][1]) / 2, (z_start + z_end) / 2);
    cameraControls.enablePan = false;
    cameraControls.enableDamping = true;
    window.addEventListener('click', highlightObjects, false);

    animate();

    function animate() {
        requestAnimationFrame(animate);
        cameraControls.update();
        renderer.render(scene, camera);
    }
    
});

//Function to add layer names to the GUI layers folder
function populateGUILayers() {
    const layerNames =  Object.keys(layerDictionary);
    layerNames.forEach(layerName => {
        console.log(`Adding layer ${layerName} to GUI`);
        const layerVariables = {
            showMesh: true
        };
        layerFolder.add(layerVariables, 'showMesh').name(layerName).onChange(value => {
            layerDictionary[layerName].forEach(shape => {
                shape.visible = value;
            });
        })
    });
}

// Function to add values to a specific layer
function addValueToLayer(layerNumber, value) {
    if (!layerDictionary[layerNumber]) {
        layerDictionary[layerNumber] = []; // Initialize the layer's array if it doesn't exist
    }
    layerDictionary[layerNumber].push(value);
}

function updateClippingPlanes() {
    renderer.clippingPlanes = clippingPlanes;
    renderer.localClippingEnabled = true;
}

// Helper functions for the animation

// Function to remove all objects from the scene
function clearGeometry() {
    sheets.forEach(sheet => {
        scene.remove(sheet);
    });
    sheets = []; 
    boxes.forEach(box => {
        scene.remove(box);
    });
    boxes = [];
    diamonds.forEach(diamond => {
        scene.remove(diamond);
    });
    diamonds = [];
    cylinders.forEach(cylinder => {
        scene.remove(cylinder);
    });
    cylinders = [];
    textMeshes.forEach((textMesh) => {
        scene.remove(textMesh);
    });
    textMeshes = [];
    console.log('Removed Geometries');
}

// Function to handle multiple sheets
const createSheets = (coords, heightPos, layerProperties, numSheets) => {
    const [start, end] = coords;
    const distance = 1.5 * (heightPos[1] - heightPos[0]);
    const nanoOffset = (heightPos[1] - heightPos[0]) ;
    // Loop through to create 'numSheets' sheets
    for (let i = 0; i < numSheets; i++) {
        // Create the geometry for the sheet
        const geometry = new RoundedBoxGeometry(end[0] - start[0], end[1] - start[1], heightPos[1] - heightPos[0], constants.segments, constants.rounding);
        // Material settings
        const material = new THREE.MeshStandardMaterial({ color: layerProperties.color, transparent: true, opacity: layerProperties.opacity, metalness: 0, roughness: 1 });
        // Create the mesh and set the position of the sheet
        const nano = new THREE.Mesh(geometry, material);
        nano.position.set(
            (start[0] + end[0]) / 2,
            (start[1] + end[1]) / 2,
            (heightPos[0] + heightPos[1]) / 2 + (i * distance) + nanoOffset
        );
        // Add to the scene and store the object in the array for future manipulation
        scene.add(nano);
        sheets.push(nano);
    }
};

const createBox = (coords, heightPos, layerProperties, numRounding) => {
    const [start, end] = coords;
    const geometry = new RoundedBoxGeometry(end[0] - start[0], end[1] - start[1], heightPos[1] - heightPos[0], constants.segments, numRounding);
    //const geometry = new THREE.BoxGeometry(end[0] - start[0], end[1] - start[1], heightPos[1] - heightPos[0]);
    const material = new THREE.MeshStandardMaterial({ color: layerProperties.color, transparent: true, opacity: layerProperties.opacity, metalness: 0, roughness: 1 });
    const box = new THREE.Mesh(geometry, material);
    box.position.set(
        (start[0] + end[0]) / 2,
        (start[1] + end[1]) / 2,
        (heightPos[0] + heightPos[1]) / 2
    );
    scene.add(box);
    addValueToLayer(layerProperties.name, box);
    boxes.push(box);
};

const createCylinder = (coords, heightPos, layerProperties) => {
    const [start, end] = coords;
    const r = 20;
    const geometry = new THREE.CylinderGeometry(r, r, end[0] - start[0], 24);
    const material = new THREE.MeshBasicMaterial({ color: layerProperties.color, transparent: true, opacity: layerProperties.opacity });
    const cylinder = new THREE.Mesh(geometry, material);
    cylinder.rotation.z = Math.PI / 2;
    cylinder.position.set(
        (start[0] + end[0]) / 2,
        (start[1] + end[1]) / 2,
        (heightPos[0] + heightPos[1]) / 2
    );
    scene.add(cylinder);
    cylinders.push(cylinder);
};

const createDiamond = (coords, heightPos, layerProperties) => {
    const [start, end] = coords;
    const r = (heightPos[1] - heightPos[0]) / 2;
    const geometry = new THREE.CylinderGeometry(r, r, end[0] - start[0], 4);
    const material = new THREE.MeshStandardMaterial({ color: layerProperties.color, transparent: true, opacity: layerProperties.opacity, metalness: 0, roughness: 1 });
    const diamond = new THREE.Mesh(geometry, material);
    diamond.rotation.z = Math.PI / 2;
    diamond.position.set(
        (start[0] + end[0]) / 2,
        (start[1] + end[1]) / 2,
        (heightPos[0] + heightPos[1]) / 2
    );
    scene.add(diamond);
    diamonds.push(diamond);
};

const createText = (text, textPos, heightOffset) => {
    const loader = new FontLoader();
    const [x, y] = textPos;
    loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {
        const textGeometry = new TextGeometry(text, {
            font: font,
            size: 20,
            depth: 1
        });
        const textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
        const textMesh = new THREE.Mesh(textGeometry, textMaterial);
        textMesh.position.set(x, y, heightOffset);
        scene.add(textMesh);
        textMeshes.push(textMesh);
    });
};

const addShapes = () => {
    let numSheets = constants.nanoNum;
    let numRounding = constants.rounding;
    for (let layerKey in layerMap) {
        let layerPolygons = layerMap[layerKey];
        layerPolygons.forEach(polygonId => {
            let polygon = polygons[polygonId];
            if (polygon.layerNumber in layerProperties) {
                const layerProps = layerProperties[polygon.layerNumber];
                let offsetStart = constants.offsetScale * layerProps.offset;
                let offsetEnd = constants.offsetScale * (layerProps.offset + layerProps.height);
                const heightPos = [offsetStart, offsetEnd];
                if (layerProps.shape === 'box') {
                    createBox(polygon.position, heightPos, layerProps, numRounding);
                }
                else if (layerProps.shape === 'diamond') {
                    createDiamond(polygon.position, heightPos, layerProps);
                }
                else if (layerProps.shape === 'cylinder') {
                    createCylinder(polygon.position, heightPos, layerProps);
                }
                else if (layerProps.shape === 'nanosheet') {
                    createSheets(polygon.position, heightPos, layerProps, numSheets);
                }
            }
            else if (polygon.type === "text"){
                if (polygon.layerNumber.replace(/\/\d+$/, "/0") in layerProperties) {
                    const layerProps = layerProperties[polygon.layerNumber.replace(/\/\d+$/, "/0")];
                    let offsetEnd = constants.offsetScale * (layerProps.offset + layerProps.height);
                    createText(polygon.string, polygon.position, offsetEnd);
                }
            } 
            else {
                console.log(`Layer ${polygon.layerNumber} is ignored`);
            }
        });
    }
};

function getObjectsTouchingBFS(selectedObject, maxLevel = 2) {
    const touchingObjects = [selectedObject];
    const checkedObjects = new Set();
    checkedObjects.add(selectedObject);
    const objectQ = [[selectedObject, 0]];
    let level = 0
    let currObj = null;
    while (objectQ.length > 0 && level < maxLevel) {
        [currObj, level] = objectQ.shift();
        const selectedBox = new THREE.Box3().setFromObject(currObj);
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