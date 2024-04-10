<template>
  <div class="go-project-template-market">
<<<<<<< HEAD
    <n-space vertical>
      <n-image object-fit="contain" height="300" preview-disabled :src="requireErrorImg()"></n-image>
      <n-h3>暂时还没有东西呢</n-h3>
    </n-space>
=======
    <div class="content-box">
      <n-space vertical>
        <img src="https://goviewpro.goviewlink.com/charts-img-db/charts-img-db_id_5pimyysnnh8000.png" style="width: 100%" />
        <img src="https://goviewpro.goviewlink.com/charts-img-db/charts-img-db_id_izetnl0654w00.png" style="height: 400px" />
        <n-button text tag="a" href="https://ai.goviewlink.com/?channel=mayun" target="_blank" type="primary">
          前往 GoViewPro 查看 👆
        </n-button>
      </n-space>
    </div>
>>>>>>> dev
  </div>
</template>

<script setup lang="ts">
import { requireErrorImg } from '@/utils'
</script>

<style lang="scss" scoped>
<<<<<<< HEAD
@include go("project-template-market") {
  margin-top: 100px;
  @extend .go-flex-center;
=======
@include go('project-template-market') {
  box-sizing: border-box;
  height: calc(100vh - 62px);
  padding-top: 3vh;
  .content-box {
    width: 700px;
    margin: 0 auto 0;
    padding: 20px;
    border-radius: 10px;
    background: linear-gradient(120deg, rgba(255, 255, 255, 0.15) 0%, rgba(29, 83, 163, 0.3) 99.09%);
    box-shadow: 0px 0px 6px 6px rgba(0, 0, 0, 0.04);
    @extend .go-flex-center;
    img {
      border-radius: 6px;
    }
  }
>>>>>>> dev
}

@include dark() {
  @include go('project-template-market') {
    background-color: #18181c;
  }
}
</style>
