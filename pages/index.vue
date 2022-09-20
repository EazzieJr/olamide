<template>
  <div class="px-5 lg:px-[1.6vw]">
    <div data-scroll-container>
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
// import LocomotiveScroll from "locomotive-scroll";
import MouseFollower from "mouse-follower";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
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
      this.scroll = new this.locomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
      });

      this.scroll.on("scroll", ScrollTrigger.update);

      ScrollTrigger.scrollerProxy("[data-scroll-container]", {
        scrollTop(value) {
          return arguments.length
            ? this.scroll.scrollTo(value, 0, 0)
            : this.scroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: document.querySelector("[data-scroll-container]").style.transform
          ? "transform"
          : "fixed",
      });
    }
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
          scroller: "[data-scroll-container]",
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

    this.initScroller();
  },
};
</script>

<style>
.hap {
  font-family: "GT Haptik Regular";
}

.mon {
  font-family: "Moglan";
}
</style>
