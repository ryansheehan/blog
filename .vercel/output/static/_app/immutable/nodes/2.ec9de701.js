import{s as D,n as T}from"../chunks/scheduler.dd094d23.js";import{S as H,i as N,g as f,h as d,j as m,f as h,k as y,a as A,y as r,m as E,s as S,n as P,c as w}from"../chunks/index.8f72f038.js";import{e as q,u as U,d as B}from"../chunks/each.96915457.js";import{f as F}from"../chunks/utils.6b43d8a2.js";async function G({fetch:n}){return{posts:await(await n("api/posts")).json()}}const X=Object.freeze(Object.defineProperty({__proto__:null,load:G},Symbol.toStringTag,{value:"Module"}));function x(n,l,t){const e=n.slice();return e[2]=l[t],e}function z(n,l){let t,e,c,i=l[2].title+"",v,s,a,o=F(l[2].date)+"",p,k,g,O=l[2].description+"",b,j;return{key:n,first:null,c(){t=f("li"),e=f("a"),c=f("h3"),v=E(i),s=S(),a=f("p"),p=E(o),k=S(),g=f("p"),b=E(O),j=S(),this.h()},l(u){t=d(u,"LI",{class:!0});var _=m(t);e=d(_,"A",{href:!0,class:!0});var C=m(e);c=d(C,"H3",{});var I=m(c);v=P(I,i),I.forEach(h),C.forEach(h),s=w(_),a=d(_,"P",{class:!0});var L=m(a);p=P(L,o),L.forEach(h),k=w(_),g=d(_,"P",{class:!0});var M=m(g);b=P(M,O),M.forEach(h),j=w(_),_.forEach(h),this.h()},h(){y(e,"href",l[2].slug),y(e,"class","title"),y(a,"class","date"),y(g,"class","description"),y(t,"class","post svelte-jsbc2j"),this.first=t},m(u,_){A(u,t,_),r(t,e),r(e,c),r(c,v),r(t,s),r(t,a),r(a,p),r(t,k),r(t,g),r(g,b),r(t,j)},p(u,_){l=u},d(u){u&&h(t)}}}function J(n){let l,t,e=[],c=new Map,i=q(n[0]);const v=s=>s[2].slug;for(let s=0;s<i.length;s+=1){let a=x(n,i,s),o=v(a);c.set(o,e[s]=z(o,a))}return{c(){l=f("section"),t=f("ul");for(let s=0;s<e.length;s+=1)e[s].c();this.h()},l(s){l=d(s,"SECTION",{});var a=m(l);t=d(a,"UL",{class:!0});var o=m(t);for(let p=0;p<e.length;p+=1)e[p].l(o);o.forEach(h),a.forEach(h),this.h()},h(){y(t,"class","posts svelte-jsbc2j")},m(s,a){A(s,l,a),r(l,t);for(let o=0;o<e.length;o+=1)e[o]&&e[o].m(t,null)},p(s,[a]){a&1&&(i=q(s[0]),e=U(e,a,v,1,s,i,c,t,B,z,null,x))},i:T,o:T,d(s){s&&h(l);for(let a=0;a<e.length;a+=1)e[a].d()}}}function K(n,l,t){let{data:e}=l;const c=e.posts;return n.$$set=i=>{"data"in i&&t(1,e=i.data)},[c,e]}class Y extends H{constructor(l){super(),N(this,l,K,J,D,{data:1})}}export{Y as component,X as universal};
