"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[4643],{8624:function(e,t,a){a.d(t,{v:function(){return r}});var o=a(7294),n=a(7674),r=Object.assign({},n.TW,{profiles:{nziie:{author:"vNziie--",avatar:"/img/logo.png",roleColor:"#00ffff"},moltensutilities:{author:"Molten's Utilities",avatar:"/img/moltensutilities.png",roleColor:"#5865f2",bot:!0},moltensupport:{author:"Molten Support",avatar:"/img/moltensupport.png",roleColor:"#ff0000",bot:!0},member:{author:"Member",avatar:"blue"},modmail:{author:"Modmail",avatar:"red",bot:!0},wumpus:{author:"Wumpus",avatar:"/img/wumpus.png"},wumpusmanager:{author:"Wumpus Manager",avatar:"/img/wumpusmanager.PNG",bot:!0,roleColor:"#5865f2"}}});t.Z=function(e){var t=e.options,a=void 0===t?r:t,i=e.children;return o.createElement(n.qs.Provider,{value:a},o.createElement(n.dZ,null,i))}},3337:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return k}});var o=a(7462),n=a(3366),r=(a(7294),a(3905)),i=a(7674),l=a(8624),m=["components"],s={title:"Modmail Guide",description:"A modmail guide reference to all my clients whom have a modmail bot"},d=void 0,p={unversionedId:"blogs/modmail-guide",id:"blogs/modmail-guide",title:"Modmail Guide",description:"A modmail guide reference to all my clients whom have a modmail bot",source:"@site/docs/blogs/modmail-guide.md",sourceDirName:"blogs",slug:"/blogs/modmail-guide",permalink:"/blogs/modmail-guide",draft:!1,tags:[],version:"current",frontMatter:{title:"Modmail Guide",description:"A modmail guide reference to all my clients whom have a modmail bot"},sidebar:"defaultSidebar",previous:{title:"Blogs",permalink:"/category/blogs"},next:{title:"Molten Advertising",permalink:"/category/molten-advertising"}},u={},k=[{value:"Modmail Commands",id:"modmail-commands",level:2},{value:"Snippet Commands",id:"snippet-commands",level:2},{value:"Example Situations",id:"example-situations",level:2},{value:"Moving Threads",id:"moving-threads",level:2}],c={toc:k};function g(e){var t=e.components,a=(0,n.Z)(e,m);return(0,r.kt)("wrapper",(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Overview",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"In this guide you will learn how to use and operate ",(0,r.kt)("strong",{parentName:"p"},"all modmail bots")," made by me (vNziie--#7777). ")),(0,r.kt)("details",{className:"customdetails"},(0,r.kt)("summary",null,"\ud83d\udd11 Key"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"<prefix>")," - This should be the prefix of the modmail bot you are using (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},".")," ",(0,r.kt)("inlineCode",{parentName:"p"},"!")," ",(0,r.kt)("inlineCode",{parentName:"p"},"?")," ",(0,r.kt)("inlineCode",{parentName:"p"},"-"),")")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"[foo|bar]")," - Text separated in brackets means you can use either ",(0,r.kt)("strong",{parentName:"p"},"foo")," or ",(0,r.kt)("strong",{parentName:"p"},"bar")," to get the same command result")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"[arg=value]")," - An argument in brackets means this is an ",(0,r.kt)("strong",{parentName:"p"},"optional argument"),", if it's not provided a default value of '",(0,r.kt)("strong",{parentName:"p"},"value"),"' will take it's place")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"<arg>")," - An argument in less and greater than signs means that this is a ",(0,r.kt)("strong",{parentName:"p"},"required argument"),", it must be provided or the command will fail"))),(0,r.kt)("h2",{id:"modmail-commands"},"Modmail Commands"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Usage"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"<","prefix",">","[reply","|","r]"," ","<","message",">")),(0,r.kt)("td",{parentName:"tr",align:null},"Reply to a modmail thread (this is an anonymous reply)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"<","prefix",">","[close","|","c]"," ",(0,r.kt)("a",null),"[time]"," ",(0,r.kt)("a",null),"[message]")),(0,r.kt)("td",{parentName:"tr",align:null},"Close a thread with an optional duration to wait to close the thread (timed close) - ",(0,r.kt)("inlineCode",{parentName:"td"},"message")," will appear on the user's end. This can be 'Have a great day'")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"<","prefix",">","alert ","[member]")),(0,r.kt)("td",{parentName:"tr",align:null},"Notify yourself or another member of the next thread messaged received")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"<","prefix",">","move ","<","name",">")),(0,r.kt)("td",{parentName:"tr",align:null},"Move a thread to a category by name")))),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"category_name")," can be a shorthand word of a category name."),(0,r.kt)("p",{parentName:"admonition"},"For example, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},".move moderation")," to move a thread to the moderation team.")),(0,r.kt)("h2",{id:"snippet-commands"},"Snippet Commands"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Usage"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"<","prefix",">","[snippet","|","s]"," ",(0,r.kt)("a",null),"[name]"," ")),(0,r.kt)("td",{parentName:"tr",align:null},"View all the snippets or send one in the thread by providing ",(0,r.kt)("inlineCode",{parentName:"td"},"name"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"<","prefix",">","[snippet","|","s]",(0,r.kt)("a",null)," plain ","[name]"," ")),(0,r.kt)("td",{parentName:"tr",align:null},"Send a snippet in a plain (non-embedded) message")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"<","prefix",">","[snippet","|","s]"," add ","<","name",">"," ","<","value",">")),(0,r.kt)("td",{parentName:"tr",align:null},"(Admins Only) Add a snippet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"<","prefix",">","[snippet","|","s]"," remove ","<","name",">"," ")),(0,r.kt)("td",{parentName:"tr",align:null},"(Admins Only) Remove/delete a snippet")))),(0,r.kt)("h2",{id:"example-situations"},"Example Situations"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u279d ",(0,r.kt)("span",{className:"mention"},"#member-0000")),(0,r.kt)(l.Z,{mdxType:"DiscordComponent"},(0,r.kt)(i.kK,{profile:"modmail",mdxType:"DiscordMessage"},(0,r.kt)(i._h,{authorIcon:"/img/discord.png",authorName:"Member#0000",borderColor:"#5865f2",timestamp:"12/24/2022",mdxType:"DiscordEmbed"},"hello",(0,r.kt)("span",{slot:"footer"},"User"))),(0,r.kt)(i.kK,{profile:"nziie",mdxType:"DiscordMessage"},"!snippet hi"),(0,r.kt)(i.kK,{profile:"modmail",mdxType:"DiscordMessage"},(0,r.kt)(i._h,{authorIcon:"/img/logo.png",authorName:"vNziie--#7777",borderColor:"#2ecc71",timestamp:"12/24/2022",mdxType:"DiscordEmbed"},"Hello, what can we assist you with today?",(0,r.kt)("span",{slot:"footer"},"Anonymous Reply"))),(0,r.kt)(i.kK,{profile:"nziie",mdxType:"DiscordMessage"},"!alert"),(0,r.kt)(i.kK,{profile:"modmail",mdxType:"DiscordMessage"},"You will be notified on a new thread message received!"),(0,r.kt)(i.kK,{profile:"modmail",mdxType:"DiscordMessage"},(0,r.kt)(i.Hz,{highlight:!0,mdxType:"DiscordMention"},l.v.profiles.nziie.author),(0,r.kt)(i._h,{authorIcon:"/img/discord.png",authorName:"Member#0000",borderColor:"#5865f2",timestamp:"12/24/2022",mdxType:"DiscordEmbed"},"i would like to report a member",(0,r.kt)("span",{slot:"footer"},"User"))),(0,r.kt)(i.kK,{profile:"nziie",mdxType:"DiscordMessage"},"!snippet report"),(0,r.kt)(i.kK,{profile:"modmail",mdxType:"DiscordMessage"},(0,r.kt)(i._h,{authorIcon:"/img/logo.png",authorName:"vNziie--#7777",borderColor:"#2ecc71",timestamp:"12/24/2022",mdxType:"DiscordEmbed"},"Please fill out the format below to report a member",(0,r.kt)("br",null),(0,r.kt)("code",null,"User ID:",(0,r.kt)("br",null),"Reason:",(0,r.kt)("br",null),"Proof:"),(0,r.kt)("span",{slot:"footer"},"Anonymous Reply"))),(0,r.kt)(i.kK,{profile:"modmail",mdxType:"DiscordMessage"},(0,r.kt)(i._h,{authorIcon:"/img/discord.png",authorName:"Member#0000",borderColor:"#5865f2",timestamp:"12/24/2022",mdxType:"DiscordEmbed"},"User ID: 12345678901234567",(0,r.kt)("br",null),"Reason: DM advertising Proof:",(0,r.kt)("span",{slot:"footer"},"User"))),(0,r.kt)(i.kK,{profile:"nziie",mdxType:"DiscordMessage"},"!reply Your report will be investigated and appropriate action will be taken. Is there anything else we can help you with?"),(0,r.kt)(i.kK,{profile:"modmail",mdxType:"DiscordMessage"},(0,r.kt)(i._h,{authorIcon:"/img/logo.png",authorName:"vNziie--#7777",borderColor:"#2ecc71",timestamp:"12/24/2022",mdxType:"DiscordEmbed"},"Your report will be investigated and appropriate action will be taken. Is there anything else we can help you with?",(0,r.kt)("span",{slot:"footer"},"Anonymous Reply"))),(0,r.kt)(i.kK,{profile:"modmail",mdxType:"DiscordMessage"},(0,r.kt)(i._h,{authorIcon:"/img/discord.png",authorName:"Member#0000",borderColor:"#5865f2",timestamp:"12/24/2022",mdxType:"DiscordEmbed"},"thanks that's all for today.",(0,r.kt)("span",{slot:"footer"},"User"))),(0,r.kt)(i.kK,{profile:"nziie",mdxType:"DiscordMessage"},"!snippet thanks"),(0,r.kt)(i.kK,{profile:"modmail",mdxType:"DiscordMessage"},(0,r.kt)(i._h,{authorIcon:"/img/logo.png",authorName:"vNziie--#7777",borderColor:"#2ecc71",timestamp:"12/24/2022",mdxType:"DiscordEmbed"},"Thanks for contacting (server) support staff! We hope you had a good experience and that we full-filled your request!",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("blockquote",null,"This thread will close ",(0,r.kt)("strong",null,"in 10 minutes"),". Please note that replying to this message will cancel the timed closure. ",(0,r.kt)("strong",null,"Please only reply to this message if you need more help.")),(0,r.kt)("span",{slot:"footer"},"Anonymous Reply"))),(0,r.kt)(i.kK,{profile:"nziie",mdxType:"DiscordMessage"},".close 10m"),(0,r.kt)(i.kK,{profile:"modmail",mdxType:"DiscordMessage"},"\ud83d\udd12 This thread will close ",(0,r.kt)("span",{className:"timestamp"},"in 10 minutes")," if the user doesn't reply within that time limit."),(0,r.kt)(i.kK,{profile:"wumpus",mdxType:"DiscordMessage"},(0,r.kt)(i._h,{borderColor:"#5865f2",mdxType:"DiscordEmbed"},"This thread has been closed."))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"moving-threads"},"Moving Threads"),(0,r.kt)("p",null,"You can move threads to other modmail categories with ",(0,r.kt)("inlineCode",{parentName:"p"},"<prefix>move <category_name>"),". ",(0,r.kt)("inlineCode",{parentName:"p"},"category_name")," can be a shorthand name of a category name. For example:\n",(0,r.kt)("em",{parentName:"p"},"(example prefix: ",(0,r.kt)("inlineCode",{parentName:"em"},"!"),")")),(0,r.kt)(l.Z,{mdxType:"DiscordComponent"},(0,r.kt)(i.kK,{profile:"nziie",mdxType:"DiscordMessage"},"!move moderation"),(0,r.kt)(i.kK,{profile:"modmail",mdxType:"DiscordMessage"},"\u2705 Successfully moved this thread to ",(0,r.kt)("code",null,"Moderation Team"),"!")),(0,r.kt)("br",null),(0,r.kt)(l.Z,{mdxType:"DiscordComponent"},(0,r.kt)(i.kK,{profile:"nziie",mdxType:"DiscordMessage"},"!move partnership"),(0,r.kt)(i.kK,{profile:"modmail",mdxType:"DiscordMessage"},"\u2705 Successfully moved this thread to ",(0,r.kt)("code",null,"Partnership Team"),"!")),(0,r.kt)("br",null),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This guide is not completely done yet as more feature to modmail will be added eventually.")))}g.isMDXComponent=!0}}]);