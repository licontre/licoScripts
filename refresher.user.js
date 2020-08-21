// ==UserScript==
// @name refresher
// @description Refresh periodically a url
// @description Get data and send to the other Tab
// @include https://urlToRefresh
// ==/UserScript==
var SECONDS = 1000;
setTimeout(function(){ location.reload(); }, 60*SECONDS);
console.log("refreshed")