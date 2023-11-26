/// <reference path="node_modules/babylonjs/babylon.d.ts"/>

//get our canvas

const canvas = document.getElementById("renderCanvas");

//create babylonJs engine

const engine = new BABYLON.Engine(canvas, false);

function createScene() {
  //create a scene
  const scene = new BABYLON.Scene(engine);

  //create a camera
  const camera = new BABYLON.FreeCamera("camera", new BABYLON.Vector3(0, 0, -10), scene);

  //create a light
  const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);

  //create box
  const box = BABYLON.MeshBuilder.CreateBox("box", {
    size: 1,
  }, scene);
  box.position = new BABYLON.Vector3(-5, 0, 0);

  //create sphere
  const sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {
    segments: 3,
    diameter: 2,
  }, scene)
  sphere.position = new BABYLON.Vector3(5, 0, 0);

  //create plane
  const polyhedron = BABYLON.MeshBuilder.CreatePolyhedron("polyhedron", {

  }, scene);
  polyhedron.position = new BABYLON.Vector3(0, 0, 0);
  polyhedron.rotation = new BABYLON.Vector3(0, 0, 0);

  //create a line
  const myPoints = [
    new BABYLON.Vector3(2, 0, 0),
    new BABYLON.Vector3(2, 1, 1),
    new BABYLON.Vector3(2, 1, 0),
  ];

  const lines = new BABYLON.MeshBuilder.CreateLines("lines", {
    points,

  }, scene)

  return scene;
}

//create our scene

const mainScene = createScene();

engine.runRenderLoop(() =>{
  mainScene.render();
});
