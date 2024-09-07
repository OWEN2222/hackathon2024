<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div>
    pxCode Screen List: <br />
    <RouterLink to="/Page12">Page12</RouterLink>
    <RouterLink to="/Page2">Page2</RouterLink>
    <RouterLink to="/Page20">店家驗證中</RouterLink>
    <RouterLink to="/Page21">$ 200</RouterLink>
    <RouterLink to="/Page22">$ 800</RouterLink>
    <RouterLink to="/Page23">$ 1200</RouterLink>
    <RouterLink to="/Page24">$ ___ 自訂金額     </RouterLink>
    <RouterLink to="/Page333">繼續</RouterLink>
    <RouterLink to="/Page4">送出  Confirm</RouterLink>
    <RouterLink to="/Page101">我要取餐</RouterLink>
    <RouterLink to="/Page102">取餐資訊</RouterLink>
    <RouterLink to="/Page103food">領取</RouterLink>
    <RouterLink to="/Page104water">領取</RouterLink>
    
  </div>
</template>