import{f as x,r as d,o as t,M as f,w as r,a as h,p as $,e as D,b as e,_ as U,g as k,Y as O,m,c as a,t as o,V as n,Z as N,$ as I,N as S}from"./index-opJMMxrH.js";const j=s=>($("data-v-b3fc289f"),s=s(),D(),s),E=j(()=>e("div",{class:"steve-image__error"},[e("div",{class:"steve-image__error__icon"},[e("span",null,"图片")]),e("div",{class:"steve-image__error__info"},"加载失败")],-1)),F=x({__name:"index",props:{src:{type:String,default:""}},setup(s){return(g,p)=>{const b=d("t-tooltip"),l=d("t-image");return t(),f(l,{src:s.src,lazy:!0,shape:"round",class:"steve-image"},{error:r(()=>[h(b,{content:s.src?s.src:"未设置图片"},{default:r(()=>[E]),_:1},8,["content"])]),_:1},8,["src"])}}}),w=U(F,[["__scopeId","data-v-b3fc289f"]]),J={class:"debug-visible-ui"},L={class:"debug-visible-ui-tips"},M={key:0},R={key:1},Y={key:2},Z={class:"debug-visible-ui-body"},q={key:0,class:"content-ui"},A={class:"list"},G={class:"url"},H={key:1,class:"search-ui bookinfo-ui"},K={class:"search-ui-body"},P={class:"search-ui-body__image"},Q={class:"search-ui-body__content"},T={class:"search-ui-body__content__desc"},W={class:"search-ui-body__content__desc"},X={class:"bookinfo-ui__info url"},ee={key:0},se={key:1},te={class:"bookinfo-ui__info"},oe={key:0,class:"search-ui"},ae={class:"search-ui-body"},ce={class:"search-ui-body__image"},ie={class:"search-ui-body__content"},ne={class:"search-ui-body__content__title"},le={class:"search-ui-body__content__desc"},_e={class:"search-ui-body__content__desc"},de={class:"search-ui-body__content__url"},re={key:1},ue={class:"chapter-ui-body"},ve={class:"chapter-ui-body__name"},he={class:"chapter-ui-body__url"},pe=x({__name:"DebugVisibleUi",props:{visible:{type:Boolean,default:!1},type:{type:Number,default:0},data:{type:Object,default:null}},emits:["update:visible"],setup(s,{emit:g}){const p=s,b=g,l=k(!1),{visible:V,data:i}=O(p);m(V,_=>{l.value=_}),m(l,_=>{b("update:visible",_)});const u=k();return m(i,_=>{p.type===3?_.contents&&(u.value=JSON.parse(_.contents)):u.value=_}),(_,v)=>{const B=d("t-list-item"),C=d("t-list"),z=d("t-drawer");return t(),a("div",J,[h(z,{visible:l.value,"onUpdate:visible":v[0]||(v[0]=c=>l.value=c),header:!1,"on-overlay-click":()=>l.value=!1,"close-btn":!0,footer:!1,size:s.type===3?"medium":"small",onCancel:v[1]||(v[1]=c=>l.value=!1)},{default:r(()=>[e("div",L,[s.type==1?(t(),a("span",M,o(n(i).bookName),1)):s.type==3?(t(),a("span",R,o(n(i).catalogName),1)):(t(),a("span",Y,"共查询到 "+o(n(i).length)+" 条数据",1))]),e("div",Z,[s.type===3?(t(),a("div",q,[e("div",A,[e("div",G,o(n(i).catalogUrl),1),(t(!0),a(N,null,I(u.value,(c,y)=>(t(),a("div",{key:y,class:"item"},o(c),1))),128))])])):s.type===1?(t(),a("div",H,[e("div",K,[e("div",P,[h(w,{src:n(i).coverImage},null,8,["src"])]),e("div",Q,[e("div",T,[e("span",null,o(n(i).author),1)]),e("div",W,[e("span",null,o(n(i).category),1)])])]),e("div",X,[n(i).url?(t(),a("span",ee,"章节列表地址："+o(n(i).url),1)):(t(),a("span",se,"未获取到章节列表地址"))]),e("div",te,[e("span",null,o(n(i).detail),1)])])):(t(),f(C,{key:2,size:"small",split:""},{default:r(()=>[(t(!0),a(N,null,I(u.value,(c,y)=>(t(),f(B,{key:y},{default:r(()=>[s.type===0?(t(),a("div",oe,[e("div",ae,[e("div",ce,[h(w,{src:c.coverImage},null,8,["src"])]),e("div",ie,[e("div",ne,[e("span",null,o(c.bookName),1)]),e("div",le,[e("span",null,o(c.author),1)]),e("div",_e,[e("span",null,o(c.category),1)]),e("div",de,[e("span",null,o(c.url),1)])])])])):S("",!0),s.type===2?(t(),a("div",re,[e("div",ue,[e("div",ve,o(c.catalogName),1),e("div",he,o(c.catalogUrl),1)])])):S("",!0)]),_:2},1024))),128))]),_:1}))])]),_:1},8,["visible","on-overlay-click","size"])])}}}),ye=U(pe,[["__scopeId","data-v-f7631044"]]);export{ye as default};
