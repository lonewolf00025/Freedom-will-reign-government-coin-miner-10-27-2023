var levelcounter = 1
var lastminerstartcost = 1
var money = 1
var moneypersocond = 0


var eme={
    level:[1],
    cost:[1],
    amount:[0],  
}
function GEL1(){
    var gel1 = {
        money: money,
        levelcounter: levelcounter,
        lastminerstartcost: lastminerstartcost,
        eme: eme,
    }
    localStorage.setItem("Gel1", JSON.stringify(gel1))
}

function LGEL1(){
    var lgel1 = JSON.parse(localStorage.getItem("Gel1"));
    if(typeof lgel1.money !== "undefined") money = lgel1.money;
    if(typeof lgel1.levelcounter !== "undefined") levelcounter = lgel1.levelcounter;
    if(typeof lgel1.lastminerstartcost !== "undefined") lastminerstartcost = lgel1.lastminerstartcost;
    if(typeof lgel1.eme !== "undefined") eme = lgel1.eme;
}
function RGEL1(){
    levelcounter = 1
    lastminerstartcost = 1
    money = 1
    moneypersocond = 0

    eme={
        level:[1],
        cost:[1],
        amount:[0],  
    }
    GEL1();    
}

function purchase(index){
    if(eme.amount[index] === 0){
        if(money >= eme.cost[index]){
            eme.amount[index]++;
            money -= eme.cost[index]
            eme.cost[index] *= 2;
            levelcounter++;
            eme.level.push(levelcounter)
            lastminerstartcost *= 4
            eme.cost.push(lastminerstartcost)
            eme.amount.push(0)
        }
        GEL1();
        updatedisplay1();
    }else{
        if(eme.amount[index] > 0){
            if(money >= eme.cost[index]){
                eme.amount[index]++;
                money -= eme.cost[index]
                eme.cost[index] *= 2;
            }
            GEL1();
            updatedisplay1();
        }            
    }
}  

function updatedisplay1(){
    var minerInfoHTML = ""; // Initialize an empty string to store miner information
    for (a = 0; a < eme.level.length; a++) {
        minerInfoHTML += '<div onclick="purchase('+a+')"><p>miner level ' + eme.level[a] + ' Cost '+ eme.cost[a]+' Amount '+ eme.amount[a] +'</p></div>';
    }
    moneypersocond = 0
    for(c = 0; c < eme.level.length; c++){
        if(eme.amount[c] > 0){
            moneypersocond += eme.level[c] * eme.amount[c]
        }
    }
    document.getElementById("mgps").innerHTML = moneypersocond
    document.getElementById("main").innerHTML = minerInfoHTML; // Set the HTML for all miners
}

setInterval(function() {
    updatedisplay1();
}, 10000); // Change 10000 to the desired update interval in milliseconds
window.onload = function(){
    updatedisplay1();
}
function addmoney(){
    moneypersocond = 0
    for(b = 0; b < eme.level.length; b++){
        if(eme.amount[b] > 0){
            money += eme.level[b] * eme.amount[b]
            moneypersocond += eme.level[b] * eme.amount[b]
        }
    }
    document.getElementById("money").innerHTML = numberformat.formatShort(money, {sigfigs: 3})
    document.getElementById("mgps").innerHTML = numberformat.formatShort(moneypersocond, {sigfigs: 3})
}   
setInterval(function(){
    addmoney();
}, 1000)
setInterval(function(){
    GEL1();
}, 10000)
window.onload = function(){
    LGEL1();
    updatedisplay1();
}