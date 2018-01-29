// ==UserScript==
// @name         AffAlarm
// @namespace    https://github.com/FunctionClub/AffAlarm/
// @version      0.2
// @description  Fuck away! affman
// @author       Kirito
// @match         http://*/*
// @match         https://*/*
// @exclude       http://github.com/*
// @exclude       http://github.com/*
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
    var table = document.getElementsByTagName("table"); //array
    for (var t=0,tmax=table.length; t<tmax; t++){
        table[t].innerHTML= table[t].innerHTML.replace(/aff=/g,"useless=");
    }
    document.cookie = "WHMCSAffiliateID=null";
})();
