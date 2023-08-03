<template>
  <div class="px-5 lg:px-[1.6vw]">
    <div>
      <Navigation />
  
      <Hero />
  
      <About />
  
      <Skillsets />
  
      <RecentWorks />
  
      <JobExperiences />
  
      <Footer />
    </div>
  </div>
</template>

<script>
import MouseFollower from "mouse-follower";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Lenis from '@studio-freight/lenis'

gsap.registerPlugin(ScrollTrigger);
MouseFollower.registerGSAP(gsap);

export default {
  name: "IndexPage",
  data() {
    return {
      scroll: null,
    };
  },
  
  methods: {
    initScroller() {
      const lenis = new Lenis({duration: 2})

      lenis.on('scroll', (e) => {
        // console.log(e)
      })

      function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)
    }
  },

  mounted() {
    this.initScroller()
    
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

    // console.log(this.locomotiveScroll)

    // this.initScroller();
  },
};
</script>

<style>
html, body {
  height: 100%;
  /* overflow: hidden; */
}
  
.hap {
  font-family: "GT Haptik Regular";
}

.mon {
  font-family: "Moglan";
}
</style>
