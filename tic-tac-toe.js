"use strict";

window.onload = function(){
    var brd= document.getElementById('board');
    var sqrs= brd.getElementsByTagName('div');
    var xStatus = [];
    var oStatus = [];
    var squaresFilled = 0;
    for (var i = 0; i< sqrs.length; i+=1){
        sqrs[i].setAttribute('class','square');
        sqrs[i].setAttribute('id',i+1);
        sqrs[i].addEventListener('click', function(e) {
            if (squaresFilled%2 == 0){
                e.target.classList.add('X');
                e.target.innerHTML = "X";
                squaresFilled += 1;
                xStatus.push(e.target.id);
                AreWeDoneYet("X");
            } else {
                e.target.classList.add('O');
                e.target.innerHTML = "O";
                squaresFilled += 1;
                oStatus.push(e.target.id);
                AreWeDoneYet("O");
            }
        });
        sqrs[i].addEventListener('mouseover', function(e) {
            if (!(e.target.classList.contains("X") || e.target.classList.contains("O"))){
                e.target.classList.add('hover');
            }
        });
        sqrs[i].addEventListener('mouseout', function(e) {
            e.target.classList.remove('hover');
         });
    }

    var rload= document.getElementsByClassName('btn');
        rload[0].addEventListener('click', function() {
        window.location.reload(true);
    });



    function AreWeDoneYet(player){
        if (player == "X"){
            if  (xStatus.includes("1") && xStatus.includes("2") && xStatus.includes("3")){
                document.getElementById('status').innerHTML = "Congratulations! X is the Winner!";
                document.getElementById('status').classList.add('you-won');
            }else if (xStatus.includes("4") && xStatus.includes("5") && xStatus.includes("6")){
                document.getElementById('status').innerHTML = "Congratulations! X is the Winner!";
                document.getElementById('status').classList.add('you-won');
            }else if (xStatus.includes("7") && xStatus.includes("8") && xStatus.includes("9")){
                document.getElementById('status').innerHTML = "Congratulations! X is the Winner!";
                document.getElementById('status').classList.add('you-won');
            }else if (xStatus.includes("1") && xStatus.includes("4") && xStatus.includes("7")){
                document.getElementById('status').innerHTML = "Congratulations! X is the Winner!";
                document.getElementById('status').classList.add('you-won');
            }else if (xStatus.includes("2") && xStatus.includes("5") && xStatus.includes("8")){
                document.getElementById('status').innerHTML = "Congratulations! X is the Winner!";
                document.getElementById('status').classList.add('you-won');
            }else if (xStatus.includes("3") && xStatus.includes("6") && xStatus.includes("9")){
                document.getElementById('status').innerHTML = "Congratulations! X is the Winner!";
                document.getElementById('status').classList.add('you-won');
            }else if (xStatus.includes("1") && xStatus.includes("5") && xStatus.includes("9")){
                document.getElementById('status').innerHTML = "Congratulations! X is the Winner!";
                document.getElementById('status').classList.add('you-won');
            }else if (xStatus.includes("3") && xStatus.includes("5") && xStatus.includes("7")){
                document.getElementById('status').innerHTML = "Congratulations! X is the Winner!";
                document.getElementById('status').classList.add('you-won');
            }else{}
        }else{
            if  (oStatus.includes("1") && oStatus.includes("2") && oStatus.includes("3")){
                document.getElementById('status').innerHTML = "Congratulations! O is the Winner!";
                document.getElementById('status').classList.add('you-won');
            }else if (oStatus.includes("4") && oStatus.includes("5") && oStatus.includes("6")){
                document.getElementById('status').innerHTML = "Congratulations! O is the Winner!";
                document.getElementById('status').classList.add('you-won');
            }else if (oStatus.includes("7") && oStatus.includes("8") && oStatus.includes("9")){
                document.getElementById('status').innerHTML = "Congratulations! O is the Winner!";
                document.getElementById('status').classList.add('you-won');
            }else if (oStatus.includes("1") && oStatus.includes("4") && oStatus.includes("7")){
                document.getElementById('status').innerHTML = "Congratulations! O is the Winner!";
                document.getElementById('status').classList.add('you-won');
            }else if (oStatus.includes("2") && oStatus.includes("5") && oStatus.includes("8")){
                document.getElementById('status').innerHTML = "Congratulations! O is the Winner!";
                document.getElementById('status').classList.add('you-won');
            }else if (oStatus.includes("3") && oStatus.includes("6") && oStatus.includes("9")){
                document.getElementById('status').innerHTML = "Congratulations! O is the Winner!";
                document.getElementById('status').classList.add('you-won');
            }else if (oStatus.includes("1") && oStatus.includes("5") && oStatus.includes("9")){
                document.getElementById('status').innerHTML = "Congratulations! O is the Winner!";
                document.getElementById('status').classList.add('you-won');
            }else if (oStatus.includes("3") && oStatus.includes("5") && oStatus.includes("7")){
                document.getElementById('status').innerHTML = "Congratulations! O is the Winner!";
                document.getElementById('status').classList.add('you-won');
            }else{}
        }
    }
}