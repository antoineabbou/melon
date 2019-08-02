import * as THREE from 'three'
import Melon from '~/assets/js/webgl/Melon'

export default class WebGLView {
  constructor(app) {
    this.app = app
    this.initThree()
    this.initMelon()
  }

  initThree = () => {
    // scene
    this.scene = new THREE.Scene()

    // camera
    this.camera = new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight, 1, 10000)
    this.camera.position.z = 300

    // renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

    // clock
    this.clock = new THREE.Clock(true)
  }

  initMelon = () => {
    this.melon = new Melon(this)
    this.scene.add(this.melon.container)
  }

  // ---------------------------------------------------------------------------------------------
  // PUBLIC
  // ---------------------------------------------------------------------------------------------

  update = () => {
    const delta = this.clock.getDelta()

    if (this.melon) this.melon.update(delta)
  }

  draw = () => {
    this.renderer.render(this.scene, this.camera)
  }

  // ---------------------------------------------------------------------------------------------
  // EVENT HANDLERS
  // ---------------------------------------------------------------------------------------------

  resize = () => {
    if (!this.renderer) return
    this.camera.aspect = window.innerWidth / window.innerHeight
    this.camera.updateProjectionMatrix()

    this.fovHeight = 2 * Math.tan((this.camera.fov * Math.PI) / 180 / 2) * this.camera.position.z

    this.renderer.setSize(window.innerWidth, window.innerHeight)

    if (this.melon) this.melon.resize()
  }
}
