<script setup lang="ts">
import { textChangeRangeIsUnchanged } from 'typescript';
import { computed, ref } from 'vue';


// Define reactive variables
const name = ref('');
const CardNo1 = ref('');
const CardNo2 = ref('');
const CardNo3 = ref('');
const CardNo4 = ref('');
const cvv = ref('');
const expiryMonth = ref('');
const expiryYear = ref('');
const phoneNumber = ref('');

// Method to move focus to the next input field
function moveToNext(event: Event, currentInput: number) {
  const input = event.target as HTMLInputElement;
  if (input.value.length === 4) {
    const nextInput = document.querySelector(`input[ref="input${currentInput + 1}"]`) as HTMLInputElement;
    if (nextInput) {
      nextInput.focus();
    }
  }
}

// Computed property for formatted card number
const formattedCardNumber = computed(() => {
  return `${CardNo1.value}-${CardNo2.value}-${CardNo3.value}-${CardNo4.value}`;
});
</script>


<template>

  <section class="page333 flex flex-col overflow-hidden bg-[rgb(227,231,233)]">
    <!-- Section containing payment details and form. -->

    <div class="mt-[25px] mr-[11px] mb-[37px] flex max-w-[419.3999938964844px] flex-col tn:mt-[25px] tn:mr-2 tn:mb-[37px] tn:ml-0">
     
      <h2 class="font-Piazzolla mx-auto mt-[10.5px] flex items-center justify-center text-center text-[24px] font-semibold leading-[0.91] text-black">付款</h2>
      <div class="mt-[45.5px] flex flex-col">
        <div class="flex w-[239px] max-w-[85%] flex-col items-center gap-y-[17px]">
          <div class="flex w-[96.65%] flex-col">
            <h2 class="font-Abel flex w-[126px] max-w-[85%] items-center justify-center text-center text-[26px] font-normal leading-[0.84] text-black">捐贈金額</h2>
            <h2 class="font-Abel mt-[45px] ml-3 flex items-center text-[26px] font-normal leading-[0.84] text-black tn:mt-[45px] tn:mr-0 tn:mb-0 tn:ml-2">
              持卡人姓名
              <br />
              Holder of Credit Card
            </h2>
            <input type="text" v-model="name" placeholder="輸入姓名">
          </div>
          <h2 class="font-Abel flex w-[94.98%] items-center text-[26px] font-normal leading-[0.84] text-black">
            信用卡號
            <br />
            Credit Card Number
          </h2>
        </div>
        <div>
          <input type="text" v-model="CardNo1" maxlength="4" @input="moveToNext($event,1)" ref="input1" class="w-[60px] text-center">
          -
          <input type="text" v-model="CardNo2" maxlength="4" @input="moveToNext($event,2)" ref="input2" class="w-[60px] text-center">
          -
          <input type="text" v-model="CardNo3" maxlength="4" @input="moveToNext($event,3)" ref="input3" class="w-[60px] text-center">
          -
          <input type="text" v-model="CardNo4" maxlength="4" ref="input4" class="w-[60px] text-center">

        </div>
        <div class="mt-7 ml-3 flex w-[320.2875061035156px] max-w-[85%] flex-col tn:mt-7 tn:mr-0 tn:mb-0 tn:ml-2">
          <h2 class="font-Abel flex items-center text-[26px] font-normal leading-[0.84] text-black">背面末三碼  CVV2/CVC2/CAV2</h2>
          <input type="text" v-model="cvv" maxlength="3" placeholder="CVV">
          <h2 class="font-Abel mt-[19px] flex w-[110px] max-w-[85%] items-center text-[26px] font-normal leading-[0.84] text-black">
            有效年月
            <br />
            Valid Thru
          </h2>
          <div class="mt-1.5 flex items-center">
            <input type="text" v-model="expiryMonth" maxlength="2" placeholder="MM" class="w-[50px] text-center">
            <h3 class="font-Abel flex items-center justify-center text-center text-[20px] font-normal leading-[1.1] text-black">月</h3>
            <input type="text" v-model="expiryYear" maxlength="2" placeholder="YY" class="w-[50px] text-center">
            <h3 class="font-Abel flex items-center justify-center text-center text-[20px] font-normal leading-[1.1] text-black">年</h3>
          </div>
          <div class="mt-[19px] flex w-[227.1999969482422px] max-w-[85%] flex-col gap-y-1.5">
            <h2 class="font-Abel flex w-[158px] max-w-[85%] items-center text-[26px] font-normal leading-[0.84] text-black">
              手機號碼
              <br />
              Phone Number
            </h2>
            <input type="text" v-model="phoneNumber" placeholder="輸入手機號碼" class="w-full text-center bg-[rgb(217,217,217)]">
          </div>
        </div>
        <button class="font-Roboto mx-auto mt-[83px] flex w-[81.86%] items-center justify-center rounded-lg bg-[rgb(90,180,197)] pt-3.5 pr-2 pb-3.5 pl-2 text-center text-[24px] font-normal leading-[0.91] text-white">
          <!-- TODO -->
          <RouterLink to="/Page4">送出  Confirm</RouterLink>
        </button>
      </div>
    </div>
  </section>

</template>

<style scoped lang="scss">
  @import 'Page12.scss';
</style>

