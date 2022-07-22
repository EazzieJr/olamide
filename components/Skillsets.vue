<template>
  <section class="skillsets overflow-hidden">
    <div class="grid">
      <div class="section-divider place-self-end"></div>
    </div>
    <div class="skillsets-container">
      <div class="top-left">
        <SectionPath path="skillsets" />
      </div>

      <div class="bottom-left md:col-span-3 col-span-1 text-center md:pr-[7vw]">
        <p class="overflow-hidden"> <span class="translate-y-[70px] md:translate-y-[8vw] block opacity-50">Communication</span></p>

        <p class="overflow-hidden"> <span class="translate-y-[70px] md:translate-y-[8vw] block opacity-50">Teamplayer</span></p>

        <p class="overflow-hidden"> <span class="translate-y-[70px] md:translate-y-[8vw] block opacity-50">Empathy</span></p>

        <p class="overflow-hidden"> <span class="translate-y-[70px] md:translate-y-[8vw] block opacity-50">Creative</span></p>

        <p class="overflow-hidden"> <span class="translate-y-[70px] md:translate-y-[8vw] block opacity-50">Critical thinker</span> </p>

        <p class="overflow-hidden"> <span class="translate-y-[70px] md:translate-y-[8vw] block opacity-50">Figma</span></p>

        <p class="overflow-hidden"> <span class="translate-y-[70px] md:translate-y-[8vw] block opacity-50">Adobe XD</span> </p>

        <p class="overflow-hidden"> <span class="translate-y-[70px] md:translate-y-[8vw] block opacity-50">Adobe Illustrator</span> </p>

        <p class="overflow-hidden"> <span class="translate-y-[70px] md:translate-y-[8vw] block opacity-50">Adobe Premier Pro</span> </p>

        <p class="overflow-hidden"> <span class="translate-y-[70px] md:translate-y-[8vw] block opacity-50">Trello</span></p>
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
    gsap.to(".section-divider", {
      scrollTrigger: {
        trigger: ".skillsets",
        start: "top 90%",
      },

      width: "100%",
      duration: 2,
      ease: "power3.out",
    });

    const p = document.querySelectorAll(".bottom-left p span");

    p.forEach((el) => {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          // markers: true
        },

        y: 0,
        opacity: 1,
        duration: 2,
        ease: "power3.out",
      });
    });
  },
};
</script>

<style lang="postcss" scoped>
.skillsets {
  > .skillsets-container {
    @apply grid grid-cols-1 md:grid-cols-4 gap-y-7 py-6 md:py-[6.62vw];
  }
}

p {
  @apply block text-5xl md:text-[6.35vw] font-moglandemo leading-normal md:leading-[8.47vw];
}
</style>
