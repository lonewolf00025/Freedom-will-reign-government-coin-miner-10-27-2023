var levelcounter = 1
var lastminerstartcost = 1
var money = 1
var moneypersocond = 0


var eme={
    level:[1],
    cost:[1],
    amount:[0],
    purchase: function(index){
        if(this.amount[index] === 0){
            if(money >= this.cost[index]){
                this.amount[index]++;
                money -= this.cost[index]
                this.cost[index] *= 2;
                levelcounter++;
                this.level.push(levelcounter)
                lastminerstartcost *= 4
                this.cost.push(lastminerstartcost)
                this.amount.push(0)
            }
            updatedisplay1();
        }else{
            if(this.amount[index] > 0){
                if(money >= this.cost[index]){
                    this.amount[index]++;
                    money -= this.cost[index]
                    this.cost[index] *= 2;
                }
                updatedisplay1();
            }            
        }
    }    
}

function updatedisplay1(){
    var minerInfoHTML = ""; // Initialize an empty string to store miner information
    for (a = 0; a < eme.level.length; a++) {
        minerInfoHTML += '<div onclick="eme.purchase('+a+')"><p>miner level ' + eme.level[a] + ' Cost '+ eme.cost[a]+' Amount '+ eme.amount[a] +'</p></div>';
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
    document.getElementById("money").innerHTML = money
    document.getElementById("mgps").innerHTML = moneypersocond
}    
setInterval(function(){
    addmoney();
}, 1000)
