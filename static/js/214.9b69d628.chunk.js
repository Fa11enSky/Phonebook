"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[214],{6355:(e,t,n)=>{n.d(t,{BKo:()=>o});var r=n(9983);function o(e){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M313.6 304c-28.7 0-42.5 16-89.6 16-47.1 0-60.8-16-89.6-16C60.2 304 0 364.2 0 438.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-25.6c0-74.2-60.2-134.4-134.4-134.4zM400 464H48v-25.6c0-47.6 38.8-86.4 86.4-86.4 14.6 0 38.3 16 89.6 16 51.7 0 74.9-16 89.6-16 47.6 0 86.4 38.8 86.4 86.4V464zM224 288c79.5 0 144-64.5 144-144S303.5 0 224 0 80 64.5 80 144s64.5 144 144 144zm0-240c52.9 0 96 43.1 96 96s-43.1 96-96 96-96-43.1-96-96 43.1-96 96-96z"}}]})(e)}},4373:(e,t,n)=>{n.d(t,{CmG:()=>o});var r=n(9983);function o(e){return(0,r.w_)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M312 372c-7.7 0-14 6.3-14 14 0 9.9-8.1 18-18 18H94c-9.9 0-18-8.1-18-18V126c0-9.9 8.1-18 18-18h186c9.9 0 18 8.1 18 18 0 7.7 6.3 14 14 14s14-6.3 14-14c0-25.4-20.6-46-46-46H94c-25.4 0-46 20.6-46 46v260c0 25.4 20.6 46 46 46h186c25.4 0 46-20.6 46-46 0-7.7-6.3-14-14-14z"}},{tag:"path",attr:{d:"M372.9 158.1c-2.6-2.6-6.1-4.1-9.9-4.1-3.7 0-7.3 1.4-9.9 4.1-5.5 5.5-5.5 14.3 0 19.8l65.2 64.2H162c-7.7 0-14 6.3-14 14s6.3 14 14 14h256.6L355 334.2c-5.4 5.4-5.4 14.3 0 19.8l.1.1c2.7 2.5 6.2 3.9 9.8 3.9 3.8 0 7.3-1.4 9.9-4.1l82.6-82.4c4.3-4.3 6.5-9.3 6.5-14.7 0-5.3-2.3-10.3-6.5-14.5l-84.5-84.2z"}}]})(e)}},9983:(e,t,n)=>{n.d(t,{w_:()=>u});var r=n(2791),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=r.createContext&&r.createContext(o),s=function(){return s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},s.apply(this,arguments)},i=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function l(e){return e&&e.map((function(e,t){return r.createElement(e.tag,s({key:t},e.attr),l(e.child))}))}function u(e){return function(t){return r.createElement(c,s({attr:s({},e.attr)},t),l(e.child))}}function c(e){var t=function(t){var n,o=e.attr,a=e.size,l=e.title,u=i(e,["attr","size","title"]),c=a||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",s({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,u,{className:n,style:s(s({color:e.color||t.color},t.style),e.style),height:c,width:c,xmlns:"http://www.w3.org/2000/svg"}),l&&r.createElement("title",null,l),e.children)};return void 0!==a?r.createElement(a.Consumer,null,(function(e){return t(e)})):t(o)}},3771:(e,t,n)=>{n.d(t,{h:()=>d});var r=n(2261),o=n(5597),a=n(1665),s=n(6992),i=n(2791),l=n(3329),u={horizontal:{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}},vertical:{"> *:first-of-type:not(:last-of-type)":{borderBottomRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderTopRadius:0}}},c={horizontal:e=>({"& > *:not(style) ~ *:not(style)":{marginStart:e}}),vertical:e=>({"& > *:not(style) ~ *:not(style)":{marginTop:e}})},d=(0,o.G)((function(e,t){const{size:n,colorScheme:o,variant:d,className:f,spacing:p="0.5rem",isAttached:m,isDisabled:v,orientation:h="horizontal",...b}=e,g=(0,s.cx)("chakra-button__group",f),y=(0,i.useMemo)((()=>({size:n,colorScheme:o,variant:d,isDisabled:v})),[n,o,d,v]);let w={display:"inline-flex",...m?u[h]:c[h](p)};const x="vertical"===h;return(0,l.jsx)(r.D,{value:y,children:(0,l.jsx)(a.m.div,{ref:t,role:"group",__css:w,className:g,"data-attached":m?"":void 0,"data-orientation":h,flexDir:x?"column":void 0,...b})})}));d.displayName="ButtonGroup"},8555:(e,t,n)=>{n.d(t,{d:()=>a});var r=n(4134),o=n(3329),a=(0,r.I)({displayName:"EditIcon",path:(0,o.jsxs)("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"2",children:[(0,o.jsx)("path",{d:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"}),(0,o.jsx)("path",{d:"M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"})]})})},696:(e,t,n)=>{n.d(t,{v:()=>r});var r=(0,n(4134).I)({displayName:"ChevronDownIcon",d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"})},6085:(e,t,n)=>{n.d(t,{m:()=>r});var r=(0,n(4134).I)({d:"M19.5,9.5h-.75V6.75a6.75,6.75,0,0,0-13.5,0V9.5H4.5a2,2,0,0,0-2,2V22a2,2,0,0,0,2,2h15a2,2,0,0,0,2-2V11.5A2,2,0,0,0,19.5,9.5Zm-9.5,6a2,2,0,1,1,3,1.723V19.5a1,1,0,0,1-2,0V17.223A1.994,1.994,0,0,1,10,15.5ZM7.75,6.75a4.25,4.25,0,0,1,8.5,0V9a.5.5,0,0,1-.5.5H8.25a.5.5,0,0,1-.5-.5Z",displayName:"LockIcon"})},884:(e,t,n)=>{n.d(t,{x:()=>c});var r=n(5597),o=n(5986),a=n(2996),s=n(1665),i=n(6992),l=n(2796),u=n(3329),c=(0,r.G)((function(e,t){const n=(0,o.mq)("Text",e),{className:r,align:c,decoration:d,casing:f,...p}=(0,a.Lr)(e),m=(0,l.o)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return(0,u.jsx)(s.m.p,{ref:t,className:(0,i.cx)("chakra-text",e.className),...m,...p,__css:n})}));c.displayName="Text"},1118:(e,t,n)=>{n.d(t,{L:()=>r});var r=(0,n(1665).m)("div",{baseStyle:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}});r.displayName="Spacer"},6582:(e,t,n)=>{n.d(t,{k:()=>s});var r=n(5597),o=n(1665),a=n(3329),s=(0,r.G)((function(e,t){const{direction:n,align:r,justify:s,wrap:i,basis:l,grow:u,shrink:c,...d}=e,f={display:"flex",flexDirection:n,alignItems:r,justifyContent:s,flexWrap:i,flexBasis:l,flexGrow:u,flexShrink:c};return(0,a.jsx)(o.m.div,{ref:t,__css:f,...d})}));s.displayName="Flex"},824:(e,t,n)=>{n.d(t,{xu:()=>s});var r=n(1665),o=n(5597),a=n(3329),s=(0,r.m)("div");s.displayName="Box";var i=(0,o.G)((function(e,t){const{size:n,centerContent:r=!0,...o}=e,i=r?{display:"flex",alignItems:"center",justifyContent:"center"}:{};return(0,a.jsx)(s,{ref:t,boxSize:n,__css:{...i,flexShrink:0,flexGrow:0},...o})}));i.displayName="Square",(0,o.G)((function(e,t){const{size:n,...r}=e;return(0,a.jsx)(i,{size:n,ref:t,borderRadius:"9999px",...r})})).displayName="Circle"},5202:(e,t,n)=>{n.d(t,{s:()=>p});var r=n(3426),o=n(5597),a=n(1665),s=n(3329),i=(0,o.G)(((e,t)=>{const n=(0,r.x)();return(0,s.jsx)(a.m.span,{ref:t,...e,__css:n.command,className:"chakra-menu__command"})}));i.displayName="MenuCommand";var l=n(2791),u=(0,o.G)(((e,t)=>{const{type:n,...o}=e,i=(0,r.x)(),u=o.as||n?null!=n?n:void 0:"button",c=(0,l.useMemo)((()=>({textDecoration:"none",color:"inherit",userSelect:"none",display:"flex",width:"100%",alignItems:"center",textAlign:"start",flex:"0 0 auto",outline:0,...i.item})),[i.item]);return(0,s.jsx)(a.m.button,{ref:t,type:u,...o,__css:c})})),c=n(6992),d=e=>{const{className:t,children:n,...o}=e,i=(0,r.x)(),u=l.Children.only(n),d=(0,l.isValidElement)(u)?(0,l.cloneElement)(u,{focusable:"false","aria-hidden":!0,className:(0,c.cx)("chakra-menu__icon",u.props.className)}):null,f=(0,c.cx)("chakra-menu__icon-wrapper",t);return(0,s.jsx)(a.m.span,{className:f,...o,__css:i.icon,children:d})};d.displayName="MenuIcon";var f=n(8025),p=(0,o.G)(((e,t)=>{const{icon:n,iconSpacing:r="0.75rem",command:o,commandSpacing:a="0.75rem",children:l,...p}=e,m=(0,f.iX)(p,t),v=n||o?(0,s.jsx)("span",{style:{pointerEvents:"none",flex:1},children:l}):l;return(0,s.jsxs)(u,{...m,className:(0,c.cx)("chakra-menu__menuitem",m.className),children:[n&&(0,s.jsx)(d,{fontSize:"0.8em",marginEnd:r,children:n}),v,o&&(0,s.jsx)(i,{marginStart:a,children:o})]})}));p.displayName="MenuItem"},7869:(e,t,n)=>{n.d(t,{q:()=>f});var r=n(3426),o=n(8025),a=n(6992),s=n(1665),i=n(5597),l=n(3261),u=n(3329),c={enter:{visibility:"visible",opacity:1,scale:1,transition:{duration:.2,ease:[.4,0,.2,1]}},exit:{transitionEnd:{visibility:"hidden"},opacity:0,scale:.8,transition:{duration:.1,easings:"easeOut"}}},d=(0,s.m)(l.E.div),f=(0,i.G)((function(e,t){var n,i;const{rootProps:l,motionProps:f,...p}=e,{isOpen:m,onTransitionEnd:v,unstable__animationState:h}=(0,o.Xh)(),b=(0,o._l)(p,t),g=(0,o.Qh)(l),y=(0,r.x)();return(0,u.jsx)(s.m.div,{...g,__css:{zIndex:null!=(i=e.zIndex)?i:null==(n=y.list)?void 0:n.zIndex},children:(0,u.jsx)(d,{variants:c,initial:!1,animate:m?"enter":"exit",__css:{outline:0,...y.list},...f,className:(0,a.cx)("chakra-menu__menu-list",b.className),...b,onUpdate:v,onAnimationComplete:(0,a.PP)(h.onComplete,b.onAnimationComplete)})})}));f.displayName="MenuList"},8025:(e,t,n)=>{n.d(t,{wN:()=>oe,Kb:()=>le,H9:()=>pe,zZ:()=>me,Xh:()=>ue,iX:()=>ge,_l:()=>he,Qh:()=>be});var r=n(2791);function o(e){const{key:t}=e;return 1===t.length||t.length>1&&/[^a-zA-Z0-9]/.test(t)}function a(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{timeout:t=300,preventDefault:n=(()=>!0)}=e,[a,s]=(0,r.useState)([]),i=(0,r.useRef)(),l=()=>{i.current&&(clearTimeout(i.current),i.current=null)},u=()=>{l(),i.current=setTimeout((()=>{s([]),i.current=null}),t)};function c(e){return t=>{if("Backspace"===t.key){const e=[...a];return e.pop(),void s(e)}if(o(t)){const r=a.concat(t.key);n(t)&&(t.preventDefault(),t.stopPropagation()),s(r),e(r.join("")),u()}}}return(0,r.useEffect)((()=>l),[]),c}function s(e,t,n,r){if(null==t)return r;if(!r){return e.find((e=>n(e).toLowerCase().startsWith(t.toLowerCase())))}const o=e.filter((e=>n(e).toLowerCase().startsWith(t.toLowerCase())));if(o.length>0){let t;if(o.includes(r)){return t=o.indexOf(r)+1,t===o.length&&(t=0),o[t]}return t=e.indexOf(o[0]),e[t]}return r}function i(){const e=(0,r.useRef)(new Map),t=e.current,n=(0,r.useCallback)(((t,n,r,o)=>{e.current.set(r,{type:n,el:t,options:o}),t.addEventListener(n,r,o)}),[]),o=(0,r.useCallback)(((t,n,r,o)=>{t.removeEventListener(n,r,o),e.current.delete(r)}),[]);return(0,r.useEffect)((()=>()=>{t.forEach(((e,t)=>{o(e.el,e.type,t,e.options)}))}),[o,t]),{add:n,remove:o}}var l=n(6992),u=n(4591);function c(e){const t=e.target,{tagName:n,isContentEditable:r}=t;return"INPUT"!==n&&"TEXTAREA"!==n&&!0!==r}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{ref:t,isDisabled:n,isFocusable:o,clickOnEnter:a=!0,clickOnSpace:s=!0,onMouseDown:d,onMouseUp:f,onClick:p,onKeyDown:m,onKeyUp:v,tabIndex:h,onMouseOver:b,onMouseLeave:g,...y}=e,[w,x]=(0,r.useState)(!0),[C,O]=(0,r.useState)(!1),E=i(),k=e=>{e&&"BUTTON"!==e.tagName&&x(!1)},N=w?h:h||0,I=n&&!o,S=(0,r.useCallback)((e=>{if(n)return e.stopPropagation(),void e.preventDefault();e.currentTarget.focus(),null==p||p(e)}),[n,p]),M=(0,r.useCallback)((e=>{C&&c(e)&&(e.preventDefault(),e.stopPropagation(),O(!1),E.remove(document,"keyup",M,!1))}),[C,E]),_=(0,r.useCallback)((e=>{if(null==m||m(e),n||e.defaultPrevented||e.metaKey)return;if(!c(e.nativeEvent)||w)return;const t=a&&"Enter"===e.key;if(s&&" "===e.key&&(e.preventDefault(),O(!0)),t){e.preventDefault();e.currentTarget.click()}E.add(document,"keyup",M,!1)}),[n,w,m,a,s,E,M]),D=(0,r.useCallback)((e=>{if(null==v||v(e),n||e.defaultPrevented||e.metaKey)return;if(!c(e.nativeEvent)||w)return;if(s&&" "===e.key){e.preventDefault(),O(!1);e.currentTarget.click()}}),[s,w,n,v]),T=(0,r.useCallback)((e=>{0===e.button&&(O(!1),E.remove(document,"mouseup",T,!1))}),[E]),P=(0,r.useCallback)((e=>{if(0!==e.button)return;if(n)return e.stopPropagation(),void e.preventDefault();w||O(!0);e.currentTarget.focus({preventScroll:!0}),E.add(document,"mouseup",T,!1),null==d||d(e)}),[n,w,d,E,T]),z=(0,r.useCallback)((e=>{0===e.button&&(w||O(!1),null==f||f(e))}),[f,w]),R=(0,r.useCallback)((e=>{n?e.preventDefault():null==b||b(e)}),[n,b]),L=(0,r.useCallback)((e=>{C&&(e.preventDefault(),O(!1)),null==g||g(e)}),[C,g]),j=(0,u.lq)(t,k);return w?{...y,ref:j,type:"button","aria-disabled":I?void 0:n,disabled:I,onClick:S,onMouseDown:d,onMouseUp:f,onKeyUp:v,onKeyDown:m,onMouseOver:b,onMouseLeave:g}:{...y,ref:j,role:"button","data-active":(0,l.PB)(C),"aria-disabled":n?"true":void 0,tabIndex:I?void 0:N,onClick:S,onMouseDown:P,onMouseUp:z,onKeyUp:D,onKeyDown:_,onMouseOver:R,onMouseLeave:L}}var f=Object.defineProperty,p=(e,t,n)=>(((e,t,n)=>{t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n})(e,"symbol"!==typeof t?t+"":t,n),n);function m(e){return e.sort(((e,t)=>{const n=e.compareDocumentPosition(t);if(n&Node.DOCUMENT_POSITION_FOLLOWING||n&Node.DOCUMENT_POSITION_CONTAINED_BY)return-1;if(n&Node.DOCUMENT_POSITION_PRECEDING||n&Node.DOCUMENT_POSITION_CONTAINS)return 1;if(n&Node.DOCUMENT_POSITION_DISCONNECTED||n&Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)throw Error("Cannot sort the given nodes.");return 0}))}function v(e,t,n){let r=e+1;return n&&r>=t&&(r=0),r}function h(e,t,n){let r=e-1;return n&&r<0&&(r=t),r}var b="undefined"!==typeof window?r.useLayoutEffect:r.useEffect,g=n(9886);function y(){const e=(0,r.useRef)(new class{constructor(){var e=this;p(this,"descendants",new Map),p(this,"register",(e=>{var t;if(null!=e)return"object"==typeof(t=e)&&"nodeType"in t&&t.nodeType===Node.ELEMENT_NODE?this.registerNode(e):t=>{this.registerNode(t,e)}})),p(this,"unregister",(e=>{this.descendants.delete(e);const t=m(Array.from(this.descendants.keys()));this.assignIndex(t)})),p(this,"destroy",(()=>{this.descendants.clear()})),p(this,"assignIndex",(e=>{this.descendants.forEach((t=>{const n=e.indexOf(t.node);t.index=n,t.node.dataset.index=t.index.toString()}))})),p(this,"count",(()=>this.descendants.size)),p(this,"enabledCount",(()=>this.enabledValues().length)),p(this,"values",(()=>Array.from(this.descendants.values()).sort(((e,t)=>e.index-t.index)))),p(this,"enabledValues",(()=>this.values().filter((e=>!e.disabled)))),p(this,"item",(e=>{if(0!==this.count())return this.values()[e]})),p(this,"enabledItem",(e=>{if(0!==this.enabledCount())return this.enabledValues()[e]})),p(this,"first",(()=>this.item(0))),p(this,"firstEnabled",(()=>this.enabledItem(0))),p(this,"last",(()=>this.item(this.descendants.size-1))),p(this,"lastEnabled",(()=>{const e=this.enabledValues().length-1;return this.enabledItem(e)})),p(this,"indexOf",(e=>{var t,n;return e&&null!=(n=null==(t=this.descendants.get(e))?void 0:t.index)?n:-1})),p(this,"enabledIndexOf",(e=>null==e?-1:this.enabledValues().findIndex((t=>t.node.isSameNode(e))))),p(this,"next",(function(t){let n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const r=v(t,e.count(),n);return e.item(r)})),p(this,"nextEnabled",(function(t){let n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const r=e.item(t);if(!r)return;const o=v(e.enabledIndexOf(r.node),e.enabledCount(),n);return e.enabledItem(o)})),p(this,"prev",(function(t){let n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const r=h(t,e.count()-1,n);return e.item(r)})),p(this,"prevEnabled",(function(t){let n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const r=e.item(t);if(!r)return;const o=h(e.enabledIndexOf(r.node),e.enabledCount()-1,n);return e.enabledItem(o)})),p(this,"registerNode",((e,t)=>{if(!e||this.descendants.has(e))return;const n=m(Array.from(this.descendants.keys()).concat(e));(null==t?void 0:t.disabled)&&(t.disabled=!!t.disabled);const r={node:e,index:-1,...t};this.descendants.set(e,r),this.assignIndex(n)}))}});return b((()=>()=>e.current.destroy())),e.current}var[w,x]=(0,g.k)({name:"DescendantsProvider",errorMessage:"useDescendantsContext must be used within DescendantsProvider"});function C(e){return null!=e&&"object"==typeof e&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE}function O(e){var t;if(!C(e))return!1;return e instanceof(null!=(t=e.ownerDocument.defaultView)?t:window).HTMLElement}function E(e){return C(e)?e.ownerDocument:document}var k=e=>e.hasAttribute("tabindex");function N(e){return!(!e.parentElement||!N(e.parentElement))||e.hidden}function I(e){if(!O(e)||N(e)||function(e){return!0===Boolean(e.getAttribute("disabled"))||!0===Boolean(e.getAttribute("aria-disabled"))}(e))return!1;const{localName:t}=e;if(["input","select","textarea","button"].indexOf(t)>=0)return!0;const n={a:()=>e.hasAttribute("href"),audio:()=>e.hasAttribute("controls"),video:()=>e.hasAttribute("controls")};return t in n?n[t]():!!function(e){const t=e.getAttribute("contenteditable");return"false"!==t&&null!=t}(e)||k(e)}function S(e){return!!e&&(O(e)&&I(e)&&!(e=>k(e)&&-1===e.tabIndex)(e))}var M=n(5280);function _(e){const t=e.current;if(!t)return!1;const n=E(t).activeElement;return!!n&&(!t.contains(n)&&!!S(n))}function D(e,t){const{shouldFocus:n,visible:r,focusRef:o}=t,a=n&&!r;(0,M.r)((()=>{if(!a)return;if(_(e))return;const t=(null==o?void 0:o.current)||e.current;let n;return t?(n=requestAnimationFrame((()=>{t.focus({preventScroll:!0})})),()=>{cancelAnimationFrame(n)}):void 0}),[a,e,o])}var T=(e,t)=>({var:e,varRef:t?"var(".concat(e,", ").concat(t,")"):"var(".concat(e,")")}),P={arrowShadowColor:T("--popper-arrow-shadow-color"),arrowSize:T("--popper-arrow-size","8px"),arrowSizeHalf:T("--popper-arrow-size-half"),arrowBg:T("--popper-arrow-bg"),transformOrigin:T("--popper-transform-origin"),arrowOffset:T("--popper-arrow-offset")};var z={top:"bottom center","top-start":"bottom left","top-end":"bottom right",bottom:"top center","bottom-start":"top left","bottom-end":"top right",left:"right center","left-start":"right top","left-end":"right bottom",right:"left center","right-start":"left top","right-end":"left bottom"},R={scroll:!0,resize:!0};function L(e){let t;return t="object"===typeof e?{enabled:!0,options:{...R,...e}}:{enabled:e,options:R},t}var j={name:"matchWidth",enabled:!0,phase:"beforeWrite",requires:["computeStyles"],fn:e=>{let{state:t}=e;t.styles.popper.width="".concat(t.rects.reference.width,"px")},effect:e=>{let{state:t}=e;return()=>{const e=t.elements.reference;t.elements.popper.style.width="".concat(e.offsetWidth,"px")}}},A={name:"transformOrigin",enabled:!0,phase:"write",fn:e=>{let{state:t}=e;F(t)},effect:e=>{let{state:t}=e;return()=>{F(t)}}},F=e=>{var t;e.elements.popper.style.setProperty(P.transformOrigin.var,(t=e.placement,z[t]))},U={name:"positionArrow",enabled:!0,phase:"afterWrite",fn:e=>{let{state:t}=e;B(t)}},B=e=>{var t;if(!e.placement)return;const n=W(e.placement);if((null==(t=e.elements)?void 0:t.arrow)&&n){Object.assign(e.elements.arrow.style,{[n.property]:n.value,width:P.arrowSize.varRef,height:P.arrowSize.varRef,zIndex:-1});const t={[P.arrowSizeHalf.var]:"calc(".concat(P.arrowSize.varRef," / 2 - 1px)"),[P.arrowOffset.var]:"calc(".concat(P.arrowSizeHalf.varRef," * -1)")};for(const n in t)e.elements.arrow.style.setProperty(n,t[n])}},W=e=>e.startsWith("top")?{property:"bottom",value:P.arrowOffset.varRef}:e.startsWith("bottom")?{property:"top",value:P.arrowOffset.varRef}:e.startsWith("left")?{property:"right",value:P.arrowOffset.varRef}:e.startsWith("right")?{property:"left",value:P.arrowOffset.varRef}:void 0,V={name:"innerArrow",enabled:!0,phase:"main",requires:["arrow"],fn:e=>{let{state:t}=e;G(t)},effect:e=>{let{state:t}=e;return()=>{G(t)}}},G=e=>{if(!e.elements.arrow)return;const t=e.elements.arrow.querySelector("[data-popper-arrow-inner]");if(!t)return;const n=(r=e.placement).includes("top")?"1px 1px 0px 0 var(--popper-arrow-shadow-color)":r.includes("bottom")?"-1px -1px 0px 0 var(--popper-arrow-shadow-color)":r.includes("right")?"-1px 1px 0px 0 var(--popper-arrow-shadow-color)":r.includes("left")?"1px -1px 0px 0 var(--popper-arrow-shadow-color)":void 0;var r;n&&t.style.setProperty("--popper-arrow-default-shadow",n),Object.assign(t.style,{transform:"rotate(45deg)",background:P.arrowBg.varRef,top:0,left:0,width:"100%",height:"100%",position:"absolute",zIndex:"inherit",boxShadow:"var(--popper-arrow-shadow, var(--popper-arrow-default-shadow))"})},q={"start-start":{ltr:"left-start",rtl:"right-start"},"start-end":{ltr:"left-end",rtl:"right-end"},"end-start":{ltr:"right-start",rtl:"left-start"},"end-end":{ltr:"right-end",rtl:"left-end"},start:{ltr:"left",rtl:"right"},end:{ltr:"right",rtl:"left"}},K={"auto-start":"auto-end","auto-end":"auto-start","top-start":"top-end","top-end":"top-start","bottom-start":"bottom-end","bottom-end":"bottom-start"};function H(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ltr";var n,r;const o=(null==(n=q[e])?void 0:n[t])||e;return"ltr"===t?o:null!=(r=K[e])?r:o}var Z=n(7170);function X(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{enabled:t=!0,modifiers:n,placement:o="bottom",strategy:a="absolute",arrowPadding:s=8,eventListeners:i=!0,offset:l,gutter:c=8,flip:d=!0,boundary:f="clippingParents",preventOverflow:p=!0,matchWidth:m,direction:v="ltr"}=e,h=(0,r.useRef)(null),b=(0,r.useRef)(null),g=(0,r.useRef)(null),y=H(o,v),w=(0,r.useRef)((()=>{})),x=(0,r.useCallback)((()=>{var e;t&&h.current&&b.current&&(null==(e=w.current)||e.call(w),g.current=(0,Z.fi)(h.current,b.current,{placement:y,modifiers:[V,U,A,{...j,enabled:!!m},{name:"eventListeners",...L(i)},{name:"arrow",options:{padding:s}},{name:"offset",options:{offset:null!=l?l:[0,c]}},{name:"flip",enabled:!!d,options:{padding:8}},{name:"preventOverflow",enabled:!!p,options:{boundary:f}},...null!=n?n:[]],strategy:a}),g.current.forceUpdate(),w.current=g.current.destroy)}),[y,t,n,m,i,s,l,c,d,p,f,a]);(0,r.useEffect)((()=>()=>{var e;h.current||b.current||(null==(e=g.current)||e.destroy(),g.current=null)}),[]);const C=(0,r.useCallback)((e=>{h.current=e,x()}),[x]),O=(0,r.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...e,ref:(0,u.lq)(C,t)}}),[C]),E=(0,r.useCallback)((e=>{b.current=e,x()}),[x]),k=(0,r.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...e,ref:(0,u.lq)(E,t),style:{...e.style,position:a,minWidth:m?void 0:"max-content",inset:"0 auto auto 0"}}}),[a,E,m]),N=(0,r.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;const{size:n,shadowColor:r,bg:o,style:a,...s}=e;return{...s,ref:t,"data-popper-arrow":"",style:Q(e)}}),[]),I=(0,r.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...e,ref:t,"data-popper-arrow-inner":""}}),[]);return{update(){var e;null==(e=g.current)||e.update()},forceUpdate(){var e;null==(e=g.current)||e.forceUpdate()},transformOrigin:P.transformOrigin.varRef,referenceRef:C,popperRef:E,getPopperProps:k,getArrowProps:N,getArrowInnerProps:I,getReferenceProps:O}}function Q(e){const{size:t,shadowColor:n,bg:r,style:o}=e,a={...o,position:"absolute"};return t&&(a["--popper-arrow-size"]=t),n&&(a["--popper-arrow-shadow-color"]=n),r&&(a["--popper-arrow-bg"]=r),a}var Y=n(6367);function J(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{onClose:t,onOpen:n,isOpen:o,id:a}=e,s=(0,Y.W)(n),i=(0,Y.W)(t),[l,u]=(0,r.useState)(e.defaultIsOpen||!1),c=void 0!==o?o:l,d=void 0!==o,f=(0,r.useId)(),p=null!=a?a:"disclosure-".concat(f),m=(0,r.useCallback)((()=>{d||u(!1),null==i||i()}),[d,i]),v=(0,r.useCallback)((()=>{d||u(!0),null==s||s()}),[d,s]),h=(0,r.useCallback)((()=>{c?m():v()}),[c,v,m]);function b(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{...e,"aria-expanded":c,"aria-controls":p,onClick(t){var n;null==(n=e.onClick)||n.call(e,t),h()}}}function g(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{...e,hidden:!c,id:p}}return{isOpen:c,onOpen:v,onClose:m,onToggle:h,isControlled:d,getButtonProps:b,getDisclosureProps:g}}function $(e){const{ref:t,handler:n,enabled:o=!0}=e,a=(0,Y.W)(n),s=(0,r.useRef)({isPointerDown:!1,ignoreEmulatedMouseEvents:!1}).current;(0,r.useEffect)((()=>{if(!o)return;const e=e=>{ee(e,t)&&(s.isPointerDown=!0)},r=e=>{s.ignoreEmulatedMouseEvents?s.ignoreEmulatedMouseEvents=!1:s.isPointerDown&&n&&ee(e,t)&&(s.isPointerDown=!1,a(e))},i=e=>{s.ignoreEmulatedMouseEvents=!0,n&&s.isPointerDown&&ee(e,t)&&(s.isPointerDown=!1,a(e))},l=te(t.current);return l.addEventListener("mousedown",e,!0),l.addEventListener("mouseup",r,!0),l.addEventListener("touchstart",e,!0),l.addEventListener("touchend",i,!0),()=>{l.removeEventListener("mousedown",e,!0),l.removeEventListener("mouseup",r,!0),l.removeEventListener("touchstart",e,!0),l.removeEventListener("touchend",i,!0)}}),[n,t,a,s,o])}function ee(e,t){var n;const r=e.target;if(r){if(!te(r).contains(r))return!1}return!(null==(n=t.current)?void 0:n.contains(r))}function te(e){var t;return null!=(t=null==e?void 0:e.ownerDocument)?t:document}function ne(e){const{isOpen:t,ref:n}=e,[o,a]=(0,r.useState)(t),[s,i]=(0,r.useState)(!1);(0,r.useEffect)((()=>{s||(a(t),i(!0))}),[t,s,o]),function(e,t,n,o){const a=(0,Y.W)(n);(0,r.useEffect)((()=>{const r="function"===typeof e?e():null!=e?e:document;if(n&&r)return r.addEventListener(t,a,o),()=>{r.removeEventListener(t,a,o)}}),[t,e,o,a,n])}((()=>n.current),"animationend",(()=>{a(t)}));return{present:!(!t&&!o),onComplete(){var e;const t=function(e){var t,n;return null!=(n=null==(t=E(e))?void 0:t.defaultView)?n:window}(n.current),r=new t.CustomEvent("animationend",{bubbles:!0});null==(e=n.current)||e.dispatchEvent(r)}}}function re(e){const{wasSelected:t,enabled:n,isSelected:r,mode:o="unmount"}=e;return!n||(!!r||!("keepMounted"!==o||!t))}var[oe,ae,se,ie]=[w,()=>x(),()=>y(),e=>function(e){const t=x(),[n,o]=(0,r.useState)(-1),a=(0,r.useRef)(null);b((()=>()=>{a.current&&t.unregister(a.current)}),[]),b((()=>{if(!a.current)return;const e=Number(a.current.dataset.index);n==e||Number.isNaN(e)||o(e)}));const s=e?t.register(e):t.register;return{descendants:t,index:n,enabledIndex:t.enabledIndexOf(a.current),register:(0,u.lq)(s,a)}}(e)],[le,ue]=(0,g.k)({strict:!1,name:"MenuContext"});function ce(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];const a=(0,r.useId)(),s=e||a;return(0,r.useMemo)((()=>n.map((e=>"".concat(e,"-").concat(s)))),[s,n])}function de(e){var t;return null!=(t=null==e?void 0:e.ownerDocument)?t:document}function fe(e){return de(e).activeElement===e}function pe(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{id:t,closeOnSelect:n=!0,closeOnBlur:o=!0,initialFocusRef:a,autoSelect:s=!0,isLazy:i,isOpen:l,defaultIsOpen:u,onClose:c,onOpen:d,placement:f="bottom-start",lazyBehavior:p="unmount",direction:m,computePositionOnMount:v=!1,...h}=e,b=(0,r.useRef)(null),g=(0,r.useRef)(null),y=se(),w=(0,r.useCallback)((()=>{requestAnimationFrame((()=>{var e;null==(e=b.current)||e.focus({preventScroll:!1})}))}),[]),x=(0,r.useCallback)((()=>{const e=setTimeout((()=>{var e;if(a)null==(e=a.current)||e.focus();else{const e=y.firstEnabled();e&&T(e.index)}}));j.current.add(e)}),[y,a]),C=(0,r.useCallback)((()=>{const e=setTimeout((()=>{const e=y.lastEnabled();e&&T(e.index)}));j.current.add(e)}),[y]),O=(0,r.useCallback)((()=>{null==d||d(),s?x():w()}),[s,x,w,d]),{isOpen:E,onOpen:k,onClose:N,onToggle:I}=J({isOpen:l,defaultIsOpen:u,onClose:c,onOpen:O});$({enabled:E&&o,ref:b,handler:e=>{var t;(null==(t=g.current)?void 0:t.contains(e.target))||N()}});const S=X({...h,enabled:E||v,placement:f,direction:m}),[_,T]=(0,r.useState)(-1);(0,M.r)((()=>{E||T(-1)}),[E]),D(b,{focusRef:g,visible:E,shouldFocus:!0});const P=ne({isOpen:E,ref:b}),[z,R]=ce(t,"menu-button","menu-list"),L=(0,r.useCallback)((()=>{k(),w()}),[k,w]),j=(0,r.useRef)(new Set([]));(0,r.useEffect)((()=>{const e=j.current;return()=>{e.forEach((e=>clearTimeout(e))),e.clear()}}),[]);const A=(0,r.useCallback)((()=>{k(),x()}),[x,k]),F=(0,r.useCallback)((()=>{k(),C()}),[k,C]),U=(0,r.useCallback)((()=>{var e,t;const n=de(b.current),r=null==(e=b.current)?void 0:e.contains(n.activeElement);if(!(E&&!r))return;const o=null==(t=y.item(_))?void 0:t.node;null==o||o.focus({preventScroll:!0})}),[E,_,y]),B=(0,r.useRef)(null);return{openAndFocusMenu:L,openAndFocusFirstItem:A,openAndFocusLastItem:F,onTransitionEnd:U,unstable__animationState:P,descendants:y,popper:S,buttonId:z,menuId:R,forceUpdate:S.forceUpdate,orientation:"vertical",isOpen:E,onToggle:I,onOpen:k,onClose:N,menuRef:b,buttonRef:g,focusedIndex:_,closeOnSelect:n,closeOnBlur:o,autoSelect:s,setFocusedIndex:T,isLazy:i,lazyBehavior:p,initialFocusRef:a,rafId:B}}function me(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;const n=ue(),{onToggle:o,popper:a,openAndFocusFirstItem:s,openAndFocusLastItem:i}=n,c=(0,r.useCallback)((e=>{const t=e.key,n={Enter:s,ArrowDown:s,ArrowUp:i}[t];n&&(e.preventDefault(),e.stopPropagation(),n(e))}),[s,i]);return{...e,ref:(0,u.lq)(n.buttonRef,t,a.referenceRef),id:n.buttonId,"data-active":(0,l.PB)(n.isOpen),"aria-expanded":n.isOpen,"aria-haspopup":"menu","aria-controls":n.menuId,onClick:(0,l.v0)(e.onClick,o),onKeyDown:(0,l.v0)(e.onKeyDown,c)}}function ve(e){var t;return function(e){var t;if(!function(e){return null!=e&&"object"==typeof e&&"nodeType"in e&&e.nodeType===Node.ELEMENT_NODE}(e))return!1;const n=null!=(t=e.ownerDocument.defaultView)?t:window;return e instanceof n.HTMLElement}(e)&&!!(null==(t=null==e?void 0:e.getAttribute("role"))?void 0:t.startsWith("menuitem"))}function he(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;const n=ue();if(!n)throw new Error("useMenuContext: context is undefined. Seems you forgot to wrap component within <Menu>");const{focusedIndex:o,setFocusedIndex:i,menuRef:c,isOpen:d,onClose:f,menuId:p,isLazy:m,lazyBehavior:v,unstable__animationState:h}=n,b=ae(),g=a({preventDefault:e=>" "!==e.key&&ve(e.target)}),y=(0,r.useCallback)((e=>{if(!e.currentTarget.contains(e.target))return;const t=e.key,n={Tab:e=>e.preventDefault(),Escape:f,ArrowDown:()=>{const e=b.nextEnabled(o);e&&i(e.index)},ArrowUp:()=>{const e=b.prevEnabled(o);e&&i(e.index)}}[t];if(n)return e.preventDefault(),void n(e);const r=g((e=>{const t=s(b.values(),e,(e=>{var t,n;return null!=(n=null==(t=null==e?void 0:e.node)?void 0:t.textContent)?n:""}),b.item(o));if(t){const e=b.indexOf(t.node);i(e)}}));ve(e.target)&&r(e)}),[b,o,g,f,i]),w=(0,r.useRef)(!1);d&&(w.current=!0);const x=re({wasSelected:w.current,enabled:m,mode:v,isSelected:h.present});return{...e,ref:(0,u.lq)(c,t),children:x?e.children:null,tabIndex:-1,role:"menu",id:p,style:{...e.style,transformOrigin:"var(--popper-transform-origin)"},"aria-orientation":"vertical",onKeyDown:(0,l.v0)(e.onKeyDown,y)}}function be(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{popper:t,isOpen:n}=ue();return t.getPopperProps({...e,style:{visibility:n?"visible":"hidden",...e.style}})}function ge(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;const{onMouseEnter:n,onMouseMove:o,onMouseLeave:a,onClick:s,onFocus:i,isDisabled:l,isFocusable:c,closeOnSelect:f,type:p,...m}=e,v=ue(),{setFocusedIndex:h,focusedIndex:b,closeOnSelect:g,onClose:y,menuRef:w,isOpen:x,menuId:C,rafId:O}=v,E=(0,r.useRef)(null),k="".concat(C,"-menuitem-").concat((0,r.useId)()),{index:N,register:I}=ie({disabled:l&&!c}),S=(0,r.useCallback)((e=>{null==n||n(e),l||h(N)}),[h,N,l,n]),_=(0,r.useCallback)((e=>{null==o||o(e),E.current&&!fe(E.current)&&S(e)}),[S,o]),D=(0,r.useCallback)((e=>{null==a||a(e),l||h(-1)}),[h,l,a]),T=(0,r.useCallback)((e=>{null==s||s(e),ve(e.currentTarget)&&(null!=f?f:g)&&y()}),[y,s,g,f]),P=(0,r.useCallback)((e=>{null==i||i(e),h(N)}),[h,i,N]),z=N===b,R=l&&!c;(0,M.r)((()=>{if(x)return z&&!R&&E.current?(O.current&&cancelAnimationFrame(O.current),O.current=requestAnimationFrame((()=>{var e;null==(e=E.current)||e.focus({preventScroll:!0}),O.current=null}))):w.current&&!fe(w.current)&&w.current.focus({preventScroll:!0}),()=>{O.current&&cancelAnimationFrame(O.current)}}),[z,R,w,x]);const L=d({onClick:T,onFocus:P,onMouseEnter:S,onMouseMove:_,onMouseLeave:D,ref:(0,u.lq)(I,E,t),isDisabled:l,isFocusable:c});return{...m,...L,type:null!=p?p:L.type,id:k,role:"menuitem",tabIndex:z?0:-1}}},3426:(e,t,n)=>{n.d(t,{v:()=>p,x:()=>f});var r=n(8025),o=n(9886),a=n(5986),s=n(2996),i=n(2552),l=n(6992),u=n(2791),c=n(3329),[d,f]=(0,o.k)({name:"MenuStylesContext",errorMessage:"useMenuStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<Menu />\" "}),p=e=>{const{children:t}=e,n=(0,a.jC)("Menu",e),o=(0,s.Lr)(e),{direction:f}=(0,i.F)(),{descendants:p,...m}=(0,r.H9)({...o,direction:f}),v=(0,u.useMemo)((()=>m),[m]),{isOpen:h,onClose:b,forceUpdate:g}=v;return(0,c.jsx)(r.wN,{value:p,children:(0,c.jsx)(r.Kb,{value:v,children:(0,c.jsx)(d,{value:n,children:(0,l.Pu)(t,{isOpen:h,onClose:b,forceUpdate:g})})})})};p.displayName="Menu"},7883:(e,t,n)=>{n.d(t,{j:()=>c});var r=n(3426),o=n(8025),a=n(5597),s=n(1665),i=n(6992),l=n(3329),u=(0,a.G)(((e,t)=>{const n=(0,r.x)();return(0,l.jsx)(s.m.button,{ref:t,...e,__css:{display:"inline-flex",appearance:"none",alignItems:"center",outline:0,...n.button}})})),c=(0,a.G)(((e,t)=>{const{children:n,as:r,...a}=e,c=(0,o.zZ)(a,t),d=r||u;return(0,l.jsx)(d,{...c,className:(0,i.cx)("chakra-menu__menu-button",e.className),children:(0,l.jsx)(s.m.span,{__css:{pointerEvents:"none",flex:"1 1 auto",minW:0},children:e.children})})}));c.displayName="MenuButton"},2796:(e,t,n)=>{function r(e){const t=Object.assign({},e);for(let n in t)void 0===t[n]&&delete t[n];return t}n.d(t,{o:()=>r})}}]);
//# sourceMappingURL=214.9b69d628.chunk.js.map