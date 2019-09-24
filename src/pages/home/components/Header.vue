<template>
  <div class="header">
    <div class="header-left">返回</div>
    <div class="header-input">输入城市/景点/游玩主题</div>
    <div class="header-right">地址</div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
.header
  line-height: .86rem
  background-color: #40d8e4
  display: flex
  color : #fff
  .header-left
    width: .64rem
    float: left
  .header-input
    flex: 1
    color: #cacaca
    background: #fff
    height: .62rem
    line-height: .62rem
    margin-top: .12rem
    margin-left: .2rem
    border-radius: .1rem
  .header-right
    width: 1.24rem
    float: right
    text-align: center
</style>
