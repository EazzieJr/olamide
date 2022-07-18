<template>
  <div class="experience between font-arial">
    <h3 data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100" class="at"> {{ at }} </h3>

    <div data-aos="fade-right" data-aos-duration="1500" data-aos-delay="500" class="year">{{ year }}</div>
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
