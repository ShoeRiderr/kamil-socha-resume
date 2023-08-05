import{_ as m,a as t,c as a,e,h as k,i as C,j as u,d as v,k as L,b as S,w as p,t as i,g as h,F as f,l as g,m as D,f as r,p as P,n as V}from"./index-91e290ed.js";import{L as E}from"./LimitedWidthContainer-5c47549d.js";const I={},T={class:"flex justify-center"},R={class:"text-center"};function M(o,n){return t(),a("div",T,[e("div",R,[k(o.$slots,"default")])])}const _=m(I,[["render",M]]),B=C("helper",()=>{const o=u(!0);function n(l){return navigator.clipboard.writeText(l).then(()=>{o.value=!0},()=>{o.value=!1}),o.value}return{copyResult:o,copyToClipboard:n}}),j={class:"uppercase"},N=["tooltip"],A=["tooltip"],H=v({__name:"Header",setup(o){const n=u("Copy the phone"),l=u("Copy the email"),d=u({name:"Kamil Socha",phone:"(+48) 791 947 481",email:"kamill.socha2000@gmail.com",address:"Poznań, Poland"}),s=B(),c=L(()=>s.copyResult);function w(){s.copyToClipboard(d.value.phone),n.value=c.value?"Copied!":"Copy the phone"}function x(){s.copyToClipboard(d.value.email),l.value=c.value?"Copied!":"Copy the email"}return(Se,b)=>(t(),S(_,{class:"pb-6"},{default:p(()=>[e("p",j,[e("b",null,i(d.value.name),1)]),e("p",null,i(d.value.address),1),e("p",null,[e("span",{onMouseleave:b[0]||(b[0]=$=>n.value="Copy the phone"),tooltip:n.value,class:"cursor-pointer",onClick:w},i(d.value.phone),41,N),h(" | "),e("span",{onMouseleave:b[1]||(b[1]=$=>l.value="Copy the email"),tooltip:l.value,class:"cursor-pointer",onClick:x},i(d.value.email),41,A)])]),_:1}))}});const z=m(H,[["__scopeId","data-v-b49d004e"]]),W={},F={class:"pb-6"},G=e("div",{class:"justify-evenly mb-4"}," A Fullstack web developer with 3 years of experience developing health, business, and e-commerce websites using Laravel and Vue in most cases. I am currently pursuing a bachelor's degree in informatics at WSB Merito in Gdańsk. ",-1),J=e("div",{class:"grid md:grid-cols-2 grid-cols-1 md:px-11 sm:px-9 px-6"},[e("ul",null,[e("li",null," ❖ Expertise in using control versions and setting the servers for Laravel applications. "),e("li",null,"❖ Demonstrated ability to learn new skills.")]),e("ul",null,[e("li",null," ❖ Experience in developing websites from scratch and maintaining existing ones. "),e("li",null,"❖ Full stack developer skillset.")])],-1),K=[G,J];function O(o,n){return t(),a("div",F,K)}const Q=m(W,[["render",O]]),U={class:"justify-evenly pb-6"},X={class:"pb-1"},Y=v({__name:"Experience",setup(o){const n=u([{header:{position:"Laravel / Vue Developer",company:"Sun Group Sp. z o.o Sp.k.",city:"Poznań",work_period:"Nov 2022 - currently"},responsibilities:["Adding new features to firm CMS and to e-commerce sites.","Participating in technical meetings.","Developed a program for integrating the outside shop with the firm system.","Implement functional tests for module-based Laravel applications.","Worked for big e-commerce clients, like Media Expert, Indiana, or Luxiona."]},{header:{position:"Laravel / Vue Developer",company:"Bluewom Ltd.",city:"Sopot",work_period:"Oct 2021 - Nov 2022"},responsibilities:["Developed a website for placing the artwork using WordPress and JavaScript with jQuery.","Developed a program for fetching big amounts of data about products from outside shops which downloads every day and updates local database records.","Maintaining and adding new features to the wedding application Wedsly written in Symfony.","Participating in everyday daily meetings, and providing code review and guidance for Junior Developers.","Delivering new features in existing projects using Laravel and Vue."]},{header:{position:"Laravel / Vue Developer",company:"Centrum Zdrowia Eter-Med",city:"Gdańsk",work_period:"Aug 2020 - Oct 2021"},responsibilities:["Learned how to write web applications with the usage of Laravel and Vue.","Developing new features to firm applications with the guidance of Team Leader and Senior Developer.","Participating in code reviews written by Senior Developer and Team Leader for educational purposes."]}]);return(l,d)=>(t(),a("div",U,[(t(!0),a(f,null,g(n.value,(s,c)=>(t(),a("div",{key:c,class:"pb-4"},[e("h5",X,[e("b",null,i(s.header.position),1),h(" at "),e("b",null,i(s.header.company),1),h(", "+i(s.header.city)+" ["+i(s.header.work_period)+"] ",1)]),(t(!0),a(f,null,g(s.responsibilities,(w,x)=>(t(),a("ul",{key:x,class:"md:px-11 sm:px-9 px-6"},[e("li",null,"➢ "+i(w),1)]))),128))]))),128))]))}}),Z={class:"pb-6"},q={class:"capitalize"},ee=v({__name:"Skills",setup(o){const n=u({languages:["PHP","JavaScript","TypeScript","SQL","CSS","SaaS"],frameworks:["Vue (JavaScript)","Laravel (PHP)","Bootstrap (CSS)","Tailwind (CSS)","jQuery (JavaScript)"],apps:["Git","phpMyAdmin","DBeaver","Apache2","VS Code"]});return(l,d)=>(t(),a("div",Z,[(t(!0),a(f,null,g(n.value,(s,c)=>(t(),a("div",{key:c,class:"pt-1"},[e("b",q,i(c)+": ",1),h(" "+i(s.join(", "))+". ",1)]))),128))]))}}),te={class:"pb-6"},oe={class:"capitalize"},ne=["href"],se=v({__name:"Links",setup(o){const n=u({linkedin:"https://www.linkedin.com/in/kamill-socha/",github:"https://github.com/ShoeRiderr"});return(l,d)=>(t(),a("div",te,[(t(!0),a(f,null,g(n.value,(s,c)=>(t(),a("div",{key:c},[e("b",oe,i(c)+": ",1),e("a",{href:s,target:"_blank",class:"underline"},i(s),9,ne)]))),128))]))}}),ae={class:"pb-6"},ie=v({__name:"Education",setup(o){const n=u([{title:"Bachelor of Informatics - Programming specialization",period:"[2019 - 2023][pursuing]",school:"WSB Merito in Gdańsk"}]);return(l,d)=>(t(),a("div",ae,[(t(!0),a(f,null,g(n.value,(s,c)=>(t(),a("div",{key:c,class:"pt-1"},[e("b",null,i(s.title),1),h(" "+i(s.period)+" ",1),e("p",null,[e("b",null,i(s.school),1)])]))),128))]))}}),re={},le={href:"#",download:""};function ce(o,n){return t(),a("a",le," Download in PDF ")}const de=m(re,[["render",ce]]),pe={};function ue(o,n){const l=D("RouterLink");return t(),S(l,{class:"md:pl-6 pl-2 md:text-3xl text-2xl md:max-h-12 max-h-10",to:{name:"home"}},{default:p(()=>[h(" ← ")]),_:1})}const _e=m(pe,[["render",ue]]),y=o=>(P("data-v-72e5885c"),o=o(),V(),o),he={class:"flex flex-col content-center flex-wrap pt-4"},me={class:"flex justify-between w-11/12"},ve={class:"flex md:flex-row flex-column"},fe=y(()=>e("b",null,"SUMMARY",-1)),ge=y(()=>e("b",null,"EXPERIENCE",-1)),ye=y(()=>e("b",null,"SKILLS",-1)),be=y(()=>e("b",null,"EDUCATION",-1)),we=y(()=>e("b",null,"LINKS",-1)),xe=v({__name:"ResumeView",setup(o){return(n,l)=>(t(),a("div",he,[e("div",me,[r(_e),r(de,{href:"src/assets/Kamil_Socha_CV_EN.pdf"})]),e("div",ve,[r(E,null,{default:p(()=>[r(z),r(_,null,{default:p(()=>[fe]),_:1}),r(Q),r(_,null,{default:p(()=>[ge]),_:1}),r(Y),r(_,null,{default:p(()=>[ye]),_:1}),r(ee),r(_,null,{default:p(()=>[be]),_:1}),r(ie),r(_,null,{default:p(()=>[we]),_:1}),r(se)]),_:1})])]))}});const Ce=m(xe,[["__scopeId","data-v-72e5885c"]]);export{Ce as default};
