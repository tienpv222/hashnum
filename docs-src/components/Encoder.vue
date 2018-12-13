<template lang="pug">
#encoder.input
  span [
  span
    template(v-for='(e,i) in nums')
      Number(
        :ref='"num" + i'
        :nums='nums'
        :i='i'
        @nums-change='onNumsChange'
        @focus-change='onFocusChange')
  span ]
</template>

<script>
import Number from './Number'

export default {
  components: { Number },
  data: vm => ({
    nums: ['123', '6789', 'abcde'],
  }),
  mounted(vm = this) {
  },
  methods: {
    onNumsChange(start, end, val) {
      this.nums.splice(start, end, val)
    },
    onFocusChange(i, caret, vm = this) {
      vm.$nextTick(() => vm.$refs['num' + i][0].setFocus(caret))
    },

  },
}
</script>
