var elements = [
    '<button onclick="logintab();">Login</button>', //0 login
    '<button class="active" onclick="logintab();">Login</button>', // 1 login A
    '<button onclick="CreateAcounttab();">Create Acount</button>', // 2 Create Acount
    '<button class="active" onclick="CreateAcounttab();">Create Acount</button>', // 3 Create Acount A
    '<button onclick="DeleteAcounttab();">Delete Acount</button>', // 4 Delete Acount
    '<button class="active" onclick="DeleteAcounttab();">Delete Acount</button>' // 5 Delete Acount A
]
var lte = [
    '<h2>Login</h2>',
    '<form>',
    '<label for=\"loginUsername\">Username:</label>',
    '<input type=\"text\" id=\"loginUsername\" name=\"loginUsername\" required><br>',
    '<button class="button" onclick="checkLogin()">Login</button>',
    '</form>',
]
var cte = [
    '<h2>Register</h2>',
    '<form>',
    '<label for=\"username\">Username:</label>',
    '<input type=\"text\" id=\"username\" name=\"username\" required><br>',
    '<button class="button" onclick="registerUser()">Register Username</button>',
    '</form>',
]
var dte = [
    '<h2>Delete Account</h2>',
    '<form>',
    '<label for=\"deleteUsername\">Username:</label>',
    '<input type=\"text\" id=\"deleteUsername\" name=\"deleteUsername\" required><br>',
    '<button class="button" onclick="deleteAccount()">Delete Account</button>',
    '</form>',
]
var aeio
var alte = lte[0] + lte[1] + lte[2] + lte[3] + lte[4] + lte[5]
var arte = cte[0] + cte[1] + cte[2] + cte[3] + cte[4] + cte[5]
var adte = dte[0] + dte[1] + dte[2] + dte[3] + dte[4] + dte[5]
function logintab(){
    aeio = elements[1] + elements[2] + elements[4]
    document.getElementById("tabs").innerHTML = aeio
    document.getElementById("content").innerHTML = alte
}
function CreateAcounttab(){
    aeio = elements[0] + elements[3] + elements[4]
    document.getElementById("tabs").innerHTML = aeio
    document.getElementById("content").innerHTML = arte
}
function DeleteAcounttab(){
    aeio = elements[0] + elements[2] + elements[5]
    document.getElementById("tabs").innerHTML = aeio
    document.getElementById("content").innerHTML = adte
}
var wlp1 = setInterval(function(){
    logintab();
    clearInterval(wlp1)
}, 0)