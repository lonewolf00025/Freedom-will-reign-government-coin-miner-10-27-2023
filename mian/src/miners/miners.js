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
for (a = 0; a < 10; a++){
    cmi.level.push(Number(document.getElementById(mineridbase + String(numbercounter) + letter1).innerHTML))
    cmi.amount.push(Number(document.getElementById(mineridbase + String(numbercounter) + letter2).innerHTML))
    cmi.cost.push(Number(document.getElementById(mineridbase + String(numbercounter) + letter3).innerHTML))
    numbercounter += 1
}
function mineQuillar(){
    var Quillartemp = 0
    for(a = 0; a < 10; a++){
        Quillartemp += cmi.level[a] * cmi.amount[a]
    }
    Quillartemp += Number(document.getElementById("Quillar").innerHTML)
    document.getElementById("Quillar").innerHTML = Quillartemp
}
setInterval(function(){
    mineQuillar();
}, 1000)
