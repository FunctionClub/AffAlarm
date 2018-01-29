// ==UserScript==
// @name         AffAlarm
// @namespace    https://github.com/FunctionClub/AffAlarm/
// @version      0.1
// @description  Fuck away! affman
// @author       Kirito
// @match         http://*/*
// @match         https://*/*
// @exclude       http://liyuans.com/*
// @exclude       https://liyuans.com/*
// @exclude       http://zhujiwiki.com/*
// @exclude       https://zhujiwiki.com/*
// ==/UserScript==
(function() {
document.body.innerHTML= document.body.innerHTML.replace(/useless=/g,"useless=");
})();