<template>
  <section class="skillsets custom-border">
    <div class="skillsets-container">
      <div class="top-left">
        <SectionPath path="skillsets" />
      </div>

      <div class="bottom-left md:col-span-3 grid col-span-1">
        <p data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100" class="ml-[6vw]"> Communication </p>

        <p data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100" class="place-self-end mr-[10vw] md:mr-[10.6vw] mt-5 md:mt-[2vw]"> Teamplayer </p>

        <p data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100" class="ml-[10vw] md:ml-[20vw] mt-4 md:mt-[1.25vw]"> Empathy </p>

        <p data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100" class="place-self-end mr-[14vw] md:mr-[17vw] mt-7 md:mt-[5.1vw]"> Creative </p>

        <p data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100" class="mt-5 md:mt-[1.13vw]"> Critical thinker </p>

        <p data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100" class="place-self-center mt-6 md:mt-[9.47vw] md:-ml-[15vw]"> Figma </p>

        <p data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100" class="ml-[40vw] mt-6 md:ml-0 md:mt-[9.47vw] md:place-self-center"> Adobe XD </p>

        <p data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100" class="mt-7 md:ml-[3vw] md:mt-[8.87vw]"> Adobe Illustrator </p>

        <p data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100" class="place-self-end mt-7 md:mt-[7.5vw] md:mr-[10.6vw]"> Adobe Premier Pro </p>

        <p data-aos="fade-up" data-aos-duration="2000" data-aos-delay="100" class="place-self-center mt-7 md:mt-[8.87vw] md:-ml-[5vw]"> Trello </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="postcss" scoped>
.skillsets {
  @apply py-6 md:py-[6.62vw];
  > .skillsets-container {
    @apply grid grid-cols-1 md:grid-cols-4 gap-y-7;
  }
}

p {
  @apply block text-3xl md:text-[4.25vw] font-moglandemo w-fit md:leading-[5.7vw]
}
</style>
