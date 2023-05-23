<!--
 * @Author: Chengbotao
 * @Date: 2023-05-23 08:42:07
-->
<script setup lang="ts">
import { ref } from 'vue';

const phone = ref("");

const handleClick = () => {
  console.log("点击登录")
};
</script>

<template>
  <div>
    <div class="login_title">
      <span>登录</span>
    </div>
    <nut-input class="login_phone" v-model="phone" placeholder="请输入手机号" :border="false" clearable>
      <template #left>
        <img class="icon_phone" referrerpolicy="no-referrer"
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng2c7e94aa674334cfe5dc52e2695165aedce3ec78aba0f94d93f81ada3fad9321" />
      </template>
    </nut-input>
    <nut-divider class="login_divider" />
    <nut-button class="login_btn" size="large"
      color="linear-gradient(180deg,rgba(254, 223, 26, 1) 0,rgba(255, 201, 34, 1) 100%)" @click="handleClick">登录</nut-button>
    <div>
      声明:该商城仅用于支持商户了解积分付SDK产品，不做实际运营
    </div>
  </div>
</template>

<style scoped>
.login_title::before {
  content: "";
  border-left: 5px solid rgba(254, 223, 26, 1);
  margin-right: 10px;
}
.login_title {
  overflow-wrap: break-word;
  color: rgba(52, 52, 52, 1);
  font-weight: 500;
  text-align: left;
  white-space: nowrap;
  padding-left: 30px
}
.login_phone {
  margin-top: 15px;
}
.icon_phone {
  width: 16px;
  height: 24px;
}
.login_divider{
  margin-top: -5px;
}
.login_btn{
  margin-top: 50px;
  margin-bottom: 20px;
}
</style>
