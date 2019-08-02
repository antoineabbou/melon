import ControlKit from '@brunoimbrizi/controlkit'

export default class GUIView {
  constructor(app) {
    this.app = app

    this.speed = 5.0
    this.morph = 5.0
    this.dnoise = 2.5

    this.RGBr = 4.5
    this.RGBg = 0.0
    this.RGBb = 3.0
    this.RGBn = 0.3
    this.RGBm = 1.0

    this.range = [0, 10]
    this.initControlKit()
    this.onMelonChange()
  }

  initControlKit = () => {
    this.controlKit = new ControlKit()
    this.controlKit.addPanel({ width: 300, enable: false })

      // TIME
      .addGroup({ label: 'Time', enable: true })
      .addSlider(this, 'speed', 'range', { label: 'Speed', onChange: this.onMelonChange })
      .addSlider(this, 'morph', 'range', { label: 'Morph', onChange: this.onMelonChange })
      .addSlider(this, 'dnoise', 'range', { label: 'Noise', onChange: this.onMelonChange })

      // COLOR
      .addGroup({ label: 'Color', enable: true })
      .addSlider(this, 'RGBr', 'range', { label: 'Red', onChange: this.onMelonChange })
      .addSlider(this, 'RGBg', 'range', { label: 'Green', onChange: this.onMelonChange })
      .addSlider(this, 'RGBb', 'range', { label: 'Blue', onChange: this.onMelonChange })
      .addSlider(this, 'RGBn', 'range', { label: 'Black', onChange: this.onMelonChange })
      .addSlider(this, 'RGBm', 'range', { label: 'Chroma', onChange: this.onMelonChange })
  }

  enable = () => {
    this.controlKit.enable()
    if (this.stats) this.stats.dom.style.display = ''
  }

  disable = () => {
    this.controlKit.disable()
    if (this.stats) this.stats.dom.style.display = 'none'
  }

  toggle = () => {
    if (this.controlKit._enabled) this.disable()
    else this.enable()
  }

  update = () => {
  }

  onMelonChange = () => {
    if (!this.app.webgl) return
    if (!this.app.webgl.melon) return

    this.app.webgl.melon.options.perlin.time = this.speed
    this.app.webgl.melon.options.perlin.morph = this.morph
    this.app.webgl.melon.options.perlin.dnoise = this.dnoise

    this.app.webgl.melon.options.chroma.RGBr = this.RGBr
    this.app.webgl.melon.options.chroma.RGBg = this.RGBg
    this.app.webgl.melon.options.chroma.RGBb = this.RGBb
    this.app.webgl.melon.options.chroma.RGBn = this.RGBn
    this.app.webgl.melon.options.chroma.RGBm = this.RGBm
  }
}
