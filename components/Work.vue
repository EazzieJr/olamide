<template>
  <div  data-cursor="-pointer -exclusion">
    <div class="work block">
      <div class="image overflow-hidden" :class="{ small }">
        <img :src="src" alt="" />
      </div>

      <div class="work-info">
        <h3 data-aos="fade-up" data-aos-duration="2000">{{ title }}</h3>

        <SeeCase
          data-aos="fade-in"
          data-aos-duration="2000"
          data-aos-delay="400"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
export default {
  props: {
    small: {
      type: Boolean,
      default: false,
    },
    title: String,
    src: String,
    href: String,
  },
};
</script>

<style lang="postcss" scoped>
.work {
  @apply w-4/5 max-w-[300px] md:max-w-none md:w-[31.45vw] space-y-7 md:space-y-[2.64vw] overflow-hidden;
  > .image {
    @apply w-full md:w-[31.45vw] md:h-[44.5vw];

    &.small {
      @apply h-64 md:h-[30.1vw];
    }

    img {
      @apply w-full;
    }
  }

  > .work-info {
    @apply space-y-2 md:space-y-[0.72vw];
  }
}
</style>
