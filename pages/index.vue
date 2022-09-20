<template>
  <div class="px-5 lg:px-[1.6vw]" id="index">
    <Navigation />

    <Hero />

    <About />

    <Skillsets />

    <RecentWorks />

    <JobExperiences />

    <Footer />
  </div>
</template>

<script>
// import SmoothScrollbar from "smooth-scrollbar";
// import ScrollTriggerPlugin from "~/js/vendor/smooth-scrollbar/ScrollTriggerPlugin";
// import SoftScrollPlugin from "~/js/vendor/smooth-scrollbar/SoftScrollPlugin";
import MouseFollower from "mouse-follower";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
MouseFollower.registerGSAP(gsap);
// SmoothScrollbar.use(ScrollTriggerPlugin, SoftScrollPlugin);

export default {
  name: "IndexPage",

  methods: {
    initScrollbar() {
      const view = document.querySelector("#index");
      SmoothScrollbar.init(view, {
        renderByPixels: true,
        damping: 0.065,
        // alwaysShowTracks: true,
      });
    },
  },

  mounted() {
    const cursor = new MouseFollower({
      skewing: 3,
      stickDelta: 1,
    });

    const sectionPaths = document.querySelectorAll(".section-path");
    sectionPaths.forEach((el) => {
      gsap.to(el.firstChild.childNodes, {
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          pinType: "transform",
          // markers: true,

          // onEnter: () => {
          // },
        },

        y: 0,
        duration: 1,
        stagger: 0.02,
        ease: "power3.out",
        // opacity: 1,
      })
    })

    // Init Scrollbar
    // this.initScrollbar();
  },
};
</script>

<style>
/* html {
  height: 100%;
  display: none;
} */

#index {
  width: 100%;
  height: 100%;
}
  
.hap {
  font-family: "GT Haptik Regular";
}

.mon {
  font-family: "Moglan";
}
</style>
