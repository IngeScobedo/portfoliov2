var w=Object.defineProperty,N=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var b=(a,r,l)=>r in a?w(a,r,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[r]=l,m=(a,r)=>{for(var l in r||(r={}))j.call(r,l)&&b(a,l,r[l]);if(p)for(var l of p(r))F.call(r,l)&&b(a,l,r[l]);return a},u=(a,r)=>N(a,k(r));import{j as h,F as L,B as E,G as O,A as I,u as S,e as T,i as B,I as P,a as z,b as H,c as W,d as J,f as Z,R as C,g as M,h as R,k as V}from"./vendor.2a2c4f83.js";const G=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&i(f)}).observe(document,{childList:!0,subtree:!0});function l(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=l(n);fetch(n.href,s)}};G();var K="/assets/alanescobedo.cca26148.jpg";const e=h.exports.jsx,t=h.exports.jsxs,q=h.exports.Fragment,v=({mb:a,w:r,h:l})=>e("div",{className:"flex flex-col justify-center items-center",children:e("div",{className:"flex flex-col items-center justify-center bg-indigo-600 rounded-3xl ",children:e("img",{className:`mb-${a} w-${r} h-${l} rounded-3xl shadow-lg border p-1 rotate-[10deg]`,src:K,alt:"Alan Escobedo Picture"})})}),g=({description:a,iconType:r})=>t("div",{className:"h-56 w-56 p-6 max-w-sm bg-gray-800 rounded-lg border border-gray-700 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 text-center flex flex-col items-center justify-center",children:[e("h5",{className:"mb-4 text-5xl font-bold tracking-tight dark:text-white",children:r==="FaAward"?e(L,{}):r==="BsFolder2Open"?e(E,{}):r==="GiProgression"?e(O,{}):r==="AiOutlineTeam"?e(I,{}):null}),e("p",{className:"font-normal text-gray-900 dark:text-gray-400 mb-4",children:a})]}),U=()=>e("section",{id:"about",className:"w-full flex justify-center",children:t("div",{className:"p-4 max-w-3xl grid gap-4 xs:grid-cols-2 justify-center items-center lg:grid-cols-4 lg:max-w-5xl lg:gap-10",children:[e("h2",{className:"text-3xl h-26 front-extrabold text-gray-300 flex justify-center xs:justify-end lg:col-span-2",children:"M\xE1s"}),e("h1",{className:"text-4xl h-26 font-bold m-1 text-blue-700 flex justify-center xs:justify-start lg:col-span-2",children:"Sobre mi"}),e(v,{className:"xs:col-span-2 xs:row-span-2 xs:w-full xs:h-full",mb:0,w:56,h:56}),e(g,{description:"1 A\xF1o de experiencia desarrollando paginas web con Javascript",iconType:"FaAward"}),e(g,{description:"10+ Proyectos terminados usando las tecnologias mas modernas y\r aplicando buenas practicas",iconType:"BsFolder2Open"}),e(g,{description:"En continuo aprendizaje y desarrollo de nuevas tecnologias,\r metodologias y herramientas",iconType:"GiProgression"}),e(g,{description:"Trabajo en equipo, escucha activa y comunicaci\xF3n clara",iconType:"AiOutlineTeam"})]})});B("MXE3NH5OfzU5armHs");console.log("service_at20kdy","contact_form","MXE3NH5OfzU5armHs");const X=()=>{const{register:a,handleSubmit:r,formState:{errors:l}}=S();return e("div",{className:"mt-10 w-full flex flex-col justify-center items-center text-gray-900",children:t("form",{className:"w-4/6 flex flex-col items-center",onSubmit:r(n=>{T.send("service_at20kdy","contact_form",n,"MXE3NH5OfzU5armHs").then(s=>{console.log(s.text)},s=>{console.log(s.text)})}),children:[e("label",{htmlFor:"name",className:"block text-white items-start w-full px-10",children:"Nombre"}),e("input",u(m({name:"name",placeholder:"Tu nombre..."},a("name",{required:!0})),{className:"w-5/6 p-2 my-2 border-2 border-gray-600 rounded-lg"})),l.name&&e("span",{className:"text-white m-2",children:"Campo Requerido"}),e("label",{htmlFor:"email",className:"block text-white items-start w-full px-10",children:"Correo Electronico"}),e("input",u(m({name:"email",placeholder:"mail@dominio.com"},a("email",{required:!0})),{className:"w-5/6 p-2 my-2 border-2 border-gray-600 rounded-lg"})),l.email&&e("span",{className:"text-white m-2",children:"Campo Requerido"}),e("label",{htmlFor:"message",className:"block text-white items-start w-full px-10",children:"Mensaje"}),e("textarea",u(m({name:"message",placeholder:"Escribeme un mensaje..."},a("message",{required:!0})),{className:"w-5/6 h-32 p-2 my-2 border-2 border-gray-600 rounded-lg"})),l.message&&e("span",{className:"text-white m-2",children:"Campo Requerido"}),e("button",{type:"submit",className:"w-full relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800 m-5",children:e("span",{className:"relative px-5 py-2.5 transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0",children:"Enviar"})})]})})},y=({description:a,icon:r})=>t("div",{className:"w-11/12 bg-gray-700 rounded-xl flex flex-col items-center p-3 my-3 sm:w-1/2 text-xs",children:[e("div",{className:"w-full h-12 flex justify-center items-center sm:w-1/2",children:r==="whatsapp"?e(P,{size:"large"}):e(z,{size:"large"})}),e("h1",{children:a})]}),Q=()=>t("section",{className:"w-full flex flex-col items-center justify-center",id:"contact",children:[t("div",{className:"w-full flex flex-col justify-center items-center",children:[e("h2",{className:"text-2xl h-26 mt-5 front-extrabold text-gray-300 flex justify-center xs:justify-end lg:col-span-2",children:"Vamos a trabajar juntos!"}),e("h1",{className:"text-5xl h-26 font-bold m-1 text-cyan-400 flex justify-center xs:justify-start lg:col-span-2",children:"Contactame"})]}),t("div",{className:"w-5/6 flex flex-col items-center justify-center sm:flex-row sm:gap-4",children:[e(y,{icon:"whatsapp",description:"+52 465-118-5454"}),e(y,{icon:"mail",description:"alanaguinaga43@gmail.com"})]}),e(X,{})]}),A=({children:a,position:r})=>t("div",{className:"w-5/6 bg-indigo-900 flex flex-col items-center rounded-lg p-6 m-4 ",children:[e("h1",{className:"text-2xl text-gray-300",children:r}),e("div",{className:"grid grid-cols-1 xs:grid-cols-2 gap-4 sm:grid-cols-3",children:a})]}),o=({technology:a,level:r})=>t("div",{className:"max-w-22 flex gap-4 p-2",children:[e(H,{className:"m-1"}),t("div",{children:[e("h3",{className:"font-bold",children:a}),e("p",{className:"text-sm text-gray-400",children:r})]})]}),Y=()=>t("section",{id:"experience",children:[t("div",{className:"w-full flex flex-col justify-center items-center",children:[e("h2",{className:"text-2xl h-26 mt-5 front-extrabold text-gray-300 flex justify-center xs:justify-end lg:col-span-2",children:"Que habilidades tengo?"}),e("h1",{className:"text-5xl h-26 font-bold m-1 text-rose-400 flex justify-center xs:justify-start lg:col-span-2",children:"Mi experiencia..."})]}),t("div",{className:"w-full px-16 flex items-center justify-center flex-col lg:flex-row",children:[t(A,{position:"Frontend",children:[e(o,{technology:"HTML5",level:"Avanzado"}),e(o,{technology:"CSS3",level:"Avanzado"}),e(o,{technology:"JavaScript",level:"Intermedio"}),e(o,{technology:"React",level:"Basico"}),e(o,{technology:"Tailwind",level:"Intermedio"})]}),t(A,{position:"Backend",children:[e(o,{technology:"Node.js",level:"Intermedio"}),e(o,{technology:"MongoDB",level:"Basico"}),e(o,{technology:"Github",level:"Intermedio"}),e(o,{technology:"Github Actions",level:"Basico"}),e(o,{technology:"JWT",level:"Intermedio"}),e(o,{technology:"Express.js",level:"Intermedio"})]})]})]}),c=({reference:a,name:r})=>e("li",{className:"w-full text-center m-2",children:e("a",{className:"w-full text-center text-gray-300 font-bold text-xl",href:`#${a}`,children:r})}),D=()=>t("footer",{id:"footer",className:"w-full flex flex-col items-center bg-indigo-700 mt-14 h-96 xs:h-72 sm:h-64",children:[e("h1",{className:"text-gray-300 font-bold",children:"Alan Escobedo"}),t("ol",{className:"w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5",children:[e(c,{name:"Inicio",reference:"home"}),e(c,{name:"Sobre mi",reference:"about"}),e(c,{name:"Experiencia",reference:"experience"}),e(c,{name:"Proyectos",reference:"portfolio"}),e(c,{name:"Contacto",reference:"contact"})]})]});var _="/assets/CurriculumAlanEscobedo.bc6d3b1d.pdf";const $=()=>e("header",{id:"home",className:"w-full flex justify-center p-10 mt-2 text-center",children:t("div",{className:"flex flex-col items-center bg-opacity-96 backdrop-opacity-90 backdrop-invert p-6 rounded-3xl md:flex-row md:justify-around lg:w-5/6 lg:justify-around",children:[t("div",{className:"hidden ml-2 absolute left-0 lg:flex sm:flex-col ",children:[e("div",{className:"w-10 h-15 border-t-8 border-red-500 flex justify-center px-2.5 py-2.5 text-center items-center m-3 text-3xl text-gray-600 p-2",children:"|"}),e("a",{href:"https://github.com/IngeScobedo",target:"_blank",type:"button",className:"text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-2.5 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 m-2",rel:"noreferrer",children:e("svg",{className:"w-4 h-4","aria-hidden":"true",focusable:"false","data-prefix":"fab","data-icon":"github",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512",children:e("path",{fill:"currentColor",d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})})}),e("a",{href:"mailto:alanaguinaga43@gmail.com",className:"text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-2.5 py-2.5 text-center inline-flex items-center justify-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 m-2",children:e("img",{src:"https://img.icons8.com/stickers/100/000000/gmail-new.png",className:"w-4 h-4"})}),e("div",{className:"w-10 h-15 border-t-8 border-red-500 flex justify-center px-2.5 py-2.5 text-center items-center m-3 text-3xl text-gray-600 p-2",children:"|"})]}),t("div",{className:"lg:ml-10",children:[e("h2",{className:"text-2xl text-gray-500",children:"Hola yo soy"}),e("h1",{className:"text-5xl font-bold m-1 text-gray-700",children:"Alan Escobedo"}),e("h3",{className:"text-2xl text-gray-600 p-2",children:"Javascript Developer"}),t("div",{className:"p-8 w-full flex justify-between",children:[e("button",{className:"relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800",children:e("a",{href:_,download:"CurriculumAlanEscobedo.pdf",className:"relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0",children:"Descargar CV"})}),e("button",{className:"relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:ring-pink-200 dark:focus:ring-pink-800",children:e("a",{href:"#contact",className:"relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0",children:"Vamos a hablar!"})})]})]}),e("div",{className:"w-4/6 xs:w-1/2 md:w-2/6",children:e(v,{mb:3,w:24,h:28})})]})}),d=({refTo:a,iconName:r})=>e("a",{href:`#${a}`,className:"w-12 h-12 m-2 rounded-full flex justify-center items-center text-gray-400 hover:bg-gray-800 active:bg-gray-900 focus:outline-none  hover:text-white focus-within:shadow-lg",children:r==="AiOutlineHome"?e(W,{}):r==="AiOutlineUser"?e(J,{}):r==="AiOutlineBook"?e(Z,{}):r==="RiServiceLine"?e(C,{}):r==="BiMessageSquareDetail"?e(M,{}):r==="BsFillFolderFill"?e(R,{}):null}),ee=()=>e("div",{className:"fixed bottom-0 mb-5 w-full flex justify-center z-10",children:t("nav",{className:"h-14 w-min  bg-gray-700 rounded-3xl flex items-center",children:[e(d,{refTo:"home",iconName:"AiOutlineHome"})," ",e(d,{refTo:"about",iconName:"AiOutlineUser"})," ",e(d,{refTo:"experience",iconName:"AiOutlineBook"})," ",e(d,{refTo:"portfolio",iconName:"BsFillFolderFill"})," ",e(d,{refTo:"contact",iconName:"BiMessageSquareDetail"})," "]})}),x=({children:a,image:r,name:l,description:i,repo:n})=>e("div",{className:"w-full flex justify-center min-h-48 ",rel:"noreferrer",children:t("a",{href:`${n}`,target:"_blank",className:"rounded-2xl bg-slate-400 max-w-xs relative",rel:"noreferrer",children:[e("img",{src:r,className:"rounded-t-2xl w-full h-48"}),e("div",{id:"proyect-card",className:"text-transparent w-full h-48 p-4 absolute top-0 hover:block hover:bg-gray-500 hover:bg-opacity-80 flex justify-center items-center hover:text-white hover:text-center hover:px-32 hover:py-20 rounded-t-2xl",children:e("p",{className:"h-18 rounded-lg border border-blue-400 bg-transparent text-center hover:text-blue-500 cursor-pointer hover:",rel:"noreferrer",children:"Ver demo"})}),t("div",{className:"min-h-36 p-4",children:[e("h1",{className:"m-0 pb-2 text-gray-900 font-bold text-2xl",children:l}),e("p",{className:"text-lg text-gray-600 font-bold",children:i})]}),e("div",{className:"p-4 flex flex-wrap gap-1",children:a})]})});var re="/assets/social-dashboard-project.5fb48ff0.jpg",te="/assets/api.4644232d.gif",ae="/assets/nodejs.2b22e4d4.gif",le="data:image/png;base64,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";const ne=()=>t("section",{id:"portfolio",className:"w/full flex flex-col items-center",children:[t("div",{className:"w-full flex flex-col justify-center items-center",children:[e("h2",{className:"text-2xl h-26 mt-5 front-extrabold text-gray-300 flex justify-center xs:justify-end lg:col-span-2",children:"Mis mas recientes"}),e("h1",{className:"text-5xl h-26 font-bold m-1 text-emerald-400 flex justify-center xs:justify-start lg:col-span-2",children:"Proyectos"})]}),t("div",{className:"w-full grid grid-cols-1 gap-4 p-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10",children:[t(x,{image:re,name:"Social Media Dashboard",description:"Desafio de la plataforma FrontendMentor",repo:"https://ingescobedo.github.io/frontend-mentor-social-media-dashboard/",children:[e("span",{className:"bg-orange-100 text-orange-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-orange-200 dark:text-orange-900",children:"HTML"}),e("span",{className:"bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800",children:"CSS"}),e("span",{className:"bg-yellow-100 text-yellow-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900",children:"Javascript"})]}),t(x,{image:te,name:"API Rest",description:"Una API Rest para una aplicaci\xF3n de notas, autenticaci\xF3n y autorizaci\xF3n y manejo de datos",repo:"https://github.com/IngeScobedo/LearningMongoDB",children:[e("span",{className:"bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900",children:"NodeJS"}),e("span",{className:"bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900",children:"MongoDB"}),e("span",{className:"bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300",children:"JWT"}),e("span",{className:"bg-purple-100 text-purple-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900",children:"Express.js"})]}),t(x,{image:ae,name:"Aplicacion de consola para consultas de clima",description:"Esta aplicacion consulta el clima dado el nombre de una ciudad, ademas tiene un historial de busquedas",repo:"https://github.com/IngeScobedo/clima-app-node",children:[e("span",{className:"bg-green-100 text-green-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900",children:"NodeJS"}),e("span",{className:"bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300",children:"yargs.js"})]}),e(x,{image:le,name:"GifApp",description:"Aplicacion para buscar Gifs, usando la api de Giphy Y React",repo:"https://github.com/IngeScobedo/gif-app-node",children:e("span",{className:"bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800",children:"React"})})]})]}),se=()=>t(q,{children:[e($,{}),e(ee,{}),e(U,{}),e(Y,{}),e(ne,{}),e(Q,{}),e(D,{})]});V.render(e(se,{}),document.getElementById("root"));
