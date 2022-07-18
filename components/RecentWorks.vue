<template>
  <section class="recent-works">
    <div class="grid">
      <div class="recent-divider place-self-start"></div>
    </div>
    <div class="recent-works-container">
      <div class="top-left">
        <SectionPath path="Recent Works" />
      </div>

      <div
        class="bottom-left grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-[12.5vw] md:col-span-3 md:-mt-[1vw] md:pr-[5vw]"
      >
        <Work title="United Bank of Africa Redesign Case study" />
        <Work
          title="Digilearn: Defining a new way to learning"
          class="place-self-end md:mt-[20vw]"
        />
        <Work
          title="Viva Cinema mobile app case study"
          small
          class="md:-mt-[20vw]"
        />
        <Work title="InSafe Inevestment Application" class="place-self-end" />
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
    gsap.to(".recent-divider", {
      scrollTrigger: {
        trigger: ".recent-divider",
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
.recent-works {
  > .recent-works-container {
    @apply grid grid-cols-1 md:grid-cols-4 gap-y-7 py-6 md:py-[6.62vw];
  }
}
</style>
