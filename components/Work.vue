<template>
  <div class="work block">
    <div class="image">
      <img :src="small ? 'svg/small-work.svg' : 'svg/big-work.svg'" alt="" />
    </div>

    <div class="work-info">
      <h3>United Bank of Africa Redesign Case study</h3>

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
  },
};
</script>

<style lang="postcss" scoped>
.work {
  @apply w-4/5 max-w-[300px] space-y-8 overflow-hidden;
  > .image {
    @apply w-full;

    img {
      @apply w-full;
    }
  }

  > .work-info {
    @apply space-y-2;
  }
}
</style>
