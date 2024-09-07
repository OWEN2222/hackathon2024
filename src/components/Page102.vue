
<template>

  <section class="page102 flex flex-col overflow-hidden bg-[rgb(227,231,233)]">
    <!-- Section for the heart meal offer. -->

    <div class="mt-[197px] mr-[23px] mb-[409px] ml-[25px] flex max-w-[382.3999938964844px] justify-between gap-x-2.5 tn:my-[50px] tn:mx-2 tn:gap-x-2">
      <!-- Flexbox layout for rows. -->

      <div class="flex w-[175px] min-w-0 flex-col rounded-[10px] bg-[rgb(244,185,146)]">
        <!-- Container for meal content. -->

        <div class="mt-[73px] mr-[19px] mb-[19px] ml-6 flex flex-col items-center gap-y-14 tn:mx-2 tn:mt-[50px] tn:mb-[19px] tn:gap-y-[50px]">
          <!-- Flexbox layout for columns. -->

          <div class="flex w-[95.45%] flex-col items-center gap-y-[35px]">
            <!-- Left column for meal information. -->

            <h1 class="font-Piazzolla flex w-full items-center justify-center text-center text-[36px] font-semibold leading-[0.72] text-[rgb(93,93,93)]">
              愛心餐
              <br />
              <br />
              一份
            </h1>
            <h1 class="font-Piazzolla flex items-center justify-center text-center text-[36px] font-semibold leading-[0.72] text-[rgb(125,119,119)]">待領取</h1>
          </div>
          <button class="font-Roboto ml-1.5 flex w-[126px] max-w-full items-center justify-center rounded-lg bg-[rgb(90,180,197)] pt-2 pr-[38px] pb-2 pl-[38px] text-center text-[24px] font-medium leading-[0.91] text-white">
            <!-- TODO -->
            <RouterLink to="/Page103food">領取</RouterLink>
          </button>
        </div>
      </div>
      <div class="flex w-[175px] min-w-0 flex-col rounded-[10px] bg-[rgb(253,133,58)]">
        <!-- Container for water content. -->

        <div class="mt-[73px] mr-[25px] mb-[19px] ml-[23px] flex flex-col gap-y-14 tn:mx-2 tn:mt-[50px] tn:mb-[19px] tn:gap-y-[50px]">
          <!-- Column for water-related information. -->

          <div class="ml-px flex flex-col items-center gap-y-[35px]">
            <!-- Column for detailed water info. -->

            <h1 class="font-Piazzolla flex w-full items-center justify-center text-center text-[36px] font-semibold leading-[0.72] text-[rgb(93,93,93)]">
              愛心水
              <br />
              <br />
              兩罐
            </h1>
            <h1 class="font-Piazzolla flex items-center justify-center text-center text-[36px] font-semibold leading-[0.72] text-[rgb(125,119,119)]">待領取</h1>
          </div>
          <button class="font-Roboto mr-px flex items-center justify-center rounded-lg bg-[rgb(90,180,197)] pt-2 pr-[38px] pb-2 pl-[38px] text-center text-[24px] font-medium leading-[0.91] text-white">
            <!-- TODO -->
            <RouterLink to="/Page104water">領取</RouterLink>
          </button>
        </div>
      </div>
    </div>
  </section>

</template>

<style scoped lang="scss">
  @import 'Page12.scss';
</style>

