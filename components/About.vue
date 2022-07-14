<template>
  <section class="recent-works custom-border">
    <div class="recent-works-container">
      <SectionPath path="about" class="md:col-span-3" />

      <ScrollDown class="place-self-end md:self-start md:order-last" />

      <div
        class="bottom-mid order-3 md:order-none col-span-8 pr-16 md:p-0 -mt-32 md:m-0"
      >
        <p class="uppercase text-sm leading-loose md:text-[3.17vw] md:leading-[4.45vw] font-arial">
          SELF-MOTIVATED DESIGNER WITH WILD INTEREST IN CREATING SEAMLESS
          DIGITAL EXPERIENCES. <br />
          <br />
          Not only do I believe users' pain points can be addressed by a
          thorough research and design, I also believe that it can put a smile
          on the users face.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.recent-works {
  @apply pt-20 pb-6 md:py-[6.62vw];
  > .recent-works-container {
    @apply grid grid-cols-2 md:grid-cols-12 gap-y-7;
  }
}
</style>
