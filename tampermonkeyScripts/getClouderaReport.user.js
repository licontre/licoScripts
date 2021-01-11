// ==UserScript==
// @name         getClouderaReport
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  generate a JSON document with the information generated in the inspection of all hosts.
// @author       Jose Maria Carralero Martin
// @match        https://www.your_url.cloudera.com/cmf/inspector?commandId=*
// @grant        none
// ==/UserScript==

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

var path = window.location.href;
var page = path.split("/");
var filename = page[2].split(":")[0]+".json"

var rows = document.getElementsByClassName("warning");
var file = '[';

(function() {
    'use strict';
    for(var i = 0;i< rows.length;i++){
        if(rows[i].getElementsByTagName("td").length == 2 && rows[i].getElementsByTagName("td")[1].childElementCount >= 2){
            var elem = rows[i].getElementsByTagName("td")[1].childElementCount;
            var nodes = rows[i].getElementsByTagName("td")[1].children[elem-1].textContent.replace(/[ ]+/g,' ').replace(/['"]+/g,"").replace(/[:]+/g,"").replace(/[\n]+/g,"");
            var descrip = rows[i].getElementsByTagName("td")[1].innerText.replace(/['":]+/g,"").replace("View Details","");
            var mynode = '{"node":"'+nodes+'", "description":"'+descrip+'"},';
            file = file + mynode;
        }else if(rows[i].getElementsByTagName("td").length == 2 && rows[i].getElementsByTagName("td")[1].childElementCount == 0){
            descrip = rows[i].getElementsByTagName("td")[1].innerText.replace(/['":]+/g,"").replace("View Details","");
            mynode = '{"node":"general", "description":"'+descrip+'"},';
            file = file + mynode;
        }
    }
    file = file.slice(0, -1) +']'
    download(filename,file);
})();