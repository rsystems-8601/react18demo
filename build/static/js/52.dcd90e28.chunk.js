"use strict";(self.webpackChunkmantis_free_react_admin_template=self.webpackChunkmantis_free_react_admin_template||[]).push([[52],{58289:(e,r,a)=>{a.d(r,{A:()=>n});a(9950);var s=a(18469);s.A.interceptors.request.use((function(e){let r;const a=localStorage.getItem("persist:root");if(a){var s=JSON.parse(a);if(null!==s&&void 0!==s&&s.authSlice){const e=JSON.parse(null===s||void 0===s?void 0:s.authSlice);r=null===e||void 0===e?void 0:e.token}}return e.headers.Authorization="Bearer ".concat(r),e.headers.common={Accept:"application/json, text/plain, */*","Content-Type":"application/json","Access-Control-Allow-Origin":"*"},e}));const n={getList:()=>s.A.get("".concat("http://15.207.254.188:7001","/users/api/mock")),getLoginToken:e=>s.A.post("".concat("http://15.207.254.188:7001","/users/api/getLoginToken"),e)}},34052:(e,r,a)=>{a.r(r),a.d(r,{default:()=>g});var s=a(9950),n=a(82053),i=a(2235),l=a(16491),t=a(60899),o=a(33306),d=a(16497),m=a(66310),c=a(10226),u=a(58289),h=a(43939),p=a(29714),x=a(61376),f=a(44414);const g=()=>{var e;const[r,a]=(0,s.useState)([]),[g,A]=(0,s.useState)([]),[j,w]=s.useState(!0),v=(0,h.Wx)({initialValues:{fullname:"",username:"",email:"",password:"",confirmPassword:"",acceptTerms:""},validationSchema:p.Ik().shape({fullname:p.Yj().required("Fullname is required"),username:p.Yj().required("Username is required").min(6,"Username must be at least 6 characters").max(20,"Username must not exceed 20 characters"),email:p.Yj().required("Email is required").email("Email is invalid"),password:p.Yj().required("Password is required").min(6,"Password must be at least 6 characters").max(40,"Password must not exceed 40 characters"),confirmPassword:p.Yj().required("Confirm Password is required").oneOf([p.KR("password"),null],"Confirm Password does not match"),acceptTerms:p.lc().oneOf([!0],"Accept Terms is required")}),validate:e=>("Multi1"===e.firstname&&(""===e.phoneCall||!e.phoneCall)&&(""===e.SMS||!e.SMS)&&(""===e.Mobile||e.Mobile),{}),onSubmit:e=>{A(e),alert(JSON.stringify(e,null,2))}});return(0,s.useEffect)((()=>{(async()=>{try{const e=await u.A.getList();null!==e&&void 0!==e&&e.data&&a(e.data)}catch(e){console.log(e)}})()}),[]),(0,f.jsxs)(x.A,{title:"Sample Card",children:["UserId: ",r&&(null===(e=r[0])||void 0===e?void 0:e.id)," ",(0,f.jsx)("br",{}),"Submit: ",JSON.stringify(g,null,2),(0,f.jsx)(n.A,{variant:"body2",children:"Employee Form Begin"}),(0,f.jsx)(i.A,{children:(0,f.jsxs)(l.A,{px:3,py:2,sx:{"& .MuiTextField-root":{m:1,width:"70ch"}},children:[(0,f.jsx)(n.A,{variant:"h6",align:"center",margin:"dense",children:"React Hook Form - Material UI - Validation"}),(0,f.jsxs)("form",{onSubmit:v.handleSubmit,children:[(0,f.jsxs)(t.Ay,{container:!0,spacing:1,children:[(0,f.jsxs)(t.Ay,{item:!0,xs:12,sm:12,children:[(0,f.jsx)(o.A,{required:!0,id:"fullname",name:"fullname",label:"Full Name",fullWidth:!0,margin:"dense",error:v.touched.fullname&&v.errors.fullname,onChange:v.handleChange,value:v.values.fullname}),(0,f.jsx)(n.A,{variant:"inherit",color:"textSecondary",children:v.errors.fullname})]}),(0,f.jsx)(t.Ay,{item:!0,xs:12,sm:6,children:(0,f.jsx)(o.A,{required:!0,id:"username",name:"username",label:"Username",fullWidth:!0,margin:"dense",error:v.touched.username&&v.errors.username,onChange:v.handleChange,value:v.values.username,helperText:v.errors.username})}),(0,f.jsx)(t.Ay,{item:!0,xs:12,sm:6,children:(0,f.jsx)(o.A,{required:!0,id:"email",name:"email",label:"Email",fullWidth:!0,margin:"dense",error:v.touched.email&&v.errors.email,onChange:v.handleChange,value:v.values.email,helperText:v.errors.email})}),(0,f.jsx)(t.Ay,{item:!0,xs:12,sm:6,children:(0,f.jsx)(o.A,{required:!0,id:"password",name:"password",label:"Password",type:"password",fullWidth:!0,margin:"dense",error:v.touched.password&&v.errors.password,onChange:v.handleChange,value:v.values.password,helperText:v.errors.password})}),(0,f.jsx)(t.Ay,{item:!0,xs:12,sm:6,children:(0,f.jsx)(o.A,{required:!0,id:"confirmPassword",name:"confirmPassword",label:"Confirm Password",type:"password",fullWidth:!0,margin:"dense",error:v.touched.confirmPassword&&v.errors.confirmPassword,onChange:v.handleChange,value:v.values.confirmPassword,helperText:v.errors.confirmPassword})}),(0,f.jsx)(t.Ay,{children:(0,f.jsx)(d.A,{control:(0,f.jsx)(m.A,{checked:v.values.acceptTerms,onChange:e=>{v.setFieldValue("acceptTerms",e.target.checked)},inputProps:{"aria-label":"controlled"}}),label:"Label"})})]}),(0,f.jsx)(l.A,{mt:3,children:(0,f.jsx)(c.A,{variant:"contained",color:"primary",type:"submit",children:"Register"})})]})]})})]})}}}]);