import * as THREE from 'three'

abstract class BaseComponent extends from THREE.Object3D {
  constructor() {
    super()
  }

  abstract void update() {}
}

export default BaseComponent

