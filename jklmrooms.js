// ==UserScript==
// @name         jklmrooms
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://jklm.fun/*
// @exclude      https://jklm.fun/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var css2 = document.createElement('link');
        css2.setAttribute('rel','stylesheet');
        css2.setAttribute('href','https://dl.dropboxusercontent.com/s/qveo74vuqas1034/game.css?dl=0');
        document.children[0].children[0].appendChild(css2);
    var css3 = document.createElement('link');
        css3.setAttribute('rel','stylesheet');
        css3.setAttribute('href','https://dl.dropboxusercontent.com/s/k6oncwqd6494yos/room.css?dl=0');
        document.children[0].children[0].appendChild(css3);
    var script2 = document.createElement('script');
        script2.type = 'text/javascript';
        script2.src = "https://dl.dropboxusercontent.com/s/knhwgn7848qktwu/room.js?dl=0";
        document.head.appendChild(script2);
})();