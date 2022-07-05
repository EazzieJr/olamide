<template>
  <span>
    /{{path}}
  </span>
</template>

<script>
export default {
  props: ["path"]
}
</script>

<style lang="postcss" scoped>
span {
  @apply font-arial text-sm lg:text-[1.6vw] uppercase;
}
</style>