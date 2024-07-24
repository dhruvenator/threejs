import * as THREE from 'three';
import { MUX21X1Data, INVD4Data, layerProperties } from './data.js';
import { OrbitControls } from "https://unpkg.com/three@0.112/examples/jsm/controls/OrbitControls.js";
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { OBJExporter } from 'three/addons/exporters/OBJExporter.js';

// Defining constants that will be used throughout the script
const constants = {
    width: window.innerWidth,
    height: window.innerHeight,
    offsetScale: 10,
    greyColor: 0xDEDEDE,
    highlightOpacity: 1
};
const cellData = MUX21X1Data;

// Initializing certain neccessary items
const scene = new THREE.Scene();
const clock = new THREE.Clock();
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();
const camera = new THREE.PerspectiveCamera(75, constants.width / constants.height);
const ambientLight = new THREE.AmbientLight(0xffffff, 1);
const frontLight = new THREE.DirectionalLight(0xffffff, 1);
const backLight = new THREE.DirectionalLight(0xffffff, 1);
const lightTargetObject = new THREE.Object3D();
const exporter = new OBJExporter();

document.addEventListener('DOMContentLoaded', () => {
    // Camera is positioned at the center of the cell bounding box, 1000 units directly above
    camera.position.x = (cellData.cellBbox[0][0] + cellData.cellBbox[1][0]) / 2;
    camera.position.y = (cellData.cellBbox[0][1] + cellData.cellBbox[1][1]) / 2;
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
    const renderer = new THREE.WebGLRenderer({
        canvas: canvas
    });
    renderer.setSize(constants.width, constants.height);
    renderer.setAnimationLoop(render);
    const cameraControls = new OrbitControls(camera, renderer.domElement);
    cameraControls.target.set((cellData.cellBbox[0][0] + cellData.cellBbox[1][0]) / 2, (cellData.cellBbox[0][1] + cellData.cellBbox[1][1]) / 2, 0);
    window.addEventListener('click', highlightObjects, false);
    animate();

    // Helper functions for the animation
    function animate() {
        requestAnimationFrame(animate);
        render();
    }
    function render() {
        var delta = clock.getDelta();
        cameraControls.update(delta);
        renderer.render(scene, camera);
    }

    const sceneData = exporter.parse(scene);
    // console.log(sceneData);
    // saveFile(sceneData, `${cellData.cellName}.obj`);
});

const createBox = (coords, heightPos, layerProperties) => {
    const [start, end] = coords;
    const geometry = new THREE.BoxGeometry(end[0] - start[0], end[1] - start[1], heightPos[1] - heightPos[0]);
    const material = new THREE.MeshStandardMaterial({color: layerProperties.color, transparent: true, opacity: layerProperties.opacity, metalness: 0, roughness: 1});
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
    const r = 20;
    const geometry = new THREE.CylinderGeometry(r, r, end[0] - start[0], 4);
    const material = new THREE.MeshStandardMaterial({color: layerProperties.color, transparent: true, opacity: layerProperties.opacity, metalness: 0, roughness: 1}); 
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