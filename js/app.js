(function(){"use strict";var e="undefined"!=typeof window?window:global;if("function"!=typeof e.require){var t={},n={},r=function(e,t){return{}.hasOwnProperty.call(e,t)},o=function(e,t){var n,r,o=[];n=/^\.\.?(\/|$)/.test(t)?[e,t].join("/").split("/"):t.split("/");for(var a=0,i=n.length;i>a;a++)r=n[a],".."===r?o.pop():"."!==r&&""!==r&&o.push(r);return o.join("/")},a=function(e){return e.split("/").slice(0,-1).join("/")},i=function(t){return function(n){var r=a(t),i=o(r,n);return e.require(i)}},l=function(e,t){var r={id:e,exports:{}};t(r.exports,i(e),r);var o=n[e]=r.exports;return o},s=function(e){var a=o(e,".");if(r(n,a))return n[a];if(r(t,a))return l(a,t[a]);var i=o(a,"./index");if(r(n,i))return n[i];if(r(t,i))return l(i,t[i]);throw Error('Cannot find module "'+e+'"')},c=function(e,n){if("object"==typeof e)for(var o in e)r(e,o)&&(t[o]=e[o]);else t[e]=n};e.require=s,e.require.define=c,e.require.register=c,e.require.brunch=!0}})(),function(){angular.module("scroll",[]).value("$anchorScroll",angular.noop),angular.module("app",["ui","partials","app.controllers","irc.g0v.tw","hub.g0v.tw","ui.state","ui.bootstrap"]).config(["$stateProvider","$urlRouterProvider","$locationProvider"].concat(function(e,t,n){return e.state("authz",{url:"/authz/{request}",templateUrl:"/partials/authz.html",controller:"AuthzCtrl"}).state("about",{url:"/about",templateUrl:"/partials/about.html"}).state("irc",{url:"/irc",onEnter:function(){return $("body").addClass("hide-overflow")},onExit:function(){return $("body").removeClass("hide-overflow")}}).state("irc.log",{url:"/log"}).state("project",{url:"/project",templateUrl:"/partials/project.html",controller:"ProjectCtrl"}).state("project.detail",{url:"/{projectName}"}).state("people",{url:"/people",templateUrl:"/partials/people.html",controller:"PeopleCtrl"}).state("tag",{url:"/tag/{tag}",templateUrl:"/partials/tag.html",controller:"TagControl"}).state("hack",{url:"/{hackId}",templateUrl:"/partials/hack.html",controller:"HackFolderCtrl",onEnter:function(){return $("body").addClass("hide-overflow")},onExit:function(){return $("body").removeClass("hide-overflow")}}).state("hack.doc",{url:"/{docId}"}),t.otherwise("/g0v-hackath3n"),n.html5Mode(!0)})).run(["$rootScope","$state","$stateParams","$location"].concat(function(e,t,n,r){return e.$state=t,e.$stateParam=n,e.go=function(e){return r.path(e)},e._build=window.global.config.BUILD,e.$on("$stateChangeSuccess",function(e,t){var n;return n=t.name,"undefined"!=typeof window&&null!==window?"function"==typeof window.ga?window.ga("send","pageview",{page:r.$$url,title:n}):void 0:void 0})}))}.call(this),function(){function e(e,t){var n={}.hasOwnProperty;for(var r in t)n.call(t,r)&&(e[r]=t[r]);return e}function t(e,t){for(var n=-1,r=t.length>>>0;r>++n;)if(e===t[n]&&n in t)return!0;return!1}var n="".replace,r=[].slice;angular.module("app.controllers",["ui.state"]).controller({AppCtrl:["$scope","$state","$rootScope","$timeout"].concat(function(e,t,n,r){return e.$watch("$state.current.name",function(t){return"irc"===t?e.ircEnabled=!0:void 0}),r(function(){return n.hideGithubRibbon=!0},1e4)})}).controller({HackFolderCtrl:["$scope","$state","HackFolder"].concat(function(t,n,r){var o;return e(t,{hasViewMode:function(e){return e.match(/g(doc|present|draw)/)},sortableOptions:{update:function(){return"undefined"!=typeof console&&null!==console?console.log("notyetupdated"):void 0}},iframes:r.iframes,docs:r.docs,tree:r.tree,godoc:function(e){return t.go("/"+t.hackId+"/"+decodeURIComponent(e.id))},open:function(e){return window.open(e.url,e.id),!1},activate:r.activate,HackFolder:r,iframeCallback:function(e){return function(n){return t.$apply(function(){return"undefined"!=typeof console&&null!==console&&console.log("iframecb",n,e),e.noiframe="fail"===n?!0:!1,"unsure"===n?e.iframeunsure=!0:void 0})}},debug:function(e){return"undefined"!=typeof console&&null!==console?console.log(e,this):void 0},reload:function(e){return r.getIndex(e,!0,function(){})}}),t.$watch("hackId",function(e){return r.getIndex(e,!1,function(){var e,o;return t.$watch("docId",function(e){return e?r.activate(e):void 0}),!t.docId&&(e=null!=(o=r.docs[0])?o.id:void 0)?n.transitionTo("hack.doc",{docId:e,hackId:t.hackId}):void 0})}),t.hackId=(o=n.params.hackId)?o:"g0v-hackath3n",t.$watch("$state.params.docId",function(e){return e?t.docId=encodeURIComponent(encodeURIComponent(e)):void 0})})}).directive("resize",["$window"].concat(function(e){return function(t,n){var r;return r=function(){return t.width=e.innerWidth,t.height=e.innerHeight,t.contentHeight=e.innerHeight-$(n).offset().top},angular.element(e).bind("resize",function(){return t.$apply(r)}),r()}})).directive("ngxIframe",["$parse"].concat(function(e){return{link:function(t,n,r){var o,a,i;return o=e(r.ngxIframe)(t),a=function(e,t){var n;return n=!function(){try{return"about:blank"==e.location}catch(t){}}(),t&&$.browser.mozilla?o("unsure"):o(n?"ok":"fail")},$(n).load(function(){return clearTimeout(i),a(this.contentWindow,!0)}),i=setTimeout(function(){return a(n[0].contentWindow)},5e3)}}})).directive("ngxNoclick",function(){return function(e,t){return $(t).click(function(e){return e.preventDefault(),!1})}}).directive("ngxClickMeta",["$parse"].concat(function(e){return{link:function(t,n,r){var o,a;return o=e(r.ngxClickMeta),a=navigator.appVersion.match(/Win/)?function(e){return e.ctrlKey}:function(e){return e.metaKey},$(n).click(function(e){return a(e)&&!o(t)?(e.preventDefault(),!1):void 0})}}})).directive("ngxFinal",function(){return function(e,t){return $(t).click(function(e){return e.stopPropagation()})}}).factory({HackFolder:["$http"].concat(function(o){var a,i,l,s,c;return a={},i=[],l=[],c={iframes:a,docs:i,tree:l,activate:function(e,n){function r(e){return e.id}var o,s,c,u,p,d,f,h,g,m,v;for(null==n&&(n=!1),s=function(){var t,n,r,a=[];for(t=0,r=(n=i).length;r>t;++t)o=n[t],o.id===e&&a.push(o);return a}()[0],c=s.type,u=0,d=(p=l).length;d>u;++u)f=p[u],(h=null!=f?null!=(g=f.children)?g.map(r):void 0:void 0)&&t(e,h)&&(f.expand=!0);return m=n?"edit":"view",v=function(){var t;switch(t=[c],!1){case"gdoc"!==t[0]:return"https://docs.google.com/document/d/"+e+"/"+m+"?pli=1&overridemobile=true";case"gsheet"!==t[0]:return"https://docs.google.com/spreadsheet/ccc?key="+e;case"gpresent"!==t[0]:return"https://docs.google.com/presentation/d/"+e+"/"+m;case"gdraw"!==t[0]:return"https://docs.google.com/drawings/d/"+e+"/"+m;case"gsheet"!==t[0]:return"https://docs.google.com/spreadsheet/ccc?key="+e;case"hackpad"!==t[0]:return"https://"+(null!=(t=s.site)?t:"")+"hackpad.com/"+e;case"ethercalc"!==t[0]:return"https://ethercalc.org/"+e;case"url"!==t[0]:return decodeURIComponent(decodeURIComponent(e));default:return""}}(),s.hashtag&&(v+=s.hashtag),(h=a[e])?(h.src=v,h.mode=m,h):a[e]={src:v,doc:s,mode:m}},getIndex:function(e,t,n){var r,a,l=this;return s!==e||t?(r=0,a=function(){return o.get("https://www.ethercalc.org/_/"+e+"/csv").error(function(){return++r>3?void 0:setTimeout(a,1e3)}).success(function(t){return s=e,i.length=0,l.loadCsv(t,n)})},a()):n(i)},loadCsv:function(t,o){function a(){try{return JSON.parse(null!=x?x:"{}")}catch(e){}}function s(){var e;switch(e=[w],!1){case void 0!==e[0]:return d||y&&(d=y,y=null),{title:y,type:"dummy",id:"dummy"};case!(D=/^https?:\/\/www\.ethercalc\.(?:com|org)\/(.*)/.exec(e[0])):return{type:"ethercalc",id:D[1]};case!(D=/https:\/\/docs\.google\.com\/document\/(?:d\/)?([^\/]+)\//.exec(e[0])):return{type:"gdoc",id:D[1]};case!(D=/https:\/\/docs\.google\.com\/spreadsheet\/ccc\?key=([^\/?&]+)/.exec(e[0])):return{type:"gsheet",id:D[1]};case!(D=/https:\/\/docs\.google\.com\/drawings\/(?:d\/)?([^\/]+)\//.exec(e[0])):return{type:"gdraw",id:D[1]};case!(D=/https:\/\/docs\.google\.com\/presentation\/(?:d\/)?([^\/]+)\//.exec(e[0])):return{type:"gpresent",id:D[1]};case!(D=/https?:\/\/(\w+\.)?hackpad\.com\/(?:.*?-)?([\w]+)(\#.*)?$/.exec(e[0])):return{type:"hackpad",site:D[1],id:D[2]};case!(D=/^(https?:\/\/[^\/]+)/.exec(e[0])):return{type:"url",id:encodeURIComponent(encodeURIComponent(w)),icon:"http://g.etfv.co/"+D[1]};default:return"undefined"!=typeof console&&null!==console?console.log("unrecognized",w):void 0}}function u(e){return e.length}function p(e){var t,n,o,a,i;return t=e.match(/^(.*?)(?::(.*))?$/),n=t[0],o=t[1],a=t[2],i=r.call(t,3),{content:o,"class":null!=a?a:"warning"}}var d,f,h,g,m,v,b,$,w,y,x,k,C,j,T,E,S,D,P,_,A,M,F,O;for(t=n.call(t,/^\"?#.*\n/gm,""),h=[],g=0,v=(m=t.split(/\n/)).length;v>g;++g)b=m[g],b&&($=b.split(/,/),w=$[0],y=$[1],x=$[2],k=$[3],C=r.call($,4),y=n.call(y,/^"|"$/g,""),x&&(x=n.call(x,/^"|"$/g,"")),x&&(x=x.replace(/""/g,'"')),k&&(k=n.call(k,/^"|"$/g,"")),$=w.match(/^"?(\s*)(\S+?)?(#\S+?)?"?$/),j=$[0],T=$[1],w=$[2],E=$[3],S=e({hashtag:E,url:w,title:y,indent:T.length,opts:a()},s()),"dummy"!==S.type||null!=($=S.title)&&$.length?h.push(e(e({icon:"/img/"+S.type+".png"},S),{tags:(null!=($=null!=(P=S.opts)?P.tags:void 0)?$:[]).concat((null!=($=null!=k?k.split(","):void 0)?$:[]).filter(u).map(p))})):h.push(null));for(f=h,i.splice.apply(i,[0,i.length].concat(r.call(f.filter(function(e){return null!=e})))),_=0,h=[],g=0,v=(m=i).length;v>g;++g)M=g,S=m[g],M>0&&S.indent?(F=i[_],O=null!=($=F.children)?$:F.children=[],O.push(S),h.push(null)):(_=M,h.push(S));return A=h,A=A.filter(function(e){return null!=e}),A=A.map(function(e){var t,n;return e.children&&(e.expand=null!=(t=null!=(n=e.opts)?n.expand:void 0)?t:5>e.children.length),e}),l.splice.apply(l,[0,l.length].concat(r.call(A))),c.folderTitle=d,o(i)}}})})}.call(this),function(){function e(e,t){var n={}.hasOwnProperty;for(var r in t)n.call(t,r)&&(e[r]=t[r]);return e}function t(e,t){for(var n=-1,r=t.length>>>0;r>++n;)if(e===t[n]&&n in t)return!0;return!1}angular.module("hub.g0v.tw",["ui.state","firebase"]).controller({AuthzCtrl:["$scope","$window","$state","Hub"].concat(function(e,t,n,r){return e.$on("event:auth-logout",function(){return e.safeApply(function(){return"function"==typeof e.cleanup?e.cleanup():void 0})}),e.$on("event:auth-login",function(o,a){var i;return i=a.user,e.$apply(function(){var e,o;return e=r.root.child("following/"+i.username),o=r.root.child("authz/"+n.params.request),e.once("value",function(e){var a;return a=e.val(),o.once("value",function(e){var l,s,c;return l=e.val(),s=null!=(c=r.authUser.email)?c:null!=(c=r.authUser.emails)?c[0]:void 0,o.update({avatar:i.avatar,username:i.username,following:a,email:s,displayName:null!=(c=i.displayName)?c:i.username},function(e){var r;return e?console.log(e):(r=l.uri)?t.location.href=r+"/"+n.params.request:void 0})})})})})})}).controller({TagControl:["$scope","$state","$location","Hub"].concat(function(t,n,r,o){return t.$watch("$state.params.tag",function(e){return t.tag=e,t.loadDisqus(e)}),e(t,{toggle_tag:function(e){var t;return t=angular.element(e.srcElement),"none"===t.parent().next().css("display")?t.parent().next().css("display","block"):t.parent().next().css("display","none")},gotag:function(e){return t.go("/tag/"+encodeURIComponent(e))},projects:o.projects,people:o.people,loadDisqus:function(e){var t;if("localhost"!==r.host())return window.disqus_shortname="g0vhub",window.disqus_identifier=encodeURIComponent("tag-"+e),window.disqus_url="http://hack.g0v.tw/tag/"+e,window.disqus_title="g0v.tw 》 tag  》"+e,"undefined"!=typeof DISQUS&&DISQUS.reset({reload:!0,config:function(){var e;return e=this.page,e.disqus_title=window.disqus_title,e.disqus_identifier=window.disqus_identifier,e.disqus_url=window.disqus_url,e}}),t=document.getElementById("disqusCommentScript"),t&&(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).removeChild(t),function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="http://angularjs.disqus.com/embed.js",(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(e)}(),angular.element(document.getElementById("disqus_thread")).html("")}})})}).controller({ProjectCtrl:["$scope","$state","$location","$http","Hub","angularFire"].concat(function(n,r,o,a,i,l){return e(n,{avatarFor:function(e){return i.people.getByName(e).avatar},people:i.people,projects:i.projects,opts:{},remove_tag:function(e,t){var n;return e.keywords=function(){var r,o,a,i=[];for(r=0,a=(o=e.keywords).length;a>r;++r)n=o[r],n!==t&&i.push(n);return i}()},add_tag:function(e){return null==e.keywords&&(e.keywords=[]),t(n.opts.newtag,e.keywords)||e.keywords.push(n.opts.newtag),n.opts.newtag="",!1},addfromURL:function(){var t,r;return t=prompt("Enter github user/repo with g0v.json",""),r="http://api.github.com/repos/"+t+"/contents/g0v.json",a.get(r).error(function(e){return console.log(e)}).success(function(t){var r;return r=JSON.parse(Base64.decode(null!=t?t.content:void 0)),e(n.project,r)})},newProject:function(){return n.opts.isnew=!0,n.opts.editMode=!0,n.project&&("function"==typeof n.cleanup&&n.cleanup(),delete n.project,r.transitionTo("project",{})),n.project={}},saveNew:function(e){var t;return e.name?function(){var n,r,o,a=[];for(n=0,o=(r=i.projects).length;o>n;++n)t=r[n],t.name===e.name&&a.push(t);return a}().length?!1:(n.opts.isnew=!1,i.root.child("projects/"+e.name).set((e.created_by=i.loginUser.username,e)),r.transitionTo("project.detail",{projectName:e.name})):!1}}),n.$watch("$state.params.projectName",function(e){var t;if(e)return n.projectName=e,n.opts.editMode=!1,"function"==typeof n.cleanup&&n.cleanup(),t=l(i.root.child("projects/"+e),n,"project",{}),t.then(function(e){return n.cleanup=e})})})}).controller({PeopleCtrl:["$scope","$state","Hub","angularFire"].concat(function(n,r,o,a){return n.safeApply=function(e){var t;return t=n.$root.$$phase,"$apply"===t||"$digest"===t?"function"==typeof e?e():void 0:n.$apply(e)},e(n,{gotag:function(e){return n.go("/tag/"+encodeURIComponent(e))},togglePerson:function(e){return n.showPerson=n.showPerson===e?null:e},remove_tag:function(e,t){var n;return e.tags=function(){var r,o,a,i=[];for(r=0,a=(o=e.tags).length;a>r;++r)n=o[r],n!==t&&i.push(n);return i}()},add_tag:function(e,r){var o;return null==e.tags&&(e.tags=[]),o=null!=r?r:n.newtag,t(o,e.tags)||e.tags.push(o),r||(n.newtag=""),!1},follow_person:function(e){return t(e,n.following)||n.following.push(e),n.followlist[e]=1},unfollow_person:function(e){var t,r,o,a,i,l;for(t=[],r=0,a=(o=n.following).length;a>r;++r)i=o[r],i!==e&&t.push(i);return n.following=t,l=(o=n.followlist)[e],delete o[e],l},projects:o.projects,people:o.people,auth:o.auth,hub:o,setUsername:o.setUsername,loginAndMerge:o.loginAndMerge,loginAndLink:o.loginAndLink}),n.$on("event:auth-login",function(e,t){var r;return r=t.user,n.safeApply(function(){var e,t;return n.toSetUsername=!1,e=a(o.root.child("people/"+r.username),n,"user",{}),t=a(o.root.child("following/"+r.username),n,"following",[]),n.$watch("following",function(e){var t;return n.followlist=function(){var n,r,o,a={};for(n=0,o=(r=null!=e?e:[]).length;o>n;++n)t=r[n],a[t]=!0;return a}()}),t.then(function(e){var t;return(t=n.cleanup)?n.cleanup=function(){return t(),e()}:void 0}),e.then(function(e){var t;return n.safeApply(),(t=n.cleanup)?n.cleanup=function(){return t(),e()}:void 0})})}),n.$on("event:auth-logout",function(){return n.safeApply(function(){return"function"==typeof n.cleanup&&n.cleanup(),delete n.user,n.toSetUsername=!1})}),n.$on("event:auth-userNameRequired",function(e,t){var r,o;return r=t.existing,o=t.username,n.safeApply(function(){return n.toSetUsername=!0,n.usernameInUse=r,n.newUsername=o})}),n.$watch("hub.inited",function(e){var t;if(e)return t=function(e){var t,r,o,a,i,l,s,c;if(e){t={};for(r in e)if(o=e[r],a=o.tags)for(i=0,l=a.length;l>i;++i)s=a[i],null==t[s]&&(t[s]=0),t[s]++;return n.tagcloud=function(){var e,n=[];for(s in e=t)c=e[s],c>1&&n.push({tag:s,count:c});return n}().sort(function(e,t){return t.count-e.count})}},o.people.length&&t(n.people),setTimeout(function(){return n.$watch("people",n.safeApply(function(){return t}))},100)}),o.loginUser?n.$emit("event:auth-login",{user:o.loginUser}):void 0})}).factory({Hub:["$http","angularFireCollection","$rootScope"].concat(function(t,n,r){var o,a,i,l,s,c,u;return o=window.global.config.FIREBASE,a={},i=new Firebase(o),l=function(){return a.inited=!0},s=n(i.child("people"),l),c=n(i.child("projects")),u=function(e,t,n){return e=e.replace(/\./g,","),i.child("people/"+e).once("value",function(o){var a;return a=o.val(),(t||a)&&r.$broadcast("event:auth-userNameRequired",{existing:a,username:e}),a?void 0:"function"==typeof n?n():void 0})},a.setUsername=function(e){return a.authUser?u(e,!1,function(){var t,n,o,l,s,c,u;return t={tags:[],username:e},t.auth=(n={},n[a.authUser.provider+""]={id:(o=a.authUser).id,username:null!=(l=o.username)?l:""},n),a.authUser.displayName&&(t.displayName=a.authUser.displayName),t.avatar=function(){var e;switch(e=[a.authUser.provider],!1){case"github"!==e[0]:return e=a.authUser.avatar_url.match(/https:\/\/secure.gravatar.com\/avatar\/(\w+)/),s=e[0],c=e[1],"http://avatars.io/gravatar/"+c;case"twitter"!==e[0]:return"http://avatars.io/twitter/"+a.authUser.username;case"persona"!==e[0]:return"http://avatars.io/gravatar/"+a.authUser.hash;default:return"http://avatars.io/"+a.authUser.provider+"/"+a.authUser.id}}(),u=i,u.child("auth-map/"+a.authUser.provider+"/"+a.authUser.id).set({username:e}),u.child("people/"+e).set(t),i.child("people/"+e).once("value",function(e){return a.loginUser=e.val(),r.$broadcast("event:auth-login",{user:a.loginUser})})}):void 0},a.loginAndMerge=function(e){var t,n;return t=function(e){var t,n,o,l;return t=a.authUser,n=i.child("people/"+e+"/auth").update((o={},o[t.provider+""]={id:t.id,username:null!=(l=t.username)?l:""},o)),i.auth(t.firebaseAuthToken,function(){return i.child("auth-map/"+t.provider+"/"+t.id).set({username:e}),r.$broadcast("event:auth-login",{user:a.loginUser})})},n=new FirebaseSimpleLogin(i,function(e,n){return e&&console.log(e),n?i.child("auth-map/"+n.provider+"/"+n.id).once("value",function(e){var n,r;return null!=(n=e.val())&&(r=n.username,n)?t(r):void 0}):void 0}),n.login(e)},a.loginAndLink=function(e){return a.authLink=a.authUser,a.authLinkUser=a.loginUser,a.auth.login(e)},a.auth=new FirebaseSimpleLogin(i,function(e,t){return e?console.log(e):t?(a.authUser=t,i.child("auth-map/"+t.provider+"/"+t.id).once("value",function(e){var n,o,l,s,c;return!a.authLink&&null!=(n=e.val())&&(o=n.username,n)?(l=i.child("people/"+o),l.once("value",function(e){return a.loginUser=e.val(),a.loginUser?r.$broadcast("event:auth-login",{user:a.loginUser}):u(o,!0)})):(s=a.authLink)?(o=a.authLinkUser.username,i.child("auth-map/"+t.provider+"/"+t.id).set({username:o}),i.auth(s.firebaseAuthToken,function(){var e,n;return i.child("people/"+o+"/auth").update((e={},e[t.provider+""]={id:t.id,username:null!=(n=t.username)?n:""},e)),e=a.authLink,delete a.authLink,e})):(null==(n=a.authUser).username&&(n.username=null!=(n=a.authUser.email)?null!=(c=n.split("@"))?c[0]:void 0:void 0),u(a.authUser.username,!0))})):r.$broadcast("event:auth-logout")}),e(a,{root:i,people:s,projects:c})})})}.call(this),function(){angular.module("irc.g0v.tw",["ui.state"]).controller({IRC:["$scope","$state"].concat(function(e,t){return e.$watch("$state.current.name",function(n){switch(n){case"irc":e.ircEnabled=!0;break;case"irc.log":e.irclogEnabled=!0}return e.ircActive=t.includes("irc")})})})}.call(this),function(){var e={};e.exports={BUILD:"git-3957ca0",FIREBASE:"https://g0vhub.firebaseio.com"},window.global||(window.global={}),window.global.config=e.exports}.call(this),function(){angular.element(document).ready(function(){return angular.bootstrap(document,["app"])})}.call(this);