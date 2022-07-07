<template>
  <section class="recent-works custom-border">
    <div class="recent-works-container">
      <div class="top-left">
        <SectionPath path="about" />

        <ScrollDown /> 
      </div>

      <div class="bottom-left grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-[12.5vw] md:col-span-3 md:-mt-[1vw] md:pr-[5vw]">
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.recent-works {
  @apply py-6 md:py-[6.62vw];
  > .recent-works-container {
    @apply grid grid-cols-1 md:grid-cols-4 gap-y-7;
  }
}
</style>
