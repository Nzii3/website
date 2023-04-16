"use strict";(self.webpackChunkguide_pycord_dev=self.webpackChunkguide_pycord_dev||[]).push([[427],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,f=p["".concat(l,".").concat(d)]||p[d]||u[d]||o;return n?r.createElement(f,s(s({ref:t},m),{},{components:n})):r.createElement(f,s({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2882:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],i={slug:"python-classes",title:"Python Classes & Usages",description:"What are Python classes and how do you use them?",authors:"nziie",tags:["Guides"]},l=void 0,c={permalink:"/blog/python-classes",source:"@site/blog/2022-10-16-python-classes.md",title:"Python Classes & Usages",description:"What are Python classes and how do you use them?",date:"2022-10-16T00:00:00.000Z",formattedDate:"October 16, 2022",tags:[{label:"Guides",permalink:"/blog/tags/guides"}],readingTime:2.09,hasTruncateMarker:!1,authors:[{name:"Nziie",title:"who?",url:"https://nziie.is-a.dev",imageURL:"https://github.com/Nzii3.png",key:"nziie"}],frontMatter:{slug:"python-classes",title:"Python Classes & Usages",description:"What are Python classes and how do you use them?",authors:"nziie",tags:["Guides"]},prevItem:{title:"MEE6 Controversy & Explanation",permalink:"/blog/mee6-controversy"},nextItem:{title:"A break from Discord",permalink:"/blog/break"}},m={authorsImageUrls:[void 0]},u=[{value:"What are Python classes?",id:"what-are-python-classes",level:2},{value:"Breakdown",id:"breakdown",level:2},{value:"Functions Setting Attributes",id:"functions-setting-attributes",level:2}],p={toc:u};function d(e){var t=e.components,i=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(2989).Z,width:"1006",height:"537"})),(0,o.kt)("h2",{id:"what-are-python-classes"},"What are Python classes?"),(0,o.kt)("p",null,'To put it simply, Python classes are like an object constructor or a "',(0,o.kt)("em",{parentName:"p"},"blueprint"),'" for creating objects. You can also create a class to organize commands or event listeners and load them later using ',(0,o.kt)("a",{parentName:"p",href:"https://pycord.dev"},"Pycord")," or ",(0,o.kt)("a",{parentName:"p",href:"https://discord.js.org"},"discord.js"),"."),(0,o.kt)("h2",{id:"breakdown"},"Breakdown"),(0,o.kt)("p",null,"Lets break down a simple class of a ",(0,o.kt)("strong",{parentName:"p"},"Car"),"."),(0,o.kt)("p",null,"So here is our code that we're working with..."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py",metastring:'title="car.py"',title:'"car.py"'},"class Car:\n  # highlight-start\n  def __init__(self, year, made, model): # When you use 'Car()' you will pass\n    # in these values that are set in the class\n    self.year = year\n    self.made = made\n    self.model = model\n  # highlight-end\n\n  def start(self):\n    print('Vrrroooooooooommmm!!!')\n  \n  def turn_off(self):\n    print('*Powering down...*')\n\n  def year_made(self):\n    return self.year\n\n  def month_made(self):\n    return self.made\n\n  def show_model(self):\n    return self.model\n\n# highlight-start\nmy_car = Car(2000, 'December', 'Lexus') # Create the car from the class\n# Setting the year to 2000, the month to 'December' and\n# and the model to 'Lexus'\n# highlight-end\nmy_car.start() # >>> 'Vrrroooooooooommmm!!!'\nmy_car.year_made() # >>> 2022\nmy_car.show_model() # >>> 'Lexus'\nmy_car.month_made() # >>> 'December'\nmy_car.turn_off() # >>> '*Powering down...*'\n")),(0,o.kt)("p",null,"The class ",(0,o.kt)("span",{className:"timestamp"},"Car")," has some functions being ",(0,o.kt)("span",{className:"timestamp"},"start"),", ",(0,o.kt)("span",{className:"timestamp"},"turn_off"),", ",(0,o.kt)("span",{className:"timestamp"},"year_made"),", ",(0,o.kt)("span",{className:"timestamp"},"month_made"),", and ",(0,o.kt)("span",{className:"timestamp"},"show_model"),". All of these functions return or print a value from the class, the values being the attributes of the class (",(0,o.kt)("span",{className:"timestamp"},"year"),", ",(0,o.kt)("span",{className:"timestamp"},"made"),", and ",(0,o.kt)("span",{className:"timestamp"},"model"),"). You can access these attributes by doing ",(0,o.kt)("inlineCode",{parentName:"p"},"car.year"),", etc."),(0,o.kt)("p",null,"If you're using ",(0,o.kt)("strong",{parentName:"p"},"Pycord")," or ",(0,o.kt)("strong",{parentName:"p"},"discord.py")," it would look something like this..."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py",metastring:'title="mycog.py"',title:'"mycog.py"'},"import discord\nfrom discord.ext import commands\n\nclass MyCog(commands.Cog):\n  def __init__(self, bot):\n    self.bot = bot # you can access your bot object here\n  \n  ### stuff ###\n\ndef setup(bot):\n  bot.add_cog(MyCog(bot))\n")),(0,o.kt)("p",null,"Then in your main.py or bot.py file..."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py",metastring:'title="main.py"',title:'"main.py"'},"# ...\n\n# if you have your cog file in a 'cogs' folder:\nbot.load_extension('cogs.mycog')\n# if you don't:\nbot.load_extension('mycog')\n")),(0,o.kt)("h2",{id:"functions-setting-attributes"},"Functions Setting Attributes"),(0,o.kt)("p",null,"You can even make functions to set attributes within the class."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py",metastring:'title="car.py"',title:'"car.py"'},"class Car:\n  def __init__(self, year, made, model):\n    self.year = year\n    self.made = made\n    self.model = model\n\n  def start(self):\n    print('Vrrroooooooooommmm!!!')\n  \n  def turn_off(self):\n    print('*Powering down...*')\n\n  def year_made(self):\n    return self.year\n\n  def month_made(self):\n    return self.made\n\n  def show_model(self):\n    return self.model\n\n  # highlight-start\n  def set_year(self, year):\n    self.year = year\n    print(f'Set year to: {year}')\n  # highlight-end\n\nmy_car = Car(2000, 'December', 'Lexus')\n# highlight-start\nmy_car.year_made() # >>> 2000\nmy_car.set_year(2005) # >>> 'Set year to: 2005'\nmy_car.year_made() # >>> 2005\n# highlight-end\n")),(0,o.kt)("div",{className:"box red animation no-background"},(0,o.kt)("div",{className:"title"},"Warning"),"Make sure you have correct syntax in or you will get an error!"))}d.isMDXComponent=!0},2989:function(e,t,n){t.Z=n.p+"assets/images/car_example-4336e73e932c2c05ad68da93d8e2c393.png"}}]);