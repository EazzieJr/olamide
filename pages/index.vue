<template>
  <div class="px-5 lg:px-[1.6vw]">
    <div data-scroll-container  class="js-scroller">
      <Navigation />
  
      <Hero class="js-virtual-block" />
  
      <About class="js-virtual-block" />
  
      <Skillsets class="js-virtual-block" />
  
      <RecentWorks class="js-virtual-block" />
  
      <JobExperiences class="js-virtual-block" />
  
      <Footer class="js-virtual-block" />
    </div>
  </div>
</template>

<script>
// import LocomotiveScroll from "locomotive-scroll";
// import Scroller from "../js/scroller";

// import "../js/scroller";
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


      // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
      ScrollTrigger.addEventListener("refresh", () => this.scroll.update());

      // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
      ScrollTrigger.refresh();
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

    console.log(this.locomotiveScroll)

    this.initScroller();
  },
};
</script>

<style>
html, body {
  height: 100%;
  overflow: hidden;
}
  
.hap {
  font-family: "GT Haptik Regular";
}

.mon {
  font-family: "Moglan";
}
</style>
