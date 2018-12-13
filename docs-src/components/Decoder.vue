<template lang="pug">
textarea(:value='str').input
</template>

<script>
export default {
  props: ['bus'],
  data: vm => ({
    str: '',
  }),
  mounted(vm = this) {
    vm.bus.$on('encode', vm.onEncode)
  },
  methods: {
    onEncode(str, vm = this) {
      vm.str = str
    },
  },
}
</script>
