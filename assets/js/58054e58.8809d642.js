"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[6712],{8624:function(e,t,i){i.d(t,{v:function(){return r}});var o=i(7294),a=i(7674),r=Object.assign({},a.TW,{profiles:{nziie:{author:"vNziie--",avatar:"/img/logo.png",roleColor:"#00ffff"},moltensutilities:{author:"Molten's Utilities",avatar:"/img/moltensutilities.png",roleColor:"#5865f2",bot:!0},moltensupport:{author:"Molten Support",avatar:"/img/moltensupport.png",roleColor:"#ff0000",bot:!0},moonlightmanager:{author:"Moonlight Manager",avatar:"/img/moonlight.png",roleColor:"#fff99a",bot:!0},member:{author:"Member",avatar:"blue"},modmail:{author:"Modmail",avatar:"red",bot:!0},wumpus:{author:"Wumpus",avatar:"/img/wumpus.png"},bot:{author:"Bot",avatar:"blue",bot:!0},wumpusmanager:{author:"Wumpus Manager",avatar:"/img/wumpusmanager.PNG",bot:!0,roleColor:"#5865f2"}}});t.Z=function(e){var t=e.options,i=void 0===t?r:t,n=e.children;return o.createElement(a.qs.Provider,{value:i},o.createElement(a.dZ,null,n))}},802:function(e,t,i){i.r(t),i.d(t,{assets:function(){return p},contentTitle:function(){return u},default:function(){return h},frontMatter:function(){return c},metadata:function(){return m},toc:function(){return d}});var o=i(7462),a=i(3366),r=(i(7294),i(3905)),n=i(7674),s=i(8624),l=["components"],c={title:"\ud83c\udd95 Tickets v2",description:"A showcase of my Ticket System version 2.",sidebar_position:2},u=void 0,m={unversionedId:"showcase/tickets-v2",id:"showcase/tickets-v2",title:"\ud83c\udd95 Tickets v2",description:"A showcase of my Ticket System version 2.",source:"@site/docs/showcase/tickets-v2.md",sourceDirName:"showcase",slug:"/showcase/tickets-v2",permalink:"/showcase/tickets-v2",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\ud83c\udd95 Tickets v2",description:"A showcase of my Ticket System version 2.",sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Economy Bot (Concept)",permalink:"/showcase/economy-v2"},next:{title:"Configs v2",permalink:"/showcase/configs-v2"}},p={},d=[{value:"Features",id:"features",level:2},{value:"Logging",id:"ticket-logging",level:2},{value:"Configurations",id:"configurations",level:2},{value:"Ticket Categories",id:"ticket-categories",level:2}],k={toc:d};function h(e){var t=e.components,i=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},k,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\ud83c\udf9f\ufe0f ",(0,r.kt)("strong",{parentName:"p"},"Tickets v2")," uses the ",(0,r.kt)("a",{parentName:"p",href:"/showcase/configs-v2"},"configs v2")," system to maximize your control over how the system acts and responds. With this system, you can give your server members an easy way to get in contact with your staff team. Give your members the fast support they deserve. This system is inspired by my old public ticket bot, ",(0,r.kt)("strong",{parentName:"p"},"Ticket System"),", but simplified."),(0,r.kt)("h2",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Simplified ticket management"),(0,r.kt)("li",{parentName:"ul"},"Simplified ticket handler"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#configurations"},"More configurations")),(0,r.kt)("li",{parentName:"ul"},"Support for ",(0,r.kt)("a",{parentName:"li",href:"#ticket-categories"},"multiple ticket categories")," on one panel"),(0,r.kt)("li",{parentName:"ul"},"Ticket panels"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#ticket-logging"},"Beautified ticket logging"))),(0,r.kt)("h2",{id:"ticket-logging"},"Logging"),(0,r.kt)("p",null,"Enable ticket logging by running: ",(0,r.kt)("inlineCode",{parentName:"p"},"<prefix>config set ticket_transcripts yes")," and make sure to set the ",(0,r.kt)("inlineCode",{parentName:"p"},"log_channel")," configuration as it inherits the ticket log channel from there. "),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example:")," ",(0,r.kt)("a",{parentName:"p",href:"https://logs.discord.website/logs/akmw9p6t4XdoZCsQcCmexL"},"https://logs.discord.website/logs/akmw9p6t4XdoZCsQcCmexL")),(0,r.kt)("h2",{id:"configurations"},"Configurations"),(0,r.kt)("p",null,"The following configurations are what comes with tickets v2:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ticket_embed_color")," - Color of the embed sent when a ticket is created (default: inherits from ",(0,r.kt)("inlineCode",{parentName:"li"},"main_color"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ticket_transcripts")," - Whether transcripts (logs) of tickets should be created when a ticket is closed (default: yes)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ticket_created_response")," - The default description of the embed sent when a ticket is created, this can be customized for every ticket category via the create ticket category command"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ticket_created_title")," - Same as above, but the title of the embed"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ticket_limit")," - The maximum amount of tickets a user can have open at a time (default: 1)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tickets_dm_recipient_on_close")," - Whether the log of the ticket should be sent to the ticket author when their ticket is closed (default: yes)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tickets_dm_recipient_transcript")," - Whether the transcript of the ticket should be attached to the DM if the parent config is true (default: yes)")),(0,r.kt)("h2",{id:"ticket-categories"},"Ticket Categories"),(0,r.kt)("p",null,"Ticket categories allow you to add multiple buttons on a panel and allows users to click a button on that message to make a ticket in a certain category."),(0,r.kt)(s.Z,{mdxType:"DiscordComponent"},(0,r.kt)(n.kK,{author:"Bot",avatar:"blue",mdxType:"DiscordMessage"},(0,r.kt)("div",{slot:"interactions"},(0,r.kt)(n.un,{profile:"nziie",command:!0,mdxType:"DiscordInteraction"},"panels create")),(0,r.kt)(n._h,{borderColor:"#2ecc71",embedTitle:"Success",mdxType:"DiscordEmbed"},"Successfully created panel.")),(0,r.kt)(n.kK,{author:"Bot",avatar:"blue",mdxType:"DiscordMessage"},(0,r.kt)("div",{slot:"interactions"},(0,r.kt)(n.un,{profile:"nziie",command:!0,mdxType:"DiscordInteraction"},"ticket categories create")),(0,r.kt)(n._h,{borderColor:"#2ecc71",embedTitle:"Success",mdxType:"DiscordEmbed"},"Successfully added ticket category to panel.")),(0,r.kt)(n.kK,{author:"Bot",avatar:"blue",mdxType:"DiscordMessage"},(0,r.kt)(n._h,{borderColor:"#5865f2",embedTitle:"Support Tickets",authorIcon:"/img/nziiedev.png",authorName:"Nziie Development",mdxType:"DiscordEmbed"},"Click on the button below to create a new support ticket."),(0,r.kt)("div",{slot:"actions"},(0,r.kt)(n.jr,{mdxType:"DiscordButtons"},(0,r.kt)(n.qD,{type:"primary",mdxType:"DiscordButton"},"Create Ticket"))))))}h.isMDXComponent=!0}}]);