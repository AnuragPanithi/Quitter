"use strict";(globalThis["webpackChunktestproject"]=globalThis["webpackChunktestproject"]||[]).push([[400],{6400:(e,t,o)=>{o.r(t),o.d(t,{default:()=>L});var l=o(9835),a=o(1957),n=o(6970);const s={class:"q-py-lg q-px-md row items-end q-col-gutter-md"},d={class:"col"},i=(0,l._)("img",{src:"https://cdn.quasar.dev/img/avatar5.jpg"},null,-1),c={class:"col col-shrink"},r=(0,l._)("img",{src:"https://cdn.quasar.dev/img/avatar5.jpg"},null,-1),u=(0,l._)("strong",null,"George Royce",-1),w={class:"text-grey-7"},m=(0,l.Uk)(" @manizha_salomova "),f=(0,l._)("br",{class:"lt-md"},null,-1),p={class:"qweet-icons row justify-between q-mt-sm"};function g(e,t,o,g,h,q){const b=(0,l.up)("q-avatar"),y=(0,l.up)("q-input"),k=(0,l.up)("q-btn"),v=(0,l.up)("q-separator"),_=(0,l.up)("q-item-section"),Q=(0,l.up)("q-item-label"),W=(0,l.up)("q-item"),C=(0,l.up)("q-list"),Z=(0,l.up)("q-scroll-area"),D=(0,l.up)("q-page");return(0,l.wg)(),(0,l.j4)(D,{class:"relative-postion"},{default:(0,l.w5)((()=>[(0,l.Wm)(Z,{class:"absolute full-width full-height"},{default:(0,l.w5)((()=>[(0,l._)("div",s,[(0,l._)("div",d,[(0,l.Wm)(y,{"bottom-slots":"",class:"new-qweet",modelValue:h.newQweetContent,"onUpdate:modelValue":t[0]||(t[0]=e=>h.newQweetContent=e),placeholder:"What's happening?",counter:"",maxlength:"280",dense:e.dense,autogrow:""},{before:(0,l.w5)((()=>[(0,l.Wm)(b,{size:""},{default:(0,l.w5)((()=>[i])),_:1})])),_:1},8,["modelValue","dense"])]),(0,l._)("div",c,[(0,l.Wm)(k,{onClick:q.addNewQweet,disable:!h.newQweetContent,class:"q-mb-lg",unelevated:"",rounded:"",color:"primary",label:"Qweet","no-caps":""},null,8,["onClick","disable"])])]),(0,l.Wm)(v,{class:"divider",size:"10px",color:"grey-2"}),(0,l.Wm)(C,{separator:""},{default:(0,l.w5)((()=>[(0,l.Wm)(a.W3,{appear:"","enter-active-class":"animated fadeIn slow","leave-active-class":"animated fadeOut slow"},{default:(0,l.w5)((()=>[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(h.qweets,(t=>((0,l.wg)(),(0,l.j4)(W,{key:t.id,class:"qweet q-py-md"},{default:(0,l.w5)((()=>[(0,l.Wm)(_,{avatar:"",top:""},{default:(0,l.w5)((()=>[(0,l.Wm)(b,null,{default:(0,l.w5)((()=>[r])),_:1})])),_:1}),(0,l.Wm)(_,null,{default:(0,l.w5)((()=>[(0,l.Wm)(Q,{class:"text-subtitle1"},{default:(0,l.w5)((()=>[u,(0,l._)("span",w,[m,f,(0,l.Uk)("• "+(0,n.zw)(t.date|e.relativeDate),1)])])),_:2},1024),(0,l.Wm)(Q,{class:"qweet-content text-body1"},{default:(0,l.w5)((()=>[(0,l.Uk)((0,n.zw)(t.content),1)])),_:2},1024),(0,l._)("div",p,[(0,l.Wm)(k,{flat:"",round:"",color:"grey",icon:"far fa-comment",size:"sm"}),(0,l.Wm)(k,{flat:"",round:"",color:"grey",icon:"fas fa-retweet",size:"sm"}),(0,l.Wm)(k,{onClick:e=>q.toggleLiked(t),flat:"",round:"",color:t.liked?"pink":"gray",icon:t.liked?"fas fa-heart":"far fa-heart",size:"sm"},null,8,["onClick","color","icon"]),(0,l.Wm)(k,{onClick:e=>q.deleteQweet(t),flat:"",round:"",color:"grey",icon:"fas fa-trash",size:"sm"},null,8,["onClick"])])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1})])),_:1})])),_:1})}o(6890);var h=o(8083),q=o(6390);const b={name:"PageHome",data(){return{newQweetContent:"",qweets:[{id:"ID1",content:"There are two primary choices in life: to accept conditions as they exist, or accept the responsibility for changing them",date:1635627999211,liked:!1},{id:"ID2",content:"Aerodynamically the bumblebee shouldnt be able to fly but the bumblebee doesnt know that so it goes on flying anyway",date:1635628100512,liked:!0}]}},methods:{addNewQweet(){let e={content:this.newQweetContent,date:Date.now(),liked:!1};h["default"].collection("qweets").add(e).then((e=>{console.log("Document written with ID: ",e.id)})).catch((e=>{console.error("Error adding document: ",e)})),this.newQweetContent=""},deleteQweet(e){h["default"].collection("qweets").doc(e.id).delete().then((function(){console.log("Document successfully deleted!")})).catch((e=>{console.error("Error removing document: ",e)}))},toggleLiked(e){h["default"].collection("qweets").doc(e.id).update({liked:!e.liked}).then((function(){console.log("Document successfully update!")})).catch((function(e){console.error("Error updating document: ",e)}))}},filters:{relativeDate(e){return(0,q.Z)(e,new Date)}},mounted(){h["default"].collection("qweets").orderBy("date").onSnapshot((e=>{e.docChanges().forEach((e=>{let t=e.doc.data();if(t.id=e.doc.id,"added"===e.type&&(console.log("New qweet: ",t),this.qweets.unshift(t)),"modified"===e.type){console.log("Modified qweet: ",t);let e=this.qweets.findIndex((e=>e.id===t.id));Object.assign(this.qweets[e],t)}if("removed"===e.type){console.log("Removed qweet: ",t);let e=this.qweets.findIndex((e=>e.id===t.id));this.qweets.splice(e,1)}}))}))}};var y=o(1639),k=o(9885),v=o(6663),_=o(2251),Q=o(1357),W=o(9379),C=o(926),Z=o(3246),D=o(490),I=o(1233),x=o(3115),z=o(9984),j=o.n(z);const E=(0,y.Z)(b,[["render",g]]),L=E;j()(b,"components",{QPage:k.Z,QScrollArea:v.Z,QInput:_.Z,QAvatar:Q.Z,QBtn:W.Z,QSeparator:C.Z,QList:Z.Z,QItem:D.Z,QItemSection:I.Z,QItemLabel:x.Z})}}]);