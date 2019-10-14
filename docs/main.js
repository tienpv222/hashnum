!function(t,o){t.getElementById("livereloadscript")||((o=t.createElement("script")).async=1,o.src="//"+(window.location.host||"localhost").split(":")[0]+":35729/livereload.js?snipver=1",o.id="livereloadscript",t.head.appendChild(o))}(window.document),function(){"use strict";const t={t:null,o:null,s:null},o=new Set,n=new Set,e=new Map,s="!n@a#i$v%",c=o=>{if(o.l)o.i();else{const n=t.t;t.t=new Set,o.i();for(const n of o.t)t.t.has(n)||n.o.delete(o);for(const n of t.t)n.o.add(o);o.t=t.t,t.t=n}};let f=!0;const l=()=>{for(const t of o)for(const o of t.o)n.add(o);o.clear()},r=()=>{if(f&&!t.t){f=!1,l();for(const t of n)n.delete(t),c(t),l();f=!0}},i=Symbol(),a=t=>{const o=()=>{};return o.u=t,o.o=new Set,new Proxy(o,d)},d={apply(n,e,s){if(!s.length)return t.t&&t.t.add(n),n.u;n.u!==s[0]&&(n.u=s[0],o.add(n),r())},get:(o,n)=>{if(n===i)return o;t.t&&t.t.add(o);const e=o.u[n];return"function"!=typeof e||e[i]?e:e.bind(o.u)},set:(t,n,e)=>(t.u[n]!==e&&(t.u[n]=e,o.add(t),r()),!0)},u=(o,...n)=>{const e={i:o,t:new Set};if(n.length){e.l=!0;for(const t of n){const o=t[i];o.o.add(e),e.t.add(o)}}t.o&&t.o.add(e),c(e),r()},m=t=>t&&8===t.nodeType&&t.nodeValue===s,v=(t,o=t.j,n=[])=>{for(let e=0;e<o.childNodes.length;++e){const c=o.childNodes[e],f=c.nodeType;if(3===f){let f=c.nodeValue;if(m(c.previousSibling)||(f=f.trimStart()),m(c.nextSibling)||(f=f.trimEnd()),f){const o=f.split(s);--e;for(let s=0;;++s){const f=o[s].replace(/\s+/," ");if(f?(c.before(document.createTextNode(f)),e+=2):e+=1,s===o.length-1)break;c.before(document.createComment("")),t.p.push({m:[...n,e]})}}o.removeChild(c),--e}else{const o=[...n,e];if(1===f){const n=[];for(const t of c.attributes)t.value===s&&n.push(t.name);n.length&&t.p.push({m:o,S:n}),v(t,c,o)}else m(c)&&t.p.push({m:o})}}},w=(t,...o)=>{let n="";for(let o=0,e=t.length-1;;++o){const c=t[o];if(n+=c,o===e)break;n+="="===c.slice(-1)?s:"\x3c!--!n@a#i$v%--\x3e"}let c=e.get(n);if(!c){const t=document.createElement("template");t.innerHTML=n,c={j:t.content,p:[]},v(c),e.set(n,c)}const f=c.j.cloneNode(!0);for(let t=0,n=0;t<c.p.length;++t){const e=c.p[t];let s=f;for(const t of e.m)s=s.childNodes[t];if(e.S)for(const t of e.S){const e=o[n++];"on"===t.substring(0,2)?s[t]=e:"function"==typeof e?u(()=>s.setAttribute(t,e())):s.setAttribute(t,e)}else{const t=o[n++];if(t instanceof Node)s.replaceWith(t);else{const o=document.createTextNode("");s.replaceWith(o),"function"==typeof t?u(()=>o.nodeValue=t()):o.nodeValue=t}}}return f.childNodes[0]||document.createComment("")},p=o=>{const n=o.h();let e=o.D,s=[];for(let e=0;e<n.length;++e){const c=n[e],f=o.k(c,e);s.push(f);const l=o.M.get(f);if(l)l.$(e),l.u(c);else{const n=t.o,s=t.s;t.o=new Set,t.s=new Set;const l=a(e),r=a(c),i={$:l,u:r,K:o.v(r,l),o:t.o,s:t.s};o.M.set(f,i),t.o=n,t.s=s}}o.D=s;let c=e.length-1,f=n.length-1,l=Math.min(c,f),r=0;for(;r<=l&&e[r]===s[r];)++r;for(;l>r&&e[c]===s[f];)--l,--c,--f;let i=r?o.M.get(s[r-1]).K:null;e=e.slice(r,c+1),s=s.slice(r,f+1);const d=[];for(let t=0;t<e.length;++t){const n=e[t],c=s.indexOf(n);if(c<0){const t=o.M.get(n);o.M.delete(n),b(t),t.K.remove()}else d.push(c)}const u=(t=>{if(!t.length)return[];const o=[[t[0]]];for(let n=1;n<t.length;++n){const e=t[n];for(let t=o.length-1;t>=0;--t){const n=o[t];if(e<n[n.length-1]){if(t)continue;o.splice(0,1,[e])}else o.splice(t+1,1,[...n,e]);break}}return o.pop()})(d);for(let t=0;t<s.length;++t){const n=o.M.get(s[t]);u.includes(t)||(i?i.after(n.K):o.g.prepend(n.K)),i=n.K}},b=t=>{for(const o of t.o)for(const t of o.t)t.o.delete(o);for(const o of t.s)o.M.forEach(b)},x=w`
<div class='text-center'>
  <span class='text-4xl'>hashnum</span>
  <a class='align-text-bottom ml-3' href='#'>
    <img class='inline h-8' src='GitHub-Mark-64px.png'>
  </a>
</div>
`,g=((o,n,e,s)=>{const c={h:o,k:n,g:e,v:s,M:new Map,D:[]};return t.s&&t.s.add(c),u(()=>p(c),o),e})(a([12,23,445]),(t,o)=>o,w`<div></div>`,(t,o)=>w`
    <div 
      class='px-1 my-1 inline-block'
      
      contenteditable>
      ${t}
    </div>
  `),h=(t="")=>w`
  <div class='
    m-5
    w-5/6 sm:w-4/6 md:w-3/6 lg:w-2/6 h-40
    border-2 bg-white rounded-lg border-black'>
    ${t}
  </div> 
`,y=w`
  <div class='flex flex-col font-mono min-h-screen bg-gray-300 '>
    ${x}
    <div class='my-10 flex flex-col items-center'>
      ${h(g)}
      ${h()}
    </div>
  </div>
`;document.body.append(y)}();
//# sourceMappingURL=main.js.map
