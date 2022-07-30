"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[895],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,b=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(b,l(l({ref:t},c),{},{components:n})):a.createElement(b,l({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4629:function(e,t,n){var a=n(7294),r=n(9960);t.Z=function(e){var t=e.type,n=e.label,o=e.icon,l=e.link,i=e.isDisabled,s=e.onClick,u=e.children,c=function(e){var t=[];return e.split(" ").forEach((function(e){t.push("pyc-button--"+e)})),t.join(" ")},p=a.createElement("button",{className:"pyc-button"+(t?" "+c(t):""),"aria-label":n||(null==u?void 0:u.toString()),disabled:i,onClick:s},o&&a.createElement("i",{className:"pyc-button__icon","aria-hidden":"true"},o),u&&a.createElement("span",{className:"pyc-button__label"},u));return l?a.createElement(r.Z,{className:"pyc-button"+(t?" "+c(t):""),"aria-label":n||(null==u?void 0:u.toString()),href:l},o&&a.createElement("i",{className:"pyc-button__icon","aria-hidden":"true"},o),u&&a.createElement("span",{className:"pyc-button__label"},u)):p}},6157:function(e,t,n){n.r(t),n.d(t,{assets:function(){return x},contentTitle:function(){return T},default:function(){return E},frontMatter:function(){return g},metadata:function(){return w},toc:function(){return P}});var a=n(7462),r=n(3366),o=n(7294),l=n(3905),i=n(4629),s=n(6010),u=n(2389),c=n(7392),p=n(7094),d=n(2466),m="tabList__CuJ",b="tabItem_LNqP";function v(e){var t,n,r=e.lazy,l=e.block,i=e.defaultValue,u=e.values,v=e.groupId,f=e.className,h=o.Children.map(e.children,(function(e){if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=u?u:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),y=(0,c.l)(k,(function(e,t){return e.value===t.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===i?i:null!=(t=null!=i?i:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:h[0].props.value;if(null!==g&&!k.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var T=(0,p.U)(),w=T.tabGroupChoices,x=T.setTabGroupChoices,P=(0,o.useState)(g),_=P[0],E=P[1],N=[],I=(0,d.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var O=w[v];null!=O&&O!==_&&k.some((function(e){return e.value===O}))&&E(O)}var D=function(e){var t=e.currentTarget,n=N.indexOf(t),a=k[n].value;a!==_&&(I(t),E(a),null!=v&&x(v,String(a)))},C=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a,r=N.indexOf(e.currentTarget)+1;n=null!=(a=N[r])?a:N[0];break;case"ArrowLeft":var o,l=N.indexOf(e.currentTarget)-1;n=null!=(o=N[l])?o:N[N.length-1]}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,s.Z)("tabs-container",m)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":l},f)},k.map((function(e){var t=e.value,n=e.label,r=e.attributes;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:_===t?0:-1,"aria-selected":_===t,key:t,ref:function(e){return N.push(e)},onKeyDown:C,onFocus:D,onClick:D},r,{className:(0,s.Z)("tabs__item",b,null==r?void 0:r.className,{"tabs__item--active":_===t})}),null!=n?n:t)}))),r?(0,o.cloneElement)(h.filter((function(e){return e.props.value===_}))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==_})}))))}function f(e){var t=(0,u.Z)();return o.createElement(v,(0,a.Z)({key:String(t)},e))}var h="tabItem_Ymn6";function k(e){var t=e.children,n=e.hidden,a=e.className;return o.createElement("div",{role:"tabpanel",className:(0,s.Z)(h,a),hidden:n},t)}var y=["components"],g={title:"Services",description:"Development services I offer",sidebar_position:3},T=void 0,w={unversionedId:"services",id:"services",title:"Services",description:"Development services I offer",source:"@site/docs/services.md",sourceDirName:".",slug:"/services",permalink:"/services",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Services",description:"Development services I offer",sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Introduction",permalink:"/introduction"},next:{title:"Reviews",permalink:"/reviews"}},x={},P=[{value:"Info",id:"info",level:2},{value:"Bot plans (tiers)",id:"bot-plans-tiers",level:2},{value:"Basic Plan",id:"basic-plan",level:3},{value:"Advanced Plan",id:"advanced-plan",level:3},{value:"Premium Plan",id:"premium-plan",level:3},{value:"Extra Options",id:"extra-options",level:2},{value:"White labelling",id:"white-labelling",level:3}],_={toc:P};function E(e){var t=e.components,n=(0,r.Z)(e,y);return(0,l.kt)("wrapper",(0,a.Z)({},_,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"info"},"Info"),(0,l.kt)("p",null,"I offer custom Discord bots. You can contact me in my Discord server - ",(0,l.kt)("a",{parentName:"p",href:"/discord"},"Nziie's Development"),". "),(0,l.kt)("p",null,"I code all Discord bots in Python (",(0,l.kt)("a",{parentName:"p",href:"https://pycord.dev"},"Pycord")," - discord.py v2 fork). The bots are hosted on powerful servers with good uptime."),(0,l.kt)("h2",{id:"bot-plans-tiers"},"Bot plans (tiers)"),(0,l.kt)("h3",{id:"basic-plan"},"Basic Plan"),(0,l.kt)("p",null,"This plan is mainly for small bots and a good amount of features, may be slower compared to the other plans' specs."),(0,l.kt)(f,{mdxType:"Tabs"},(0,l.kt)(k,{value:"_price",label:"Price",default:!0,mdxType:"TabItem"},(0,l.kt)("strong",null,"($3.80/3.75\u20ac) / 3months ($1.2 / month)")),(0,l.kt)(k,{value:"_ram",label:"RAM",mdxType:"TabItem"},(0,l.kt)("strong",null,"128 MB")),(0,l.kt)(k,{value:"_cpu",label:"CPU %",mdxType:"TabItem"},(0,l.kt)("strong",null,"15% CPU")),(0,l.kt)(k,{value:"_disk",label:"Disk Space",mdxType:"TabItem"},(0,l.kt)("strong",null,"450 MB"))),(0,l.kt)("div",{className:"pyc-hero__actions"},(0,l.kt)(i.Z,{link:"https://client.pinghost-v2.pinglik.eu/index.php?rp=/store/vnziie/discord-bot-basic",class:"basicplanbutton",mdxType:"Button"},"Purchase")),(0,l.kt)("h3",{id:"advanced-plan"},"Advanced Plan"),(0,l.kt)("p",null,"This is plan runs more complex bots better than the ",(0,l.kt)("a",{parentName:"p",href:"#basic-plan"},"basic plan"),". This would be good for a bot that relies on Discord events, such as Modmail (for listening to messages). I personally suggest you to pick this plan, most of our clients have this."),(0,l.kt)(f,{mdxType:"Tabs"},(0,l.kt)(k,{value:"_price",label:"Price",default:!0,mdxType:"TabItem"},(0,l.kt)("strong",null,"($5.80/5.75\u20ac)/ 3 months ($1.9 / month)")),(0,l.kt)(k,{value:"_ram",label:"RAM",mdxType:"TabItem"},(0,l.kt)("strong",null,"256 MB")),(0,l.kt)(k,{value:"_cpu",label:"CPU %",mdxType:"TabItem"},(0,l.kt)("strong",null,"30% CPU")),(0,l.kt)(k,{value:"_disk",label:"Disk Space",mdxType:"TabItem"},(0,l.kt)("strong",null,"950 MB"))),(0,l.kt)("div",{className:"pyc-hero__actions"},(0,l.kt)(i.Z,{link:"https://client.pinghost-v2.pinglik.eu/index.php?rp=/store/vnziie/discord-bot-advanced",mdxType:"Button"},"Purchase")),(0,l.kt)("h3",{id:"premium-plan"},"Premium Plan"),(0,l.kt)("p",null,"This plan is great for all complicated bots, much faster than all the other plans."),(0,l.kt)(f,{mdxType:"Tabs"},(0,l.kt)(k,{value:"_price",label:"Price",default:!0,mdxType:"TabItem"},(0,l.kt)("strong",null,"($10.90/10.75\u20ac) / 3 months ($3.6 / month)")),(0,l.kt)(k,{value:"_ram",label:"RAM",mdxType:"TabItem"},(0,l.kt)("strong",null,"512 MB")),(0,l.kt)(k,{value:"_cpu",label:"CPU %",mdxType:"TabItem"},(0,l.kt)("strong",null,"50% CPU")),(0,l.kt)(k,{value:"_disk",label:"Disk Space",mdxType:"TabItem"},(0,l.kt)("strong",null,"1024 MB"))),(0,l.kt)("div",{className:"pyc-hero__actions"},(0,l.kt)(i.Z,{link:"https://client.pinghost-v2.pinglik.eu/index.php?rp=/store/vnziie/discord-bot-premium",mdxType:"Button"},"Purchase")),(0,l.kt)("br",null),(0,l.kt)("admonition",{type:"info"},(0,l.kt)("p",{parentName:"admonition"},"Please make sure to let me know what type of bot you want when you purchase by opening a ticket in my ",(0,l.kt)("a",{parentName:"p",href:"/discord"},"development server"),"!")),(0,l.kt)("admonition",{type:"note"},(0,l.kt)("p",{parentName:"admonition"},"You are not required to provide all personal information to us on register page. Just First name (you can enter there nickname), Email address, Discord Username with tag form fields are required on the checkout (register) page.")),(0,l.kt)("h2",{id:"extra-options"},"Extra Options"),(0,l.kt)("p",null,"Here you can find list of extra (configurable options). If you are interested in some of these extra options for your bot, please let me know by opening a ticket in my ",(0,l.kt)("a",{parentName:"p",href:"/discord"},"development server"),". You can purchase extra options anytime (both for new and existing bots)."),(0,l.kt)("h3",{id:"white-labelling"},"White labelling"),(0,l.kt)(f,{mdxType:"Tabs"},(0,l.kt)(k,{value:"_custom-about-me",label:"Custom About Me section",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"With this, you can set your custom message in about me section for the bot (you can also remove link to vNziie's website)"),(0,l.kt)("p",null,"Price: ",(0,l.kt)("strong",null,"$3.0 / 3 months ($1.0 / month)"))),(0,l.kt)(k,{value:"_whitelabel",label:"Whitelabel bot (own application)",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"You will need to make own application on ",(0,l.kt)("a",{href:"https://discord.com/developers/applications"},"Discord Dev Portal")," and enable all intents. You will also need to provide your bot token to vNziie. This allows you to change bot username, avatar, about me section, etc. on your own. Good for those who want to act that it's their own bot."),(0,l.kt)("p",null,"Price: ",(0,l.kt)("strong",null,"$5.0 / 3 months ($1.66 / month)")))))}E.isMDXComponent=!0}}]);