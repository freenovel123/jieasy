import{f as w,r as l,o as a,M as f,w as _,a as y,p as U,e as D,b as e,_ as x,g as k,V as $,m as b,c as i,t as o,R as m,W as N,X as I,N as S}from"./index-iVnFa3Ax.js";const O=s=>(U("data-v-b3fc289f"),s=s(),D(),s),R=O(()=>e("div",{class:"steve-image__error"},[e("div",{class:"steve-image__error__icon"},[e("span",null,"图片")]),e("div",{class:"steve-image__error__info"},"加载失败")],-1)),j=w({__name:"index",props:{src:{type:String,default:""}},setup(s){return(g,v)=>{const p=l("t-tooltip"),c=l("t-image");return a(),f(c,{src:s.src,lazy:!0,shape:"round",class:"steve-image"},{error:_(()=>[y(p,{content:s.src?s.src:"未设置图片"},{default:_(()=>[R]),_:1},8,["content"])]),_:1},8,["src"])}}}),E=x(j,[["__scopeId","data-v-b3fc289f"]]),F={class:"debug-visible-ui"},J={class:"debug-visible-ui-tips"},L={key:0},M={key:1},W={class:"debug-visible-ui-body"},X={key:0,class:"content-ui"},q={class:"list"},A={class:"url"},G={key:0,class:"search-ui"},H={class:"search-ui-body"},K={class:"search-ui-body__image"},P={class:"search-ui-body__content"},Q={class:"search-ui-body__content__title"},T={class:"search-ui-body__content__desc"},Y={class:"search-ui-body__content__desc"},Z={class:"search-ui-body__content__url"},ee={key:1},se={class:"chapter-ui-body"},te={class:"chapter-ui-body__name"},ae={class:"chapter-ui-body__url"},oe=w({__name:"DebugVisibleUi",props:{visible:{type:Boolean,default:!1},type:{type:Number,default:0},data:{type:Object,default:null}},emits:["update:visible"],setup(s,{emit:g}){const v=s,p=g,c=k(!1),{visible:V,data:d}=$(v);b(V,n=>{c.value=n}),b(c,n=>{p("update:visible",n)});const r=k();return b(d,n=>{v.type===2?n.contents&&(r.value=JSON.parse(n.contents)):r.value=n}),(n,u)=>{const B=l("t-list-item"),C=l("t-list"),z=l("t-drawer");return a(),i("div",F,[y(z,{visible:c.value,"onUpdate:visible":u[0]||(u[0]=t=>c.value=t),header:!1,"on-overlay-click":()=>c.value=!1,"close-btn":!0,footer:!1,size:s.type===2?"medium":"small",onCancel:u[1]||(u[1]=t=>c.value=!1)},{default:_(()=>[e("div",J,[s.type==2?(a(),i("span",L,o(m(d).chapterName),1)):(a(),i("span",M,"共查询到 "+o(m(d).length)+" 条数据",1))]),e("div",W,[s.type===2?(a(),i("div",X,[e("div",q,[e("div",A,o(m(d).url),1),(a(!0),i(N,null,I(r.value,(t,h)=>(a(),i("div",{key:h,class:"item"},o(t),1))),128))])])):(a(),f(C,{key:1,size:"small",split:""},{default:_(()=>[(a(!0),i(N,null,I(r.value,(t,h)=>(a(),f(B,{key:h},{default:_(()=>[s.type===0?(a(),i("div",G,[e("div",H,[e("div",K,[y(E,{src:t.coverImage},null,8,["src"])]),e("div",P,[e("div",Q,[e("span",null,o(t.bookName),1)]),e("div",T,[e("span",null,o(t.author),1)]),e("div",Y,[e("span",null,o(t.category),1)]),e("div",Z,[e("span",null,o(t.url),1)])])])])):S("",!0),s.type===1?(a(),i("div",ee,[e("div",se,[e("div",te,o(t.chapterName),1),e("div",ae,o(t.url),1)])])):S("",!0)]),_:2},1024))),128))]),_:1}))])]),_:1},8,["visible","on-overlay-click","size"])])}}}),ce=x(oe,[["__scopeId","data-v-fd407dd4"]]);export{ce as default};
