import{u as h,a as w,r as p,c as V,o as c,e as u,f as e,t as d,w as x,v as f,n as _,h as a,i as v,F as z,k as g}from"./index-de3f90c7.js";import{u as B}from"./validation-b26d3d8c.js";const D={class:"flex-1 md:w-2/5 mx-auto text-center space-y-4 mb-4"},U={class:"text-2xl"},C=e("p",{class:"text-muted"}," Profilinizi oluşturmaya, tanıdığınız kişilerle bağlantı kurmayave ilginizi çeken konularda onlarla iletişim kurmaya başlayın. ",-1),F={class:"flex-1 md:w-2/5 mx-auto rounded-md bg-white py-6 px-6 space-y-4"},L={class:"flex flex-col"},N=e("label",{for:"name",class:"text-muted text-sm"},[g("Ülke/Bölge "),e("span",{class:"items-start text-primary"},"*")],-1),S={key:0,class:"text-red-600"},I={class:"flex flex-col"},T=e("label",{for:"name",class:"text-muted text-sm"},[g("İl/İlçe "),e("span",{class:"items-start text-primary"},"*")],-1),E={key:0,class:"text-red-600"},j={__name:"SigninLocationInfo",setup(H){const i=h(),m=w(),s=p(null),o=p(null),l={...m.state.users.registerData,location:null},y=V(()=>s.value+","+o.value),{validateLocation:b,error:t}=B(l),k=()=>{l.location=y.value,b(),t.value.location||(m.commit("users/setUserInfo",l),i==null||i.push("/signin/title_info"))};return(M,n)=>(c(),u(z,null,[e("div",D,[e("p",U,d(l.full_name)+", Hoş geldiniz! ",1),C]),e("div",F,[e("div",L,[N,x(e("input",{"onUpdate:modelValue":n[0]||(n[0]=r=>s.value=r),type:"text",id:"name",class:_([{"ring-red-600 ring-2":a(t).location&&!s.value},"mt-1 px-2 py-1 ring-1 ring-muted focus:outline-black rounded-sm"])},null,2),[[f,s.value]]),a(t).location&&!s.value?(c(),u("small",S,d(a(t).location),1)):v("",!0)]),e("div",I,[T,x(e("input",{"onUpdate:modelValue":n[1]||(n[1]=r=>o.value=r),type:"text",id:"name",class:_([{"ring-red-600 ring-2":a(t).location&&!o.value},"mt-1 px-2 py-1 ring-1 ring-muted focus:outline-black rounded-sm"])},null,2),[[f,o.value]]),a(t).location&&!o.value?(c(),u("small",E,d(a(t).location),1)):v("",!0)]),e("button",{onClick:k,class:"bg-primary w-full rounded-full py-3 text-white active:bg-[#09223b] hover:bg-[#004182] font-bold"}," İleri ")])],64))}};export{j as default};