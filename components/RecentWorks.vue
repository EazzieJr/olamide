<template>
  <section class="recent-work overflow-hidden">
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
        <Work title="Payme" href="146964529/Payme-Fintech-App" src="images/Pay-me.png" />
        <Work
          title="LearnHere"
          :src="darkMode ? 'images/Learn-here-dark.png' : 'images/Learn-here-light.png'"
          class="place-self-end md:mt-[20vw]"
        />
        <Work
          title="United Bank of Africa Redesign Case study"
          small
          class="md:-mt-[20vw]"
          href="145510379/LearnHere"
        />
        <Work title="Msoft Design Agency" href="145509807/Design-agency-Website" class="place-self-end" src="images/Msoft.png" />
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { mapState } from "vuex";
gsap.registerPlugin(ScrollTrigger);
export default {
  computed: {
    ...mapState(["darkMode"]),
  },

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
