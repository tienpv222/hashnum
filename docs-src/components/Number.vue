<template lang="pug">
span
  span.num(
    ref='num'
    v-text='nums[i]'
    @keydown='onKeydown($event,i)'
    @input='onInput($event,i)'
    contenteditable)
  span.comma(v-if='i != nums.length - 1') ,
</template>

<script>
export default {
  props: ['nums', 'i'],
  data: vm => ({
    sel: '',
    range: '',
  }),
  mounted(vm = this) {
    vm.sel = window.getSelection()
    vm.range = document.createRange()
  },
  methods: {
    onInput(ev, i, vm = this) {
      vm.$emit('nums-change', i, 1, ev.target.innerText)
      vm.setFocus(vm.sel.baseOffset)
    },
    onKeydown(ev, i, vm = this) {
      let kc = ev.keyCode
      let val = vm.nums[i]
      let base = vm.sel.baseOffset
      let focus = vm.sel.focusOffset
      base < focus || ([base, focus] = [focus, base])

      if (kc == 188) { // comma
        ev.preventDefault()
        vm.$emit('nums-change', i, 1, val.slice(focus))
        vm.$emit('nums-change', i, 0, val.slice(0, base))
        base && vm.$emit('focus-change', i + 1)
      }
      else if (kc == 8 || kc == 37) {
        if (!focus && i--) {
          vm.$emit('focus-change', i, vm.nums[i].length) // left
          if (kc == 8) // backspace
            vm.$emit('nums-change', i, 2, vm.nums[i] + val)
        }
      }
      else if (kc == 39 || kc == 46) {
        if (base == val.length && ++i != vm.nums.length) {
          if (kc == 39) // right
            vm.$emit('focus-change', i)
          else if (kc == 46) { // delete
            vm.$emit('nums-change', i - 1, 2, val + vm.nums[i])
            vm.setFocus(val.length)
          }
        }
      }
      else if (!/^\d*$/.test(ev.key)
        && !/^(9|16)$/.test(kc))
        ev.preventDefault()
    },
    setFocus(caret, vm = this) {
      vm.$nextTick(() => {
        let el = vm.$refs.num
        if (caret && el.hasChildNodes()) {
          vm.range.setEnd(el.childNodes[0], caret)
          vm.range.collapse()
          vm.sel.removeAllRanges()
          vm.sel.addRange(vm.range)
        }
        el.focus()
      })
    },
  },
}
</script>
