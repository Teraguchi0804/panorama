var width = 640;
var height = 480;

var geometry01 = new THREE.CubeGeometry(0.3, 0.2, 0.9); // 立方体作成
var material01 = new THREE.MeshBasicMaterial({color: 0x0000aa}); // 材質作成
var mesh01     = new THREE.Mesh(geometry01, material01); // 立方体と材質を結びつけてメッシュ作成
mesh01.position = new THREE.Vector3(-0.3, 0, 0);
var cube01 = mesh01;

var geometry02 = new THREE.CubeGeometry(0.9, 0.2, 0.3); // 立方体作成
var material02 = new THREE.MeshBasicMaterial({color: 0x0000aa}); // 材質作成
var mesh02     = new THREE.Mesh(geometry02, material02); // 立方体と材質を結びつけてメッシュ作成
mesh02.position = new THREE.Vector3(0, 0, -0.3);
var cube02 = mesh02;

var camera   = new THREE.PerspectiveCamera(40, width / height, 1, 1000); // カメラ作成。画角40、距離1〜1000の部分を表示できる。
camera.position.x = 3;
camera.position.y = 3;
camera.position.z = 3;
camera.lookAt(new THREE.Vector3(0, 0, 0)); 

var scene    = new THREE.Scene(); // シーン作成
var group = new THREE.Object3D();
group.add(cube01);
group.add(cube02);

scene.add(group); // シーンにメッシュ追加

var renderer = new THREE.WebGLRenderer(); // レンダラ作成
renderer.setSize(width, height);

window.onload = function(){
  document.getElementById('canvas-wrapper').appendChild(renderer.domElement);
  renderer.render(scene, camera); // sceneをcameraで映す（表示）
}