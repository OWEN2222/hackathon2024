
<template>

  <section class="p2-1 flex flex-col overflow-hidden bg-[rgb(227,231,233)]">
    <!-- Main section for donation options. -->

    <div class="mx-auto mt-[18px] mb-8 flex w-full max-w-[430.3999938964844px] gap-x-4 tn:gap-x-2">
      
      <div class="relative mt-[41.5px] flex w-[347px] min-w-0 flex-col">
        <!-- Group container for donation amount and buttons. -->

        <div class="relative flex flex-col">
          <h2 class="font-Piazzolla ml-[12.97%] flex w-[229px] max-w-[85%] items-center justify-center text-center text-[24px] font-semibold leading-[0.91] text-black tn:my-0 tn:mx-auto">
            <!-- Title for the donation amount section. -->
             捐款金額
          </h2>
          <div class="mt-[88.5px] mr-[9px] flex flex-col gap-y-[22px] tn:mt-[50px] tn:mr-2 tn:mb-0 tn:ml-0">
            <!-- Container for various donation buttons. -->

            <button class="font-Aboreto flex items-center justify-center rounded-lg bg-[rgb(90,180,197)] pt-[57.5px] pr-2 pb-[57.5px] pl-2 text-center text-[16px] font-normal leading-[1.37] text-[rgb(90,180,197)] outline outline-1 outline-offset-[-1px] outline-[rgb(90,180,197)]">
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
              <!-- Button for custom donation amount. -->

              <span class="font-Roboto text-center text-[32px] font-semibold leading-[0.68] text-black">
                <span class="font-semibold"><RouterLink to="/Page24">$ ___ 自訂金額     </RouterLink></span>
                <span class="font-semibold text-white"> </span>
                <span class="text-[1.125em] font-semibold text-white">.</span>
              </span>
            </button>
          </div>
          <button class="font-Abel mt-[143px] ml-auto flex w-[175px] max-w-full items-center justify-center rounded-lg bg-[rgb(90,180,197)] pt-[13px] pr-2 pb-[13px] pl-2 text-center text-[24px] font-normal leading-[0.91] text-white">
            <!-- TODO -->
            <RouterLink to="/Page333">繼續</RouterLink>
          </button>
        </div>
        <div class="absolute left-[-17px] top-[165.5px] flex w-[189px] flex-col gap-y-[137px] tn:gap-y-[50px]">
          <!-- Container for displaying different predefined donation amounts. -->

          <h1 class="font-Roboto flex items-center justify-center text-center text-[32px] font-semibold leading-[0.68] text-black"><RouterLink to="/Page21">$ 200</RouterLink></h1>
          <h1 class="font-Roboto flex items-center justify-center text-center text-[32px] font-semibold leading-[0.68] text-black"><RouterLink to="/Page22">$ 800</RouterLink></h1>
          <h1 class="font-Roboto flex items-center justify-center text-center text-[32px] font-semibold leading-[0.68] text-black"><RouterLink to="/Page23">$ 1200</RouterLink></h1>
        </div>
      </div>
    </div>
  </section>

</template>

<style scoped lang="scss">
  @import 'Page12.scss';
</style>

