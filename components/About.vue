<template>
  <section class="recent-works overflow-hidden">
    <div class="recent-works-container">
      <SectionPath path="about" class="md:col-span-3" />

      <ScrollDown class="place-self-end md:self-start md:order-last" />

      <div class="bottom-mid">
        <p class="about-text small opacity-0 translate-y-10 md:hidden">
          <span class="hidden">
            <span class="overflow-hidden">
              <span>SELF-MOTIVATED</span>
              <span>DESIGNER</span>
              <span>WITH</span>
              <span>WILD</span>
            </span>
            <span>
              <span>INTEREST</span>
              <span>IN</span>
              <span>CREATING</span>
              <span>SEAMLESS</span>
            </span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>

            DIGITAL EXPERIENCES.
          </span>
          <br />
          <br />
          Not only do I believe users' pain points can be addressed by a
          thorough research and design, I also believe that it can put a smile
          on the users face.
        </p>

        <div class="about-text hidden md:block space-y-[4vw]">
          <span class="">
            <span class="overflow-y-hidden al-one">
              <span>SELF-MOTIVATED</span>
              <span>DESIGNER</span>
              <span>WITH</span>
              <span>WILD</span>
            </span>
            <span class="overflow-y-hidden al-one">
              <span>INTEREST</span>
              <span>IN</span>
              <span>CREATING</span>
              <span>SEAMLESS</span>
            </span>
            <span class="overflow-y-hidden al-one">
              <span>DIGITAL</span>
              <span>EXPERIENCES.</span>
            </span>
          </span>

          <span>
            <span class="overflow-y-hidden al-two">
              <span>Not</span>
              <span>only</span>
              <span>do</span>
              <span>I</span>
              <span>believe</span>
              <span>users'</span>
              <span>pain</span>
            </span>

            <span class="overflow-y-hidden al-two">
              <span>points</span>
              <span>can</span>
              <span>be</span>
              <span>addressed</span>
              <span>by</span>
              <span>a</span>
            </span>

            <span class="overflow-y-hidden al-two">
              <span>thorough</span>
              <span>research</span>
              <span>and</span>
              <span>design,</span>
              <span>I</span>
            </span>

            <span class="overflow-y-hidden al-two whitespace-nowrap">
              <span>also</span>
              <span>believe</span>
              <span>that</span>
              <span>it</span>
              <span>can</span>
              <span>put</span>
              <span>a</span>
              <span>smile</span>
            </span>

            <span class="overflow-y-hidden al-two">
              <span>on</span>
              <span>the</span>
              <span>users</span>
              <span>face.</span>
            </span>
          </span>
        </div>

        <div class="achievements">
          <div data-aos="fade-in" data-aos-duration="1500" class="top between">
            <span>2020 - 2022</span>

            <span class="">1 / 8</span>
          </div>

          <div class="bottom mt-4 md:mt-[1.6vw]">
            <img class="w-full" src="svg/big-card.svg" alt="" />
          </div>
        </div>

        <div
          class="motif-texts mt-7 md:text-[1.59vw] md:mt-[3.50vw] font-arial space-y-16 md:space-y-[5.3vw]"
        >
          <p class="mr-10 md:m-0 md:leading-[2.5vw]">
            I am a certified product designer with over 2
            <br class="hidden md:block" />
            years of experience in the design industry. I
            <br class="hidden md:block" />
            have designed projects and conducted research
            <br class="hidden md:block" />
            on user needs and pain points.
          </p>
          <p class="ml-14 md:ml-[25vw] md:leading-[2.5vw]">
            and I've always channeled the research
            <br class="hidden md:block" />
            towards creating a user friendly product. I
            <br class="hidden md:block" />
            believe equity is achievable in design and
            <br class="hidden md:block" />
            that accessibility and inclusiveness is for
            <br class="hidden md:block" />
            the greater good of all users
          </p>
          <p class="mr-16 md:mr-0 md:ml-[10vw] md:leading-[2.5vw]">
            My experience in the industry has <br class="hidden md:block" />
            made me understand how <br class="hidden md:block" />
            collaboration and teamwork can <br class="hidden md:block" />
            make a product a success.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
import aosMixin from "~/mixins/aos";
export default {
  mixins: [aosMixin],

  methods: {
    animateLine(el, trigger) {
      gsap.to(el, {
        scrollTrigger: {
          trigger: trigger,
          start: "top 85%",
          // markers: true
          // toggleActions: "play none none reset",
        },

        duration: 1.5,
        // delay: -1,
        y: 0,
        ease: "power3.inOut",
        stagger: {
          amount: 0.2,
        },
      });
    },
  },

  mounted() {
    // Run functions on different screens
    if (window.innerWidth >= 768 && window.innerWidth < 1025) {
      setTimeout(() => {
        this.animateLine(".al-one span", ".al-one");
        this.animateLine(".al-two span", ".al-two");
      }, 4000);
    } else if (window.innerWidth > 1025) {
      this.animateLine(".al-one span", ".al-one");
      this.animateLine(".al-two span", ".al-two");
    }

    gsap.to(".small", {
      opacity: 1,
      y: 0,
      duration: 2,
      delay: 3,
    });
  },
};
</script>

<style lang="postcss" scoped>
.recent-works {
  @apply pt-20 pb-6 md:py-[6.62vw];
  > .recent-works-container {
    @apply grid grid-cols-2 md:grid-cols-12 gap-y-7;

    > .bottom-mid {
      @apply order-3 md:order-none col-span-8 pr-16 md:p-0 -mt-32 md:m-0;

      .about-text {
        @apply uppercase text-sm leading-loose md:text-[3.17vw] md:leading-[4.45vw] font-arial;
      }

      .achievements {
        @apply mt-10 md:mt-[6.62vw];

        > .top {
          span {
            @apply text-xs lg:text-[0.8vw] font-lato;
          }
        }
      }
    }
  }
}

span > span > span {
  @apply translate-y-[5vw] inline-block;
}

span {
  @apply inline-block;
}
</style>
