import * as THREE from 'three'
import BaseComponent from '../BaseComponent.ts'

export interface ISphereProps {
  radius: number
  widthSegments: number
  heightSegments: number
}

class SomeSphere extends BaseComponent {
  constructor(props: ISphereProps) {
    super()
    const geometry = new THREE.SphereGeometry(props.radius, props.widthSegments, props.heightSegments)
    const material = new THREE.MeshPhongMaterial()
    this.add(new THREE.Mesh(geometry, material))
  }

  update() {
    this.rotation.y += 0.01
  }
}

export default SomeSphere

