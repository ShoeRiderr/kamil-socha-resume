import{_ as u,L as $}from"./LimitedWidthContainer-63155f12.js";import{o,c,b as a,i as y,j as C,f as _,d,k as x,l as h,w as f,t as i,g as L,F as b,h as g,m as R,q as D,s as S,a as v}from"./index-46131335.js";const H={},T={class:"flex justify-center"},B={class:"text-center"};function j(t,e){return o(),c("div",T,[a("div",B,[y(t.$slots,"default")])])}const z=u(H,[["render",j]]),E=C("helper",()=>{const t=_(!0);function e(n){return navigator.clipboard.writeText(n).then(()=>{t.value=!0},()=>{t.value=!1}),t.value}return{copyResult:t,copyToClipboard:e}}),N={class:"uppercase"},P=["tooltip"],W=["tooltip"],F=d({__name:"Header",setup(t){const e=_("Copy the phone"),n=_("Copy the email"),s=_({name:"Kamil Socha",phone:"(+48) 791 947 481",email:"kamill.socha2000@gmail.com",address:"Poznań, Poland"}),l=E(),r=x(()=>l.copyResult);function m(){l.copyToClipboard(s.value.phone),e.value=r.value?"Copied!":"Copy the phone"}function k(){l.copyToClipboard(s.value.email),n.value=r.value?"Copied!":"Copy the email"}return(Z,p)=>(o(),h(z,{class:"pb-6"},{default:f(()=>[a("p",N,[a("b",null,i(s.value.name),1)]),a("p",null,i(s.value.address),1),a("p",null,[a("span",{onMouseleave:p[0]||(p[0]=w=>e.value="Copy the phone"),tooltip:e.value,class:"cursor-pointer",onClick:m},i(s.value.phone),41,P),L(" | "),a("span",{onMouseleave:p[1]||(p[1]=w=>n.value="Copy the email"),tooltip:n.value,class:"cursor-pointer",onClick:k},i(s.value.email),41,W)])]),_:1}))}});const oe=u(F,[["__scopeId","data-v-c58740ed"]]),I={class:"pb-6"},M={class:"capitalize"},V=["href"],ne=d({__name:"Links",setup(t){const e=_({linkedin:"https://www.linkedin.com/in/kamill-socha/",github:"https://github.com/ShoeRiderr"});return(n,s)=>(o(),c("div",I,[(o(!0),c(b,null,g(e.value,(l,r)=>(o(),c("div",{key:r,class:"text-justify"},[a("b",M,i(r)+": ",1),a("a",{href:l,target:"_blank",class:"underline"},i(l),9,V)]))),128))]))}}),q={},K={href:"#",download:""};function U(t,e){return o(),c("a",K," Download in PDF ")}const A=u(q,[["render",U]]),G={key:0,class:"text-xl"},J={key:1,class:"text-3xl"},O=d({__name:"HomeRouteLink",setup(t){const e=_(window.innerWidth),n=x(()=>e.value<640);R(()=>{window.addEventListener("resize",s)}),D(()=>{window.removeEventListener("resize",s)});function s(){e.value=window.innerWidth}return(l,r)=>{const m=S("RouterLink");return o(),h(m,{class:"md:pl-6 pl-2 md:max-h-12 max-h-10",to:{name:"home"}},{default:f(()=>[n.value?(o(),c("span",G," Back ")):(o(),c("span",J," ← "))]),_:1})}}});const Q=u(O,[["__scopeId","data-v-edfee5af"]]),X={class:"flex sm:flex-row flex-col sm:justify-between justify-center sm:w-11/12 w-full md:pl-11 sm:pl-6 pl-2"},se=d({__name:"DocumentNavbar",props:{fileLink:String},setup(t){return(e,n)=>(o(),c("div",X,[v(Q,{class:"self-center"}),v(A,{href:t.fileLink,class:"self-center"},null,8,["href"])]))}}),Y=d({__name:"DocumentLayout",setup(t){return(e,n)=>(o(),h($,null,{default:f(()=>[y(e.$slots,"default",{},void 0,!0)]),_:3}))}});const ae=u(Y,[["__scopeId","data-v-1cf68b72"]]);export{z as C,ae as D,oe as H,se as _,ne as a};
