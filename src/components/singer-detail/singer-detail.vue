<template>
  <transition name="slide">
    <music-list :songs="songs" :title="title" :bg-image="bgImage"></music-list>
  </transition>

</template>

<script type="text/ecmascript-6">
  import MusicList from 'components/music-list/music-list'
  import {mapGetters} from 'vuex'
  import {getSingerDetail} from 'api/singer'
  import {createSong} from 'common/js/song'
  import {ERR_OK} from 'api/config'
  export default {
    data(){
      return {
        songs: []
      }
    },
    computed: {
      title(){
        return this.singer.name
      },
      bgImage(){
        return this.singer.avatar
      },
      ...mapGetters([
        'singer'
      ])

    },
    created(){
      this._getDetail()
//      console.log(this.singer);

    },
    methods: {
      _getDetail(){
        if (!this.singer.id) {
          this.$router.push('/singer')
          return
        }
        getSingerDetail(this.singer.id).then((res) => {
          if (res.code === ERR_OK) {
            this.songs = this._normalizeSongs(res.data.list)
            console.log(this.songs)

          }
        })

      },
      _normalizeSongs(list){
        let ret = []
        list.forEach((item) => {
          let {musicData} = item
          if (musicData.songid && musicData.albummid) {
            ret.push(createSong(musicData))
          }
        })
        return ret
      }
    },
    components: {
      MusicList
    }
  }

</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus" scoped>
  @import "~common/stylus/variable"
  .singer-detail
    position fixed
    z-index 100
    top: 0
    left: 0
    right: 0
    bottom: 0
    background-color: $color-background

  .slide-enter-active, .slide-leave-active
    transition: all .3s

  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
'http://ws.stream.qqmusic.qq.com/102636799.m4a?fromtag=00‘
http://tsmusic24.tc.qq.com/102636799.mp3
http://cc.stream.qqmusic.qq.com/C200102636799.m4a?fromtag=0
http://cc.stream.qqmusic.qq.com/C200{0}.m4a?vkey={1}&fromtag=0
