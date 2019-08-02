/* eslint-disable import/no-webpack-loader-syntax */
import * as THREE from 'three'
import vertexShader from 'raw-loader!../../../assets/glsl/main/main.vert'
import fragmentShader from 'raw-loader!../../../assets/glsl/main/main.frag'

export default class Melon {
  constructor(webgl) {
    this.webgl = webgl
    this.container = new THREE.Object3D()
    this.options = {
      perlin: {
        time: 5.0,
        morph: 5.0,
        dnoise: 2.5
      },
      chroma: {
        RGBr: 4.5,
        RGBg: 0.0,
        RGBb: 3.0,
        RGBn: 0.3,
        RGBm: 1.0
      },
      sphere: {
        wireframe: false,
        points: false,
        psize: 1
      }
    }

    this.uniforms = {
      time: {
        type: 'f',
        value: 0.0
      },
      RGBr: {
        type: 'f',
        value: 0.0
      },
      RGBg: {
        type: 'f',
        value: 0.0
      },
      RGBb: {
        type: 'f',
        value: 0.0
      },
      RGBn: {
        type: 'f',
        value: 0.0
      },
      RGBm: {
        type: 'f',
        value: 0.0
      },
      morph: {
        type: 'f',
        value: 0.0
      },
      dnoise: {
        type: 'f',
        value: 0.0
      },
      psize: {
        type: 'f',
        value: 3.0
      }
    }

    this.setupMelon()
  }

  init = () => {
    this.setupMelon()
    this.resize()
  }

  setupMelon = () => {
    const geoSize = 10
    const geoFrag = 5

    this.geo = new THREE.IcosahedronBufferGeometry(geoSize, geoFrag)
    this.mat = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      side: THREE.DoubleSide,
      vertexShader: vertexShader,
      fragmentShader: fragmentShader,
      wireframe: false
    })
    this.point = new THREE.Points(this.geo, this.mat)
    // ---
    this.mesh = new THREE.Mesh(this.geo, this.mat)
    this.mesh.geometry.verticesNeedUpdate = true
    this.mesh.geometry.morphTargetsNeedUpdate = true
    this.mesh.reseivedShadow = true
    this.mesh.castShadow = true
    // ---
    this.container.add(this.point)
    this.container.add(this.mesh)
  }

  // --------------------------------------------------------------------

  update = (delta) => {
    this.uniforms.time.value += (this.options.perlin.time / 10) * delta
    this.uniforms.morph.value = (this.options.perlin.morph)
    this.uniforms.dnoise.value = (this.options.perlin.dnoise)

    this.mat.uniforms.RGBr.value = this.options.chroma.RGBr / 10
    this.mat.uniforms.RGBg.value = this.options.chroma.RGBg / 10
    this.mat.uniforms.RGBb.value = this.options.chroma.RGBb / 10
    this.mat.uniforms.RGBn.value = this.options.chroma.RGBn / 100
    this.mat.uniforms.RGBm.value = this.options.chroma.RGBm
    this.mat.uniforms.psize.value = this.options.sphere.psize
  }

  resize = () => {
  }
}
