/*! For license information please see main.3e724959.js.LICENSE.txt */
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,ln=Ut`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,un=Ut`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,cn=Vt("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${sn} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${ln} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${un} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,dn=Ut`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,pn=Vt("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${dn} 1s linear infinite;
`,mn=Ut`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,fn=Ut`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,hn=Vt("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${mn} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${fn} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,gn=Vt("div")`
  position: absolute;
`,yn=Vt("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,vn=Ut`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,bn=Vt("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${vn} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,wn=t=>{let{toast:n}=t,{icon:r,type:i,iconTheme:o}=n;return void 0!==r?"string"==typeof r?e.createElement(bn,null,r):r:"blank"===i?null:e.createElement(yn,null,e.createElement(pn,{...o}),"loading"!==i&&e.createElement(gn,null,"error"===i?e.createElement(cn,{...o}):e.createElement(hn,{...o})))},xn=e=>`\n0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}\n100% {transform: translate3d(0,0,0) scale(1); opacity:1;}\n`,kn=e=>`\n0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}\n100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}\n`,Sn=Vt("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,An=Vt("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,En=e.memo((t=>{let{toast:n,position:r,style:i,children:o}=t,a=n.height?((e,t)=>{let n=e.includes("top")?1:-1,[r,i]=qt()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[xn(n),kn(n)];return{animation:t?`${Ut(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${Ut(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(n.position||r||"top-center",n.visible):{opacity:0},s=e.createElement(wn,{toast:n}),l=e.createElement(An,{...n.ariaProps},$t(n.message,n));return e.createElement(Sn,{className:n.className,style:{...a,...i,...n.style}},"function"==typeof o?o({icon:s,message:l}):e.createElement(e.Fragment,null,s,l))}));!function(e,t,n,r){Ot.p=t,Ft=e,Wt=n,Kt=r}(e.createElement);var Pn,Cn=t=>{let{id:n,className:r,style:i,onHeightUpdate:o,children:a}=t,s=e.useCallback((e=>{if(e){let t=()=>{let t=e.getBoundingClientRect().height;o(n,t)};t(),new MutationObserver(t).observe(e,{subtree:!0,childList:!0,characterData:!0})}}),[n,o]);return e.createElement("div",{ref:s,className:r,style:i},a)},Mn=Lt`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }