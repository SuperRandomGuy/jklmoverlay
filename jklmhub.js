// ==UserScript==
// @name         jklm hub overlay
// @namespace    http://tampermonkey.net/
// @version      0.21
// @description  shit
// @author       Nycroc
// @match        https://jklm.fun/
// @require http://userscripts-mirror.org/scripts/source/107941.user.js
// @grant GM_setValue
// @grant GM_getValue
// ==/UserScript==

(function() {
    'use strict';

    document.getElementsByClassName('top')[0].children[0].children[0].text = 'Nycroc.fun';
    var css = document.createElement('link');
        css.setAttribute('rel','stylesheet');
        css.setAttribute('href','https://dl.dropboxusercontent.com/s/my9ckjsindob8su/central.css?dl=0');
        document.children[0].children[0].appendChild(css);
    var node = document.getElementsByClassName("news lightScrollbar")[0];
if (node.parentNode) {
  node.parentNode.removeChild(node);
}
    var element = document.getElementsByClassName("links")[0];
while (element.firstChild) {
  element.removeChild(element.firstChild);
}
    var a = document.getElementsByClassName('columns section')[0];
    var b = document.getElementsByClassName('publicRooms section')[0];
    var c = a.parentElement;
    c.removeChild(b);
    c.insertBefore(b,a);
})();
