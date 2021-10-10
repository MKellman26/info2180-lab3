"use strict";

window.onload = function(){
    var brd= document.getElementById('board');
    var sqrs= brd.getElementsByTagName('div');
    for (var i = 0; i< sqrs.length; i+=1){
        sqrs[i].setAttribute('class','square');
    }
}
