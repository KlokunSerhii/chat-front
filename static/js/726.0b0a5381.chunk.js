"use strict";(self.webpackChunkchat_front=self.webpackChunkchat_front||[]).push([[726],{7489:function(e,n,a){a.d(n,{Z:function(){return f}});var r=a(1413),s=a(5987),l=a(5705),o="FormField_input__RHMl7",t="FormField_inputInvalid__Pvrqu",i="FormField_inputValid__WIV4W",c="FormField_errorMessage__00MFN",m="FormField_successMessage__LnwqL",u="FormField_static__L2Yv8",d="FormField_ErrorInfo__9HKm+",_=a(184),p=["name","className"],f=function(e){var n=e.name,a=e.className,f=(0,s.Z)(e,p),h=(0,l.u6)(),b=h.values,v=h.handleChange,j=h.handleBlur,x=h.errors,g=h.touched,y=x[n]&&g[n];return(0,_.jsxs)("div",{children:[(0,_.jsx)(l.gN,(0,r.Z)({className:"".concat(o," ").concat(""!==b[n]?y?t:i:o," ").concat(a||""),onChange:v,onBlur:j,value:b[n],name:n},f)),""!==b[n]?y?(0,_.jsx)("div",{className:c,children:"email"===n?(0,_.jsxs)("p",{children:["Error ",n]}):(0,_.jsx)("p",{className:d,children:"Min: 6 symbols, one uppercase letter, one lowercase letter, one number, one special symbol"})}):(0,_.jsxs)("div",{className:m,children:["Success ",n]}):(0,_.jsx)("div",{className:u})]})}},8890:function(e,n,a){a.d(n,{Z:function(){return l}});a(2791);var r="Title_titleContainer__m77zV",s=a(184);var l=function(e){var n=e.title;return(0,s.jsxs)("h1",{className:r,children:[n," "]})}},1326:function(e,n,a){a.d(n,{B:function(){return s},F:function(){return l}});var r=a(8007),s=r.Ry().shape({name:r.Z_().min(2,"Too Short!").max(50,"Too Long!").required("Please enter your name"),email:r.Z_().email("Invalid email address").required("Please enter your email").matches(/^[\w.-]+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/,"Enter valid email"),password:r.Z_().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{4,}$/,"Min: 6 symbols, one uppercase letter, one lowercase letter, one number, one special symbol").required("Please enter your password")}),l=r.Ry().shape({email:r.Z_().email("Invalid email address").required("Please enter your email").matches(/^[\w.-]+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/,"Enter valid email"),password:r.Z_().matches(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{4,}$/,"Min: 6 symbols, one uppercase letter, one lowercase letter, one number, one special symbol").required("Please enter your password")})},2726:function(e,n,a){a.r(n),a.d(n,{default:function(){return g}});var r=a(2791),s="SingUp_backGround__4o02o",l="SingUp_ContainerTitle__kdzvo",o="SingUp_link__YCTj3",t="SingUp_noaccount__fkTtC",i=a(5705),c=a(6856),m=a(7425),u=a(8820),d=a(1326),_=a(9434),p=a(9273),f={buttonUp:"Register_buttonUp__QOnPW",form:"Register_form__VD04X",label:"Register_label__18EoG",iconPassword:"Register_iconPassword__AZUAq",iconUser:"Register_iconUser__PFtCQ",iconEmail:"Register_iconEmail__-NPlJ",errorMessage:"Register_errorMessage__PHpMm"},h=a(7489),b=a(184);var v=function(){var e=(0,_.I0)(),n=(0,r.useRef)();return(0,b.jsx)(i.J9,{innerRef:n,initialValues:{name:"",email:"",password:""},validationSchema:d.B,onSubmit:function(n,a){var r=n.email,s=n.password,l=n.name,o=a.resetForm;e((0,p.z2)({email:r,password:s,name:l})),o()},children:function(e){var n=e.handleChange;e.handleSubmit,e.errors;return(0,b.jsxs)(i.l0,{className:f.form,children:[(0,b.jsxs)("label",{className:f.label,children:[(0,b.jsx)(h.Z,{className:f.input,type:"text",name:"name",placeholder:"enter your name",autoComplete:"off"}),(0,b.jsx)(u.nf1,{className:f.iconUser})]}),(0,b.jsxs)("label",{className:f.label,children:[(0,b.jsx)(h.Z,{type:"email",name:"email",placeholder:"enter your email",onChange:n,autoComplete:"off"}),(0,b.jsx)(c.F8X,{className:f.iconEmail})]}),(0,b.jsxs)("label",{className:f.label,children:[(0,b.jsx)(h.Z,{type:"password",name:"password",placeholder:"enter your",onChange:n,autoComplete:"off"}),(0,b.jsx)(m.xuE,{className:f.iconPassword})]}),(0,b.jsx)("button",{className:f.buttonUp,type:"submit",children:"SingUp"})]})}})},j=a(1087),x=a(8890);var g=function(){return(0,b.jsx)(b.Fragment,{children:(0,b.jsx)("section",{className:s,children:(0,b.jsxs)("div",{className:l,children:[(0,b.jsx)(x.Z,{title:"Hello, sign up"}),(0,b.jsx)(v,{}),(0,b.jsxs)("p",{className:t,children:["Don't have an account?",(0,b.jsx)(j.OL,{to:"/login",className:o,children:"Sign In"})]})]})})})}},5987:function(e,n,a){a.d(n,{Z:function(){return s}});var r=a(3366);function s(e,n){if(null==e)return{};var a,s,l=(0,r.Z)(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)a=o[s],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}},3366:function(e,n,a){function r(e,n){if(null==e)return{};var a,r,s={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],n.indexOf(a)>=0||(s[a]=e[a]);return s}a.d(n,{Z:function(){return r}})}}]);
//# sourceMappingURL=726.0b0a5381.chunk.js.map