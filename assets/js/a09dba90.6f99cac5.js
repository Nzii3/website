"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[488],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return k}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=m(a),k=r,c=u["".concat(p,".").concat(k)]||u[k]||d[k]||o;return a?n.createElement(c,l(l({ref:t},s),{},{components:a})):n.createElement(c,l({ref:t},s))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var m=2;m<o;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7440:function(e,t,a){a.r(t),a.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return d}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),l=["components"],i={title:"Modmail Guide",description:"The modmail guide for Molten Advertising (staff only)"},p=void 0,m={unversionedId:"blogs/molten-advertising/modmail-guide",id:"blogs/molten-advertising/modmail-guide",title:"Modmail Guide",description:"The modmail guide for Molten Advertising (staff only)",source:"@site/docs/blogs/molten-advertising/modmail-guide.md",sourceDirName:"blogs/molten-advertising",slug:"/blogs/molten-advertising/modmail-guide",permalink:"/blogs/molten-advertising/modmail-guide",draft:!1,tags:[],version:"current",frontMatter:{title:"Modmail Guide",description:"The modmail guide for Molten Advertising (staff only)"},sidebar:"defaultSidebar",previous:{title:"Moderation Guide",permalink:"/blogs/molten-advertising/moderation-guide"},next:{title:"Pycord Examples",permalink:"/category/pycord-examples"}},s={},d=[{value:"Modmail Commands",id:"modmail-commands",level:2},{value:"Snippet Commands",id:"snippet-commands",level:2},{value:"Modmail Rules",id:"modmail-rules",level:2},{value:"Example Situations",id:"example-situations",level:2},{value:"Ready to handle threads?",id:"ready-to-handle-threads",level:2}],u={toc:d};function k(e){var t=e.components,a=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Overview",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"In this guide you will learn how to use and operate ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/gbFJm7D7BJ"},"Molten Support"),". "),(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/gbFJm7D7BJ"},"Molten Support"),"'s prefix is ",(0,o.kt)("inlineCode",{parentName:"p"},".")," ","[",(0,o.kt)("strong",{parentName:"p"},"period"),"]")),(0,o.kt)("details",{className:"customdetails"},(0,o.kt)("summary",null,"\ud83d\udd11 Key"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"[foo|bar]")," - Text separated in brackets means you can use either ",(0,o.kt)("strong",{parentName:"p"},"foo")," or ",(0,o.kt)("strong",{parentName:"p"},"bar")," to get the same command result")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"[arg=value]")," - An argument in brackets means this is an ",(0,o.kt)("strong",{parentName:"p"},"optional argument"),", if it's not provided a default value of '",(0,o.kt)("strong",{parentName:"p"},"value"),"' will take it's place")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"<arg>")," - An argument in less and greater than signs means that this is a ",(0,o.kt)("strong",{parentName:"p"},"required argument"),", it must be provided or the command will fail"))),(0,o.kt)("h2",{id:"modmail-commands"},"Modmail Commands"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Usage"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,".","[reply","|","r]"," ","<","message",">")),(0,o.kt)("td",{parentName:"tr",align:null},"Reply to a modmail thread (this is an anonymous reply)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,".","[close","|","c]"," ",(0,o.kt)("a",null),"[time]"," ",(0,o.kt)("a",null),"[message]")),(0,o.kt)("td",{parentName:"tr",align:null},"Close a thread with an optional duration to wait to close the thread (timed close) - ",(0,o.kt)("inlineCode",{parentName:"td"},"message")," will appear on the user's end. This can be 'Have a great day'")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,".alert ","[member]")),(0,o.kt)("td",{parentName:"tr",align:null},"Notify yourself or another member of the next thread messaged received")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,".move ","<","name",">")),(0,o.kt)("td",{parentName:"tr",align:null},"Move a thread to a category by name")))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("inlineCode",{parentName:"p"},"category_name")," can be a shorthand word of a category name."),(0,o.kt)("p",{parentName:"admonition"},"For example, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},".move moderation")," to move a thread to the moderation team.")),(0,o.kt)("h2",{id:"snippet-commands"},"Snippet Commands"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Usage"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,".","[snippet","|","s]"," ",(0,o.kt)("a",null),"[name]"," ")),(0,o.kt)("td",{parentName:"tr",align:null},"View all the snippets or send one in the thread by providing ",(0,o.kt)("inlineCode",{parentName:"td"},"name"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,".","[snippet","|","s]"," add ","<","name",">"," ","<","value",">")),(0,o.kt)("td",{parentName:"tr",align:null},"(Management Only) Add a snippet")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,".","[snippet","|","s]"," remove ","<","name",">"," ")),(0,o.kt)("td",{parentName:"tr",align:null},"(Management Only) Remove/delete a snippet")))),(0,o.kt)("h2",{id:"modmail-rules"},"Modmail Rules"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.")," When a thread is made, all online staff will get pinged. ",(0,o.kt)("strong",{parentName:"p"},"To claim a thread, simply say 'mine'"),", other staff should obey that you claimed the thread. If you\u2019re inactive in a thread for a few hours when a user responds, they have the right to 'overclaim.'"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2."),' There is such a thing as "over-claiming" where you claim a claimed thread. ',(0,o.kt)("strong",{parentName:"p"},"You can only overclaim if you are a management member and need your serious intervention"),", you were asked by the person who originally claimed the ticket to claim or if the person who claimed it isn't responding to your ping after 6 hours. Overclaim for no good reason will get you a strike or your modmail permissions revoked for a duration of time."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3.")," When handling a thread, ",(0,o.kt)("strong",{parentName:"p"},"remain professional at all times"),". ",(0,o.kt)("strong",{parentName:"p"},"Don't use shortened words"),' such as "',(0,o.kt)("strong",{parentName:"p"},"k"),'" or "',(0,o.kt)("strong",{parentName:"p"},"xD"),'" or "',(0,o.kt)("strong",{parentName:"p"},"lol"),"\". That doesn't look very professional. With this, capitalization and grammar must be used as well. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"4.")," ",(0,o.kt)("u",null,"Stay respectful at all times"),". Everyone must be treated with respect regardless of their words. In this case, ping an online management member."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"5.")," If someone reported a member, you aren't supposed to be sharing the actions. Use the proper snippets according to the situation. You may not tell a thread user ",(0,o.kt)("strong",{parentName:"p"},"any")," actions against anyone. If you do this, you may receive a staff strike or your modmail license will be ",(0,o.kt)("strong",{parentName:"p"},"revoked"),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"6.")," Move a thread to the correct team category with ",(0,o.kt)("inlineCode",{parentName:"p"},".move <team>"),". Please don't handle threads that aren't for your department. "),(0,o.kt)("h2",{id:"example-situations"},"Example Situations"),(0,o.kt)("details",{className:"customdetails"},(0,o.kt)("summary",null,"Situation 1"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"User:")," Hey, I'd like to report a member")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Runs ",(0,o.kt)("inlineCode",{parentName:"em"},".snippet report"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"You:"),"\nTo report a member, please use this format:"),(0,o.kt)("pre",{parentName:"blockquote"},(0,o.kt)("code",{parentName:"pre"},"User ID:\nReason:\nProof:\n"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"User:"),"\nUser ID: 1234567890123456789\nReason: DM advertising\nProof: ",(0,o.kt)("em",{parentName:"p"},"(attachment)"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"..."))),(0,o.kt)("details",{className:"customdetails"},(0,o.kt)("summary",null,"Situation 2"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"User:")," Can I partner?")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Runs ",(0,o.kt)("inlineCode",{parentName:"em"},".move partnership"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"..."))),(0,o.kt)("details",{className:"customdetails"},(0,o.kt)("summary",null,"Situation 3"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"User:")," Why can't I access #lounge?")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Runs ",(0,o.kt)("inlineCode",{parentName:"em"},".snippet loungerole"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"You:")," You can\u2019t talk in the main lounge because you don\u2019t have the correct role. Please read ",(0,o.kt)("a",{parentName:"p",href:"#example-situations"},"this")," announcement.")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"User:")," thanks!")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Runs ",(0,o.kt)("inlineCode",{parentName:"em"},".snippet morehelp"))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"You:")," Is there anything else I can help you with today?")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"User:")," No, thanks")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Runs ",(0,o.kt)("inlineCode",{parentName:"em"},".snippet thanks"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"...")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Runs ",(0,o.kt)("inlineCode",{parentName:"em"},".close 10m"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"..."))),(0,o.kt)("h2",{id:"ready-to-handle-threads"},"Ready to handle threads?"),(0,o.kt)("p",null,"Message ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/users/550476809280421903"},"vNziie--#7777")," on Discord and make sure to say you've read the modmail guide!"))}k.isMDXComponent=!0}}]);