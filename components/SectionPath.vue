<template>
  <div>
    <span> /{{ path }} </span>
  </div>
</template>

<script>
export default {
  props: ["path"],
};
</script>

<style lang="postcss" scoped>
span {
  @apply font-arial text-sm lg:text-[1.6vw] uppercase;
}
</style>
