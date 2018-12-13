<template lang="pug">
#app(spellcheck='false')
  #header
    div header
  #body
    Encoder
    Decoder
  #footer
    div body
</template>

<script>
import Encoder from './components/Encoder'
import Decoder from './components/Decoder'

export default {
  components: {
    Encoder,
    Decoder,
  },
}
</script>

<style lang="stylus">
@require 'styles/colors'
@require 'styles/app'
@require 'styles/body'
@require 'styles/input'

</style>
