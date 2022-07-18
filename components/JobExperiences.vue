<template>
  <section>
    <div class="job-experiences">
      <SectionPath path="JOB EXPERIENCE" />

      <div class="bottom md:col-span-3">
        <div class="experiences">
          <Experience at="ANTHONIA AND GRADE," year="2022"/>
          <Experience at="CENTURY LEAP," year="2021 - 2022"/>
          <Experience at="THEONEOZENYA," year="2021 - 2022"/>
          <Experience at="TIMESCAPE MEDIA." year="2019"/>
        </div>

        <div class="image">
          <img data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100" class="w-full" src="svg/e-card.svg" alt="Job Experiences" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="postcss" scoped>
section {
  @apply pt-14 pb-28 md:pt-[6.62vw] md:pb-[13.24vw];
  > .job-experiences {
    @apply grid grid-cols-1 md:grid-cols-4;

    > .bottom {
      @apply space-y-8 md:space-y-[3.57vw] md:pr-[8.14vw];
      > .experiences {
        @apply md:space-y-[0.25vw]
      }
    }
  }
}
</style>