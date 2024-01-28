var menuscreencounter = Number(document.getElementById("menuscreencounter").innerHTML)
var menuassemblular
var menutext = [
    "World Currency <br> Exanges",
    "Quilar Exange <br> into aniaml <br> crypto coin",
    "Miners",
    "Log out",
]
function menuscreen(){
    menuassemblular = '<table class="menutable"><tr><td class="atd"><p class="leftarrow" onclick="leftarrow();"><</p></td><td class="ctd" onclick="menutile();"><div class="menutile" id="menutile"><div class="menutiletitle"><p>'+menutext[menuscreencounter]+'<p></div></div></td><td class="atd"><p class="rightarrow" onclick="rightarrow();">></p></td></tr></table>'
    document.getElementById("mainbody").innerHTML = menuassemblular
}

menuscreenonload = setInterval(function(){
    menuscreen();
    clearInterval(menuscreenonload)
}, 1000)

function leftarrow(){
    if(menuscreencounter === 0){
        menuscreencounter = 3
    }else{
        menuscreencounter -= 1
    }
    menuscreen();
    document.getElementById("menuscreencounter").innerHTML = menuscreencounter
}
function rightarrow(){
    if(menuscreencounter === 3){
        menuscreencounter = 0
    }else{
        menuscreencounter += 1
    }
    menuscreen();
    document.getElementById("menuscreencounter").innerHTML = menuscreencounter
}

