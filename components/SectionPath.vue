<template>
  <div class="section-path h-fit">
    <h5>/{{ path }}</h5>
  </div>
</template>

<script>
import { gsap } from "gsap/dist/gsap";
export default {
props: ["path"],

  methods: {
    init() {
      // Split text into span
      const text = this.$el.querySelector("h5");
      const textArray = text.innerText.split("");
      text.innerHTML = "";

      textArray.forEach((letter, index) => {
        const span = document.createElement("span");
        span.innerText = letter;
        text.appendChild(span);
        gsap.to(".section-path h5 span", {
          y: "100%",
          // opacity: 0,
          display: "inline-block"
        })
      });
    },
  },

  mounted() {
    this.init();
  },
};
</script>

<style lang="postcss" scoped>
h5 {
  @apply font-arial text-sm lg:text-[1.6vw] uppercase md:leading-[1.85vw] overflow-hidden whitespace-pre;
}

/* .hide {
  @apply translate-y-[100%] hidden;
} */
</style>
