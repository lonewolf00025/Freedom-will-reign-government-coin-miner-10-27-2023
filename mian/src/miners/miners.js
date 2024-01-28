var mineridbase = "minerp"
var numbercounter = 1
var letter1 = "L"
var letter2 = "A"
var letter3 = "C"
var cmi = {
    level:[],
    amount:[],
    cost:[],
}

var addtoQuilarasecond = Number(document.getElementById("quillarpersecond").innerHTML)

for (a = 0; a < 10; a++){
    cmi.level.push(Number(document.getElementById(mineridbase + String(numbercounter) + letter1).innerHTML))
    cmi.amount.push(Number(document.getElementById(mineridbase + String(numbercounter) + letter2).innerHTML))
    cmi.cost.push(Number(document.getElementById(mineridbase + String(numbercounter) + letter3).innerHTML))
    numbercounter += 1
}
function mineQuillar(){
    var Quillartemp = 0
    Quillartemp = Number(document.getElementById("Quillar").innerHTML)
    Quillartemp += addtoQuilarasecond
    document.getElementById("Quillar").innerHTML = Quillartemp
}
setInterval(function(){
    mineQuillar();
    isminertileornot = Number(document.getElementById("menuscreencounter").innerHTML)
}, 1000)

var buildminers
function buildanddisplayminers(){
    buildminers = '<div class="minertable">'
    for(b = 0; b < 10; b++){
        buildminers += '<table onclick="buyMiner" class="miners"><tr><td><p>image to be added</p></td><td><p>Miner Level : '+cmi.level[b]+'</p></td><td><p>cost : '+cmi.cost[b]+'</p></td><td><p>Amount Owned : '+cmi.amount[b]+'</p></td></tr></table>'        
    }
    buildminers +='<button class = "menubuttonunderminers" onclick ="menuscreen();">Return to Menu</button> '
    buildminers += '</div>'
    document.getElementById("mainbody").innerHTML = buildminers
}

function menutile(){
    if(isminertileornot === 2){
        buildanddisplayminers();
    }
}