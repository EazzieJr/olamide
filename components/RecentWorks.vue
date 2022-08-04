<template>
  <section class="recent-works overflow-hidden">
    <div class="grid">
      <div class="recent-divider place-self-start"></div>
    </div>
    <div class="recent-works-container">
      <div class="top-left">
        <SectionPath path="Recent Works" />
      </div>

      <div
        class="bottom-left grid grid-cols-1 md:grid-cols-2 gap-y-14 md:gap-y-[12.5vw] md:col-span-3 md:-mt-[1vw] md:pr-[5vw]"
      >
        <Work title="United Bank of Africa Redesign Case study" href="144472829/Uba-Banking-App-Redesign-Case-study" src="Uba_r2kahf.png" id="1" />
        <Work
          title="LearnHere"
          href="145510379/LearnHere"
          :src="darkMode ? 'Learn-here-dark_wxajjj.png' : 'Learn-here-light_kmsafz.png'"
          class="place-self-end md:mt-[20vw]"
          id="2"
        />
        <Work
          title="Payme"
          small
          class="md:-mt-[15vw]"
          src="Pay-me_mfxyrn.png"
          href="146964529/Payme-Fintech-App"
          id="3"
        />
        <Work title="Msoft Design Agency" href="145509807/Design-agency-Website" class="place-self-end" src="Msoft_upqmct.png" />
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
    @apply grid grid-cols-1 md:grid-cols-4 gap-y-9 py-6 md:py-[6.62vw];
  }
}
</style>
