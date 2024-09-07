<template>

  <div class="page1011 flex flex-col overflow-hidden bg-[rgb(227,231,233)]"><h1 class="font-Roboto mx-auto mt-[454.5px] mb-[455.5px] flex items-center justify-center text-center text-[36px] font-semibold leading-[0.61] text-black">身分驗證中...</h1></div>

</template>

<script>
export default {
  mounted() {
    // 延遲3秒後跳轉
    setTimeout(() => {
      this.$router.push('/Page102'); // 將 '/next-page' 替換成你的目標頁面路徑
    }, 3000); // 3秒鐘
  },
};
</script>

<style scoped lang="scss">
  @import 'Page12.scss';
</style>