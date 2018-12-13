<template lang="pug">
#encoder.input
  span.bracket [
  span
    template(v-for='(e,i) in nums')
      Number(
        :ref='"num" + i'
        :nums='nums'
        :i='i'
        @nums-change='onNumsChange'
        @focus-change='onFocusChange')
  span.bracket ]
</template>

<script>
import Hashnum from '../../lib'
import Number from './Number'

export default {
  components: { Number },
  props: ['bus'],
  data: vm => ({
    nums: ['123', '6789', '12'],
  }),
  mounted(vm = this) {
  },
  methods: {
    onNumsChange(start, end, val, vm = this) {
      vm.nums.splice(start, end, val)
      vm.bus.$emit('encode', Hashnum.encode(vm.nums))
    },
    onFocusChange(i, caret, vm = this) {
      vm.$nextTick(() => vm.$refs['num' + i][0].setFocus(caret))
    },

  },
}
</script>
