// ==UserScript==
// @name         AffAlarm
// @namespace    https://github.com/FunctionClub/AffAlarm/
// @version      0.1
// @description  Fuck away! affman
// @author       Kirito
// @match         http://*/*
// @match         https://*/*
// ==/UserScript==

(function() {
document.body.innerHTML= document.body.innerHTML.replace(/aff=/g,"useless=");
})();