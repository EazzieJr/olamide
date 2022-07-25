<template>
  <div class="section-path overflow-hidden h-fit">
    <h5>/{{ path }}</h5>
  </div>
</template>

<script>
export default {
  props: ["path"],

  methods: {
    init() {
      const sectionPath = document.querySelector(".section-path");
      console.log(sectionPath.textContent);
    },
  },

  mounted() {
    this.init();
  },
};
</script>

<style lang="postcss" scoped>
h5 {
  @apply font-arial text-sm lg:text-[1.6vw] uppercase md:leading-[1.85vw] translate-y-full;
}

/* .hide {
  @apply translate-y-[100%] hidden;
} */
</style>
