<template>
  <nav>
    <div class="nav-container between">
      <div class="left-container hidden md:block">
        <ul class="navlinks start ">
          <a data-cursor="-pointer -exclusion" data-magnetic>
            <div class="overflow-hidden lg:space-y-[1vw] h-4 lg:h-[1.1vw]">
              <div class="swap">
                <li>Be.</li>
                <li>Be.</li>
              </div>
            </div>
          </a>

          <a data-cursor="-pointer -exclusion" data-magnetic>
            <div class="overflow-hidden lg:space-y-[1vw] h-4 lg:h-[1.1vw]">
              <div class="swap">
                <li>Dr.</li>
                <li>Dr.</li>
              </div>
            </div>
          </a>

          <a data-cursor="-pointer -exclusion" data-magnetic>
            <div class="overflow-hidden lg:space-y-[1vw] h-4 lg:h-[1.1vw]">
              <div class="swap">
                <li>In.</li>
                <li>In.</li>
              </div>
            </div>
          </a>

          <a data-cursor="-pointer -exclusion" data-magnetic>
            <div class="overflow-hidden lg:space-y-[1vw] h-4 lg:h-[1.1vw]">
              <div class="swap">
                <li>Tw.</li>
                <li>Tw.</li>
              </div>
            </div>
          </a>
        </ul>
      </div>

      <div class="mid-container">
        <nuxt-link to="/" class="font-haptik uppercase" data-cursor="-exclusion"> olamide </nuxt-link>
      </div>

      <div class="right-container start" data-cursor="-pointer -exclusion">
        <Timer />

        <button class="theme" @click="toggleTheme">
          <svg
          :class="darkMode ? 'invert' : ''"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="9" cy="9" r="8.75" stroke="black" stroke-width="0.5" />
            <mask id="path-2-inside-1_4_6" fill="white">
              <path
                d="M9 15C8.21207 15 7.43185 14.8448 6.7039 14.5433C5.97594 14.2417 5.31451 13.7998 4.75736 13.2426C4.20021 12.6855 3.75825 12.0241 3.45672 11.2961C3.15519 10.5681 3 9.78793 3 9C3 8.21207 3.15519 7.43185 3.45672 6.7039C3.75825 5.97594 4.20021 5.31451 4.75736 4.75736C5.31451 4.20021 5.97595 3.75825 6.7039 3.45672C7.43185 3.15519 8.21207 3 9 3L9 9L9 15Z"
              />
            </mask>
            <path
              d="M9 15C8.21207 15 7.43185 14.8448 6.7039 14.5433C5.97594 14.2417 5.31451 13.7998 4.75736 13.2426C4.20021 12.6855 3.75825 12.0241 3.45672 11.2961C3.15519 10.5681 3 9.78793 3 9C3 8.21207 3.15519 7.43185 3.45672 6.7039C3.75825 5.97594 4.20021 5.31451 4.75736 4.75736C5.31451 4.20021 5.97595 3.75825 6.7039 3.45672C7.43185 3.15519 8.21207 3 9 3L9 9L9 15Z"
              fill="black"
              stroke="black"
              mask="url(#path-2-inside-1_4_6)"
            />
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import $ from "jquery";
import Magnetic from "~/js/magnetic.js";
import { mapState, mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations(["toggleDarkMode"]),

    toggleTheme() {
      const html = document.querySelector("html");

      if (this.darkMode) {
        html.classList.remove("dark");
        this.toggleDarkMode()
      } else {
        html.classList.add("dark");
        this.toggleDarkMode()
      }
    },
  },

  computed: {
    ...mapState(["darkMode"])
  },

  mounted() {
    new Magnetic();
    $("[data-magnetic]").each(function () {
      new Magnetic(this);
    });
  }
};
</script>

<style lang="postcss" scoped>
nav {
  @apply py-6 lg:py-[2.7vw]  text-xs lg:text-[0.935vw];
  font-family: "GT Haptik";

  > .nav-container {
    @apply md:grid md:grid-cols-3;

    > .left-container {
      @apply hidden md:block;

      ul {
        @apply space-x-5 lg:space-x-[1.9vw];
      }
    }

    > .mid-container {
      @apply tracking-[10px] lg:tracking-[0.95vw] place-self-center;
    }

    > .right-container {
      @apply space-x-3 place-self-end;
    }
  }
}

@font-face {
  font-family: "GT Haptik";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("~assets/fonts/GT-Haptik-Regular.woff2") format("woff2");
}

ul a {
  position: relative;
}

ul a::before {
  content: "";
  position: absolute;
  display: block;
  top: -1vw;
  left: -1vw;
  right: -1vw;
  bottom: -1vw;
  z-index: -1;
  /* width: 100%;
  height: 100%; */
  /* background: red; */
  /* transform: translate(-50%, -50%); */
  /* opacity: 0; */
  /* transition: opacity 0.2s ease-in-out; */
}

ul a > div > div  {
  @apply transition duration-300;
}

ul a:hover > div > div {
  @apply -translate-y-[1vw] transition duration-300 ease-linear
}
</style>
