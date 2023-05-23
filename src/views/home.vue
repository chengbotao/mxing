<!--
 * @Author: Chengbotao
 * @Date: 2023-05-23 08:42:07
-->
<script setup lang="ts">
import { reactive, ref } from 'vue';

const tabVal = ref(0);
const state = reactive({
  imgUrl:
    '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
  title: '活蟹】湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
  shopName: '阳澄湖大闸蟹自营店>'
});
const handleClick = () => {
  console.log("点击登录")
};
</script>

<template>
  <div>
    <nut-tabs v-model="tabVal">
      <nut-tab-pane title="推荐">
        <nut-row>
          <nut-col :span="12">
            <nut-card :img-url="state.imgUrl" :title="state.title">
              <template #price>
                <div>8888888积分</div>
              </template>
              <template #origin>
              </template>
            </nut-card>
          </nut-col>
          <nut-col :span="12">
            <nut-card :img-url="state.imgUrl" :title="state.title">
              <template #price>
                <div>8888888积分</div>
              </template>
              <template #origin>
              </template>
            </nut-card>
          </nut-col>
        </nut-row>
      </nut-tab-pane>
      <nut-tab-pane title="分类一">
        Tab 2
      </nut-tab-pane>
      <nut-tab-pane title="分类二">
        Tab 3
      </nut-tab-pane>
    </nut-tabs>
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

.login_divider {
  margin-top: -5px;
}

.login_btn {
  margin-top: 50px;
  margin-bottom: 20px;
}
</style>
