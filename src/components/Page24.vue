<template>
  <section class="page24 flex flex-col overflow-hidden bg-[rgb(227,231,233)]">
    <!-- This section contains the donation amount input and related buttons. -->

    <div class="mx-auto mt-[18px] mb-[30px] flex w-full max-w-[430.3999938964844px] gap-x-4 tn:gap-x-2">
      <div class="relative mt-[41.5px] flex w-[348px] min-w-0 flex-col">
        <div class="relative flex flex-col">
          <h2 class="font-Piazzolla ml-[12.93%] flex w-[229px] max-w-[85%] items-center justify-center text-center text-[24px] font-semibold leading-[0.91] text-black tn:my-0 tn:mx-auto">
            <!-- This is the heading for the donation amount options. -->
            捐款金額
          </h2>
          <div class="mt-[88.5px] mr-2.5 flex flex-col gap-y-[22px] tn:mt-[50px] tn:mr-2 tn:mb-0 tn:ml-0">
            <button class="font-Aboreto flex items-center justify-center rounded-lg bg-white pt-[57.5px] pr-2 pb-[57.5px] pl-2 text-center text-[16px] font-normal leading-[1.37] text-white">
              <!-- TODO -->
              feefefe
            </button>
            <button class="font-Aboreto flex items-center justify-center rounded-lg bg-white pt-[57.5px] pr-2 pb-[57.5px] pl-2 text-center text-[16px] font-normal leading-[1.37] text-white">
              <!-- TODO -->
              feefefe
            </button>
            <button class="font-Aboreto flex items-center justify-center rounded-lg bg-white pt-[57.5px] pr-2 pb-[57.5px] pl-2 text-center text-[16px] font-normal leading-[1.37] text-white">
              <!-- TODO -->
              feefefe
            </button>
            <button class="flex items-center justify-center rounded-lg pt-[19px] pr-9 pb-[19px] pl-9">
              <!-- Button for entering a custom donation amount. -->
              <span class="font-Roboto text-center text-[32px] font-semibold leading-[0.68] text-black">
                <span class="font-semibold">
                  <input
                    type="text"
                    v-model="customAmount"
                    placeholder="輸入金額"
                    class="border-none bg-transparent text-[inherit] font-semibold leading-[inherit] text-[inherit] w-[auto]"
                  />
                </span>
                <span class="font-semibold text-[rgb(253,133,58)]"> </span>
                <span class="text-[1.125em] font-semibold text-[rgb(253,133,58)]">.</span>
              </span>
            </button>
          </div>
          <button class="font-Abel mt-[145px] ml-auto flex w-[175px] max-w-full items-center justify-center rounded-lg bg-[rgb(90,180,197)] pt-[13px] pr-2 pb-[13px] pl-2 text-center text-[24px] font-normal leading-[0.91] text-white">
            <!-- TODO -->
            <RouterLink to="/Page333">繼續</RouterLink>
          </button>
        </div>
        <div class="absolute left-[-17px] top-[165.5px] flex w-[189px] flex-col gap-y-[137px] tn:gap-y-[50px]">
          <h1 class="font-Roboto flex items-center justify-center text-center text-[32px] font-semibold leading-[0.68] text-black">
            <!-- Displays the amount for $200. -->
            <RouterLink to="/Page21">$ 200</RouterLink>
          </h1>
          <h1 class="font-Roboto flex items-center justify-center text-center text-[32px] font-semibold leading-[0.68] text-black">
            <!-- Displays the amount for $800. -->
            <RouterLink to="/Page22">$ 800</RouterLink>
          </h1>
          <h1 class="font-Roboto flex items-center justify-center text-center text-[32px] font-semibold leading-[0.68] text-black">
            <!-- Displays the amount for $1200. -->
            <RouterLink to="/Page23">$ 1200</RouterLink>
          </h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Define a reactive variable for the custom amount
const customAmount = ref('');
</script>

<style scoped lang="scss">
/* Ensure input field fits into the button style */
input {
  border: none;
  background: transparent;
  text-align: center;
  font-size: inherit;
  font-weight: inherit;
  color: inherit;
}
</style>
