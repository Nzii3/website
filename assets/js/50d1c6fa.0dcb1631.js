"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[9172],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),l=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=l(r),f=o,m=p["".concat(a,".").concat(f)]||p[f]||u[f]||c;return r?n.createElement(m,i(i({ref:t},d),{},{components:r})):n.createElement(m,i({ref:t},d))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=p;var s={};for(var a in t)hasOwnProperty.call(t,a)&&(s[a]=t[a]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<c;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},6114:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return a},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var n=r(7462),o=r(3366),c=(r(7294),r(3905)),i=["components"],s={title:"Selects",description:"Discord selects (dropdowns) in Pycord"},a=void 0,l={unversionedId:"pycord-examples/discord-ui/selects",id:"pycord-examples/discord-ui/selects",title:"Selects",description:"Discord selects (dropdowns) in Pycord",source:"@site/docs/pycord-examples/discord-ui/selects.md",sourceDirName:"pycord-examples/discord-ui",slug:"/pycord-examples/discord-ui/selects",permalink:"/pycord-examples/discord-ui/selects",draft:!1,tags:[],version:"current",frontMatter:{title:"Selects",description:"Discord selects (dropdowns) in Pycord"},sidebar:"defaultSidebar",previous:{title:"Buttons",permalink:"/pycord-examples/discord-ui/buttons"},next:{title:"Subclassing",permalink:"/pycord-examples/subclassing"}},d={},u=[],p={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"I recommend ",(0,c.kt)("a",{parentName:"p",href:"../subclassing"},"subclassing")," here!"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-py"},'import discord\nfrom discord.ext import commands\n\nclass Select(discord.ui.View):\n  def __init__(self, author: discord.User):\n    self.author = author # this is what you will set when defining the view in your other code: this user object that is the person that invoked the command or event and that person will be the only one confirming/canceling\n  async def interaction_check(self, interaction): # check if the interaction user is the same as the command author\n    if interaction.user != self.author:\n      await interaction.response.send_message(\'This interaction is not for you!\', ephemeral=True)\n      return False\n    return True\n\n  @discord.ui.select(placeholder="Select color...", options=[discord.SelectOption(label="Red", emoji="\ud83d\udd34", description="The color red"), discord.SelectOption(label="Green", emoji="\ud83d\udfe2", description="The color green"), discord.SelectOption(label="Blue", emoji="\ud83d\udd35", description="The color blue")])\n  async def select_callback(self, select, interaction):\n    await interaction.response.send_message(f"Your favorite color is **{select.values[0].label}**!", ephemeral=True)\n\nbot = commands.Bot(command_prefix="!")\n\n@bot.command()\nasync def color(ctx):\n  view = Select(author=ctx.author)\n  await ctx.send("Select your favorite color from the dropdown below!", view=view)\n')))}f.isMDXComponent=!0}}]);