import WebGLView from './webgl/WebGLView'
import GUIView from './gui/GUIView'
import Emitter from '~/assets/js/utils/events'

class App {
  constructor() {
    if (process.client) {
      this.ready = require('domready')
      this.ready(() => {
        this.init()
      })
    }
  }

  init = () => {
    this.initWebGL()
    this.initGUI()
    this.addListeners()
    this.animate()
    this.resize()
  }

  initWebGL = () => {
    this.webgl = new WebGLView(this)
    document.querySelector('.canvas-webgl').appendChild(this.webgl.renderer.domElement)
  }

  initGUI = () => {
    this.gui = new GUIView(this)
  }

  addListeners = () => {
    Emitter.on('GLOBAL:RESIZE', this.resize)
    window.addEventListener('keyup', this.keyup)
  }

  animate = () => {
    this.update()
    this.draw()

    this.raf = requestAnimationFrame(this.animate)
  }

  // ---------------------------------------------------------------------------------------------
  // PUBLIC
  // ---------------------------------------------------------------------------------------------

  update = () => {
    if (this.gui.stats) this.gui.stats.begin()
    if (this.webgl) this.webgl.update()
    if (this.gui) this.gui.update()
  }

  draw = () => {
    if (this.webgl) this.webgl.draw()
    if (this.gui.stats) this.gui.stats.end()
  }

  // ---------------------------------------------------------------------------------------------
  // EVENT HANDLERS
  // ---------------------------------------------------------------------------------------------

  resize = () => {
    console.log('resize ??')
    if (this.webgl) this.webgl.resize()
  }

  keyup = (e) => {
    // PRESS G to toggle GUI
    if (e.keyCode === 71) { if (this.gui) this.gui.toggle() }
  }
}

export default new App()
