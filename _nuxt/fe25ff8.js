(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{203:function(t,e,n){var content=n(277);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("6570a8f6",content,!0,{sourceMap:!1})},205:function(t,e,n){var content=n(283);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("4e8213bc",content,!0,{sourceMap:!1})},227:function(t,e,n){"use strict";e.a={welcome:{hello:"สวัสดี",name:"ฉันชื่อ พงพันธุ์ ศักดาสาวิตร",student:"ฉันเป็นนักศึกษาเทคโนโลยีสารสนเทศ",buttons:{about:"เกี่ยวกับฉัน"}}}},228:function(t,e,n){"use strict";e.a={welcome:{hello:"Hello",name:"I'm Pongphun Sakdasawit",student:"I am an information technology student",buttons:{about:"About me"}}}},232:function(t,e,n){"use strict";var o={data:function(){return{isTop:!0}},beforeMount:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){this.isTop=!(window.scrollY>0)}}},r=(n(282),n(92)),l=n(126),c=n.n(l),d=n(359),f=n(366),v=n(367),h=n(368),_=n(360),m=n(361),w=n(362),x=n(363),V=n(365),y=n(364),k=n(226),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{fixed:"",color:"rgba(22, 22, 22, "+(t.isTop?"0":"0.8")+")","elevate-on-scroll":""}},[n("v-container",{staticClass:"pa-0 fill-height"},[n("v-toolbar-title",[t._v("Poom")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-menu",{attrs:{"offset-y":"","nudge-left":"70",rounded:"xl"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",r,!1),o),[n("v-icon",[t._v("mdi-translate")])],1)]}}])},[t._v(" "),n("v-list",{staticClass:"d-flex",attrs:{rounded:"",dense:""}},t._l(t.$i18n.locales,(function(e){return n("v-list-item",{key:e.code,attrs:{to:t.switchLocalePath(e.code)}},[t._v("\n            "+t._s(e.name)+"\n          ")])})),1)],1)],1)],1),t._v(" "),n("v-main",[n("nuxt")],1)],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VApp:d.a,VAppBar:f.a,VBtn:v.a,VContainer:h.a,VIcon:_.a,VList:m.a,VListItem:w.a,VMain:x.a,VMenu:V.a,VSpacer:y.a,VToolbarTitle:k.a})},252:function(t,e,n){n(253),t.exports=n(254)},276:function(t,e,n){"use strict";n(203)},277:function(t,e,n){var o=n(25)(!1);o.push([t.i,"h1[data-v-495dc2cf]{font-size:20px}",""]),t.exports=o},282:function(t,e,n){"use strict";n(205)},283:function(t,e,n){var o=n(25)(!1);o.push([t.i,'.v-application,.v-application [class*=text-]{font-family:"Itim",sans-serif!important}',""]),t.exports=o},80:function(t,e,n){"use strict";var o={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},r=(n(276),n(92)),l=n(126),c=n.n(l),d=n(359),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"495dc2cf",null);e.a=component.exports;c()(component,{VApp:d.a})}},[[252,4,1,5]]]);