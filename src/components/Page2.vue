
<template>

  <section class="ve flex flex-col overflow-hidden bg-[rgb(227,231,233)]">
    <!-- Main section for donation related content. -->

    <div class="mx-auto mt-[59.5px] mb-[30px] flex w-[348.3125px] max-w-[85%] flex-col gap-y-[145px] tn:mx-auto tn:mt-[50px] tn:mb-[30px] tn:gap-y-[50px]">
      <!-- Container for flex column layout. -->

      <div class="relative mr-2.5 flex flex-col tn:mt-0 tn:mr-2 tn:mb-0 tn:ml-0">
        <!-- Group of buttons for donation amounts. -->

        <div class="relative flex flex-col items-center gap-y-[88px] tn:gap-y-[50px]">
          <!-- Container for the donation amount title and buttons. -->

          <h2 class="font-Piazzolla flex items-center justify-center text-center text-[24px] font-semibold leading-[0.91] text-black">
            <!-- Title displaying &#x27;Donation Amount&#x27;. -->
             捐款金額
          </h2>
          <div class="flex w-full flex-col gap-y-[22px]">
            <!-- Container for multiple donation amount buttons. -->

            <button class="font-Aboreto flex items-center justify-center rounded-lg bg-white pt-[57.5px] pr-2 pb-[57.5px] pl-2 text-center text-[16px] font-normal leading-[1.37] text-white">
              <!-- Button for a specific donation fee amount. -->
               feefefe
            </button>
            <button class="font-Aboreto flex items-center justify-center rounded-lg bg-white pt-[57.5px] pr-2 pb-[57.5px] pl-2 text-center text-[16px] font-normal leading-[1.37] text-white">
              <!-- Button for another donation fee amount. -->
               feefefe
            </button>
            <button class="font-Aboreto flex items-center justify-center rounded-lg bg-white pt-[57.5px] pr-2 pb-[57.5px] pl-2 text-center text-[16px] font-normal leading-[1.37] text-white">
              <!-- Button for a different donation fee amount. -->
               feefefe
            </button>
            <button class="flex items-center justify-center rounded-lg pt-[19px] pr-9 pb-[19px] pl-9">
              <!-- Button for custom donation amount input. -->

              <span class="font-Roboto text-center text-[32px] font-semibold leading-[0.68] text-black">
                <span class="font-semibold"><RouterLink to="/Page24">$ ___ 自訂金額     </RouterLink> </span>
                <span class="font-semibold text-white"> </span>
                <span class="text-[1.125em] font-semibold text-white">.</span>
              </span>
            </button>
          </div>
        </div>
        <div class="absolute left-[-17.000001907348633px] top-[165.5px] flex w-[189px] flex-col gap-y-[137px] tn:gap-y-[50px]">
          <!-- Container for displaying pre-defined donation amounts. -->

          <h1 class="font-Roboto flex items-center justify-center text-center text-[32px] font-semibold leading-[0.68] text-black">
            <!-- Display for the amount $200. -->
             <RouterLink to="/Page21">$ 200</RouterLink>
          </h1>
          <h1 class="font-Roboto flex items-center justify-center text-center text-[32px] font-semibold leading-[0.68] text-black">
            <!-- Display for the amount $800. -->
            <RouterLink to="/Page22">$ 800</RouterLink>
          </h1>
          <h1 class="font-Roboto flex items-center justify-center text-center text-[32px] font-semibold leading-[0.68] text-black">
            <!-- Display for the amount $1200. -->
            <RouterLink to="/Page23">$ 1200</RouterLink>
          </h1>
        </div>

      </div>
      <button class="font-Abel ml-auto flex w-[175px] max-w-full items-center justify-center rounded-lg bg-[rgb(90,180,197)] pt-[13px] pr-2 pb-[13px] pl-2 text-center text-[24px] font-normal leading-[0.91] text-white">
        <!-- Button to proceed to the next step. -->
        <RouterLink to="/Page333">繼續</RouterLink>
      </button>
    </div>
  </section>

</template>

<style scoped lang="scss">
  @import 'Page12.scss';
</style>

