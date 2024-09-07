
<template>

  <section class="page103food flex flex-col overflow-hidden bg-[rgb(227,231,233)]">
    <!-- Section displaying details about the love meal. -->

    <div class="mx-auto mt-[79px] mb-[31px] flex w-[90.71%] max-w-[390.3999938964844px] flex-col items-center tn:mx-auto tn:mt-[50px] tn:mb-[31px]">
      <h1 class="font-Piazzolla flex w-[126.13750457763672px] max-w-[85%] items-center justify-center text-center text-[36px] font-semibold leading-[0.72] text-[rgb(93,93,93)]">
        愛心餐
        <br />
        <br />
        一份
      </h1>
      <div class="mt-[71px] flex w-full flex-col rounded-[10px] bg-[rgb(244,185,146)] tn:mx-0 tn:mt-[50px] tn:mb-0">
        <h2 class="font-Piazzolla mx-auto mt-[388px] mb-[35px] flex w-[294.2749938964844px] max-w-[85%] items-center justify-center text-center text-[24px] font-semibold leading-[1.08] text-black tn:mx-auto tn:mt-[50px] tn:mb-[35px]">
          <!-- Instructions for pickup time at partner store. -->
           ※請於12小時內至合作店家領取
        </h2>
      </div>
      <button class="font-Roboto mt-[148px] mr-[23px] ml-6 flex w-[343px] max-w-full items-center justify-center rounded-lg bg-[rgb(90,180,197)] pt-3.5 pr-2 pb-3.5 pl-2 text-center text-[24px] font-normal leading-[0.91] text-white">
        <!-- TODO -->
        <RouterLink to="/Page12">完成</RouterLink>
      </button>
    </div>
  </section>




  <div class="container">
    <h1>QR Code</h1>
    <div class="qr-container" v-if="qrCode">
      <img :src="qrCode" alt="QR Code" />
    </div>
  </div>



</template>


<!--QRcode-->

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import axios from 'axios';

export default defineComponent({
  setup() {
    const qrCode = ref('');
    const userId = 'user123';  // 假設的用戶 ID
    const disadvantaged = 'Lowincome';  // 假設的狀況

    // 當組件加載時自動呼叫 API
    onMounted(async () => {
      try {
        const response = await axios.post('http://localhost:5173/generate-water-qrcode', {
          data: {
            id: userId,
            disadvantaged
          }
        });
        qrCode.value = response.data.qrCode; // 從後端返回的 QR Code URL
      } catch (error) {
        console.error('Error generating QR Code:', error);
      }
    });

    return {
      qrCode,
    };
  }
});
</script>

<!--QRcode-->




<style scoped lang="scss">
  @import 'Page12.scss';
</style>



<!--QRcode-->

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
}

.qr-container {
  margin-top: 20px;
}

img {
  width: 150px;
  height: 150px;
}
</style>