var mineridbase = "minerp"
var numbercounter = 1
var letter1 = "L"
var letter2 = "A"
var letter3 = "C"
var cmi = []
for (a = 0; a < 10; a++){
    cmi.push(mineridbase + String(numbercounter) + letter1)
    cmi.push(mineridbase + String(numbercounter) + letter2)
    cmi.push(mineridbase + String(numbercounter) + letter3)
    numbercounter += 1
}