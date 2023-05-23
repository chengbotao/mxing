<!--
 * @Author: Chengbotao
 * @Date: 2023-05-23 08:42:07
-->
<script setup lang="ts">
import { ref } from 'vue';

const phone = ref("");

</script>

<template>
  <div>
    <div class="image-text_1 flex-row justify-between">
      <div class="group_1 flex-col"></div>
      <span class="text-group_1">登录</span>
    </div>
    <nut-input v-model="phone" placeholder="插槽演示" :border="false" clearable>
      <template #left>
        <img class="icon_1" referrerpolicy="no-referrer"
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng2c7e94aa674334cfe5dc52e2695165aedce3ec78aba0f94d93f81ada3fad9321" />
      </template>
      <template #right> <nut-button type='primary' size="small">获取验证码</nut-button> </template>
    </nut-input>
    <nut-divider />
    <nut-button size="large"
      color="linear-gradient(180deg,rgba(254, 223, 26, 1) 0,rgba(255, 201, 34, 1) 100%)">登录</nut-button>
    <div>
      
    </div>
  </div>
</template>

<style scoped>
.image-text_1 {
  width: 106px;
  margin: 0 506px 0 41px;
  opacity: 1;
}

.text-group_1 {
  overflow-wrap: break-word;
  color: rgba(52, 52, 52, 1);
  font-size: 38px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  line-height: 53px;
}

.icon_1 {
  width: 29px;
  height: 42px;
}
</style>
