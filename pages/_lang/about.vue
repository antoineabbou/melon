<template>
  <section class="page page--about stagger">
    <p class="title"> {{ $t('about.title')}} </p>
  </section>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  import Emitter from '~/assets/js/utils/events'
  import THREE from '~/plugins/three.js'
  import {
    TimelineMax
  } from 'gsap'
  
  export default {
    data() {
      return {}
    },
  
    computed: {
      ...mapState([
        'locale'
      ])
    },
  
    transition: {
      mode: 'out-in',
      css: false,
  
      enter(el, done) {
        let tl = new TimelineMax({
          onComplete: done
        })
  
        tl.to(document.querySelectorAll('.stagger'), 0.3, {
          opacity: 1,
          ease: Expo.easeOut
        })
  
        tl.to(document.querySelector('.transition-panel'), 1, {
          left: 'auto',
          width: '0%',
          right: 0,
          ease: Expo.easeOut
        })
  
        tl.set(document.querySelector('.transition-panel'), {
          left: '-100%'
        })
      },
  
      leave(el, done) {
        let tl = new TimelineMax({
          onComplete: done
        })
  
        tl.to(document.querySelectorAll('.stagger'), 0.3, {
          opacity: 0,
          ease: Expo.easeOut
        })
  
        tl.to(document.querySelector('.transition-panel'), 0.4, {
          width: '100%',
          left: 0,
          ease: Expo.easeOut
        }, 'start+=0.4')
      },
    },
  
    mounted() {
      this.createScene()
      this.onResize()
      this.addListeners()
    },
  
    methods: {
      addListeners() {
        window.addEventListener('resize', this.onResize)
      },
  
      removeListeners() {
        window.removeEventListener('resize', this.onResize)
      },
  
      createScene() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  
        this.renderer = new THREE.WebGLRenderer({
          alpha: true,
          antialias: true
        })
        this.setRendererSize()
        this.$el.appendChild(this.renderer.domElement)
  
        this.geometry = new THREE.SphereGeometry(1, 32, 32)
        this.material = new THREE.MeshBasicMaterial({
          color: 0x1A1A1A,
          wireframe: true 
        })
        this.sphere = new THREE.Mesh(this.geometry, this.material)
  
        this.scene.add(this.sphere)
  
        this.camera.position.z = 5
  
        this.animate()
      },
  
      animate() {
        requestAnimationFrame(this.animate)
  
        this.sphere.rotation.x += 0.01
        this.sphere.rotation.y += 0.01
  
        this.renderer.render(this.scene, this.camera)
      },
  
      setRendererSize() {
        this.width = window.innerWidth
        this.height = window.innerHeight
        this.renderer.setSize(this.width, this.height)
        this.camera.aspect = this.width / this.height
        this.camera.updateProjectionMatrix()
      },
  
      onResize() {
        this.setRendererSize()
      }
    },
  
    beforeDestroy() {
      this.removeListeners()
    }
  }
</script>

<style lang="stylus" scoped>
.page
  &--about
    position relative

</style>
