void function(a,b,c){var d=Number(16),e=b.documentElement,f=b.body,g={id:function(a,b){return(b||document).getElementById(a)},tag:function(a,b){return this.makeArray((b||document).getElementsByTagName(a))},qsa:function(a,b){return this.makeArray((b||document).querySelectorAll(a))},create:function(a,b){var a="!"===a?document.createDocumentFragment():""===a?document.createTextNode(b||""):document.createElement(a);try{b&&(a.className=b)}catch(c){}return a},clone:function(a,b){return a.cloneNode(b||!0)},remove:function(a,b){return(b||a.parentNode).removeChild(a)},setAttr:function(a,b){var d=b.length;if("object"==typeof b){if("object"==typeof b[0]&&"name"in b[0])for(var e=0;d>e;e++)b[e].value!==c&&a.setAttribute(b[e].name,b[e].value);else for(var f in b)b.hasOwnProperty(f)&&b[f]!==c&&a.setAttribute(f,b[f]);return a}},isIgnorable:function(a){return"WBR"===a.nodeName||a.nodeType===Node.COMMENT_NODE},makeArray:function(a){return Array.prototype.slice.call(a)},extend:function(a,b){var c="object"==typeof a||"function"==typeof a||"object"==typeof b;if(c){for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d]);return a}}},h=b.querySelector("body.manual article.main-content");g.qsa("h2, h3, h4, h5, h6",h).forEach(function(a,b){var c=a.lastChild,d=c.nodeValue;a.setAttribute("id","sec-"+b),c&&c.nodeType===Node.COMMENT_NODE&&/\s?\#[\w\_\-]+\s?/.test(d)&&(a.setAttribute("id",d.replace(/\s?\#([\w\_\-]+)\s?/i,"$1")),c.parentNode.removeChild(c))}),g.qsa("div.info, .example, pre",h).forEach(function(a,b){a.setAttribute("id","info-"+b)});var i=g.qsa("nav.layout ol ol"),j=1e3,k=new RegExp("/manual/?$","i").test(location.href.replace(location.hash,"")),l=function(){var a;return f.scrollTop=1,a=1==f.scrollTop?f:e,a.scrollTop=0,a}();function m(a){return new RegExp("^"+location.href.replace(location.hash,"").replace(/\/$/,""),"i").test(a)}function n(a,c){var e=a?b.querySelector(a)||null:null,f=c!==!1?function(){location.hash=a}:null;e&&o(e.offsetTop+1.5*d,100,f)}function o(a,b,c){if(0>=b)return void(c&&c());var d=l.scrollTop,e=a-d,f=e/b*10;setTimeout(function(){l.scrollTop=d+f,o(a,b-10,c||null)},10)}i.forEach(function(a){a.addEventListener("click",function(a){var b=a.target&&"A"===a.target.nodeName?a.target:null;b&&!k&&m(b.href)&&(a.preventDefault(),b.hash?n(b.hash):o(0,70,function(){location.hash=""}))},!0)}),void["hashchange","iframeLoaded"].forEach(function(b){a.addEventListener(b,function(){setTimeout(function(){n(location.hash,!1)},100)})});var p=b.querySelector("nav.layout"),q=3.5*d;a.addEventListener("scroll",function(){l.scrollTop>=q&&f.getAttribute("data-js-fixed-nav")!==!0?f.setAttribute("data-js-fixed-nav",!0):f.removeAttribute("data-js-fixed-nav")}),void["mousewheel","DOMMouseScroll"].forEach(function(a){b.addEventListener(a,function(a){p.addEventListener("mouseover",function(){a.preventDefault()})})}),a.addEventListener("DOMContentLoaded",function(){var a=p.offsetHeight+2*d;h.style.minHeight=a+"px"});var r=g.qsa(".no-interfere",h),s=new Event("iframeLoaded");0===r.length&&a.dispatchEvent(s),r.forEach(function(b,c){var d=b.innerHTML,e=g.create("iframe"),f,h,i,j;b.innerHTML="",e.setAttribute("src","/itff.html"),b.appendChild(e),f=e.contentWindow,f.addEventListener("DOMContentLoaded",function(){h=e.contentDocument,ifroot=h.documentElement,i=h.body,j=g.create("div","wrapper"),j.innerHTML=d,i.replaceChild(j,g.id("replacee",h)),f.Han.init(),e.style.height=i.offsetHeight+"px",c+1===r.length&&a.dispatchEvent(s)})}),"undefined"!=typeof hljs&&hljs.initHighlightingOnLoad()}(window,window.document);