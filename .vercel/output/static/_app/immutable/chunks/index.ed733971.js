import{s as X,n as k,z as q,A as K}from"./scheduler.dd094d23.js";import{S as Y,i as Z,s as g,g as _,c as b,h as d,x as j,k as a,a as h,f as u,j as N,y as H,A as Q}from"./index.8f72f038.js";import{e as O}from"./each.96915457.js";const x={sources:{avif:""+new URL("../assets/test.f3c98dfe.avif",import.meta.url).href+" 1x, "+new URL("../assets/test.d4848ecc.avif",import.meta.url).href+" 2x",webp:""+new URL("../assets/test.21ef4952.webp",import.meta.url).href+" 1x, "+new URL("../assets/test.3056e972.webp",import.meta.url).href+" 2x",jpeg:""+new URL("../assets/test.f829fa56.jpg",import.meta.url).href+" 1x, "+new URL("../assets/test.ec1ee33d.jpg",import.meta.url).href+" 2x"},img:{src:""+new URL("../assets/test.ec1ee33d.jpg",import.meta.url).href,w:640,h:861}},w={sources:{avif:""+new URL("../assets/test.cef09142.avif",import.meta.url).href+" 1x, "+new URL("../assets/test.98a7a7a8.avif",import.meta.url).href+" 2x",webp:""+new URL("../assets/test.b6e99767.webp",import.meta.url).href+" 1x, "+new URL("../assets/test.92e5cd2c.webp",import.meta.url).href+" 2x",jpeg:""+new URL("../assets/test.97ed30e2.jpg",import.meta.url).href+" 1x, "+new URL("../assets/test.6faa0669.jpg",import.meta.url).href+" 2x"},img:{src:""+new URL("../assets/test.6faa0669.jpg",import.meta.url).href,w:640,h:861}};function D(m,t,c){const e=m.slice();return e[0]=t[c][0],e[1]=t[c][1],e}function J(m,t,c){const e=m.slice();return e[0]=t[c][0],e[1]=t[c][1],e}function $(m){let t,c,e,p,f=O(Object.entries(x.sources)),s=[];for(let r=0;r<f.length;r+=1)s[r]=z(J(m,f,r));return{c(){t=_("picture");for(let r=0;r<s.length;r+=1)s[r].c();c=g(),e=_("img"),this.h()},l(r){t=d(r,"PICTURE",{});var n=N(t);for(let i=0;i<s.length;i+=1)s[i].l(n);c=b(n),e=d(n,"IMG",{src:!0,alt:!0,class:!0,width:!0,height:!0}),n.forEach(u),this.h()},h(){q(e.src,p=x.img.src)||a(e,"src",p),a(e,"alt","test"),a(e,"class","post-img"),a(e,"width",x.img.w),a(e,"height",x.img.h)},m(r,n){h(r,t,n);for(let i=0;i<s.length;i+=1)s[i]&&s[i].m(t,null);H(t,c),H(t,e)},p(r,n){if(n&0){f=O(Object.entries(x.sources));let i;for(i=0;i<f.length;i+=1){const v=J(r,f,i);s[i]?s[i].p(v,n):(s[i]=z(v),s[i].c(),s[i].m(t,c))}for(;i<s.length;i+=1)s[i].d(1);s.length=f.length}},d(r){r&&u(t),Q(s,r)}}}function tt(m){let t,c;return{c(){t=_("img"),this.h()},l(e){t=d(e,"IMG",{src:!0,alt:!0,class:!0,width:!0,height:!0}),this.h()},h(){q(t.src,c=x.img.src)||a(t,"src",c),a(t,"alt","test"),a(t,"class","post-img"),a(t,"width",x.img.w),a(t,"height",x.img.h)},m(e,p){h(e,t,p)},p:k,d(e){e&&u(t)}}}function z(m){let t,c;return{c(){t=_("source"),this.h()},l(e){t=d(e,"SOURCE",{srcset:!0,type:!0}),this.h()},h(){K(t,c=m[1])||a(t,"srcset",c),a(t,"type","image/"+m[0])},m(e,p){h(e,t,p)},p:k,d(e){e&&u(t)}}}function et(m){let t,c,e,p,f=O(Object.entries(w.sources)),s=[];for(let r=0;r<f.length;r+=1)s[r]=F(D(m,f,r));return{c(){t=_("picture");for(let r=0;r<s.length;r+=1)s[r].c();c=g(),e=_("img"),this.h()},l(r){t=d(r,"PICTURE",{});var n=N(t);for(let i=0;i<s.length;i+=1)s[i].l(n);c=b(n),e=d(n,"IMG",{src:!0,alt:!0,class:!0,width:!0,height:!0}),n.forEach(u),this.h()},h(){q(e.src,p=w.img.src)||a(e,"src",p),a(e,"alt","test2"),a(e,"class","post-img"),a(e,"width",w.img.w),a(e,"height",w.img.h)},m(r,n){h(r,t,n);for(let i=0;i<s.length;i+=1)s[i]&&s[i].m(t,null);H(t,c),H(t,e)},p(r,n){if(n&0){f=O(Object.entries(w.sources));let i;for(i=0;i<f.length;i+=1){const v=D(r,f,i);s[i]?s[i].p(v,n):(s[i]=F(v),s[i].c(),s[i].m(t,c))}for(;i<s.length;i+=1)s[i].d(1);s.length=f.length}},d(r){r&&u(t),Q(s,r)}}}function it(m){let t,c;return{c(){t=_("img"),this.h()},l(e){t=d(e,"IMG",{src:!0,alt:!0,class:!0,width:!0,height:!0}),this.h()},h(){q(t.src,c=w.img.src)||a(t,"src",c),a(t,"alt","test2"),a(t,"class","post-img"),a(t,"width",w.img.w),a(t,"height",w.img.h)},m(e,p){h(e,t,p)},p:k,d(e){e&&u(t)}}}function F(m){let t,c;return{c(){t=_("source"),this.h()},l(e){t=d(e,"SOURCE",{srcset:!0,type:!0}),this.h()},h(){K(t,c=m[1])||a(t,"srcset",c),a(t,"type","image/"+m[0])},m(e,p){h(e,t,p)},p:k,d(e){e&&u(t)}}}function st(m){let t,c,e,p="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eveniet accusantium ratione praesentium rerum blanditiis, earum, maiores cum mollitia aut aliquid, omnis odit sed veniam distinctio optio commodi nihil! Totam?",f,s,r="Section Title 2",n,i,v="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa eveniet accusantium ratione praesentium rerum blanditiis, earum, maiores cum mollitia aut aliquid, omnis odit sed veniam distinctio optio commodi nihil! Totam?",S,C,P="Sub Section 2",I,y,A="<li>Banana</li> <li>Strawberry</li> <li>Blueberry</li>",M,L,B="Another Sub Section 2",E,U,G="<thead><tr><th>Col</th> <th>Detail</th></tr></thead> <tbody><tr><td>+1</td> <td>👍</td></tr> <tr><td>-1</td> <td>👎</td></tr></tbody>";function V(l,o){return typeof x=="string"?tt:$}let R=V()(m);function W(l,o){return typeof w=="string"?it:et}let T=W()(m);return{c(){R.c(),t=g(),T.c(),c=g(),e=_("p"),e.textContent=p,f=g(),s=_("h2"),s.textContent=r,n=g(),i=_("p"),i.textContent=v,S=g(),C=_("h3"),C.textContent=P,I=g(),y=_("ul"),y.innerHTML=A,M=g(),L=_("h3"),L.textContent=B,E=g(),U=_("table"),U.innerHTML=G,this.h()},l(l){R.l(l),t=b(l),T.l(l),c=b(l),e=d(l,"P",{"data-svelte-h":!0}),j(e)!=="svelte-j4pul9"&&(e.textContent=p),f=b(l),s=d(l,"H2",{id:!0,"data-svelte-h":!0}),j(s)!=="svelte-wb13jc"&&(s.textContent=r),n=b(l),i=d(l,"P",{"data-svelte-h":!0}),j(i)!=="svelte-j4pul9"&&(i.textContent=v),S=b(l),C=d(l,"H3",{id:!0,"data-svelte-h":!0}),j(C)!=="svelte-1xye0ju"&&(C.textContent=P),I=b(l),y=d(l,"UL",{"data-svelte-h":!0}),j(y)!=="svelte-9ewn5l"&&(y.innerHTML=A),M=b(l),L=d(l,"H3",{id:!0,"data-svelte-h":!0}),j(L)!=="svelte-102corj"&&(L.textContent=B),E=b(l),U=d(l,"TABLE",{"data-svelte-h":!0}),j(U)!=="svelte-dlhmp9"&&(U.innerHTML=G),this.h()},h(){a(s,"id","section-title-2"),a(C,"id","sub-section-2"),a(L,"id","another-sub-section-2")},m(l,o){R.m(l,o),h(l,t,o),T.m(l,o),h(l,c,o),h(l,e,o),h(l,f,o),h(l,s,o),h(l,n,o),h(l,i,o),h(l,S,o),h(l,C,o),h(l,I,o),h(l,y,o),h(l,M,o),h(l,L,o),h(l,E,o),h(l,U,o)},p(l,[o]){R.p(l,o),T.p(l,o)},i:k,o:k,d(l){l&&(u(t),u(c),u(e),u(f),u(s),u(n),u(i),u(S),u(C),u(I),u(y),u(M),u(L),u(E),u(U)),R.d(l),T.d(l)}}}const ut={title:"This is a Demo Post 2",description:"Test data for posts",date:"11/10/2023"};class ot extends Y{constructor(t){super(),Z(this,t,null,st,X,{})}}export{ot as default,ut as metadata};
