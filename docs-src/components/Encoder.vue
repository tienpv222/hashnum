<template lang="pug">
.input
  span.bracket [
  span.nums(
    v-text='str'
    @input='onInput'
    contenteditable)
  span.bracket ]
</template>

<script>
import Hashnum from '../../lib'

export default {
  components: { Number },
  props: ['bus'],
  data: vm => ({
    str: '',
    demo: '1, 23, 4, 56, 7, 89, ',
  }),
  mounted() {
    let ev = { target: {} }
    let i = 0
    let itv = setInterval(() => {
      this.str += this.demo[i++ % this.demo.length]
      ev.target.innerText = this.str
      this.onInput(ev)
    }, 500)
    this.bus.$on('stop-demo', () => clearInterval(itv))
    this.bus.$on('decode', this.onDecode)
  },
  methods: {
    onDecode(nums) { this.str = nums.join(', ') },
    onInput(ev) {
      let nums = ev.target.innerText.split(',').map(e => e.trim())
      this.bus.$emit('encode', Hashnum.encode(nums))
    },
  },
}
</script>
