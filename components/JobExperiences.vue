<template>
  <section class="overflow-hidden">
    <div class="grid">
      <div class="jobs-divider place-self-end"></div>
    </div>
    <div class="job-experiences">
      <SectionPath path="JOB EXPERIENCE" />

      <div class="bottom md:col-span-3">
        <div class="experiences">
          <Experience at="ANTHONIA AND GRADE," year="2022" />
          <Experience at="CENTURY LEAP," year="2021 - 2022" />
          <Experience at="THEONEOZENYA," year="2021 - 2022" />
          <Experience at="TIMESCAPE MEDIA." year="2019" />
        </div>

        <div class="image">
          <img
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="100"
            class="w-full"
            src="svg/e-card.svg"
            alt="Job Experiences"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  mounted() {
    gsap.to(".jobs-divider", {
      scrollTrigger: {
        trigger: ".jobs-divider",
        start: "top 90%",
      },

      width: "100%",
      duration: 2,
      ease: "power3.out",
    });
  },
};
</script>

<style lang="postcss" scoped>
section {
  > .job-experiences {
    @apply grid grid-cols-1 md:grid-cols-4 pt-14 pb-28 md:pt-[6.62vw] md:pb-[13.24vw];

    > .bottom {
      @apply space-y-8 md:space-y-[3.57vw] md:pr-[8.14vw];
      > .experiences {
        @apply md:space-y-[0.25vw];
      }
    }
  }
}
</style>
