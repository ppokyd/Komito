(function(d,q,m){function M(a){a=G(a);var b="outbound",c=a[H],e=W[c.replace("www.","")],d=a.pathname.split("/"),h=a[k];l(0,b,c,h);e&&("twitter.com"===c[D](-11)&&"intent"===d[d[n]-2]&&(b="intent-"+d.pop()),l(1,e,b,h));x(a,u,M)}function N(a){a=G(a);l(0,"download",(a[k].match(O)||[""]).pop()[E](),a[k]);x(a,u,N)}function P(a){a=G(a);var b=a.protocol[v](0,-1);l(0,"cta:"+b,a[k][v](b[n]+1).split("?")[0],m[k]);x(a,u,P)}function Q(a){a=a[F]||a[I];for(var b=a.elements,c=0,e;c<b[n];)e=b[c++],e.name&&l(0,"form",
a[J]("name")||a[J]("id")||"form",e.name+":"+(e.type||e.tagName));x(a,R,Q)}function y(){y.a=y.a||0;var a={},b,c,e;9>y.a++&&(d.twttr&&d.twttr.ready?d.__twitterIntentHandler||(p(d,z,function(g){try{"twitter.com"===g.origin[D](-11)&&g.data&&(e=(c=d.JSON&&d.JSON.parse(g.data))&&c.params)&&"trigger"===c.method&&(b=e[0],"click"===b&&e[1]&&(b+="-"+e[1].region),a[b]||(a[b]=1,l(1,"Twitter",b,m[k])))}catch(h){}}),d.twttr.ready(function(a){a.events.bind(z,function(){})}),d.__twitterIntentHandler=!0):setTimeout(y,
5E3))}function A(){function a(a){l(1,"Facebook",a,m[k])}A.a=A.a||0;if(9>A.a++){var b=d.FB;if(b=b&&b.Event&&b.Event.subscribe)try{b("edge.create",function(){a("like")}),b("edge.remove",function(){a("unlike")}),b(z+".send",function(){a(z)})}catch(c){}else setTimeout(A,5E3)}}function X(){function a(a,b){var c=["cb_onsuccess",b,+new Date].join("_");a.onsuccess=(a.onsuccess?a.onsuccess+",":"")+c;d[c]=function(){l(1,"LinkedIn",b,m[k])}}for(var b=B("SCRIPT"),c=b[n],e=0,g,h;e<c;)g=b[e++],h=(g[J]("type")||
"")[E](),!h[r]("in/")&&a(g,h[D](3))}function Y(){function a(a,b){p(a,"load",function(){l(1,b,"pageview",m[k])});a.src=S[b]}function b(a){a(function(a){a&&"unknown"!==a.status&&!e++&&l(1,"Facebook","pageview",m[k])})}function c(){var a=d.FB&&d.FB.getLoginStatus;a?(b(a),p(d,z,function(c){try{"facebook.com"===c.origin[D](-12)&&c.data&&~c.data[r]("xd_action=proxy_ready")&&b(a)}catch(e){}})):--g&&setTimeout(c,2E3)}var e=0,g=5,h;for(h in S)a(new Image(1,1),h);c()}function Z(){function a(){l(0,"print",q.title,
m[k]);c&&c.removeListener(a);x(d,"afterprint",a);a=null}var b=d.matchMedia,c=b&&b("print");c&&c.addListener(a);p(d,"afterprint",a)}function aa(){function a(a){w=a[F]||a[I];f=w.currentSrc||w.src;m=w.tagName[E]();k=a.type;~k[r]("fullscreen")?(q.fullScreen||q.mozFullScreen||q.webkitIsFullScreen)&&l(0,m+":html5","fullscreen",f):l(0,m+":html5",k,f)}for(var b="ended pause play webkitfullscreenchange mozfullscreenchange fullscreenchange".split(" "),c=ba("AUDIO","VIDEO"),e=c[n]>>>0,d=0,h,w,f,k,m;d<e;)for(w=
c[d++],h=0;6>h;)p(w,b[h++],a);ca()}function ca(){function a(a){(h=["ended","play","pause"][a.data])&&l(0,"video:youtube",h,a[F].getVideoUrl())}for(var b=B("IFRAME"),c=b[n],e=0,g=[],h,f,k;e<c;)f=b[e++],k=f.src,/^(https?:)?\/\/(www\.)?youtube\.com\/embed/.test(k)&&(0>k[r]("enablejsapi")&&(f.src+=(~k[r]("?")?"&":"?")+"enablejsapi=1"),g[C](f));if(c=g[n])d.onYouTubeIframeAPIReady=function(){for(e=0;e<c;)p(new d.YT.Player(g[e++]),"onStateChange",a)},d.YT||(B("HEAD")[0].appendChild(q.createElement("SCRIPT")).src=
"//www.youtube.com/iframe_api")}function da(){var a={25:0,50:0,75:0,100:0},b=q.documentElement,c;p(d,"scroll",function(){(c=25*~~((b.scrollTop+q.body.scrollTop)/(b.scrollHeight-b.clientHeight)*100/25))&&!a[c]&&(a[c]=1,l(0,"scroll","depth",c+"%"))})}function p(a,b,c){a[T]?a[T](b,c,!1):a.attachEvent("on"+b,c)}function x(a,b,c){a[U]?a[U](b,c,!1):a.detachEvent("on"+b,c)}function G(a){for(a=a[F]||a[I];a&&"A"!==a.tagName;)a=a.parentNode;return a}function l(a){var b=Array.prototype[v].call(arguments,0),
c;b[0]=b[0]?K:"event";"function"===typeof d[L]&&(c=d[L].getAll&&d[L].getAll())&&t(c,"send",b);c=b;var e=d.TagLoader,g=d.s,h=[],f=1;if(e&&g&&g instanceof e){for(;f<c[n];f++)e="prop"+f,h[C](e),g[e]=c[f];g.linkTrackEvents="None";g.linkTrackVars=h.join(",");t([g],"tl",[g,"download"===c[1]?"d":"o",c[0]])}c=[].concat(b);K==c[0]&&(c[1]=K+":"+c.splice(2,1,c[1])[0]);c=c[v](1);t([d],"ClickTaleEvent",[c.join(":")]);t([d],"__utmTrackEvent",c);d._hmt&&t([d._hmt],C,[["_trackEvent"].concat(c)]);if(d._gat||d._gaq)c=
d._gat&&d._gat._getTrackers&&d._gat._getTrackers(),b[0]={social:"_trackSocial",event:"_trackEvent"}[b[0]],c?t(c,b[0],b[v](1)):d._gaq&&t([d._gaq],C,[b])}function t(a,b,c){var e=a[n]>>>0,d=0,f;for(ea(b,c);d<e;)f=a[d++],"function"===typeof f[b]&&f[b].apply(f,c)}function ea(a){var b=d.console;f.debugMode&&b&&b.log.apply(b,arguments)}function ba(a){for(var b=[],c=Array.prototype[v].call(arguments,0),d=0;d<c[n];)b[C].apply(b,B(c[d++]));return b}function B(a){return q.getElementsByTagName(a)}var V={trackTwitter:1,
trackFacebook:1,trackLinkedIn:1,trackDownloads:1,trackOutbound:1,trackForms:1,trackUsers:1,trackActions:1,trackPrint:1,trackMedia:1,trackScroll:1,debugMode:/[?&]debug=1/.test(m.search)},W={"plus.google.com":"Google+","plus.url.google.com":"Google+","blogspot.com":"Blogger","facebook.com":"Facebook","on.fb.me":"Facebook","fb.me":"Facebook","fb.com":"Facebook","twitter.com":"Twitter","t.co":"Twitter","linkedin.com":"LinkedIn","myspace.com":"MySpace","vk.com":"VKontakte","odnoklassniki.ru":"Odnoklassniki",
"xing.com":"Xing","youtube.com":"YouTube","youtu.be":"YouTube","twoo.com":"Twoo","reddit.com":"Reddit","pinterest.com":"Pinterest","digg.com":"Digg","4sq.com":"Foursquare","foursquare.com":"Foursquare","hi.baidu.com":"Baidu Space"},S={Google:"https://accounts.google.com/CheckCookie?continue=https%3A%2F%2Fwww.google.com%2Fintl%2Fen%2Fimages%2Flogos%2Faccounts_logo.png&amp;followup=https%3A%2F%2Fwww.google.com%2Fintl%2Fen%2Fimages%2Flogos%2Faccounts_logo.png&amp;chtml=LoginDoneHtml&amp;checkedDomains=youtube&amp;checkConnection=youtube%3A291%3A1",
"Google+":"//plus.google.com/up/?continue=https%3A%2F%2Fwww.google.com%2Fintl%2Fen%2Fimages%2Flogos%2Faccounts_logo.png",Twitter:"//twitter.com/login?redirect_after_login=https%3A%2F%2Fplatform.twitter.com%2Fwidgets%2Fimages%2Fbtn.png"},O=/\.([0-9a-z]+)(?:[\?#]|$)/i,L=d.GoogleAnalyticsObject||"ga",f=d._ega||d._komito||{},n="length",v="slice",C="push",k="href",H="hostname",J="getAttribute",r="indexOf",D="substr",E="toLowerCase",T="addEventListener",U="removeEventListener",z="message",u="mousedown",
R="submit",K="social",I="srcElement",F="target";(function(){var a=0,b=B("A"),c=b[n],d;for(d in V)d in f||(f[d]=V[d]);for(;a<c;){d=b[a++];var g=/^https?:$/.test(d.protocol),h=(d[k].match(O)||[""]).pop()[E]();f.trackOutbound&&g&&!~d[H][r](m[H])&&p(d,u,M);f.trackDownloads&&h&&~",mp3,mp4,wma,mov,avi,wmv,mkv,eot,woff,ttf,txt,csv,tsv,pdf,doc,docx,xls,xlsx,ppt,pptx,zip,tar,tgz,bz2,gz,rar,dmg,pkg,7z,ida,exe,sh,bat,"[r](","+h+",")&&p(d,u,N);f.trackActions&&!g&&p(d,u,P)}if(f.trackForms)for(b=q.forms,c=b[n],
a=0;a<c;)p(b[a++],R,Q);f.trackTwitter&&y();f.trackFacebook&&A();f.trackLinkedIn&&X();f.trackUsers&&Y();f.trackPrint&&Z();f.trackMedia&&aa();f.trackScroll&&da()})()})(window,document,location);
