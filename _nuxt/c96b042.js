(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{208:function(t,e,n){var content=n(285);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("6570a8f6",content,!0,{sourceMap:!1})},210:function(t,e,n){var content=n(291);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("4e8213bc",content,!0,{sourceMap:!1})},234:function(t,e,n){"use strict";e.a={welcome:{hello:"สวัสดี",name:"ฉันชื่อ พงพันธุ์ ศักดาสาวิตร",student:"ฉันเป็นนักศึกษาเทคโนโลยีสารสนเทศ",skill:"ทักษะของฉัน",buttons:{about:"เกี่ยวกับฉัน"}}}},235:function(t,e,n){"use strict";e.a={welcome:{hello:"Hello",name:"I'm Pongphun Sakdasawit",student:"I am an information technology student",skill:"My Skills",buttons:{about:"About me"}}}},239:function(t,e,n){"use strict";var o={data:function(){return{isTop:!0}},beforeMount:function(){window.addEventListener("scroll",this.handleScroll)},beforeDestroy:function(){window.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){this.isTop=!(window.scrollY>0)}}},r=(n(290),n(88)),l=n(113),c=n.n(l),d=n(367),f=n(372),v=n(374),h=n(375),m=n(358),_=n(368),k=n(369),w=n(370),y=n(373),x=n(371),V=n(233),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{fixed:"",color:t.$vuetify.theme.dark?"rgba(22, 22, 22, "+(t.isTop?"0":"0.8")+")":"rgba(255, 255, 255, "+(t.isTop?"0":"0.8")+")","elevate-on-scroll":"",dark:t.$vuetify.theme.dark}},[n("v-container",{staticClass:"pa-0 fill-height"},[n("v-toolbar-title",[t._v("Poom")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:"",href:"https://github.com/poompongphun",target:"_blank",rel:"noopener"}},[n("v-icon",[t._v("mdi-github")])],1),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){t.$vuetify.theme.dark=!t.$vuetify.theme.dark}}},[n("v-icon",[t._v("mdi-theme-light-dark")])],1),t._v(" "),n("v-menu",{attrs:{"offset-y":"","nudge-left":"70",rounded:"xl"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",r,!1),o),[n("v-icon",[t._v("mdi-translate")])],1)]}}])},[t._v(" "),n("v-list",{staticClass:"d-flex",attrs:{rounded:"",dense:""}},t._l(t.$i18n.locales,(function(e){return n("v-list-item",{key:e.code,attrs:{to:t.switchLocalePath(e.code)}},[t._v("\n            "+t._s(e.name)+"\n          ")])})),1)],1)],1)],1),t._v(" "),n("v-main",[n("nuxt")],1)],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VApp:d.a,VAppBar:f.a,VBtn:v.a,VContainer:h.a,VIcon:m.a,VList:_.a,VListItem:k.a,VMain:w.a,VMenu:y.a,VSpacer:x.a,VToolbarTitle:V.a})},260:function(t,e,n){n(261),t.exports=n(262)},284:function(t,e,n){"use strict";n(208)},285:function(t,e,n){var o=n(25)(!1);o.push([t.i,"h1[data-v-495dc2cf]{font-size:20px}",""]),t.exports=o},290:function(t,e,n){"use strict";n(210)},291:function(t,e,n){var o=n(25)(!1);o.push([t.i,'.v-application,.v-application [class*=text-]{font-family:"Itim",sans-serif!important}',""]),t.exports=o},80:function(t,e,n){"use strict";var o={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},r=(n(284),n(88)),l=n(113),c=n.n(l),d=n(367),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"495dc2cf",null);e.a=component.exports;c()(component,{VApp:d.a})}},[[260,6,2,7]]]);