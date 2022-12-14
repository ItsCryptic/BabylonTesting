import * as BABYLON from 'babylonjs';

var canvas = document.getElementById("test");
var engine = new BABYLON.Engine(canvas, true, {preserveDrawingBuffer: true, stencil: true});

var createScene = function() {
    var scene = new BABYLON.Scene(engine);
    var camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), scene);
    camera.setTarget(BABYLON.Vector3.Zero());
    camera.attachControl(canvas, false);
    var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);
    var sphere = BABYLON.MeshBuilder.CreateSphere('sphere1', {segments: 16, diameter: 2, sideOrientation: BABYLON.Mesh.FRONTSIDE}, scene);
    sphere.position.y = 1;
    var ground = BABYLON.MeshBuilder.CreateGround("ground1", { width: 6, height: 6, subdivisions: 2, updatable: false }, scene);
    return scene;
}

var scene = createScene();
engine.runRenderLoop(function(){
    scene.render();
});
window.addEventListener('resize', function(){
    engine.resize();
});