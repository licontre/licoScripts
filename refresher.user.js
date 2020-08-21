// ==UserScript==
// @name refresher
// @description Get data and send to the other Tab
// @include https://urlToRefresh
// ==/UserScript==

setTimeout(function(){ location.reload(); }, 60*1000);
console.log("refreshed")