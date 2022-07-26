<template>
  <footer class="">
    <div class="grid">
      <div class="footer-divider place-self-start"></div>
    </div>
    <div class="footer-container">
      <div class="top">
        <SectionPath path="contact me" />

        <div class="socials">
          <ul class="list uppercase" data-cursor="-exclusion">
            <li class="h3 behance">
              <a href="/">
                <span>b</span><span>e</span><span>h</span><span>a</span
                ><span>n</span><span>c</span><span>e</span><span>,</span>
              </a>
            </li>
            <li class="h3 twitter">
              <a href="/">
                <span>t</span><span>w</span><span>i</span><span>t</span
                ><span>t</span><span>e</span><span>r</span><span>,</span>
              </a>
            </li>
            <li class="h3 gmail">
              <a href="/">
                <span>g</span><span>m</span><span>a</span><span>i</span
                ><span>l</span><span>,</span>
              </a>
            </li>
            <li class="h3 instagram">
              <a href="/">
                <span>i</span><span>n</span><span>s</span><span>t</span
                ><span>a</span><span>g</span><span>r</span><span>a</span
                ><span>m</span><span>,</span>
              </a>
            </li>
            <li class="h3 linkedin">
              <a href="/">
                <span>l</span><span>i</span><span>n</span><span>k</span
                ><span>e</span><span>d</span><span>i</span><span>n</span
                ><span>.</span>
              </a>
            </li>
          </ul>
        </div>

        <div
          data-aos="fade-in"
          data-aos-delay="500"
          class="download-resume"
          data-cursor="-exclusion"
        >
          <a href="/resume.pdf" download> download resume. </a>
        </div>
      </div>

      <div class="bottom md:between">
        <p>A COLLABORATIVE PROCESS BETWEEN OZENUA AND CENTURY LEAP.</p>

        <p>OLAMIDE ADEYI. C {{ currentYear }}</p>
      </div>
    </div>
  </footer>
</template>

<script>
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
export default {
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },

  methods: {
    initFooterAnimation() {
      gsap.to(".footer-divider", {
        scrollTrigger: {
          trigger: ".footer-divider",
          start: "top 90%",
        },

        width: "100%",
        duration: 2,
        ease: "power3.out",
      });

      this.initLinkAnime(".behance a span");
      this.initLinkAnime(".twitter a span");
      this.initLinkAnime(".gmail a span");
      this.initLinkAnime(".instagram a span");
      this.initLinkAnime(".linkedin a span");

      gsap.fromTo(
        ".bottom p",
        {
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: ".bottom p",
            start: "top 95%",
            // markers: true,
          },
          opacity: 1,
          duration: 1.5,
        }
      );
    },

    initLinkAnime(el) {
      gsap.to(el, {
        scrollTrigger: {
          trigger: ".list",
          start: "top 90%",
          // toggleActions: "play none none reset",
        },

        duration: 1,
        y: 0,
        ease: "power3.out",
        stagger: 0.02,
      });
    },
  },

  mounted() {
    this.initFooterAnimation();
  },
};
</script>

<style lang="postcss" scoped>
footer {
  @apply font-arial border-b-0;
  > .footer-container {
    @apply divide-y-[0.5px] divide-black dark:divide-white pt-14 md:pt-[6.62vw];
    > .top {
      @apply grid grid-cols-2 md:grid-cols-4 gap-y-9 pb-20 md:pb-[9.93vw];

      > .socials {
        @apply order-3 md:-order-none col-span-2;
      }

      > .download-resume {
        @apply uppercase text-xs md:text-[1.6vw] lg:text-[1.3vw] place-self-end self-center md:self-start;
      }
    }

    > .bottom {
      @apply py-6 lg:py-[2.7vw] space-y-3 md:space-y-0;

      p {
        @apply text-xs xl:text-[0.92vw];
      }
    }
  }
}

span,
a {
  @apply inline-block;
}

li a {
  @apply overflow-hidden;
}

a span {
  @apply translate-y-[100%];
}
</style>
