webpackJsonp([6],{BRgg:function(t,n,i){"use strict";n.b=function(){var t=e()({},a.b,{uin:0,needNewCode:1,platform:"h5"});return Object(o.a)("https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",t,a.c)},n.a=function(t){var n=e()({},a.b,{topid:t,needNewCode:1,uin:0,tpl:3,page:"detail",type:"top",platform:"h5"});return Object(o.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg",n,a.c)};var s=i("woOf"),e=i.n(s),o=i("Gak4"),a=i("T452")},UXw9:function(t,n){},s3x3:function(t,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var s=i("Dd8w"),e=i.n(s),o=i("kvay"),a=i("NYxO"),c=i("BRgg"),r=i("T452"),u=i("PvFA"),g={data:function(){return{songs:[],rank:!0}},created:function(){this._getMusicList()},methods:{_getMusicList:function(){var t=this;this.topList.id?Object(c.a)(this.topList.id).then(function(n){n.code===r.a&&(console.log(n.songlist),t.songs=t._normalizeSongs(n.songlist))}):this.$router.push("/rank")},_normalizeSongs:function(t){var n=[];return t.forEach(function(t){var i=t.data;i.songid&&i.albummid&&n.push(Object(u.a)(i))}),n}},computed:e()({title:function(){return this.topList.topTitle},bgImage:function(){return this.songs.length?this.songs[0].image:""}},Object(a.c)(["topList"])),components:{MusicList:o.a}},f={render:function(){var t=this.$createElement,n=this._self._c||t;return n("transition",{attrs:{name:"slide"}},[n("music-list",{attrs:{rank:this.rank,title:this.title,"bg-image":this.bgImage,songs:this.songs}})],1)},staticRenderFns:[]};var l=i("VU/8")(g,f,!1,function(t){i("UXw9")},"data-v-52a9b3a7",null);n.default=l.exports}});
//# sourceMappingURL=6.2ce12eef91581599e628.js.map