"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[3014],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),m=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=m(n),d=r,h=p["".concat(l,".").concat(d)]||p[d]||u[d]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var m=2;m<o;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1311:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return u}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],s={title:"Economy Bot (Concept)",description:"A showcase of my Economy System version 2. Newly and improved customization and economy handler.",sidebar_position:1},l="Economy Bot (Concept)",m={unversionedId:"showcase/economy-v2",id:"showcase/economy-v2",title:"Economy Bot (Concept)",description:"A showcase of my Economy System version 2. Newly and improved customization and economy handler.",source:"@site/docs/showcase/economy-v2.md",sourceDirName:"showcase",slug:"/showcase/economy-v2",permalink:"/showcase/economy-v2",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Economy Bot (Concept)",description:"A showcase of my Economy System version 2. Newly and improved customization and economy handler.",sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Showcase",permalink:"/category/showcase"},next:{title:"\ud83c\udd95 Tickets v2",permalink:"/showcase/tickets-v2"}},c={},u=[{value:"Settings Tree",id:"settings-tree",level:2},{value:"Commands",id:"commands",level:2}],p={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"economy-bot-concept"},"Economy Bot (Concept)"),(0,o.kt)("p",null,"Economy v1 was, ",(0,o.kt)("em",{parentName:"p"},"good enough")," for how it was. It had a decent money handling system, but what it lacked was customization. It wasn\u2019t really popular because I didn\u2019t showcase it often, as I wasn\u2019t very proud of it. ",(0,o.kt)("strong",{parentName:"p"},"But oh damn,")," ",(0,o.kt)("strong",{parentName:"p"},"Economy v2")," is the exact opposite of what I just said. "),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"You\u2019re in for a wild ride for these release notes")),(0,o.kt)("iframe",{src:"https://giphy.com/embed/PUBxelwT57jsQ",width:"480",height:"332",frameBorder:"0",class:"giphy-embed",allowFullScreen:!0}),(0,o.kt)("h2",{id:"settings-tree"},"Settings Tree"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Here is a tree diagram of all the settings, their \u201cchildren\u201d and other stuff related to economy settings.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Global settings"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Currency Name"),": name of the currency (e.g. coins)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Currency Emoji"),": emoji representing the currency (e.g. \ud83e\ude99; custom emojis accepted)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Starting amount"),": the starting amount users get when they first are registered (when they first use an economy command ~ default: 10)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Maximum Payout:")," a random number between 0-this number is chosen for any economy payout, or an event where a user loses money",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"You can double this to do something like a double economy day or anything, up to you!"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Robbing:"),' whether robbing is enabled ("No" by default to disable robbing; you can change the settings for the slash command in your server\u2019s ',(0,o.kt)("strong",{parentName:"li"},"Integrations")," tab to lock it to certain roles if needed)"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Crimes"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Crime item (object):"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Name:")," name of the crime; displayed on the button"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Caught Weight:")," a number 0-10 (0=never caught 10=always caught; higher the number, the more of a chance a user will get caught while committing a crime)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Ability to die:"),' Yes or No whether a user can die committing this crime, usually "No", if they don\u2019t any item marked as a "Life saver", they will lose all their items, economy XP, and anything they had in the bank or wallet; ',(0,o.kt)("strong",{parentName:"li"},"completely restarting"),". "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Payout Multiplier:")," if the crime was successful, the randomly generated payout will be multiplied by this number for a total payout; for no multiplier set to 0; once decimal value is supported (e.g. 1.5, 2.5, etc.)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Success Messages:"),' a list of messages (with variables supported) that are randomly chose from if the crime was successful (e.g. "You robbed a bank and got away with {economy.currency_emoji} ',(0,o.kt)("strong",{parentName:"li"},"{payout.formatted}"),' {economy.currency_name}!" \u2014> "You robbed a bank and got away with \ud83e\ude99 ',(0,o.kt)("strong",{parentName:"li"},"1,239"),' coins!"'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Caught Messages:")," same as above, but if the user was caught during a crime, the ",(0,o.kt)("inlineCode",{parentName:"li"},"payout")," variable and attributed will be set to 0, since there is no payout; ",(0,o.kt)("inlineCode",{parentName:"li"},"lost")," (without comma) and ",(0,o.kt)("inlineCode",{parentName:"li"},"lost.formatted")," (with comma for thousands) are introduced and valid"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Items"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Item (represents an item object):"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Name:")," name of the item (e.g. banknote)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Description:")," description of the item"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Type:")," type of the item; valid types: bank note (gives bank capacity), life saver (saves someone from dying), coin multiplier item, "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Rarity:")," common, rare, super rare, or legendary (determines how often it is given)"))))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Searches"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Search place (represents a search place object):"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Name:")," name of the place (e.g. pocket)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Chance:")," chance type of finding something (low, medium, high)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Possible Items:")," items that are possible to find in the spot (coins by default, but can be removed and changed to only items; at least one thing is required for it to be saved)"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Payout Multiplier:")," if the user found something, the randomly generated payout will be multiplied by this number for a total payout; for no multiplier set to 0; once decimal value is supported (e.g. 1.5, 2.5, etc.)")))))),(0,o.kt)("h2",{id:"commands"},"Commands"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Here is a list of all the commands in economy. All of these are customizable via the integrations tab")),(0,o.kt)("span",{className:"mention"},"/admin general")," - Manage the general economy settings",(0,o.kt)("br",null),(0,o.kt)("span",{className:"mention"},"/admin crimes")," - Manage crimes",(0,o.kt)("br",null),(0,o.kt)("span",{className:"mention"},"/admin items")," - Manage items, custom actions can be defined for each item when it's redeemed (aka the item callback), such as sending a message to a channel, adding a role, removing a role, etc.",(0,o.kt)("br",null),(0,o.kt)("span",{className:"mention"},"/admin shop")," - Manage the shop, items are able to be added to the shop",(0,o.kt)("br",null),(0,o.kt)("span",{className:"mention"},"/admin accounts <user>")," - Manage ",(0,o.kt)("code",null,"user"),"'s account in a menu; you can reset a user's balance, items, remove items, remove/add coins, and more",(0,o.kt)("br",null),(0,o.kt)("span",{className:"mention"},"/beg")," - Beg for coins from random bots in the server",(0,o.kt)("br",null),(0,o.kt)("span",{className:"mention"},"/search")," - Search a spot for items",(0,o.kt)("br",null),(0,o.kt)("span",{className:"mention"},"/crime")," - Commit a crime",(0,o.kt)("br",null),(0,o.kt)("span",{className:"mention"},"/shop")," - View the shop and buy items from it in a menu",(0,o.kt)("br",null),(0,o.kt)("span",{className:"mention"},"/trade")," - Start a trade request with a user",(0,o.kt)("br",null),(0,o.kt)("span",{className:"mention"},"/give")," - Give coins to a user",(0,o.kt)("br",null),(0,o.kt)("span",{className:"mention"},"/user-settings")," - Manage your specific user settings",(0,o.kt)("br",null),(0,o.kt)("span",{className:"mention"},"/profile")," - View your profile, badges, and more",(0,o.kt)("br",null),(0,o.kt)("span",{className:"mention"},"/inventory")," - See your inventory, shows your items and categories items by type")}d.isMDXComponent=!0}}]);