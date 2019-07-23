//1 
function nonsense(string) {

    var blab = function () {
        alert(string);
    };
    blab();
}

nonsense("string");


//2
function nonsense(string) {

    var blab = function () {
        alert(string);
    };
    setTimeout(blab, 2000);
}

nonsense("string");

//3
function nonsense(string) {

    var blab = function () {
        alert(string);
    };
    return blab
}
var blabLater = nonsense("string");
var blabAgainLater = nonsense("is done")

//4
blabLater()
blabAgainLater()

//5
function lastNameTrier(firstName) {

    return function innerFunction(lastName) {
        return "firstName" + " lastName"
    };
};

var nameFirst = lastNameTrier("Tejas");
var secondName = nameFirst(" Aithal")
var secondName = nameFirst("Singh")

