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
  }),
  mounted() {
    // setup and play demo
    let ev = { target: {} }
    let i = 0
    let j = 0
    let itv = setInterval(() => {
      if (++i < -1) return
      else if (++j > 50) {
        this.str = ''
        j = 0
        i++
      }
      else if (!++i) this.str += ', '
      else {
        this.str += Math.floor(Math.random() * 10)
        if (Math.random() > 0.5) i = -8
      }
      ev.target.innerText = this.str
      this.onInput(ev)
    }, 100)

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
