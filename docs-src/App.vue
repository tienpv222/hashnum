<template lang="pug">
#app(spellcheck='false')
  #header HASHNUM
  #body
    Encoder(:bus='bus')
    Decoder(:bus='bus')
  #footer
    div body
</template>

<script>
import Vue from 'vue'
import Encoder from './components/Encoder'
import Decoder from './components/Decoder'

export default {
  components: {
    Encoder,
    Decoder,
  },
  data: vm => ({
    bus: new Vue(),
  }),
}
</script>

<style lang="stylus">
@require 'styles/colors'
@require 'styles/app'
@require 'styles/input'
</style>
