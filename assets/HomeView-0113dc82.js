import{d as x,f as c,c as _,a as s,b as d,w as r,o as p,u as v,R as u,n as f,g as m}from"./index-46131335.js";import{V as h}from"./VideoComponent-4b6a5f46.js";import{L as b,_ as g}from"./LimitedWidthContainer-63155f12.js";const w={class:"content-on-video"},y={class:"grid md:grid-cols-2 grid-cols-1 w-100 md:gap-y-0 gap-y-4 md:gap-x-4 gap-x-0 h-full parent"},C=x({__name:"HomeView",setup(V){const e=c(""),t=c("");function a(n){switch(n){case"resume":t.value="hover-off",e.value="";break;case"cover-letter":t.value="",e.value="hover-off";break;default:console.log("Class not managed.")}}function l(){t.value="",e.value=""}return(n,o)=>(p(),_("div",null,[s(h),d("div",w,[s(b,{class:"h-screen md:py-11 py-6",style:{color:"#f5f2f2"}},{default:r(()=>[d("div",y,[s(v(u),{onMouseover:o[0]||(o[0]=i=>a("resume")),onMouseleave:l,to:{name:"resume"},class:f(["flex justify-center content-center flex-wrap md:text-4xl text-3xl border border-slate-200 hover:text-slate-200 w-auto md:hover:scale-x-115 hover:scale-y-115 hover:text-5xl hover:border-4 resume",e.value])},{default:r(()=>[m(" Resume ")]),_:1},8,["class"]),s(v(u),{onMouseover:o[1]||(o[1]=i=>a("cover-letter")),onMouseleave:l,to:{name:"cover-letter"},class:f(["flex justify-center content-center flex-wrap md:text-4xl text-3xl border border-slate-200 hover:text-slate-200 w-auto md:hover:scale-x-115 hover:scale-y-115 hover:text-5xl hover:border-4 cover-letter",t.value])},{default:r(()=>[m(" Cover Letter ")]),_:1},8,["class"])])]),_:1})])]))}});const B=g(C,[["__scopeId","data-v-5c13b4fc"]]);export{B as default};