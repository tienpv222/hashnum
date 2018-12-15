<template lang="pug">
#app(spellcheck='false')
  #header
    span HASHNUM
    a(href='https://github.com/pynnl/hashnum' target='_blank')
      img(:src='logo')
  #body
    Encoder(:bus='bus')
    Decoder(:bus='bus')
  #footer
    a(href='https://github.com/pynnl/hashnum/blob/master/LICENSE'
      target='_blank') MIT
    span &nbsp;@2018&nbsp;
    a(href='https://github.com/pynnl'
      target='_blank') pynnl
</template>

<script>
import Vue from 'vue'
import Encoder from './components/Encoder'
import Decoder from './components/Decoder'
import logo from './assets/github.png'

export default {
  components: {
    Encoder,
    Decoder,
  },
  data: vm => ({
    bus: new Vue(),
    logo,
  }),
  mounted() {
    let click = () => {
      this.bus.$emit('stop-demo')
      document.removeEventListener('click', click)
    }

    document.addEventListener('click', click)
  },
}
</script>

<style lang="stylus">
@require 'styles/colors'
@require 'styles/app'
@require 'styles/input'
</style>
