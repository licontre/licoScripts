// ==UserScript==
// @name alertMePleaseChat
// @description Get data and send to the other Tab
// @include https://chat.google.com/*
// @grant GM_setValue
// @grant GM_getValue
// ==/UserScript==

//notification class name
var elemClass = "PIw6Oe EdWvwd FVKzAb"
var elements = null;

function readData() {
    try{
	elements = document.getElementsByClassName(elemClass);
	//elements = document.getElementById(elemId);
    }catch(e){}
}

function shouldSound(){
	return elements.length != 0;
}

var player = document.createElement('audio');
player.src = 'https://notificationsounds.com/soundfiles/c7e1249ffc03eb9ded908c236bd1996d/file-c1_fire-alarm.wav';
player.preload = 'auto';

(function() {
    'use strict';
	setInterval(function(){
		readData();
		if(shouldSound()){
			setInterval(player.play(),14000);
		}
    },5000);
})();
