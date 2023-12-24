"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[236],{8236:(e,n,t)=>{t.r(n),t.d(n,{Register:()=>I,default:()=>y});var l=t(8410),i=t(824),r=t(884),a=t(5350),s=t(7438),d=t(7236),o=t(9891),u=t(7943),c=t(7653),p=t(2577),m=t(2791),h=t(7689),v=t(4420),x=t(4908),f=t(3101),g=t(3329);const b=()=>{const e=(0,v.v9)(f.W1),n=(0,v.I0)(),[t,b]=(0,m.useState)(""),[I,y]=(0,m.useState)(""),[j,N]=(0,m.useState)(""),k=(0,h.s0)(),[R,_]=(0,m.useState)(!1),S=e=>{const{name:n}=e.target;switch(n){case"name":b(e.target.value);break;case"email":N(e.target.value);break;case"password":y(e.target.value)}};return(0,g.jsx)(l.W,{pt:30,children:(0,g.jsx)("form",{onSubmit:e=>{e.preventDefault();const l={name:t,email:j,password:I};n((0,x.z2)(l)),e.target.reset()},children:(0,g.jsxs)(i.xu,{padding:"15px",maxWidth:500,border:"2px solid #3b3b3b4e",borderRadius:"12",children:[(0,g.jsx)(r.x,{fontSize:"3xl",fontWeight:500,children:"Create account"}),(0,g.jsxs)(a.NI,{isRequired:!0,children:[(0,g.jsx)(s.l,{fontSize:24,children:"Your name"}),(0,g.jsx)(d.I,{placeholder:"Adrian Cross",type:"text",name:"name",onInput:S})]}),(0,g.jsxs)(a.NI,{isRequired:!0,children:[(0,g.jsx)(s.l,{fontSize:24,children:"Your email"}),(0,g.jsx)(d.I,{placeholder:"across@mail.com",type:"email",name:"email",onInput:S}),(0,g.jsx)(a.Q6,{children:"We'll never share your email."})]}),(0,g.jsxs)(a.NI,{mb:15,isRequired:!0,children:[(0,g.jsx)(s.l,{fontSize:24,children:"Your password"}),(0,g.jsxs)(o.B,{size:"md",children:[(0,g.jsx)(d.I,{minLength:8,name:"password",onInput:S,pr:"4.5rem",type:R?"text":"password",placeholder:"Enter password"}),(0,g.jsx)(u.x,{width:"4.5rem",children:(0,g.jsx)(c.z,{h:"1.75rem",size:"sm",onClick:()=>_(!R),children:R?"Hide":"Show"})})]})]}),(0,g.jsx)(c.z,{width:91,colorScheme:"green",type:"submit",children:e?(0,g.jsx)(p.$,{}):"Register"}),(0,g.jsxs)(i.xu,{display:"flex",justifyContent:"flex-end",children:[(0,g.jsx)(r.x,{as:"span",color:"blue",cursor:"pointer",onClick:()=>{k("/login",{replace:!0})},children:"Have you already registered?"})," "]})]})})})},I=()=>(0,g.jsx)(b,{}),y=I},5350:(e,n,t)=>{t.d(n,{NI:()=>x,NJ:()=>v,Q6:()=>f,e:()=>m});var l=t(9886),i=t(4591),r=t(5597),a=t(5986),s=t(2996),d=t(1665),o=t(6992),u=t(2791),c=t(3329),[p,m]=(0,l.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),[h,v]=(0,l.k)({strict:!1,name:"FormControlContext"});var x=(0,r.G)((function(e,n){const t=(0,a.jC)("Form",e),l=(0,s.Lr)(e),{getRootProps:r,htmlProps:m,...v}=function(e){const{id:n,isRequired:t,isInvalid:l,isDisabled:r,isReadOnly:a,...s}=e,d=(0,u.useId)(),c=n||"field-".concat(d),p="".concat(c,"-label"),m="".concat(c,"-feedback"),h="".concat(c,"-helptext"),[v,x]=(0,u.useState)(!1),[f,g]=(0,u.useState)(!1),[b,I]=(0,u.useState)(!1),y=(0,u.useCallback)((function(){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{id:h,...arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},ref:(0,i.lq)(e,(e=>{e&&g(!0)}))}}),[h]),j=(0,u.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...e,ref:n,"data-focus":(0,o.PB)(b),"data-disabled":(0,o.PB)(r),"data-invalid":(0,o.PB)(l),"data-readonly":(0,o.PB)(a),id:void 0!==e.id?e.id:p,htmlFor:void 0!==e.htmlFor?e.htmlFor:c}}),[c,r,b,l,a,p]),N=(0,u.useCallback)((function(){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{id:m,...arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},ref:(0,i.lq)(e,(e=>{e&&x(!0)})),"aria-live":"polite"}}),[m]),k=(0,u.useCallback)((function(){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},...s,ref:e,role:"group","data-focus":(0,o.PB)(b),"data-disabled":(0,o.PB)(r),"data-invalid":(0,o.PB)(l),"data-readonly":(0,o.PB)(a)}}),[s,r,b,l,a]),R=(0,u.useCallback)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return{...e,ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"}}),[]);return{isRequired:!!t,isInvalid:!!l,isReadOnly:!!a,isDisabled:!!r,isFocused:!!b,onFocus:()=>I(!0),onBlur:()=>I(!1),hasFeedbackText:v,setHasFeedbackText:x,hasHelpText:f,setHasHelpText:g,id:c,labelId:p,feedbackId:m,helpTextId:h,htmlProps:s,getHelpTextProps:y,getErrorMessageProps:N,getRootProps:k,getLabelProps:j,getRequiredIndicatorProps:R}}(l),x=(0,o.cx)("chakra-form-control",e.className);return(0,c.jsx)(h,{value:v,children:(0,c.jsx)(p,{value:t,children:(0,c.jsx)(d.m.div,{...r({},n),className:x,__css:t.container})})})}));x.displayName="FormControl";var f=(0,r.G)((function(e,n){const t=v(),l=m(),i=(0,o.cx)("chakra-form__helper-text",e.className);return(0,c.jsx)(d.m.div,{...null==t?void 0:t.getHelpTextProps(e,n),__css:l.helperText,className:i})}));f.displayName="FormHelperText"},7438:(e,n,t)=>{t.d(n,{l:()=>u});var l=t(5350),i=t(5597),r=t(5986),a=t(2996),s=t(1665),d=t(6992),o=t(3329),u=(0,i.G)((function(e,n){var t;const i=(0,r.mq)("FormLabel",e),u=(0,a.Lr)(e),{className:p,children:m,requiredIndicator:h=(0,o.jsx)(c,{}),optionalIndicator:v=null,...x}=u,f=(0,l.NJ)(),g=null!=(t=null==f?void 0:f.getLabelProps(x,n))?t:{ref:n,...x};return(0,o.jsxs)(s.m.label,{...g,className:(0,d.cx)("chakra-form__label",u.className),__css:{display:"block",textAlign:"start",...i},children:[m,(null==f?void 0:f.isRequired)?h:v]})}));u.displayName="FormLabel";var c=(0,i.G)((function(e,n){const t=(0,l.NJ)(),i=(0,l.e)();if(!(null==t?void 0:t.isRequired))return null;const r=(0,d.cx)("chakra-form__required-indicator",e.className);return(0,o.jsx)(s.m.span,{...null==t?void 0:t.getRequiredIndicatorProps(e,n),__css:i.requiredIndicator,className:r})}));c.displayName="RequiredIndicator"},7943:(e,n,t)=>{t.d(n,{x:()=>c});var l=t(9891),i=t(1665),r=t(5597),a=t(6992),s=t(3329),d=(0,i.m)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),o=(0,r.G)((function(e,n){var t,i;const{placement:r="left",...a}=e,o=(0,l.m)(),u=o.field,c={["left"===r?"insetStart":"insetEnd"]:"0",width:null!=(t=null==u?void 0:u.height)?t:null==u?void 0:u.h,height:null!=(i=null==u?void 0:u.height)?i:null==u?void 0:u.h,fontSize:null==u?void 0:u.fontSize,...o.element};return(0,s.jsx)(d,{ref:n,__css:c,...a})}));o.id="InputElement",o.displayName="InputElement";var u=(0,r.G)((function(e,n){const{className:t,...l}=e,i=(0,a.cx)("chakra-input__left-element",t);return(0,s.jsx)(o,{ref:n,placement:"left",className:i,...l})}));u.id="InputLeftElement",u.displayName="InputLeftElement";var c=(0,r.G)((function(e,n){const{className:t,...l}=e,i=(0,a.cx)("chakra-input__right-element",t);return(0,s.jsx)(o,{ref:n,placement:"right",className:i,...l})}));c.id="InputRightElement",c.displayName="InputRightElement"},7236:(e,n,t)=>{t.d(n,{I:()=>c});var l=t(5350),i=t(6992);function r(e){const{isDisabled:n,isInvalid:t,isReadOnly:r,isRequired:a,...s}=function(e){var n,t,r;const a=(0,l.NJ)(),{id:s,disabled:d,readOnly:o,required:u,isRequired:c,isInvalid:p,isReadOnly:m,isDisabled:h,onFocus:v,onBlur:x,...f}=e,g=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==a?void 0:a.hasFeedbackText)&&(null==a?void 0:a.isInvalid)&&g.push(a.feedbackId);(null==a?void 0:a.hasHelpText)&&g.push(a.helpTextId);return{...f,"aria-describedby":g.join(" ")||void 0,id:null!=s?s:null==a?void 0:a.id,isDisabled:null!=(n=null!=d?d:h)?n:null==a?void 0:a.isDisabled,isReadOnly:null!=(t=null!=o?o:m)?t:null==a?void 0:a.isReadOnly,isRequired:null!=(r=null!=u?u:c)?r:null==a?void 0:a.isRequired,isInvalid:null!=p?p:null==a?void 0:a.isInvalid,onFocus:(0,i.v0)(null==a?void 0:a.onFocus,v),onBlur:(0,i.v0)(null==a?void 0:a.onBlur,x)}}(e);return{...s,disabled:n,readOnly:r,required:a,"aria-invalid":(0,i.Qm)(t),"aria-required":(0,i.Qm)(a),"aria-readonly":(0,i.Qm)(r)}}var a=t(5597),s=t(5986),d=t(2996),o=t(1665),u=t(3329),c=(0,a.G)((function(e,n){const{htmlSize:t,...l}=e,a=(0,s.jC)("Input",l),c=r((0,d.Lr)(l)),p=(0,i.cx)("chakra-input",e.className);return(0,u.jsx)(o.m.input,{size:t,...c,__css:a.field,ref:n,className:p})}));c.displayName="Input",c.id="Input"},9891:(e,n,t)=>{t.d(n,{B:()=>h,m:()=>m});var l=t(9886),i=t(2791);var r=t(5597),a=t(5986),s=t(2996),d=t(1665),o=t(6992),u=t(2796),c=t(3329),[p,m]=(0,l.k)({name:"InputGroupStylesContext",errorMessage:"useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<InputGroup />\" "}),h=(0,r.G)((function(e,n){const t=(0,a.jC)("Input",e),{children:l,className:r,...m}=(0,s.Lr)(e),h=(0,o.cx)("chakra-input__group",r),v={},x=function(e){return i.Children.toArray(e).filter((e=>(0,i.isValidElement)(e)))}(l),f=t.field;x.forEach((e=>{var n,l;t&&(f&&"InputLeftElement"===e.type.id&&(v.paddingStart=null!=(n=f.height)?n:f.h),f&&"InputRightElement"===e.type.id&&(v.paddingEnd=null!=(l=f.height)?l:f.h),"InputRightAddon"===e.type.id&&(v.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(v.borderStartRadius=0))}));const g=x.map((n=>{var t,l;const r=(0,u.o)({size:(null==(t=n.props)?void 0:t.size)||e.size,variant:(null==(l=n.props)?void 0:l.variant)||e.variant});return"Input"!==n.type.id?(0,i.cloneElement)(n,r):(0,i.cloneElement)(n,Object.assign(r,v,n.props))}));return(0,c.jsx)(d.m.div,{className:h,ref:n,__css:{width:"100%",display:"flex",position:"relative",isolation:"isolate",...t.group},"data-group":!0,...m,children:(0,c.jsx)(p,{value:t,children:g})})}));h.displayName="InputGroup"}}]);
//# sourceMappingURL=236.4e25c15d.chunk.js.map