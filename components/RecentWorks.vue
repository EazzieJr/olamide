<template>
  <section class="recent-works custom-border">
    <div class="recent-works-container">
      <div class="top-left">
        <SectionPath path="Recent Works" />
      </div>

      <div class="bottom-left grid grid-cols-1">
        <Work />
        <Work class="place-self-end" />
        <Work />
        <Work class="place-self-end" />
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
    @apply grid grid-cols-1 md:grid-cols-4;
  }
}
</style>
