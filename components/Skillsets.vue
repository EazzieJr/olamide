<template>
  <section class="skillsets overflow-hidden">
    <div class="grid">
      <div class="section-divider place-self-end"></div>
    </div>
    <div class="skillsets-container">
      <div class="top-left">
        <SectionPath path="skillsets" />
      </div>

      <div class="bottom-left md:col-span-3 grid col-span-1 text-center">
        <p
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="100"
        >
          Communication
        </p>

        <p
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="100"
        >
          Teamplayer
        </p>

        <p
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="100"
        >
          Empathy
        </p>

        <p
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="100"
        >
          Creative
        </p>

        <p
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="100"
        >
          Critical thinker
        </p>

        <p
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="100"
        >
          Figma
        </p>

        <p
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="100"
        >
          Adobe XD
        </p>

        <p
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="100"
        >
          Adobe Illustrator
        </p>

        <p
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="100"
        >
          Adobe Premier Pro
        </p>

        <p
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-delay="100"
        >
          Trello
        </p>
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
  @apply block text-3xl md:text-[4.25vw] font-moglandemo w-fit md:leading-[5.7vw];
}
</style>
