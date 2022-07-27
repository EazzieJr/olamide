<template>
  <section class="overflow-hidden">
    <div class="grid">
      <div class="jobs-divider place-self-end"></div>
    </div>
    <div class="job-experiences">
      <SectionPath path="JOB EXPERIENCE" class="path" />

      <div class="bottom md:col-span-3">
        <div class="experiences">
          <Experience at="ANTHONIA AND GRADE," year="2022" />
          <Experience at="CENTURY LEAP," year="2021 - 2022" />
          <Experience at="THEONEOZENUA," year="2021 - 2022" />
          <Experience at="TIMESCAPE MEDIA." year="2019" />
        </div>

        <div class="job-experience-image j-clip overflow-hidden">
          <nuxt-img
            class="w-full scale-[1.5]"
            provider="cloudinary"
            src="job-experience-image_anjnpl.png"
            alt="Job Experiences"
            quality="70"
            loading="lazy" format="webp" placeholder="[100, 50, 10]"
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

    gsap.to(".job-experience-image", {
      scrollTrigger: {
        trigger: ".job-experience-image",
        start: "top 70%",
        // markers: true,
        // toggleActions: "play none none reset",
        onEnter: () => {
          gsap.to(".job-experience-image img", {
            scale: 1,
            duration: 1,
            ease: "power3.out",
            delay: 0.5,
          });
        },
      },

      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      duration: 1.5,
      ease: "power3.inOut",
      // stagger: 0.2
    });
  },
};
</script>

<style lang="postcss" scoped>
section {
  > .job-experiences {
    @apply grid grid-cols-1 gap-y-9 md:grid-cols-4 pt-14 pb-28 md:pt-[6.62vw] md:pb-[13.24vw];

    > .bottom {
      @apply space-y-8 md:space-y-[3.57vw] md:pr-[8.14vw];
      > .experiences {
        @apply md:space-y-[0.25vw];
      }
    }
  }
}

.j-clip {
  clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
}
</style>
