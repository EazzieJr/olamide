<template>
  <div class="experience between font-arial">
    <h3 class="at"> {{ at }} </h3>

    <div class="year">{{ year }}</div>
  </div>
</template>

<script>
export default {
  props: ['at', 'year']
};
</script>

<style lang="postcss" scoped>
.year {
  @apply text-xs md:text-[1.6vw] lg:text-[1.3vw];
}
</style>
