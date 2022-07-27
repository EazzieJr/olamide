<template>
  <section class="recent-works overflow-hidden">
    <div class="recent-works-container">
      <SectionPath path="about" class="md:col-span-3 fade" />

      <ScrollDown class="place-self-end md:self-start md:order-last fade" />

      <div class="bottom-mid">
        <p class="about-text small opacity-0 translate-y-10 md:hidden">
          self-motivated designer with wild interest in creating seamless
          digital experiences.
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

          <div class="bottom mt-4 md:mt-[1.6vw] w-full between">
            <div class="w-[49.9%] overflow-hidden clip">
              <nuxt-img
                class="w-full scale-[1.5]"
                src="images/Olamide-facing-down.png"
                alt=""
                loading="lazy"
                placeholder
              />
            </div>

            <div class="w-[49.9%] overflow-hidden clip">
              <nuxt-img
                class="w-full scale-[1.5]"
                src="images/Olamide-looking-forward.png"
                alt=""
                loading="lazy"
                placeholder
              />
            </div>
          </div>
        </div>

        <div class="motif-texts">
          <p class="mr-10 md:m-0" data-magnetic>
            <span data-aos="fade-in" data-aos-duration="1500">
              I am a certified product designer with over 2
              <br class="hidden md:block" />
              years of experience in the design industry. I
              <br class="hidden md:block" />
              have designed projects and conducted research
              <br class="hidden md:block" />
              on user needs and pain points.
            </span>
          </p>
          <p class="ml-14 md:ml-[25vw]" data-magnetic>
            <span data-aos="fade-in" data-aos-duration="1500">
              and I've always channeled the research
              <br class="hidden md:block" />
              towards creating a user friendly product. I
              <br class="hidden md:block" />
              believe equity is achievable in design and
              <br class="hidden md:block" />
              that accessibility and inclusiveness is for
              <br class="hidden md:block" />
              the greater good of all users
            </span>
          </p>

          <p class="mr-16 md:mr-0 md:ml-[10vw]" data-magnetic>
            <span data-aos="fade-in" data-aos-duration="1500">
              My experience in the industry has <br class="hidden md:block" />
              made me understand how <br class="hidden md:block" />
              collaboration and teamwork can <br class="hidden md:block" />
              make a product a success.
            </span>
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

    fadeIn() {
      gsap.to(".fade", {
        opacity: 1,
        duration: 1,
        delay: 4,
      });
    },
  },

  mounted() {
    this.fadeIn();

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
      delay: 4,
    });

    gsap.to(".clip", {
      scrollTrigger: {
        trigger: ".bottom",
        start: "top 80%",
        // markers: true
        // toggleActions: "play none none reset",
        onEnter: () => {
          gsap.to(".clip img", {
            scale: 1,
            duration: 1,
            ease: "power3.out",
            delay: 0.5,
          });
        },
      },

      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
      duration: 1.5,
      ease: "power3.inOut",
      // stagger: 0.2
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
      @apply order-3 md:order-none col-span-8 pr-10 md:p-0 -mt-32 md:m-0;

      > .motif-texts {
        @apply mt-7 md:text-[1.59vw] md:mt-[3.50vw] font-arial space-y-16 md:space-y-[5.3vw];
        p {
          @apply md:leading-[2.5vw] w-fit;
        }
      }

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

.clip {
  clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
}

.fade {
  opacity: 0;
}
</style>
