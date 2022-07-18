<template>
  <footer class="custom-border">
    <div class="footer-container">
      <div class="top">
        <SectionPath path="contact me" />

        <div class="socials">
          <ul class="list">
            <li data-aos="fade-up" data-aos-duration="2000" class="h3"><a href="/">BEHANCE,</a></li>
            <li data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100" class="h3"><a href="/">TWITTER,</a></li>
            <li data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100" class="h3"><a href="/">GMAIL,</a></li>
            <li data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100" class="h3"><a href="/">INSTAGRAM</a></li>
            <li data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100" class="h3"><a href="/">LINKEDIN</a></li>
          </ul>
        </div>
        
        <div data-aos="fade-in" data-aos-delay="500" class="download-resume">
          <a href="/">
            download resume.
          </a>
        </div>
      </div>

      <div class="bottom md:between">
        <p>
          A COLLABORATIVE PROCESS BETWEEN OZENUA AND CENTURY LEAP.
        </p>

        <p>
          OLAMIDE ADEYI. C {{ currentYear }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style lang="postcss" scoped>
footer {
  @apply pt-14 md:pt-[6.62vw] font-arial border-b-0;
  > .footer-container {
    @apply divide-y-[0.5px] divide-black dark:divide-white;
    > .top {
      @apply grid grid-cols-2 md:grid-cols-4 gap-y-7 pb-20 md:pb-[9.93vw];

      > .socials {
        @apply order-3 md:-order-none col-span-2;
      }

      > .download-resume {
        @apply uppercase text-xs md:text-[1.6vw] lg:text-[1.3vw] place-self-end self-center md:self-start
      }
    }

    > .bottom {
      @apply py-6 lg:py-[2.7vw] space-y-3 md:space-y-0;

      p {
        @apply text-xs xl:text-[0.92vw]
      }
    }
  }
}
</style>
