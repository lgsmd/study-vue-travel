<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item" v-for="item of recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" />
        <div class="item-info">
          <p class="item-title">{{item.desc}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/201309/24/977fea7b3c5cd758c8d65eac.jpg_200x200_697c3b3f.jpg',
        desc: '成都大熊猫繁育研究基地'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1707/f6/f60edcaa8934d4fda3.img.jpg_200x200_37d0eedd.jpg',
        desc: '天府花溪谷山地户外运动体验公园'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1612/1d/1d9a740c1f9e0efaa3.img.jpg_200x200_63285bd9.jpg',
        desc: '成都海昌极地海洋公园'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1512/3a/3ab83c0358208e8d90.img.jpg_200x200_14e2fbfd.jpg',
        desc: '花水湾四季温泉谷'
      }, {
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1509/1d/e74e796e4e21275427ffdd838619f45f.water.jpg_200x200_d994e778.jpg',
        desc: '成都欢乐谷'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .recommend-title
    line-height : .8rem
    background : #eee
    margin-top : .2rem
    text-indent : .2rem
  .item
    overflow : hidden
    display : flex
    height : 1.9rem
    .item-img
      width : 1.7rem
      height : 1.7rem
      padding : .1rem
    .item-info
      flex : 1
      padding: .1rem
      min-width : 0
      .item-title
        line-height : .54rem
        font-size : .32rem
        ellipsis()
      .item-desc
        line-height : .4rem
        color : #ccc
        ellipsis()
      .item-button
        line-height : .44rem
        margin-top : .2rem
        background : #ff9300
        padding : 0 .15rem
        border-radius : .1rem
        color : #fff
</style>
