<template>
  <footer class="">
    <div class="grid">
      <div class="footer-divider place-self-start"></div>
    </div>
    <div class="footer-container">
      <div class="top">
        <SectionPath path="contact me" />

        <div class="socials">
          <ul class="list" data-cursor="-exclusion">
            <li data-aos="fade-up" data-aos-duration="2000" class="h3">
              <a href="/">BEHANCE,</a>
            </li>
            <li
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="100"
              class="h3"
            >
              <a href="/">TWITTER,</a>
            </li>
            <li
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="100"
              class="h3"
            >
              <a href="/">GMAIL,</a>
            </li>
            <li
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="100"
              class="h3"
            >
              <a href="/">INSTAGRAM</a>
            </li>
            <li
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="100"
              class="h3"
            >
              <a href="/">LINKEDIN</a>
            </li>
          </ul>
        </div>

        <div data-aos="fade-in" data-aos-delay="500" class="download-resume" data-cursor="-exclusion">
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

  mounted() {
    gsap.to(".footer-divider", {
      scrollTrigger: {
        trigger: ".footer-divider",
        start: "top 90%",
      },

      width: "100%",
      duration: 2,
      ease: "power3.out",
    });
  },
};
</script>

<style lang="postcss" scoped>
footer {
  @apply font-arial border-b-0;
  > .footer-container {
    @apply divide-y-[0.5px] divide-black dark:divide-white pt-14 md:pt-[6.62vw];
    > .top {
      @apply grid grid-cols-2 md:grid-cols-4 gap-y-7 pb-20 md:pb-[9.93vw];

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
</style>
