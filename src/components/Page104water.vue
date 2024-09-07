
<template>

  <section class="p104water flex flex-col overflow-hidden bg-[rgb(227,231,233)]">
    <!-- This section is dedicated to the love water message and related actions. -->

    <div class="mt-[79px] mr-5 mb-[31px] ml-7 flex max-w-[382.3999938964844px] flex-col items-center tn:mx-2 tn:mt-[50px] tn:mb-[31px]">
      <h1 class="font-Piazzolla flex w-[126.11250305175781px] max-w-[85%] items-center justify-center text-center text-[36px] font-semibold leading-[0.72] text-[rgb(93,93,93)]">
        <!-- Main title representing the main theme of the section. -->
         愛心水
        <br />
        <br />
        一份
      </h1>
      <div class="mt-[71px] flex w-full flex-col rounded-[10px] bg-[rgb(253,133,58)] tn:mx-0 tn:mt-[50px] tn:mb-0">
        <h2 class="font-Piazzolla mx-auto mt-[392px] mb-[37px] flex w-[294.2875061035156px] max-w-[85%] items-center justify-center text-center text-[24px] font-semibold leading-[1.08] text-black tn:mx-auto tn:mt-[50px] tn:mb-[37px]">
          <!-- Subtitle providing instructions for pickup at partner stores. -->
           ※請於12小時內至合作店家領取
        </h2>
      </div>
      <button class="font-Roboto mt-[142px] mr-[19px] ml-5 flex w-[343px] max-w-full items-center justify-center rounded-lg bg-[rgb(90,180,197)] pt-3.5 pr-2 pb-3.5 pl-2 text-center text-[24px] font-normal leading-[0.91] text-white">
        <!-- Button for completing the action required by the user. -->
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
        const response = await axios.post('/api/generate-water-qrcode', {
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