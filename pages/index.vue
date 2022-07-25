<template>
  <div class="px-5 lg:px-[1.6vw]">
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
import MouseFollower from "mouse-follower";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
MouseFollower.registerGSAP(gsap);

export default {
  name: "IndexPage",

  mounted() {
    const cursor = new MouseFollower({
      skewing: 3,
      stickDelta: 1,
    });

    const sectionPaths = document.querySelectorAll(".section-path");
    // console.log(sectionPaths);
    sectionPaths.forEach((el) => {
      gsap.to(el.firstChild, {
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          onEnter: () => {
            console.log(el.textContent);
          },
        },

        y: 0,
        duration: 1,
        ease: "power3.out",
      })
    })


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
