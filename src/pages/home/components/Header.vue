<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe658;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe63c;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe65c;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
    // ...mapGetters(['doubleCity']) 映射Getters，这里是学习实践，做个备注，在使用时， 记得 import { mapGetters } from 'vuex'
  }
}
</script>

<style lang="stylus" scoped>
@import "~styles/varibles.styl"
.header
  height: $headerHeight
  line-height: $headerHeight
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
    min-width: 1.04rem
    padding: 0 .1rem
    float: right
    text-align: center
    color: #fff
    .arrow-icon
      margin-left: -.1rem
</style>
