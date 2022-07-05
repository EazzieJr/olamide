<template>
  <section class="divide-y-[0.5px] divide-black dark:divide-white">
    <div>
      <h1>olamide adeyi</h1>
    </div>

    <div class="between">
      <img src="svg/asterisk.svg" alt="" />

      <h1>work folio</h1>

      <img src="svg/asterisk.svg" alt="" />
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style lang="postcss">
@font-face {
  font-family: "MoglanDemo";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("~assets/fonts/MoglanDemo.ttf") format("ttf");
}

section {
  @apply border-y-[0.5px] border-black dark:border-white;
  img {
    @apply w-[3.8vw];
  }
}

h1 {
  font-family: 'MoglanDemo', sans-serif;
}
</style>
