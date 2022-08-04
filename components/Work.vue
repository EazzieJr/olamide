<template>
  <div class="cont h-fit" data-cursor="-pointer -exclusion">
    <a :href="`https://www.behance.net/gallery/${href}`" class="block" :class="`a-${id}`" target="blank">
      <span class="work block" :class="{ small }">
        <span class="image block" :class="`image-${id} overflow-hidden`">
          <nuxt-img provider="cloudinary" quality="70" :class="`img-${id}`" :src="src" alt="" loading="lazy" format="webp" placeholder="[100, 50, 10]" />
        </span>
  
        <span class="work-info block">
          <span class="h3 block" data-aos="fade-up" data-aos-duration="2000">{{ title }}</span>
  
          <SeeCase
            data-aos="fade-in"
            data-aos-duration="2000"
            data-aos-delay="400"
          />
        </span>
      </span>
    </a>
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
    linkTo: String,
  },

  mounted() {
    const stuff = document.querySelector(`.a-${this.id}`);

      stuff.addEventListener("mouseover", () => {
        gsap.to(`.image-${this.id} img`, {
          scale: 1,
          duration: 1,
          // opacity: 0,
          ease: "power3.inOut",
        });
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
  @apply min-w-[80%] max-w-[300px] md:max-w-none md:w-[31.45vw] space-y-7 md:space-y-[2.64vw] overflow-hidden;

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

/* span {
  display: block;
} */
</style>
