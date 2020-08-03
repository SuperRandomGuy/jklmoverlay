// ==UserScript==
// @name         background phoenix falcon
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://phoenix.jklm.fun/*
// @match        https://falcon.jklm.fun/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var css = document.createElement('link');
        css.setAttribute('rel','stylesheet');
        css.setAttribute('href','https://dl.dropboxusercontent.com/s/poohjw5npbl1qxt/bombparty.css?dl=0');
        document.children[0].children[0].appendChild(css);
    document.getElementsByClassName('tutorial')[0].parentElement.removeChild(document.getElementsByClassName('tutorial')[0]);
    document.getElementsByClassName('medal')[0].innerText = "👨🏻‍🎓";
    window.setTimeout(function(){document.getElementsByClassName('rule lives')[0].children[0].innerText = '🌌 Vies'},150);
    document.getElementsByClassName('joined')[0].removeChild(document.getElementsByClassName('joined')[0].children[0]);
    document.getElementsByClassName('toggleRules')[0].className = "toggleRules styled"
    var script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = "https://dl.dropboxusercontent.com/s/qqz786pbgiw8y45/bombparty.js?dl=0";
        document.head.appendChild(script);
    document.addEventListener("keydown",function(data){if(data.key == "Delete"){socket.emit('setWord','💥',true)}});
    var timer = document.createElement('div');
    timer.appendChild(statsTimerTd);
    document.getElementsByClassName('quickRules')[0].appendChild(timer);

})();