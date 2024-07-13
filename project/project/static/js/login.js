// neither admin nor user
localStorage.currentlyLogged = 0;

let logAsUser = document.getElementById('b1');

logAsUser.addEventListener('click', function(){
    localStorage.currentlyLogged = 1;
});


let logAsAdmin = document.getElementById('b2');

logAsAdmin.addEventListener('click', function() {
    localStorage.currentlyLogged = 2;

});
function goto(){
    if(document.getElementById('pass').value=="" || document.getElementById('use').value==""){
        alert("Please fill all the fields");
    }
    else if (document.getElementById('pass').value!="" && document.getElementById('use').value!="") {
        document.getElementById("a111111").href="../HTML/homePage.html";
        document.getElementById("a222222").href="../HTML/homePage.html";
    }
}