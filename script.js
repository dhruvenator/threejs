import * as THREE from 'three';
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { FontLoader } from 'https://cdn.jsdelivr.net/npm/three@0.174.0/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'https://cdn.jsdelivr.net/npm/three@0.174.0/examples/jsm/geometries/TextGeometry.js';
import dat from "https://cdn.skypack.dev/dat.gui";
import { RoundedBoxGeometry } from 'https://cdn.jsdelivr.net/npm/three@0.174.0/examples/jsm/Addons.js';
import { MUXNEW, layerProperties } from './data.js';

// Defining constants that will be used throughout the script
const constants = {
    width: window.innerWidth,
    height: window.innerHeight,
    offsetScale: 1,
    greyColor: 0xDEDEDE,
    clippingPlaneColor: 0xE91E63,
    highlightOpacity: 1,
    segments: 10,
    rounding: 7,
    nanoNum: 1
};
const cellData = MUXNEW;

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
const geomGroup = new THREE.Group();
let renderer = new THREE.WebGLRenderer();

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
console.log()

// parameters to be used in the gui for the clipping planes
const params = {
    planeX: {
        constant: cellData.cellBbox[1][0] + 5,
        negated: false,
        displayHelper: false
    },
    planeY: {
        constant: cellData.cellBbox[1][1] + 5,
        negated: false,
        displayHelper: false
    },
    planeZ: {
        constant: z_end + 5,
        negated: false,
        displayHelper: false
    }
};

// Clipping planes for the renderer
const clippingPlaneX = new THREE.Plane(new THREE.Vector3(-1, 0, 0), cellData.cellBbox[1][0] + 5);
const clippingPlaneY = new THREE.Plane(new THREE.Vector3(0, -1, 0), cellData.cellBbox[1][1] + 5);
const clippingPlaneZ = new THREE.Plane(new THREE.Vector3(0, 0, -1), z_end + 5);
const clippingPlanes = [clippingPlaneX, clippingPlaneY, clippingPlaneZ];
const planeHelpers = clippingPlanes.map( p => new THREE.PlaneHelper( p, 4000, 0x000000 ) );
planeHelpers.forEach( ph => {
    ph.visible = false;
    scene.add( ph );
});
const planeObjects = [];

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
    addShapes(cellData);
});
gui.add(nanoSheetsParam,"Sheets").onChange(value => {
    constants.nanoNum = value;
    clearGeometry();
    addShapes(cellData);
});
const layerFolder = gui.addFolder('Layers');
const conductingFolder = gui.addFolder('Conducting Paths');
const layerDictionary = {};

document.addEventListener('DOMContentLoaded', () => {
    // Camera is positioned at the center of the cell bounding box, 1000 units directly above
    camera.position.x = (cellData.cellBbox[0][0] + cellData.cellBbox[1][0]) / 2;
    camera.position.y = (cellData.cellBbox[0][1] + cellData.cellBbox[1][1]) / 2;
    camera.position.z = z_end + 1000;
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
    addShapes(cellData);
    setUpClippingPlanes();
    populateGUILayers();
    
    // Render everything on the canvas
    renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('canvas.webgl'), antialias: true, stencil: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.localClippingEnabled = true;

    const cameraControls = new OrbitControls(camera, renderer.domElement);
    cameraControls.target.set((cellData.cellBbox[0][0] + cellData.cellBbox[1][0]) / 2, (cellData.cellBbox[0][1] + cellData.cellBbox[1][1]) / 2, (z_start + z_end) / 2);
    cameraControls.enablePan = false;
    cameraControls.enableDamping = true;
    window.addEventListener('click', highlightObjects, false);

    animate();

    function animate() {
        requestAnimationFrame(animate);
        for ( let i = 0; i < planeObjects.length; i ++ ) {
            const plane = clippingPlanes[ i ];
            const po = planeObjects[ i ];
            plane.coplanarPoint( po.position );
            po.lookAt(
                po.position.x - plane.normal.x,
                po.position.y - plane.normal.y,
                po.position.z - plane.normal.z,
            );
        }
        cameraControls.update();
        renderer.render(scene, camera);
    }
    
});

// function to render the clipping planes
function createPlaneStencilGroup( geometry, plane, renderOrder ) {
    const group = new THREE.Group();
    const baseMat = new THREE.MeshBasicMaterial();
    baseMat.depthWrite = false;
    baseMat.depthTest = false;
    baseMat.colorWrite = false;
    baseMat.stencilWrite = true;
    baseMat.stencilFunc = THREE.AlwaysStencilFunc;
    // back faces
    const mat0 = baseMat.clone();
    mat0.side = THREE.BackSide;
    mat0.clippingPlanes = [ plane ];
    mat0.stencilFail = THREE.IncrementWrapStencilOp;
    mat0.stencilZFail = THREE.IncrementWrapStencilOp;
    mat0.stencilZPass = THREE.IncrementWrapStencilOp;
    for ( let i = 0; i < geometry.length; i ++ ) {
        const mesh0 = new THREE.Mesh( geometry[i], mat0 );
        mesh0.renderOrder = renderOrder;
        group.add( mesh0 );
    }
    // front faces
    const mat1 = baseMat.clone();
    mat1.side = THREE.FrontSide;
    mat1.clippingPlanes = [ plane ];
    mat1.stencilFail = THREE.DecrementWrapStencilOp;
    mat1.stencilZFail = THREE.DecrementWrapStencilOp;
    mat1.stencilZPass = THREE.DecrementWrapStencilOp;
    for ( let i = 0; i < geometry.length; i ++ ) {
        const mesh1 = new THREE.Mesh( geometry[i], mat1 );
        mesh1.renderOrder = renderOrder;
        group.add( mesh1 );
    }
    return group;
}

function setUpClippingPlanes() {
    let objectGroup = new THREE.Group();
    scene.add( objectGroup );
    // Set up clip plane rendering
    const planeGeom = new THREE.PlaneGeometry( 4000, 4000 );
    for ( let i = 0; i < 3; i ++ ) {
        const poGroup = new THREE.Group();
        const plane = clippingPlanes[i];
        const stencilGroup = createPlaneStencilGroup( geomGroup, plane, i + 1 );
        // plane is clipped by the other clipping planes
        const planeMat = new THREE.MeshStandardMaterial({
            color: constants.clippingPlaneColor,
            metalness: 0.1,
            roughness: 0.75,
            clippingPlanes: clippingPlanes.filter( p => p !== plane ),
            stencilWrite: true,
            stencilRef: 0,
            stencilFunc: THREE.NotEqualStencilFunc,
            stencilFail: THREE.ReplaceStencilOp,
            stencilZFail: THREE.ReplaceStencilOp,
            stencilZPass: THREE.ReplaceStencilOp,
        });
        const po = new THREE.Mesh( planeGeom, planeMat );
        po.onAfterRender = function ( renderer ) {
            renderer.clearStencil();
        };
        po.renderOrder = i + 1.1;
        objectGroup.add( stencilGroup );
        poGroup.add( po );
        planeObjects.push( po );
        scene.add( poGroup );
    }
    // Add functionalities for X clipping plane
    const planeX = gui.addFolder( 'X clipping plane' );
    planeX.add( params.planeX, 'displayHelper' ).onChange( v => planeHelpers[0].visible = v );
    planeX.add( params.planeX, 'constant' ).min(cellData.cellBbox[0][0] - 5 ).max(cellData.cellBbox[1][0] + 5).onChange( d => {
        if (params.planeX.negated){
            clippingPlanes[0].constant = -d;
        }
        else{
            clippingPlanes[0].constant = d;
        }
    });
    planeX.add( params.planeX, 'negated' ).onChange( () => {
        clippingPlanes[0].negate();
        params.planeX.constant = clippingPlanes[0].constant;
    } );
    planeX.open();
    // Add functionalities for Y clipping plane
    const planeY = gui.addFolder( 'Y clipping plane' );
    planeY.add( params.planeY, 'displayHelper' ).onChange( v => planeHelpers[1].visible = v );
    planeY.add( params.planeY, 'constant' ).min(cellData.cellBbox[0][1] - 5 ).max( cellData.cellBbox[1][1] + 5 ).onChange( d =>{
        if (params.planeY.negated){
            clippingPlanes[1].constant = -d;
        }
        else{
            clippingPlanes[1].constant = d;
        }
    });
    planeY.add( params.planeY, 'negated' ).onChange( () => {
        clippingPlanes[1].negate();
        params.planeY.constant = clippingPlanes[1].constant;
    } );
    planeY.open();
    // Add functionalities for Z clipping plane
    const planeZ = gui.addFolder( 'Z clipping plane' );
    planeZ.add( params.planeZ, 'displayHelper' ).onChange( v => planeHelpers[2].visible = v );
    planeZ.add( params.planeZ, 'constant' ).min( z_start - 5 ).max( z_end + 5 ).onChange( d => {
        if (params.planeZ.negated){
            clippingPlanes[2].constant = -d;
        }
        else{
            clippingPlanes[2].constant = d
        }
    });
    planeZ.add( params.planeZ, 'negated' ).onChange( () => {
        clippingPlanes[2].negate();
        params.planeZ.constant = clippingPlanes[2].constant;
    } );
    planeZ.open();

    scene.add(geomGroup);
}

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
        const material = new THREE.MeshStandardMaterial({ color: layerProperties.color, transparent: true, opacity: layerProperties.opacity, metalness: 0, roughness: 1, clippingPlanes: clippingPlanes });
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
    const material = new THREE.MeshStandardMaterial({ color: layerProperties.color, transparent: true, opacity: layerProperties.opacity, metalness: 0, roughness: 1, clippingPlanes: clippingPlanes });
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
    const material = new THREE.MeshBasicMaterial({ color: layerProperties.color, transparent: true, opacity: layerProperties.opacity, clippingPlanes: clippingPlanes });
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
    const material = new THREE.MeshStandardMaterial({ color: layerProperties.color, transparent: true, opacity: layerProperties.opacity, metalness: 0, roughness: 1, clippingPlanes: clippingPlanes, polygonOffset: true, polygonOffsetFactor: -0.75 });
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

const createText = (textData, heightOffset) => {
    const loader = new FontLoader();
    const [text, x, y] = textData;
    loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', function (font) {
        const textGeometry = new TextGeometry(text, {
            font: font,
            size: 20,
            depth: 1
        });
        const textMaterial = new THREE.MeshBasicMaterial({ color: 0x000000, clippingPlanes: clippingPlanes });
        const textMesh = new THREE.Mesh(textGeometry, textMaterial);
        textMesh.position.set(x, y, heightOffset);
        scene.add(textMesh);
        textMeshes.push(textMesh);
    });
};

const addShapes = (cellData) => {
    let numSheets = constants.nanoNum;
    let numRounding = constants.rounding;
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
                    createBox(coords, heightPos, layerProps, numRounding);
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
            else if (layerProps.shape === 'nanosheet') {
                layer.data.forEach(coords => {
                    createSheets(coords, heightPos, layerProps, numSheets);
                });
            }
        } else {
            console.log(`Layer ${layer.layerNumber} is ignored`);
        }
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