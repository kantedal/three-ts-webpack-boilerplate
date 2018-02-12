import './style.css'
import * as THREE from 'three'

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

// add lights
const light = new THREE.DirectionalLight(0xFFFFFF, 1.0)
light.position.set(100, 100, 100)
scene.add(light)

const light2 = new THREE.DirectionalLight(0xFFFFFF, 1.0)
light2.position.set(-100, 100, -100)
scene.add(light2)

const spheres: THREE.Mesh[] = []
const material = new THREE.MeshNormalMaterial()

for (let i = 0; i < 10; i += 1) {
	const sphere = new THREE.Mesh(new THREE.SphereGeometry(1, 10, 10), material)
	sphere.position.x = 0.5
	sphere.rotation.y = 0.5

	spheres.push(sphere)
	scene.add(sphere)
}

camera.position.x = 5
camera.position.y = 5
camera.position.z = 5

camera.lookAt(scene.position)

const animate = () => {
	requestAnimationFrame(animate)
	render()
}

const render = () => {
	const timer = 0.002 * Date.now()

	let sphereId = 0
	for (const sphere of spheres) {
		sphere.position.y = 0.5 + 2 * Math.sin(timer + sphereId)
		sphere.position.x = 0.5 + 2 * Math.cos(timer + sphereId)
		sphere.rotation.x += 0.1

		sphereId += 1
	}

	renderer.render(scene, camera)
}

animate()
