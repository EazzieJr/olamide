<template>
  <section class="recent-works custom-border">
    <div class="recent-works-container">
      <SectionPath path="about" class="md:col-span-3" />

      <ScrollDown class="place-self-end md:self-start md:order-last" />

      <div class="bottom-mid">
        <p class="about-text">
          SELF-MOTIVATED DESIGNER WITH WILD INTEREST IN CREATING SEAMLESS
          DIGITAL EXPERIENCES. <br />
          <br />
          Not only do I believe users' pain points can be addressed by a
          thorough research and design, I also believe that it can put a smile
          on the users face.
        </p>

        <div class="achievements">
          <div class="top between">
            <span>2020 - 2022</span>

            <span class="">1 / 8</span>
          </div>

          <div class="bottom mt-4 md:mt-[1.6vw]">
            <img class="w-full" src="svg/big-card.svg" alt="" />
          </div>
        </div>

        <div class="motif-texts mt-7 md:text-[1.59vw] md:mt-[3.50vw] font-arial space-y-16 md:space-y-[5.3vw]">
          <p class="mr-10 md:m-0 md:leading-[2.5vw]">I am a certified product designer with over 2 <br class="hidden md:block"> years of experience in the design industry. I <br class="hidden md:block"> have designed projects and conducted research <br class="hidden md:block"> on user needs and pain points.</p>
          <p class="ml-14 md:ml-[25vw] md:leading-[2.5vw]">and I've always channeled the research <br class="hidden md:block"> towards creating a user friendly product. I <br class="hidden md:block"> believe equity is achievable in design and <br class="hidden md:block"> that accessibility and inclusiveness is for <br class="hidden md:block"> the greater good of all users</p>
          <p class="mr-16 md:mr-0 md:ml-[10vw] md:leading-[2.5vw]">My experience in the industry has <br class="hidden md:block"> made me understand how <br class="hidden md:block"> collaboration and teamwork can <br class="hidden md:block"> make a product a success.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.recent-works {
  @apply pt-20 pb-6 md:py-[6.62vw];
  > .recent-works-container {
    @apply grid grid-cols-2 md:grid-cols-12 gap-y-7;

    > .bottom-mid {
      @apply order-3 md:order-none col-span-8 pr-16 md:p-0 -mt-32 md:m-0;

      p.about-text {
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
</style>
