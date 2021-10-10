"use strict";

window.onload = function(){
    var brd= document.getElementById('board');
    var sqrs= brd.getElementsByTagName('div');
    var status = []
    for (var i = 0; i< sqrs.length; i+=1){
        sqrs[i].setAttribute('class','square');
        sqrs[i].addEventListener('click', function(e) {
            if (status.length%2 == 0){
                e.target.classList.add('X');
                e.target.innerHTML = "X";
                status.push("X");
            } else {
                e.target.classList.add('O');
                e.target.innerHTML = "O";
                status.push("O");
            }
        });
}
}
