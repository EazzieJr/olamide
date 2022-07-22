<template>
  <div class="cont h-fit" data-cursor="-pointer -exclusion">
    <div class="work block" :class="{ small }">
      <div class="image" :class="`image-${id} overflow-hidden`">
        <img :class="`img-${id}`" :src="src" alt="" />
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
gsap.registerPlugin(ScrollTrigger);
export default {
  props: {
    small: {
      type: Boolean,
      default: false,
    },
    title: String,
    src: String,
    href: String,
    id: String,
  },

  mounted() {
    const stuff = document.querySelector(`.image-${this.id}`);

      stuff.addEventListener("mouseover", () => {
        gsap.to(`.image-${this.id} img`, {
          scale: 1,
          duration: 1,
          // opacity: 0,
          ease: "power3.inOut",
        });

        console.log("mouseover");
      });

      stuff.addEventListener("mouseleave", () => {
        gsap.to(`.image-${this.id} img`, {
          scale: 1.1,
          duration: 1,
          // opacity: 0,
          ease: "power3.inOut",
        });
      });

    gsap.fromTo(
      `.img-${this.id}`,
      {
        y: "-10vw",
      },
      {
        scrollTrigger: {
          trigger: `.image-${this.id}`,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
          // markers: true
        },
        y: "10vw",
        ease: "none",
      }
    );
  },
};
</script>

<style lang="postcss" scoped>
.work {
  @apply w-4/5 max-w-[300px] md:max-w-none md:w-[31.45vw] space-y-7 md:space-y-[2.64vw] overflow-hidden;

  &.small .image {
    @apply h-64 md:h-[30.1vw];
  }
  > .image {
    @apply w-full md:w-[31.45vw] md:h-[44.5vw];

    &:hover {
      > img {
        @apply transform scale-[1];
        transition-duration: transform 500ms !important;
      }
    }

    img {
      @apply w-full md:scale-[1.1];
      /* transition-duration: transform 500ms !important; */
    }
  }

  > .work-info {
    @apply space-y-2 md:space-y-[0.72vw];
  }
}

/* .image:hover img {
  transform: scale(1) !important;
  transition: 500ms;
  transition-duration: transform 500ms !important;
} */
</style>
