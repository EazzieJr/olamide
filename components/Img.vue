<template>
  <img :src="`images/${src}.png`" :alt="alt">
</template>

<script>
export default {
  props: ["src", "alt"]
}
</script>

<style>

</style>