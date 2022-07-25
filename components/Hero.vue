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
@font-face {
  font-family: "MoglanDemo";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("~assets/fonts/MoglanDemo.ttf") format("ttf");
}

section {
  perspective: 1000px;

  img {
    @apply w-[3.8vw];
  }
}

h1 {
  font-family: "MoglanDemo", sans-serif;
  /* transform: translate3d(0px, 0px, -200px); */
}

.perse {
  transform: translateZ(-20vw) rotateX(-90deg);
  opacity: 0;
}
</style>
