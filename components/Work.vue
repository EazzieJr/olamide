<template>
  <div class="work block">
    <div class="image">
      <img :src="small ? 'svg/small-work.svg' : 'svg/big-work.svg'" alt="" />
    </div>

    <div class="work-info">
      <h3>{{ title }}</h3>

      <SeeCase />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    small: {
      type: Boolean,
      default: false,
    },
    title: String
  },
};
</script>

<style lang="postcss" scoped>
.work {
  @apply w-4/5 max-w-[300px] md:max-w-none md:w-[31.45vw] space-y-7 md:space-y-[2.64vw] overflow-hidden;
  > .image {
    @apply w-full;

    img {
      @apply w-full;
    }
  }

  > .work-info {
    @apply space-y-2 md:space-y-[0.72vw];
  }
}
</style>
