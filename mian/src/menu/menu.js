var menuscreencounter = 0
var menuassemblular
var menutext = [
    "World Currency <br> Exanges",
    "Quilar Exange into aniaml crypto coin",
    "Miners",
    "Log out",
]
function menuscreen(){
    menuassemblular = '<table><tr><td class="atd"><p class="leftarrow" onclick="leftarrow"><</p></td><td class="ctd"><div class="menutile" id="menutile" onclick="menutile"><div class="menutiletitle"><p>'+menutext[menuscreencounter]+'<p></div></div></td><td class="atd"><p class="rightarrow" onclick="rightarrow">></p></td></tr></table>'
    document.getElementById("mainbody").innerHTML = menuassemblular
}
window.onload = function(){
    menuscreen();
}

