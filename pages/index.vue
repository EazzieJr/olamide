<template>
  <div>
    <Navigation />

    <div>
      <p class="font-arial text-7xl">EXPERIENCES</p>
      <p class="mon text-7xl">OLAMIDE</p>
      <p class=" text-7xl hap">OO:OO AM</p>
      <p class="font-lato text-7xl uppercase">scroll down</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage'
}
</script>


<style>
@font-face {
  font-family: 'GT Haptik Regular';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('~assets/fonts/GT-Haptik-Regular.woff2') format('woff2');
}

@font-face {
  font-family: 'Moglan';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('~assets/fonts/Moglan.ttf') format('ttf');
}

.hap {
  font-family: 'GT Haptik Regular';
}

.mon {
  font-family: 'Moglan';
}
</style>