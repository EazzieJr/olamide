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
import gsap from "gsap";
MouseFollower.registerGSAP(gsap);

export default {
  name: "IndexPage",

  mounted() {
    const cursor = new MouseFollower({
      skewing: 3,
      stickDelta: 1
    });
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
