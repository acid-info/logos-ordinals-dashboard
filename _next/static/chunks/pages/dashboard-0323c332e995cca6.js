(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{528:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return t(9773)}])},5274:function(n,e,t){"use strict";t.d(e,{H:function(){return c}});var r=t(5893);let i={title:"Logos Ordinals",description:"Explore the Logos Operator Collection",xHandle:"logos_network"},o=()=>new URL(window.location.href).origin;var s=t(9008),a=t.n(s);let l=o();function c(n){let{title:e,description:t,type:s,locale:c,site_name:d,pageURL:u,imageUrl:p,tags:h=[],pagePath:x="",noIndex:f=!1}=n,g="".concat(o(),"/og.png"),m=e||i.title,v=t||i.description;return(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:m}),(0,r.jsx)("meta",{name:"description",content:v}),(0,r.jsx)("meta",{property:"og:title",content:m}),(0,r.jsx)("meta",{property:"og:locale",content:null!=c?c:"en-US"}),(0,r.jsx)("meta",{property:"og:description",content:v}),(0,r.jsx)("meta",{property:"og:type",content:null!=s?s:"website"}),(0,r.jsx)("meta",{property:"og:url",content:null!=u?u:"".concat(l).concat(x)}),(0,r.jsx)("meta",{property:"keywords",content:h.join(", ")}),(0,r.jsx)("meta",{property:"og:site_name",content:null!=d?d:i.title}),(0,r.jsx)("meta",{name:"twitter:title",content:m}),(0,r.jsx)("meta",{name:"twitter:description",content:v}),(0,r.jsx)("meta",{property:"og:image",content:g}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:url",content:null!=u?u:"".concat(l).concat(x)}),(0,r.jsx)("meta",{name:"twitter:site",content:"@".concat(i.xHandle)}),(0,r.jsx)("meta",{property:"twitter:image",content:g}),(0,r.jsx)("link",{rel:"canonical",href:"".concat(l).concat(x)}),(0,r.jsx)("link",{rel:"alternate",type:"application/rss+xml",href:"".concat(o(),"/rss.xml")}),(0,r.jsx)("link",{rel:"alternate",type:"application/atom+xml",href:"".concat(o(),"/atom.xml")}),f&&(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})]})}},9773:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return tu}});var r=t(5893),i=t(5274),o=t(2729),s=t(5307),a=t(6829),l=t(1664),c=t.n(l),d=t(7294),u=t(202),p=t(8583),h=t(9291),x=t(9289),f=t(7037),g=t(7506),m=t(4139),v=class extends g.l{#n;#e=void 0;#t;#r;constructor(n,e){super(),this.#n=n,this.setOptions(e),this.bindMethods(),this.#i()}bindMethods(){this.mutate=this.mutate.bind(this),this.reset=this.reset.bind(this)}setOptions(n){let e=this.options;this.options=this.#n.defaultMutationOptions(n),(0,m.VS)(this.options,e)||this.#n.getMutationCache().notify({type:"observerOptionsUpdated",mutation:this.#t,observer:this}),e?.mutationKey&&this.options.mutationKey&&(0,m.Ym)(e.mutationKey)!==(0,m.Ym)(this.options.mutationKey)?this.reset():this.#t?.state.status==="pending"&&this.#t.setOptions(this.options)}onUnsubscribe(){this.hasListeners()||this.#t?.removeObserver(this)}onMutationUpdate(n){this.#i(),this.#o(n)}getCurrentResult(){return this.#e}reset(){this.#t?.removeObserver(this),this.#t=void 0,this.#i(),this.#o()}mutate(n,e){return this.#r=e,this.#t?.removeObserver(this),this.#t=this.#n.getMutationCache().build(this.#n,this.options),this.#t.addObserver(this),this.#t.execute(n)}#i(){let n=this.#t?.state??(0,x.R)();this.#e={...n,isPending:"pending"===n.status,isSuccess:"success"===n.status,isError:"error"===n.status,isIdle:"idle"===n.status,mutate:this.mutate,reset:this.reset}}#o(n){f.V.batch(()=>{if(this.#r&&this.hasListeners()){let e=this.#e.variables,t=this.#e.context;n?.type==="success"?(this.#r.onSuccess?.(n.data,e,t),this.#r.onSettled?.(n.data,null,e,t)):n?.type==="error"&&(this.#r.onError?.(n.error,e,t),this.#r.onSettled?.(void 0,n.error,e,t))}this.listeners.forEach(n=>{n(this.#e)})})}},j=t(6290);function b(n,e){let t=(0,u.NL)(e),[r]=d.useState(()=>new v(t,n));d.useEffect(()=>{r.setOptions(n)},[r,n]);let i=d.useSyncExternalStore(d.useCallback(n=>r.subscribe(f.V.batchCalls(n)),[r]),()=>r.getCurrentResult(),()=>r.getCurrentResult()),o=d.useCallback((n,e)=>{r.mutate(n,e).catch(j.Z)},[r]);if(i.error&&(0,j.L)(r.options.throwOnError,[i.error]))throw i.error;return{...i,mutate:o,mutateAsync:i.mutate}}var w=t(8381);let _=async n=>{let{operator_id:e}=n;try{let n=sessionStorage.getItem("accessToken");return w.hi.defaults.headers.common.Authorization="Bearer ".concat(n),(await w.hi.post("/user/operators/".concat(e,"/pin"))).data}catch(n){if(n.response){if(403===n.response.status)throw alert("Access Denied: You do not have permission to perform this action."),Error("Access Denied: You do not have permission to perform this action.");if(404===n.response.status)throw alert("Operator not found. Please check the operator ID."),Error("Operator not found. Please check the operator ID.")}throw Error("An unexpected error occurred. Please try again later.")}},y=()=>b({mutationFn:_}),k=async n=>{let{operator_id:e,setIsStaked:t}=n;try{let n=sessionStorage.getItem("accessToken");w.hi.defaults.headers.common.Authorization="Bearer ".concat(n);let r=await w.hi.post("/user/operators/".concat(e,"/stake"));return t(!0),r.data}catch(n){if(n.response){if(403===n.response.status)throw alert("Access Denied: You do not have permission to perform this action."),Error("Access Denied: You do not have permission to perform this action.");if(404===n.response.status)throw alert("Operator not found. Please check the operator ID."),Error("Operator not found. Please check the operator ID.")}throw Error("An unexpected error occurred. Please try again later.")}},Z=()=>b({mutationFn:k}),A=async n=>{let{operator_id:e,setIsStaked:t}=n;try{let n=sessionStorage.getItem("accessToken");w.hi.defaults.headers.common.Authorization="Bearer ".concat(n);let r=await w.hi.post("/user/operators/".concat(e,"/unstake"));return t(!1),r.data}catch(n){if(n.response){if(403===n.response.status)throw alert("Access Denied: You do not have permission to perform this action."),Error("Access Denied: You do not have permission to perform this action.");if(404===n.response.status)throw alert("Operator not found. Please check the operator ID."),Error("Operator not found. Please check the operator ID.")}throw Error("An unexpected error occurred. Please try again later.")}},S=()=>b({mutationFn:A});var O=t(7491);let P=(0,t(5103).cn)(null);var E=t(757),C=t(6223);function z(){let n=(0,o._)(["\n  display: flex;\n  flex-direction: column;\n\n  color: rgb(var(--lsd-text-primary));\n\n  a {\n    display: flex;\n  }\n"]);return z=function(){return n},n}function D(){let n=(0,o._)(["\n  background-color: transparent;\n  border-left: none;\n  width: 28px;\n  height: 28px;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  border-left: ",";\n  height: 28px;\n\n  cursor: pointer;\n\n  // hover state when not pinned\n  ","\n"]);return D=function(){return n},n}function M(){let n=(0,o._)(["\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 20px;\n"]);return M=function(){return n},n}function V(){let n=(0,o._)(["\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 20px;\n"]);return V=function(){return n},n}function R(){let n=(0,o._)(["\n  width: 100%;\n  aspect-ratio: 1;\n  object-fit: cover;\n"]);return R=function(){return n},n}function I(){let n=(0,o._)(["\n  padding: 16px 0;\n"]);return I=function(){return n},n}function F(){let n=(0,o._)(["\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 20px;\n  // 1 line of text\n  display: -webkit-inline-box;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  line-clamp: 1;\n  -webkit-line-clamp: 1;\n"]);return F=function(){return n},n}function L(){let n=(0,o._)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return L=function(){return n},n}function U(){let n=(0,o._)(["\n  display: flex;\n  align-items: center;\n  border: 1px solid rgb(var(--lsd-border-primary));\n  border-radius: 0;\n"]);return U=function(){return n},n}function N(){let n=(0,o._)(["\n  flex: 1;\n  background-color: ",";\n  color: ",";\n  border: none;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 16px;\n  padding: 6px 12px;\n\n  &:hover {\n    background-color: rgb(var(--lsd-surface-secondary));\n    color: rgb(var(--lsd-text-secondary));\n  }\n\n  cursor: pointer;\n"]);return N=function(){return n},n}let T=a.Z.div(z()),Y=a.Z.button(D(),n=>n.isPinned?"1px solid black":"1px solid white",n=>!n.isPinned&&"\n    &:hover {\n      background-color: rgb(var(--lsd-surface-secondary));\n\n      img {\n      filter: invert(1);\n    }\n    }\n  "),B=a.Z.div(M()),X=a.Z.div(V()),K=a.Z.img(R()),H=a.Z.div(I()),Q=a.Z.div(F()),W=a.Z.div(L()),$=a.Z.div(U()),q=a.Z.button(N(),n=>n.isStaked?"rgb(var(--lsd-surface-secondary))":"transparent",n=>n.isStaked?"rgb(var(--lsd-text-secondary))":"rgb(var(--lsd-text-primary))");var G=n=>{var e;let{operator:t}=n,i=(0,p.b9)(E.w),o=(0,p.Dv)(O.$),[s,a]=(0,d.useState)(t.isStaked),l=(0,p.Dv)(P),x=null==l?void 0:null===(e=l[0])||void 0===e?void 0:e.xp_per_block,f=(0,u.NL)(),g=(0,p.Dv)(C.L),m=Z(),v=S(),j=y(),{refetch:b,updateCache:w}=(0,h.Z)({walletAddress:g}),_=async n=>{if(a(n=>!n),s){v.mutateAsync({operator_id:n,setIsStaked:a}),f.invalidateQueries("getUserInfo");let e=(await b()).data;w(e),i(e),window.location.reload()}else{m.mutateAsync({operator_id:n,setIsStaked:a}),f.invalidateQueries("getUserInfo");let e=(await b()).data;w(e),i(e),window.location.reload()}},k=async n=>{f.invalidateQueries("getUserInfo"),await j.mutateAsync({operator_id:n}),i((await b()).data)};return(0,r.jsxs)(T,{children:[(0,r.jsx)(c(),{href:"/operators/".concat(t.id),prefetch:!1,children:(0,r.jsx)(K,{src:o?null==t?void 0:t.pixelated:null==t?void 0:t.gif,"data-src":o?null==t?void 0:t.pixelated:null==t?void 0:t.gif,alt:"Operator ".concat(t.name),loading:"lazy",className:"lazyload"})},t.id),(0,r.jsxs)(H,{children:[(0,r.jsx)(Q,{children:t.name}),(0,r.jsxs)(W,{children:[(0,r.jsx)(B,{children:"XP/Block"}),(0,r.jsxs)(X,{children:[x," XP"]})]})]}),(0,r.jsxs)($,{children:[(0,r.jsx)(q,{onClick:()=>_(t.id),isStaked:!!s,children:s?"Unstake":"Stake"}),(0,r.jsx)(Y,{onClick:()=>k(t.id),isPinned:t.isPinned,children:t.isPinned?(0,r.jsx)("img",{src:"/assets/pinned.svg",alt:"Pinned"}):(0,r.jsx)("img",{src:"/assets/unpinned.svg",alt:"Unpinned"})})]})]},t.id)};function J(){let n=(0,o._)(["\n  margin-top: 116px;\n\n  @media (max-width: ","px) {\n    margin-top: 70px;\n  }\n"]);return J=function(){return n},n}function nn(){let n=(0,o._)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n"]);return nn=function(){return n},n}function ne(){let n=(0,o._)(["\n  font-weight: 400;\n  font-size: 24px;\n  line-height: 32px;\n  margin: 0;\n"]);return ne=function(){return n},n}function nt(){let n=(0,o._)(["\n  display: flex;\n  align-items: center;\n"]);return nt=function(){return n},n}function nr(){let n=(0,o._)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  border: 1px solid rgb(var(--lsd-border-primary));\n  background-color: transparent;\n  width: 28px;\n  height: 28px;\n  cursor: pointer;\n"]);return nr=function(){return n},n}function ni(){let n=(0,o._)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 16px;\n  gap: 2px;\n\n  @media (max-width: ","px) {\n    display: grid;\n\n    grid-template-columns: repeat(2, 1fr);\n  }\n"]);return ni=function(){return n},n}function no(){let n=(0,o._)(["\n  background-color: var(--grey-900);\n  padding: 16px 8px;\n  flex: 1;\n"]);return no=function(){return n},n}function ns(){let n=(0,o._)(["\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 20px;\n"]);return ns=function(){return n},n}function na(){let n=(0,o._)(["\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 20px;\n  margin-top: 8px;\n"]);return na=function(){return n},n}function nl(){let n=(0,o._)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(158px, 1fr));\n  gap: 16px;\n\n  @media (max-width: ","px) {\n    // 2 columns\n    grid-template-columns: repeat(2, 1fr);\n  }\n"]);return nl=function(){return n},n}function nc(){let n=(0,o._)(["\n  display: flex;\n  flex-direction: column;\n\n  color: rgb(var(--lsd-text-primary));\n\n  a {\n    display: flex;\n  }\n"]);return nc=function(){return n},n}function nd(){let n=(0,o._)(["\n  width: 100%;\n  aspect-ratio: 1;\n  background-color: var(--grey-500);\n  border-radius: 8px;\n  opacity: 0.5;\n"]);return nd=function(){return n},n}function nu(){let n=(0,o._)(["\n  display: none;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 24px;\n  width: 100%;\n  height: 258px;\n  padding: 24px;\n\n  span {\n    text-decoration: none;\n    color: white;\n  }\n\n  & {\n    text-decoration: none;\n    color: white;\n  }\n\n  &:hover {\n    span {\n      text-decoration: underline;\n    }\n  }\n"]);return nu=function(){return n},n}let np=a.Z.section(J(),s.AV.md),nh=a.Z.div(nn()),nx=a.Z.h2(ne()),nf=a.Z.div(nt()),ng=a.Z.button(nr()),nm=a.Z.div(ni(),s.AV.sm),nv=a.Z.div(no()),nj=a.Z.div(ns()),nb=a.Z.div(na()),nw=a.Z.div(nl(),s.AV.sm),n_=a.Z.div(nc()),ny=a.Z.div(nd()),nk=(0,a.Z)(c())(nu());var nZ=n=>{let{isLoading:e,data:t}=n,i=null==t?void 0:t.filter(n=>n.isStaked),o=null==t?void 0:t.reduce((n,e)=>n+(e.isStaked?50:0),0);return(0,r.jsxs)(np,{children:[(0,r.jsxs)(nh,{children:[(0,r.jsx)(nx,{children:"Operators"}),(0,r.jsx)(nf,{})]}),(0,r.jsxs)(nm,{children:[(0,r.jsxs)(nv,{children:[(0,r.jsx)(nj,{children:"Total Operators"}),(0,r.jsx)(nb,{children:(null==t?void 0:t.length)||0})]}),(0,r.jsxs)(nv,{children:[(0,r.jsx)(nj,{children:"Staked"}),(0,r.jsx)(nb,{children:(null==i?void 0:i.length)||0})]}),(0,r.jsxs)(nv,{children:[(0,r.jsx)(nj,{children:"Unstaked"}),(0,r.jsx)(nb,{children:(null==t?void 0:t.length)-((null==i?void 0:i.length)||0)})]}),(0,r.jsxs)(nv,{children:[(0,r.jsx)(nj,{children:"XP/Block"}),(0,r.jsx)(nb,{children:o||0})]})]}),(0,r.jsx)(nw,{children:e?Array.from({length:15}).map((n,e)=>(0,r.jsx)(n_,{children:(0,r.jsx)(ny,{})},e)):(null==t?void 0:t.length)===0?(0,r.jsxs)(nk,{href:"https://logos.co/exit",target:"_blank",children:[(0,r.jsx)(ng,{children:(0,r.jsx)("img",{src:"/assets/plus.svg",width:10,height:10,alt:"Add Operator"})}),(0,r.jsx)("span",{children:"Add Operator"})]}):null==t?void 0:t.sort((n,e)=>n.isPinned&&!e.isPinned?-1:!n.isPinned&&e.isPinned?1:n.isStaked&&!e.isStaked?-1:!n.isStaked&&e.isStaked?1:n.name.localeCompare(e.name)).map(n=>(0,r.jsx)(G,{operator:n},n.id))})]})};function nA(){let n=(0,o._)(["\n  background-color: #320430;\n  color: #f29ae9;\n  cursor: pointer;\n"]);return nA=function(){return n},n}function nS(){let n=(0,o._)(["\n  padding: 20px 16px 20px 8px;\n  font-size: 14px;\n  line-height: 20px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n"]);return nS=function(){return n},n}function nO(){let n=(0,o._)(["\n  display: ",";\n  justify-content: space-between;\n  overflow: hidden;\n  transition: max-height 0.3s ease;\n  background-color: #260324;\n  padding: 16px 8px;\n  font-size: 14px;\n  line-height: 20px;\n  color: #f29ae9;\n  letter-spacing: 0.14px;\n"]);return nO=function(){return n},n}function nP(){let n=(0,o._)(["\n  display: inline-flex;\n  transition: transform 0.3s ease;\n  transform: ",";\n"]);return nP=function(){return n},n}let nE=a.Z.div(nA()),nC=a.Z.div(nS()),nz=a.Z.div(nO(),n=>{let{isOpen:e}=n;return e?"flex":"none"}),nD=a.Z.span(nP(),n=>{let{isExpanded:e}=n;return e?"rotate(180deg)":"rotate(0deg)"});var nM=n=>{let{header:e,children:t}=n,[i,o]=(0,d.useState)(!1);return(0,r.jsxs)(nE,{children:[(0,r.jsxs)(nC,{onClick:()=>{o(!i)},children:[(0,r.jsx)("span",{children:e}),(0,r.jsx)(nD,{isExpanded:i,children:i?(0,r.jsx)("img",{src:"/assets/chevron-down-purple.svg",alt:"chevron up"}):(0,r.jsx)("img",{src:"/assets/chevron-down-purple.svg",alt:"chevron down"})})]}),(0,r.jsx)(nz,{isOpen:i,children:t})]})};function nV(){let n=(0,o._)(["\n  background: none;\n  border: none;\n  color: #f29ae9;\n  cursor: pointer;\n  font-size: 14px;\n  margin-left: 10px;\n"]);return nV=function(){return n},n}function nR(){let n=(0,o._)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  width: 100%;\n  height: 28px;\n\n  .referral-code {\n    // ellipsis\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    width: 90%;\n  }\n"]);return nR=function(){return n},n}let nI=a.Z.button(nV()),nF=a.Z.div(nR());var nL=n=>{let{referralCode:e}=n;return(0,r.jsx)(nM,{header:"Refer Operators +100 XP",children:(0,r.jsxs)(nF,{children:[(0,r.jsx)("div",{className:"referral-code",children:(null==e?void 0:e.length)?"https://dashboard.logos.co/dashboard?referral_code=".concat(e):"Connect to wallet to get referral code"}),(0,r.jsx)(nI,{onClick:()=>{let n=window.location.href,t="".concat(n,"?referral_code=").concat(e);navigator.clipboard.writeText(t||""),alert("Copied to clipboard!")},children:(0,r.jsx)("img",{src:"/assets/file-copy-purple.svg",alt:"file copy"})})]})})};function nU(){let n=(0,o._)(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n\n  width: 100%;\n"]);return nU=function(){return n},n}function nN(){let n=(0,o._)(["\n  display: flex;\n  width: 100%;\n\n  button {\n    display: flex;\n    width: 40px;\n    height: 40px;\n    padding: 13px;\n    justify-content: center;\n    align-items: center;\n    border: none;\n    background: #f29ae9;\n    box-sizing: border-box;\n    cursor: pointer;\n  }\n"]);return nN=function(){return n},n}function nT(){let n=(0,o._)(["\n  color: #f29ae9;\n  width: 100%;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.14px;\n  height: 40px;\n  padding: 10px 14px;\n  background: transparent;\n  border: none;\n  border-bottom: 1px solid #f29ae9;\n\n  &::placeholder {\n    color: #f29ae9;\n    opacity: 0.5;\n  }\n\n  &:focus {\n    outline: none;\n  }\n"]);return nT=function(){return n},n}function nY(){let n=(0,o._)(["\n  color: ",";\n  font-size: 12px;\n  line-height: 16px;\n  letter-spacing: 0.12px;\n  opacity: 0.6;\n"]);return nY=function(){return n},n}let nB=a.Z.div(nU()),nX=a.Z.form(nN()),nK=a.Z.input(nT()),nH=a.Z.span(nY(),n=>{let{isSuccess:e}=n;return e?"#8FFFB6":"#F26969"});var nQ=()=>{let[n,e]=(0,d.useState)(""),[t,i]=(0,d.useState)(null),[o,s]=(0,d.useState)(!0);return(0,r.jsx)(nM,{header:"Enter Exit Code",children:(0,r.jsxs)(nB,{children:[(0,r.jsxs)(nX,{onSubmit:e=>{e.preventDefault(),w.hi.post("/user/exit-code",{exit_code:n}).then(n=>{i(n.data.message),s(!0)}).catch(n=>{console.log(n),i(n.response.data.message||"Something went wrong"),s(!1)})},children:[(0,r.jsx)(nK,{onChange:n=>{e(n.target.value)},placeholder:"Exit Code"}),(0,r.jsx)("button",{type:"submit",children:(0,r.jsx)("img",{src:"/icons/chevron-right-dark-purple.svg",alt:"submit"})})]}),t&&(0,r.jsx)(nH,{isSuccess:o,children:t})]})})},nW=t(8466);let n$=async n=>{let{call_sign:e}=n;try{let n=sessionStorage.getItem("accessToken");return w.hi.defaults.headers.common.Authorization="Bearer ".concat(n),(await w.hi.put("/user/call-sign/update",{call_sign:e})).data}catch(n){if(n.response){if(403===n.response.status)throw alert("Access Denied: You do not have permission to perform this action."),Error("Access Denied: You do not have permission to perform this action.");if(404===n.response.status)throw alert("User not found. Please check the wallet address."),Error("User not found. Please check the owallet address.")}throw Error("An unexpected error occurred. Please try again later.")}},nq=()=>b({mutationFn:n$});function nG(){let n=(0,o._)(["\n  font-size: 14px;\n  line-height: 20px;\n"]);return nG=function(){return n},n}function nJ(){let n=(0,o._)(["\n  background-color: var(--grey-900);\n  padding: 8px;\n  margin-bottom: 2px;\n\n  @media (max-width: ","px) {\n    display: flex;\n    gap: 16px;\n  }\n"]);return nJ=function(){return n},n}function n0(){let n=(0,o._)(["\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  margin-top: 24px;\n"]);return n0=function(){return n},n}function n1(){let n=(0,o._)(["\n  width: 100%;\n  aspect-ratio: 1;\n  object-fit: cover;\n\n  @media (max-width: ","px) {\n    width: 90px;\n  }\n"]);return n1=function(){return n},n}function n2(){let n=(0,o._)(["\n  display: flex;\n  justify-content: center;\n  padding: 16px 8px;\n  margin-bottom: 2px;\n\n  @media (max-width: ","px) {\n    width: 100%;\n    padding: 0;\n    margin-bottom: 0;\n    align-items: center;\n  }\n"]);return n2=function(){return n},n}function n4(){let n=(0,o._)(["\n  @media (max-width: ","px) {\n    text-align: center;\n  }\n"]);return n4=function(){return n},n}function n8(){let n=(0,o._)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 16px 8px;\n  margin-bottom: 2px;\n  background-color: var(--grey-900);\n"]);return n8=function(){return n},n}function n6(){let n=(0,o._)(["\n  margin-top: 24px;\n  margin-bottom: 2px;\n\n  @media (max-width: ","px) {\n    margin-top: 2px;\n  }\n"]);return n6=function(){return n},n}function n9(){let n=(0,o._)(["\n  width: 87px;\n"]);return n9=function(){return n},n}function n3(){let n=(0,o._)(["\n  text-align: right;\n  width: 155px;\n\n  @media (max-width: ","px) {\n    width: auto;\n  }\n"]);return n3=function(){return n},n}function n7(){let n=(0,o._)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  background-color: transparent;\n  position: relative;\n  cursor: pointer;\n  margin-left: 18px;\n\n  input {\n    background: var(--grey-900);\n    border: none;\n    border-bottom: 1px solid white;\n    width: 150px;\n    position: absolute;\n    right: 20px;\n\n    color: white;\n    font-size: 14px;\n    line-height: 20px;\n    text-align: right;\n    padding-right: 10px;\n  }\n\n  input:focus {\n    outline: none;\n  }\n\n  span {\n    background: transparent;\n    width: 150px;\n    position: absolute;\n    right: 20px;\n\n    color: white;\n    font-size: 14px;\n    line-height: 20px;\n    text-align: right;\n    padding-right: 10px;\n  }\n\n  &:hover {\n    img {\n      filter: brightness(0.8);\n    }\n  }\n"]);return n7=function(){return n},n}let n5=a.Z.section(nG()),en=a.Z.div(nJ(),s.AV.sm),ee=a.Z.div(n0()),et=a.Z.img(n1(),s.AV.sm),er=a.Z.div(n2(),s.AV.sm),ei=a.Z.span(n4(),s.AV.sm),eo=a.Z.div(n8()),es=a.Z.div(n6(),s.AV.sm),ea=a.Z.span(n9()),el=a.Z.span(n3(),s.AV.sm),ec=a.Z.button(n7());var ed=()=>{var n,e,t,i;let o=(0,p.Dv)(E.w),s=(0,p.Dv)(O.$),[a,l]=(0,d.useState)(!1),[c,u]=(0,d.useState)(""),h=nq();return(0,d.useEffect)(()=>{u((null==o?void 0:o.call_sign)||"")},[o]),(0,r.jsxs)(n5,{children:[(null==o?void 0:o.pinned_operator)&&(0,r.jsxs)(en,{children:[(0,r.jsx)(et,{src:s?null==o?void 0:null===(n=o.pinned_operator)||void 0===n?void 0:n.image_pixalated_url:null==o?void 0:null===(e=o.pinned_operator)||void 0===e?void 0:e.image_400_url,alt:"Operator"}),(0,r.jsx)(er,{children:(0,r.jsx)(ei,{children:null==o?void 0:null===(t=o.pinned_operator)||void 0===t?void 0:t.name})})]}),(0,r.jsxs)(eo,{children:[(0,r.jsx)(ea,{children:"Archetype"}),(0,r.jsx)(el,{children:null==o?void 0:null===(i=o.pinned_operator)||void 0===i?void 0:i.archetype__name})]}),(0,r.jsxs)(es,{children:[(0,r.jsxs)(eo,{children:[(0,r.jsx)(ea,{children:"Wallet"}),(0,r.jsx)(el,{children:(0,nW.aS)(null==o?void 0:o.address)}),(0,r.jsx)(ec,{onClick:()=>{navigator.clipboard.writeText(null==o?void 0:o.address)},children:(0,r.jsx)("img",{src:"/assets/file-copy.svg",alt:"Copy wallet address"})})]}),(0,r.jsxs)(eo,{children:[(0,r.jsx)(ea,{children:"Callsign"}),a?(0,r.jsxs)(ec,{children:[(0,r.jsx)("input",{type:"text",defaultValue:c,onChange:n=>{u(n.target.value)}}),(0,r.jsx)("div",{onClick:()=>{l(!1),h.mutateAsync({call_sign:c})},children:(0,r.jsx)("img",{src:"/assets/edit.svg",alt:"Edit callsign"})})]}):(0,r.jsxs)(ec,{onClick:()=>{l(n=>!n)},children:[(0,r.jsx)("span",{children:c}),(0,r.jsx)("img",{src:"/assets/edit.svg",alt:"Edit callsign"})]})]}),(0,r.jsxs)(eo,{children:[(0,r.jsx)(ea,{children:"Role"}),(0,r.jsx)(el,{children:(null==o?void 0:o.role)&&"Operator"})]}),(0,r.jsxs)(eo,{children:[(0,r.jsx)(ea,{children:"OP Number"}),(0,r.jsx)(el,{children:(null==o?void 0:o.id)&&"#".concat(null==o?void 0:o.id)})]})]}),(0,r.jsxs)(ee,{children:[(0,r.jsx)(nQ,{}),(0,r.jsx)(nL,{referralCode:(null==o?void 0:o.referral_code)||""})]})]})};function eu(){let n=(0,o._)(["\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 20px;\n"]);return eu=function(){return n},n}function ep(){let n=(0,o._)(["\n  display: flex;\n  gap: 8px;\n\n  align-items: baseline;\n"]);return ep=function(){return n},n}function eh(){let n=(0,o._)(["\n  display: flex;\n  justify-content: space-between;\n"]);return eh=function(){return n},n}function ex(){let n=(0,o._)(["\n  background-color: rgb(var(--lsd-surface-secondary));\n  color: rgb(var(--lsd-text-secondary));\n  padding: 0 8px;\n  line-height: 20px;\n  font-size: 14px;\n  width: 76px;\n  text-align: center;\n\n  @media (max-width: ","px) {\n    width: 68px;\n    padding: 2px 7px;\n    font-size: 12px;\n    line-height: 16px;\n  }\n"]);return ex=function(){return n},n}function ef(){let n=(0,o._)(["\n  position: relative;\n  height: 8px;\n  margin: 16px 0;\n  width: calc(100% - 83px);\n  border-bottom: 1px solid rgb(var(--lsd-border-primary));\n  border-right: 1px solid rgb(var(--lsd-border-primary));\n  display: flex;\n  align-items: center;\n"]);return ef=function(){return n},n}function eg(){let n=(0,o._)(["\n  height: 100%;\n  width: ","%;\n  background-color: rgb(var(--lsd-surface-secondary));\n"]);return eg=function(){return n},n}function em(){let n=(0,o._)(["\n  position: absolute;\n  top: -20px;\n  right: 0;\n  display: flex;\n  flex-direction: column;\n"]);return em=function(){return n},n}function ev(){let n=(0,o._)(["\n  position: relative;\n  width: ","px;\n  top: -16px;\n"]);return ev=function(){return n},n}function ej(){let n=(0,o._)(["\n  width: 1px;\n  height: 8px;\n  background-color: white;\n  position: absolute;\n  bottom: -8px; /* Align vertical bar at the bottom of progress bar */\n"]);return ej=function(){return n},n}function eb(){let n=(0,o._)(["\n  margin-left: auto;\n  width: 76px;\n  display: flex;\n  flex-direction: column;\n"]);return eb=function(){return n},n}function ew(){let n=(0,o._)(["\n  display: flex;\n  gap: 2.75px;\n"]);return ew=function(){return n},n}function e_(){let n=(0,o._)(["\n  width: 1px;\n  height: 6px;\n  background-color: white;\n"]);return e_=function(){return n},n}function ey(){let n=(0,o._)(["\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 24px;\n"]);return ey=function(){return n},n}function ek(){let n=(0,o._)([""]);return ek=function(){return n},n}function eZ(){let n=(0,o._)(["\n  display: flex;\n  gap: 16px;\n\n  @media (max-width: ","px) {\n    overflow-x: auto;\n\n    // hide scroll bar\n    scrollbar-width: none;\n    -ms-overflow-style: none;\n  }\n"]);return eZ=function(){return n},n}function eA(){let n=(0,o._)(["\n  border: 1px solid var(--dark-orange);\n  display: flex;\n  align-items: center;\n"]);return eA=function(){return n},n}function eS(){let n=(0,o._)(["\n  border: 1px solid #320430;\n  display: flex;\n  align-items: center;\n"]);return eS=function(){return n},n}function eO(){let n=(0,o._)(["\n  font-size: 12px;\n  padding: 8px 16px;\n  line-height: 16px;\n  white-space: nowrap;\n"]);return eO=function(){return n},n}function eP(){let n=(0,o._)(["\n  font-size: 12px;\n  color: ",";\n  background-color: ",";\n  padding: 8px 16px;\n  line-height: 16px;\n  letter-spacing: 0.12px;\n  white-space: nowrap;\n"]);return eP=function(){return n},n}function eE(){let n=(0,o._)(["\n  display: flex;\n"]);return eE=function(){return n},n}let eC=a.Z.section(eu()),ez=a.Z.div(ep()),eD=a.Z.div(eh()),eM=a.Z.span(ex(),s.AV.sm),eV=a.Z.div(ef()),eR=a.Z.div(eg(),n=>n.width),eI=a.Z.div(em()),eF=(0,a.Z)(eM)(ev(),n=>n.position),eL=a.Z.div(ej()),eU=a.Z.div(eb()),eN=a.Z.div(ew()),eT=a.Z.div(e_()),eY=a.Z.div(ey()),eB=a.Z.span(ek()),eX=a.Z.div(eZ(),s.AV.sm),eK=a.Z.div(eA()),eH=a.Z.div(eS()),eQ=a.Z.div(eO()),eW=a.Z.div(eP(),n=>n.color,n=>n.backgroundColor),e$=a.Z.div(eE());var eq=n=>{var e,t;let{progress:i=0,claimPosition:o=76}=n,s=(0,p.Dv)(E.w),a=(0,p.Dv)(P),l=(null==s?void 0:s.operators.reduce((n,e)=>n+e.staking_xp_per_block,0))||0;return(0,r.jsxs)(eC,{children:[(0,r.jsxs)(eD,{children:[(0,r.jsx)(eM,{children:"epoch 1"}),(0,r.jsx)(eM,{children:"epoch 2"})]}),(0,r.jsxs)(ez,{children:[(0,r.jsxs)(eV,{children:[(0,r.jsx)(eR,{width:i}),(0,r.jsxs)(eI,{children:[(0,r.jsx)(eF,{position:o,children:"cooldown"}),(0,r.jsx)(eL,{})]})]}),(0,r.jsx)(eU,{children:(0,r.jsx)(eN,{children:[...Array(22)].map((n,e)=>(0,r.jsx)(eT,{},e))})})]}),(0,r.jsx)(eY,{children:(0,r.jsx)(eB,{children:"Current Rate: 100%"})}),(0,r.jsxs)(eX,{children:[(0,r.jsxs)(eK,{children:[(0,r.jsx)(eQ,{children:"Time Remaining"}),(0,r.jsx)(eW,{color:"var(--orange)",backgroundColor:"var(--dark-orange)",children:a&&(null===(e=a[0])||void 0===e?void 0:e.blocks_remaining)?"".concat((0,nW.x6)(null===(t=a[0])||void 0===t?void 0:t.blocks_remaining)," blocks"):"N/A"})]}),(0,r.jsxs)(e$,{children:[(0,r.jsxs)(eH,{children:[(0,r.jsx)(eQ,{children:"Total Points"}),(0,r.jsx)(eW,{color:"#F29AE9",backgroundColor:"#320430",children:"".concat((0,nW.x6)(null==s?void 0:s.total_xp)||0)})]}),(0,r.jsxs)(eH,{children:[(0,r.jsx)(eQ,{children:"Epoch 1 XP"}),(0,r.jsx)(eW,{color:"#F29AE9",backgroundColor:"#320430",children:"".concat((0,nW.x6)(l))})]})]})]})]})},eG=t(777);let eJ={refetchOnWindowFocus:!1,staleTime:6e4,retry:1},e0=async()=>await w.hi.get("/epochs").then(n=>n.data);var e1=n=>{let{enabled:e}=n,t=["getEpochs"],r=(0,u.NL)();return{...(0,eG.a)({queryKey:t,queryFn:e0,enabled:e,...eJ}),updateCache:n=>{r.setQueryData(t,n)}}},e2=t(8539);function e4(){let n=(0,o._)([""]);return e4=function(){return n},n}function e8(){let n=(0,o._)(["\n  display: grid;\n  grid-template-columns: repeat(24, 1fr);\n  gap: 0 16px;\n\n  margin-top: 80px;\n  width: 100%;\n\n  @media (max-width: ","px) {\n    display: flex;\n    flex-direction: column;\n    margin-top: 70px;\n  }\n"]);return e8=function(){return n},n}function e6(){let n=(0,o._)(["\n  grid-column: 1 / 6;\n\n  @media (max-width: ","px) {\n    grid-column: 1 / 2;\n  }\n"]);return e6=function(){return n},n}function e9(){let n=(0,o._)(["\n  grid-column: 8 / 23;\n\n  @media (max-width: ","px) {\n    grid-column: 1 / 2;\n  }\n"]);return e9=function(){return n},n}function e3(){let n=(0,o._)(["\n  display: none;\n\n  @media (min-width: ","px) {\n    display: block;\n  }\n"]);return e3=function(){return n},n}function e7(){let n=(0,o._)(["\n  display: block;\n  margin-bottom: 70px;\n\n  @media (min-width: ","px) {\n    display: none;\n  }\n"]);return e7=function(){return n},n}var e5=n=>{let{children:e,...t}=n,[i,o]=(0,p.KO)(E.w),[s,a]=(0,p.KO)(C.L),{isLoading:l,refetch:c}=(0,h.Z)({walletAddress:s,setUserInfo:o}),{data:u}=e1({enabled:!0}),x=(0,p.b9)(P);(0,d.useEffect)(()=>{u&&x(u)},[u,x]),(0,d.useEffect)(()=>{let n=sessionStorage.getItem("walletAddress");n&&null==i&&(c(),a(n))},[o,s,i,c,a]);let f=(0,e2.du)(null==i?void 0:i.operators);return(0,r.jsx)(tn,{...t,children:(0,r.jsxs)(te,{children:[(0,r.jsxs)(tt,{children:[(0,r.jsx)(to,{children:(0,r.jsx)(eq,{progress:0,claimPosition:80})}),(0,r.jsx)(ed,{})]}),(0,r.jsxs)(tr,{children:[(0,r.jsx)(ti,{children:(0,r.jsx)(eq,{progress:0,claimPosition:80})}),(0,r.jsx)(nZ,{data:f,isLoading:l})]})]})})};let tn=a.Z.div(e4()),te=a.Z.div(e8(),s.AV.sm),tt=a.Z.section(e6(),s.AV.sm),tr=a.Z.section(e9(),s.AV.sm),ti=a.Z.div(e3(),s.AV.sm),to=a.Z.div(e7(),s.AV.sm);var ts=t(8380),ta=t(5389),tl=t(4911),tc=t(786),td=n=>(0,r.jsxs)(tc.A,{children:[(0,r.jsxs)(tc.W,{children:[(0,r.jsx)(tl.h,{}),(0,r.jsx)("main",{children:n.children}),(0,r.jsx)(ta.$,{})]}),(0,r.jsx)(ts.x,{})]});function tu(n){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.H,{pagePath:"/dashboard"}),(0,r.jsx)(e5,{})]})}tu.getLayout=function(n){return(0,r.jsx)(td,{children:n})}},8539:function(n,e,t){"use strict";function r(n,e){let t=(null==e?void 0:e.length)>0;return null==n?void 0:n.flatMap(n=>{let r=n.name.slice(0,-1);return!t||e.includes(r)?n.operators.map(n=>({id:n.id.toString(),image:n.image_200_jpeg_url,image_400:n.image_400_jpeg_url,image_2048:n.image_2048_jpeg_url,gif:n.image_200_url,gif_400:n.image_400_url,gif_2048:n.image_1024_url,pixelated:n.image_pixalated_url,name:n.archetype__name,comp:n.comp,background:n.background,skin:n.skin,helmet:n.helmet,jacket:n.jacket,archetype:r,isStaked:!1,isPinned:!1})):[]})}function i(n){return n?null==n?void 0:n.map(n=>({id:n.id,arcgetypeId:n.archetype_id,image:n.image_200_jpeg_url,gif:n.image_200_url,name:n.name,stakingXPPerBlock:n.staking_xp_per_block,comp:n.comp,background:n.background,skin:n.skin,helmet:n.helmet,jacket:n.jacket,archetype:n.archetype__name,isStaked:n.is_currently_staked,isPinned:n.is_user_pinned,pixelated:n.image_pixalated_url})):[]}function o(n,e){return n.find(n=>String(n.id)===String(e))}function s(n){for(let e=(null==n?void 0:n.length)-1;e>0;e--){let t=Math.floor(Math.random()*(e+1));[n[e],n[t]]=[n[t],n[e]]}return n}t.d(e,{P_:function(){return s},du:function(){return i},xu:function(){return o},yr:function(){return r}})}},function(n){n.O(0,[888,774,179],function(){return n(n.s=528)}),_N_E=n.O()}]);