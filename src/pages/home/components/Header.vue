<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe658;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe63c;</span>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      {{this.city}}
      <span class="iconfont arrow-icon">&#xe65c;</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}

</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
.header
  height: .86rem
  line-height: .86rem
  background-color: $bgColor
  display: flex
  color : #fff
  .header-left
    width: .64rem
    float: left
    .back-icon
      text-align: center
      font-size: .6rem
  .header-input
    flex: 1
    color: #cacaca
    background: #fff
    height: .62rem
    line-height: .62rem
    padding-left: .2rem
    margin-top: .12rem
    margin-left: .2rem
    border-radius: .1rem
  .header-right
    width: 1.28rem
    float: right
    text-align: center
    .arrow-icon
      margin-left: -.1rem
</style>
