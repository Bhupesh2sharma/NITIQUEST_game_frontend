(()=>{"use strict";var e={389:(e,n,t)=>{var o=t(751),i=t(641);const r={id:"app"};function s(e,n){const t=(0,i.g2)("router-view");return(0,i.uX)(),(0,i.CE)("div",r,[(0,i.bF)(t)])}var a=t(262);const l={},d=(0,a.A)(l,[["render",s]]),u=d;var c=t(220);const m={class:"h-screen flex items-center justify-center animated-bg"},g={class:"text-center p-10 bg-white bg-opacity-20 backdrop-blur-lg shadow-lg rounded-lg"},w={key:0,class:"fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"},h={class:"bg-white p-8 rounded-lg shadow-lg max-w-lg w-full"};function p(e,n,t,r,s,a){return(0,i.uX)(),(0,i.CE)("div",m,[(0,i.Lk)("div",g,[n[4]||(n[4]=(0,i.Lk)("h1",{class:"text-4xl md:text-5xl font-bold text-white mb-4"},"Welcome to NitiQuest",-1)),n[5]||(n[5]=(0,i.Lk)("p",{class:"text-lg md:text-xl text-white"},"Let's start your management learning journey!",-1)),(0,i.Lk)("button",{onClick:n[0]||(n[0]=(...e)=>a.showLoginModal&&a.showLoginModal(...e)),class:"mt-8 bg-[#3b5075] hover:bg-[#2e3e5a] text-white font-bold py-3 px-6 rounded-lg shadow-lg"}," Start Now ")]),s.isLoginModalVisible?((0,i.uX)(),(0,i.CE)("div",w,[(0,i.Lk)("div",h,[n[9]||(n[9]=(0,i.Lk)("h2",{class:"text-2xl font-bold text-center mb-4"},"Login",-1)),(0,i.Lk)("form",{onSubmit:n[3]||(n[3]=(0,o.D$)(((...e)=>a.handleLogin&&a.handleLogin(...e)),["prevent"])),class:"space-y-4"},[(0,i.Lk)("div",null,[n[6]||(n[6]=(0,i.Lk)("label",{for:"username",class:"block text-sm font-medium text-gray-700"},"Username",-1)),(0,i.bo)((0,i.Lk)("input",{type:"text","onUpdate:modelValue":n[1]||(n[1]=e=>s.username=e),id:"username",class:"mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200",required:""},null,512),[[o.Jo,s.username]])]),(0,i.Lk)("div",null,[n[7]||(n[7]=(0,i.Lk)("label",{for:"password",class:"block text-sm font-medium text-gray-700"},"Password",-1)),(0,i.bo)((0,i.Lk)("input",{type:"password","onUpdate:modelValue":n[2]||(n[2]=e=>s.password=e),id:"password",class:"mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-indigo-200",required:""},null,512),[[o.Jo,s.password]])]),n[8]||(n[8]=(0,i.Lk)("div",{class:"flex justify-center"},[(0,i.Lk)("button",{type:"submit",class:"bg-[#3b5075] hover:bg-[#2e3e5a] text-white font-bold py-2 px-4 rounded-lg"}," Submit ")],-1))],32)])])):(0,i.Q3)("",!0)])}const b={data(){return{isLoginModalVisible:!1,username:"",password:""}},methods:{showLoginModal(){this.isLoginModalVisible=!0},handleLogin(){"admin"===this.username&&"password"===this.password?(localStorage.setItem("isLoggedIn","true"),this.$router.push("/dashboard")):alert("Invalid credentials. Please try again.")}}},f=(0,a.A)(b,[["render",p]]),v=f;function L(e,n,t,o,r,s){const a=(0,i.g2)("router-link");return(0,i.uX)(),(0,i.CE)("div",null,[n[1]||(n[1]=(0,i.Lk)("h1",null,"Level 1",-1)),n[2]||(n[2]=(0,i.Lk)("div",{id:"game-container"},null,-1)),(0,i.bF)(a,{to:"/level-2"},{default:(0,i.k6)((()=>n[0]||(n[0]=[(0,i.eW)("Next Level")]))),_:1})])}var k=t(437);const x={mounted(){this.initGame()},methods:{initGame(){const e=new k.Z58,n=new k.ubm(75,window.innerWidth/window.innerHeight,.1,1e3),t=new k.JeP;t.setSize(window.innerWidth,window.innerHeight),document.getElementById("game-container").appendChild(t.domElement);const o=new k.iNn,i=new k.V9B({color:65280}),r=new k.eaF(o,i);function s(){requestAnimationFrame(s),r.rotation.x+=.01,r.rotation.y+=.01,t.render(e,n)}e.add(r),n.position.z=5,s()}}},y=(0,a.A)(x,[["render",L]]),E=y;function O(e,n,t,o,r,s){return(0,i.uX)(),(0,i.CE)("div",null,n[0]||(n[0]=[(0,i.Lk)("h1",null,"Level 1",-1),(0,i.Lk)("div",{id:"game-container"},null,-1)]))}const j={mounted(){this.initGame()},methods:{initGame(){const e=new k.Z58,n=new k.ubm(75,window.innerWidth/window.innerHeight,.1,1e3),t=new k.JeP;t.setSize(window.innerWidth,window.innerHeight),document.getElementById("game-container").appendChild(t.domElement);const o=new k.iNn,i=new k.V9B({color:65280}),r=new k.eaF(o,i);function s(){requestAnimationFrame(s),r.rotation.x+=.01,r.rotation.y+=.01,t.render(e,n)}e.add(r),n.position.z=5,s()}}},C=(0,a.A)(j,[["render",O]]),A=C,F=[{path:"/",component:v},{path:"/level-1",component:E},{path:"/level-2",component:A}],V=(0,c.aE)({history:(0,c.LA)(),routes:F}),M=(0,o.Ef)(u);M.use(V),M.mount("#app")}},n={};function t(o){var i=n[o];if(void 0!==i)return i.exports;var r=n[o]={exports:{}};return e[o](r,r.exports,t),r.exports}t.m=e,(()=>{var e=[];t.O=(n,o,i,r)=>{if(!o){var s=1/0;for(u=0;u<e.length;u++){for(var[o,i,r]=e[u],a=!0,l=0;l<o.length;l++)(!1&r||s>=r)&&Object.keys(t.O).every((e=>t.O[e](o[l])))?o.splice(l--,1):(a=!1,r<s&&(s=r));if(a){e.splice(u--,1);var d=i();void 0!==d&&(n=d)}}return n}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[o,i,r]}})(),(()=>{t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}})(),(()=>{t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()})(),(()=>{t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n)})(),(()=>{var e={524:0};t.O.j=n=>0===e[n];var n=(n,o)=>{var i,r,[s,a,l]=o,d=0;if(s.some((n=>0!==e[n]))){for(i in a)t.o(a,i)&&(t.m[i]=a[i]);if(l)var u=l(t)}for(n&&n(o);d<s.length;d++)r=s[d],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(u)},o=self["webpackChunkgame_frontend"]=self["webpackChunkgame_frontend"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))})();var o=t.O(void 0,[504],(()=>t(389)));o=t.O(o)})();
//# sourceMappingURL=app.ddb2f326.js.map