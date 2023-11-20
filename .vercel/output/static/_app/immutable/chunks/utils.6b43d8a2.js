function o(t,e="medium",r="en"){if(!t)return null;const a=new Date(t.replaceAll("-","/"));return new Intl.DateTimeFormat(r,{dateStyle:e}).format(a)}export{o as f};
