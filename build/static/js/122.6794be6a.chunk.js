"use strict";(self.webpackChunkmantis_free_react_admin_template=self.webpackChunkmantis_free_react_admin_template||[]).push([[122],{69122:(e,s,n)=>{n.r(s),n.d(s,{default:()=>P});var r=n(42074),i=n(60899),a=n(93230),l=n(82053),t=n(9950),o=n(3788),d=n(3198),c=n(24516),m=n(2046),h=n(25333),p=n(4876),x=n(16491),u=n(36080),j=n(10226),A=n(74745),g=n(29714),y=n(43939),b=n(15423),f=n(28994);const v=e=>{let s=0;return e.length>5&&(s+=1),e.length>7&&(s+=1),(e=>new RegExp(/[0-9]/).test(e))(e)&&(s+=1),(e=>new RegExp(/[!#@$%^&*)(+=._-]/).test(e))(e)&&(s+=1),(e=>new RegExp(/[a-z]/).test(e)&&new RegExp(/[A-Z]/).test(e))(e)&&(s+=1),s};var w=n(12678),S=n(4729),B=n(44414);const C=()=>{const[e,s]=(0,t.useState)(),[n,C]=(0,t.useState)(!1),_=()=>{C(!n)},P=e=>{e.preventDefault()},k=e=>{const n=v(e);var r;s((r=n)<2?{label:"Poor",color:"error.main"}:r<3?{label:"Weak",color:"warning.main"}:r<4?{label:"Normal",color:"warning.dark"}:r<5?{label:"Good",color:"success.main"}:r<6?{label:"Strong",color:"success.dark"}:{label:"Poor",color:"error.main"})};return(0,t.useEffect)((()=>{k("")}),[]),(0,B.jsx)(B.Fragment,{children:(0,B.jsx)(y.l1,{initialValues:{firstname:"",lastname:"",email:"",company:"",password:"",submit:null},validationSchema:g.Ik().shape({firstname:g.Yj().max(255).required("First Name is required"),lastname:g.Yj().max(255).required("Last Name is required"),email:g.Yj().email("Must be a valid email").max(255).required("Email is required"),password:g.Yj().max(255).required("Password is required")}),onSubmit:async(e,s)=>{let{setErrors:n,setStatus:r,setSubmitting:i}=s;try{r({success:!1}),i(!1)}catch(a){console.error(a),r({success:!1}),n({submit:a.message}),i(!1)}},children:s=>{let{errors:t,handleBlur:g,handleChange:y,handleSubmit:v,isSubmitting:C,touched:E,values:q}=s;return(0,B.jsx)("form",{noValidate:!0,onSubmit:v,children:(0,B.jsxs)(i.Ay,{container:!0,spacing:3,children:[(0,B.jsx)(i.Ay,{item:!0,xs:12,md:6,children:(0,B.jsxs)(a.A,{spacing:1,children:[(0,B.jsx)(o.A,{htmlFor:"firstname-signup",children:"First Name*"}),(0,B.jsx)(d.A,{id:"firstname-login",type:"firstname",value:q.firstname,name:"firstname",onBlur:g,onChange:y,placeholder:"John",fullWidth:!0,error:Boolean(E.firstname&&t.firstname)}),E.firstname&&t.firstname&&(0,B.jsx)(c.A,{error:!0,id:"helper-text-firstname-signup",children:t.firstname})]})}),(0,B.jsx)(i.Ay,{item:!0,xs:12,md:6,children:(0,B.jsxs)(a.A,{spacing:1,children:[(0,B.jsx)(o.A,{htmlFor:"lastname-signup",children:"Last Name*"}),(0,B.jsx)(d.A,{fullWidth:!0,error:Boolean(E.lastname&&t.lastname),id:"lastname-signup",type:"lastname",value:q.lastname,name:"lastname",onBlur:g,onChange:y,placeholder:"Doe",inputProps:{}}),E.lastname&&t.lastname&&(0,B.jsx)(c.A,{error:!0,id:"helper-text-lastname-signup",children:t.lastname})]})}),(0,B.jsx)(i.Ay,{item:!0,xs:12,children:(0,B.jsxs)(a.A,{spacing:1,children:[(0,B.jsx)(o.A,{htmlFor:"company-signup",children:"Company"}),(0,B.jsx)(d.A,{fullWidth:!0,error:Boolean(E.company&&t.company),id:"company-signup",value:q.company,name:"company",onBlur:g,onChange:y,placeholder:"Demo Inc.",inputProps:{}}),E.company&&t.company&&(0,B.jsx)(c.A,{error:!0,id:"helper-text-company-signup",children:t.company})]})}),(0,B.jsx)(i.Ay,{item:!0,xs:12,children:(0,B.jsxs)(a.A,{spacing:1,children:[(0,B.jsx)(o.A,{htmlFor:"email-signup",children:"Email Address*"}),(0,B.jsx)(d.A,{fullWidth:!0,error:Boolean(E.email&&t.email),id:"email-login",type:"email",value:q.email,name:"email",onBlur:g,onChange:y,placeholder:"demo@company.com",inputProps:{}}),E.email&&t.email&&(0,B.jsx)(c.A,{error:!0,id:"helper-text-email-signup",children:t.email})]})}),(0,B.jsxs)(i.Ay,{item:!0,xs:12,children:[(0,B.jsxs)(a.A,{spacing:1,children:[(0,B.jsx)(o.A,{htmlFor:"password-signup",children:"Password"}),(0,B.jsx)(d.A,{fullWidth:!0,error:Boolean(E.password&&t.password),id:"password-signup",type:n?"text":"password",value:q.password,name:"password",onBlur:g,onChange:e=>{y(e),k(e.target.value)},endAdornment:(0,B.jsx)(m.A,{position:"end",children:(0,B.jsx)(h.A,{"aria-label":"toggle password visibility",onClick:_,onMouseDown:P,edge:"end",size:"large",children:n?(0,B.jsx)(w.A,{}):(0,B.jsx)(S.A,{})})}),placeholder:"******",inputProps:{}}),E.password&&t.password&&(0,B.jsx)(c.A,{error:!0,id:"helper-text-password-signup",children:t.password})]}),(0,B.jsx)(p.A,{fullWidth:!0,sx:{mt:2},children:(0,B.jsxs)(i.Ay,{container:!0,spacing:2,alignItems:"center",children:[(0,B.jsx)(i.Ay,{item:!0,children:(0,B.jsx)(x.A,{sx:{bgcolor:null===e||void 0===e?void 0:e.color,width:85,height:8,borderRadius:"7px"}})}),(0,B.jsx)(i.Ay,{item:!0,children:(0,B.jsx)(l.A,{variant:"subtitle1",fontSize:"0.75rem",children:null===e||void 0===e?void 0:e.label})})]})})]}),(0,B.jsx)(i.Ay,{item:!0,xs:12,children:(0,B.jsxs)(l.A,{variant:"body2",children:["By Signing up, you agree to our \xa0",(0,B.jsx)(u.A,{variant:"subtitle2",component:r.N_,to:"#",children:"Terms of Service"}),"\xa0 and \xa0",(0,B.jsx)(u.A,{variant:"subtitle2",component:r.N_,to:"#",children:"Privacy Policy"})]})}),t.submit&&(0,B.jsx)(i.Ay,{item:!0,xs:12,children:(0,B.jsx)(c.A,{error:!0,children:t.submit})}),(0,B.jsx)(i.Ay,{item:!0,xs:12,children:(0,B.jsx)(f.A,{children:(0,B.jsx)(j.A,{disableElevation:!0,disabled:C,fullWidth:!0,size:"large",type:"submit",variant:"contained",color:"primary",children:"Create Account"})})}),(0,B.jsx)(i.Ay,{item:!0,xs:12,children:(0,B.jsx)(A.A,{children:(0,B.jsx)(l.A,{variant:"caption",children:"Sign up with"})})}),(0,B.jsx)(i.Ay,{item:!0,xs:12,children:(0,B.jsx)(b.A,{})})]})})}})})};var _=n(9330);const P=()=>(0,B.jsx)(_.A,{children:(0,B.jsxs)(i.Ay,{container:!0,spacing:3,children:[(0,B.jsx)(i.Ay,{item:!0,xs:12,children:(0,B.jsxs)(a.A,{direction:"row",justifyContent:"space-between",alignItems:"baseline",sx:{mb:{xs:-.5,sm:.5}},children:[(0,B.jsx)(l.A,{variant:"h3",children:"Sign up"}),(0,B.jsx)(l.A,{component:r.N_,to:"/login",variant:"body1",sx:{textDecoration:"none"},color:"primary",children:"Already have an account?"})]})}),(0,B.jsx)(i.Ay,{item:!0,xs:12,children:(0,B.jsx)(C,{})})]})})}}]);