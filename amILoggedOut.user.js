// ==UserScript==
// @name         amILoggedOut
// @namespace    http://tampermonkey.net/
// @version      0.1
// @match        https://loginportal/idp/*
// @grant GM_setValue
// @grant GM_getValue
// ==/UserScript==

var logInId = "username"

function amILogIn(){
   return document.getElementById(logInId) == null
}

var player = document.createElement('audio');
player.src = 'https://notificationsounds.com/soundfiles/c361bc7b2c033a83d663b8d9fb4be56e/file-sounds-1146-quest.wav';
player.preload = 'auto';

(function() {
    'use strict';
	setInterval(function(){
       if(!amILogIn()){
           setInterval(player.play(),14000);
       }
    },5000);
})();