<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) of pages"
                    :key="index"
      >
        <div class="icon"
             v-for="item of page"
             :key="item.id"
        >
          <div class="icon-img">
            <img class="icon-img-content" :src="item.iconUrl" />
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [{
        id: '0001',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '景点门票'
      }, {
        id: '0002',
        iconUrl: 'https://img1.qunarzz.com/piao/fusion/1810/50/26ffa31b56646402.png',
        desc: '成都海昌'
      }, {
        id: '0003',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/97/02f5043b51b2102.png',
        desc: '情迷九寨'
      }, {
        id: '0004',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
        desc: '川剧变脸'
      }, {
        id: '0005',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        desc: '一日游'
      }, {
        id: '0006',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b8/c5dcdb58deec2402.png',
        desc: '碧峰峡'
      }, {
        id: '0007',
        iconUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/338c5b924c5809e8c7b14f60a953c3e2.png',
        desc: '成都欢乐谷'
      }, {
        id: '0008',
        iconUrl: 'http://img1.qunarzz.com/piao/fusion/1803/54/35899492b1302802.png',
        desc: '熊猫基地'
      }, {
        id: '0009',
        iconUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20197/02bbb71bd1f629c2348d0c97ef82c129.png',
        desc: '青城山'
      }, {
        id: '0010',
        iconUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/f04285731d7121da1b9028e2bf431695.png',
        desc: '都江堰'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  @import "~styles/mixins.styl"
  .icons >>> .swiper-container
      height : 0
      padding-bottom : 50%
  .icon
      position : relative
      overflow : hidden
      float : left
      width : 25%
      height : 0
      padding-bottom : 25%
      .icon-img
          position : absolute
          top : 0
          bottom : .44rem
          left : 0
          right : 0
          box-sizing : border-box
          padding : .1rem
          .icon-img-content
              display : block
              margin : 0 auto
              height : 100%
      .icon-desc
        position : absolute
        height : .44rem
        line-height : .44rem
        bottom : 0
        left : 0
        right : 0
        text-align : center
        color : $darkTextColor
        ellipsis()
</style>
