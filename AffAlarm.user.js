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
    var links = document.getElementsByTagName("a"); //array
    for (var i=0,imax=links.length; i<imax; i++){
        links[i].href = links[i].href.replace(/aff=/g,"useless=");
    }
})();
