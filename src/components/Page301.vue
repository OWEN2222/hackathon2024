
<template>

  <section class="page301 flex flex-col overflow-hidden bg-[rgb(227,231,233)]">
    <div class="relative mx-auto mt-8 mb-[335px] flex w-full max-w-[430.3999938964844px] flex-col tn:mx-auto tn:mt-8 tn:mb-[50px]">
      <div class="relative flex flex-col items-center gap-y-[73px] tn:gap-y-[50px]">
        <p class="w-[93.49%]">
          <span class="font-Inter text-[15px] font-extrabold leading-[1.2] text-black">
            <span class="font-extrabold text-[rgb(90,180,197)]">TOWN</span>
            <span class="font-extrabold"> </span>
            <span class="font-medium text-[rgb(71,82,89)]">PASS</span>
          </span>
        </p>
        <div class="flex w-full flex-col items-center gap-y-[88px] tn:gap-y-[50px]">
          <h1 class="font-Roboto flex w-full items-center justify-center text-center text-[48px] font-semibold leading-[0.45] text-[rgb(90,180,197)]">
            領取
            <br />
            <br />
            <br />
            種類選擇
          </h1>
          <div class="flex w-[86.74%] gap-x-[23px] tn:flex-col tn:items-center tn:gap-y-[30px] tn:gap-x-2">
            <button class="font-AsapCondensed flex w-[175px] items-center justify-center rounded-lg bg-[rgb(212,82,81)] pt-[137.5px] pr-3.5 pb-[137.5px] pl-3.5 text-center text-[48px] font-semibold leading-[0.45] text-white tn:w-full tn:pt-[50px] tn:pr-2 tn:pb-[50px] tn:pl-2">
              <!-- TODO -->
               <RouterLink to="/Page7">愛心餐</RouterLink>
            </button>
            <button class="font-AsapCondensed flex w-[175px] items-center justify-center rounded-lg bg-[rgb(253,133,58)] pt-[137.5px] pr-3.5 pb-[137.5px] pl-3.5 text-center text-[48px] font-semibold leading-[0.45] text-white tn:w-full tn:pt-[50px] tn:pr-2 tn:pb-[50px] tn:pl-2">
              <!-- TODO -->
               <RouterLink to="/Page7">愛心水</RouterLink>
            </button>
          </div>
        </div>
      </div>
      
    </div>
  </section>

</template>

<style scoped lang="scss">
  @import 'Page12.scss';
</style>

