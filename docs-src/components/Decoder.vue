<template lang="pug">
textarea.input(
  :value='str'
  @input='onInput')
</template>

<script>
import Hashnum from '../../lib'

export default {
  props: ['bus'],
  data: vm => ({
    str: '',
  }),
  mounted() {
    this.bus.$on('encode', this.onEncode)
  },
  methods: {
    onEncode(str) { this.str = str },
    onInput(ev) {
      this.str = ev.target.value
      this.bus.$emit('decode', Hashnum.decode(ev.target.value))
    },
  },
}
</script>
