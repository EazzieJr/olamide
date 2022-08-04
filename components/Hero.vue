<template>
  <section class="grid grid-cols-1" data-cursor="-exclusion -big">
    <div class="line"></div>
    <h1 class="perse">olamide adeyi</h1>
    <div class="line"></div>
    <div class="between perse">
      <img src="svg/asterisk.svg" alt="" />

      <h1>work folio</h1>

      <img src="svg/asterisk.svg" alt=""/>
    </div>
    <div class="line"></div>
  </section>
</template>

<script>
import aosMixin from "~/mixins/aos";
import { gsap } from "gsap/dist/gsap";
export default {
  mixins: [aosMixin],

  mounted() {
    const tl = gsap.timeline();
    tl.to(".perse", {
      rotateX: 0,
      duration: 2,
      ease: "power3.out",
      delay: 2,
      opacity: 1,
      z: 0,
      stagger: 0.1,
    })
      .to(".line", {
        width: "100%",
        duration: 2,
        ease: "power3.out",
        delay: -1.5,
    })
  },
};
</script>

<style lang="postcss" scoped>
/* @font-face {
  font-family: "Moglan";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("fonts/Moglan.ttf");
} */

  /* @font-face {
    font-family: "Moglan";
    font-weight: 400;
    font-display: swap;
    src: url("/fonts/Moglan Ttf.ttf");
  } */

section {
  perspective: 1000px;
}

h1 {
  @apply font-moglan;
  /* font-family: "MoglanDemo", sans-serif; */
  /* transform: translate3d(0px, 0px, -200px); */
}

.perse {
  transform: translateZ(-20vw) rotateX(-90deg);
  opacity: 0;

  img {
    @apply w-[3.77vw] h-[3.77vw];
  }
}
</style>
