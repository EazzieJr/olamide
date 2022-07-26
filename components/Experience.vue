<template>
  <div class="experience between font-arial overflow-hidden">
    <h3 class="at translate-y-full"> {{ at }} </h3>

    <div data-aos="fade-right" data-aos-duration="1500" data-aos-delay="500" class="year">{{ year }}</div>
  </div>
</template>

<script>
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  props: ['at', 'year'],

  mounted() {
    gsap.to(".experience h3", {
      scrollTrigger: {
        trigger: ".experience",
        start: "top 90%",
      },

      y: 0,
      duration: 1.5,
      ease: "power3.out",
      stagger: 0.2
    });
  },
};
</script>

<style lang="postcss" scoped>
.year {
  @apply text-xs md:text-[1.6vw] lg:text-[1.3vw];
}
</style>
