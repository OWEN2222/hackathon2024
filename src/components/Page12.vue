
<template>

  <section class="page12 flex flex-col overflow-hidden bg-[rgb(227,231,233)]">
    <!-- Section containing the main content related to Taipei -->

    <div class="mt-[53px] mr-[5px] mb-[101.5px] flex max-w-[425.3999938964844px] flex-col tn:mt-[50px] tn:mr-[5px] tn:mb-[50px] tn:ml-0">
      <!-- Flexbox container for arranging child elements -->

      <h1 class="font-ABeeZee flex justify-center text-center text-[96px] font-normal leading-[1.17] text-[rgb(90,180,197)]">
        <!-- Main title displaying the location -->
         台北
        <br />
        愛心餐
      </h1>
      <img class="mt-[25px] ml-10 w-[313.3000183105469px] max-w-[85%] object-cover tn:mx-auto tn:mt-[25px] tn:mb-0" src="/assets/86f51d9d06983581c19a8798018967eb.png" alt="alt text" />
      <!-- Image representation of the content -->

      <button class="font-Abel mx-auto flex w-56 max-w-full items-center justify-center rounded-lg bg-[rgb(90,180,197)] pt-[19px] pr-2 pb-[19px] pl-2 text-center text-[24px] font-normal leading-[0.91] text-white">
        <!-- Button for making donations --> <RouterLink to="/Page2">我要捐款</RouterLink>
         
      </button>
      <button class="font-Abel mx-auto mt-[31px] flex w-56 max-w-full items-center justify-center rounded-lg bg-[rgb(90,180,197)] pt-[19px] pr-2 pb-[19px] pl-2 text-center text-[24px] font-normal leading-[0.91] text-white">
        <!-- Button for claiming a meal -->
        <RouterLink to="/Page101">我要領餐</RouterLink>
      </button>
      <p class="font-ABeeZee mx-auto mt-[8.5px] flex items-center justify-center text-center text-[16px] font-normal leading-[1.37] text-[rgb(146,146,146)]">
        <!-- Important note regarding meal eligibility -->
         ＃領餐需具有中低收入戶身份
      </p>
      <button class="font-Roboto mx-auto mt-[15.5px] flex w-[294px] max-w-full items-center justify-center rounded-lg bg-[rgb(245,186,75)] pt-[13px] pr-2 pb-[13px] pl-2 text-center text-[24px] font-semibold leading-[0.91] text-white">
        <!-- Button for partner stores to log in -->
            <RouterLink to="/Page20">合作店家登入</RouterLink>
      </button>
    </div>
  </section>

</template>

<style scoped lang="scss">
  @import 'Page12.scss';
</style>

