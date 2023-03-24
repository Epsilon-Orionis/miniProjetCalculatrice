/*
// format prompt
let premierChiffre =prompt("saisire premier chiffre ou nombre");
let calcul =prompt( " choisir + ou / ou - ou *");
let deuxiemeChiffre =prompt("saisire deuxième chiffre ou nombre");
*/
// calculette clean code en cours


// creation du tableau pour créer un format calculette

let table = document.createElement("table");
document.getElementsByClassName("calculatrice")[0].append(table);
table.setAttribute("id","testResponsive");

let ligneZero = document.createElement("tr");
document.getElementsByTagName("table")[0].append(ligneZero);
ligneZero.setAttribute("id","ligneZero")

let affichageCalcul = document.createElement("input");
    document.getElementsByTagName("table")[0].append(affichageCalcul);

    affichageCalcul.style.textAlign = "center";

    affichageCalcul.setAttribute("id","calcul");
    affichageCalcul.innerHTML = " ";

let premiereligne = document.createElement("tr");
document.getElementsByTagName("table")[0].append(premiereligne);
premiereligne.setAttribute("id","oneLigne")


let deuxiemeLigne = document.createElement("tr");
document.getElementsByTagName("table")[0].append(deuxiemeLigne);
deuxiemeLigne.setAttribute("id","twoLigne")

let troisiemeLigne = document.createElement("tr");
document.getElementsByTagName("table")[0].append(troisiemeLigne);
troisiemeLigne.setAttribute("id","threeLigne")



// chiffre 1
let testPremierChiffre = document.createElement("button");
testPremierChiffre.innerHTML = 1;

testPremierChiffre.onclick = function(){testAfficher(1)};
document.getElementById("oneLigne").append(testPremierChiffre);

// chiffre 2
let testDeuxChiffre = document.createElement("button");
testDeuxChiffre.innerHTML = 2;

testDeuxChiffre.onclick = function(){testAfficher(2)};
document.getElementById("oneLigne").append(testDeuxChiffre);

// chiffre 3
let testTroisChiffre = document.createElement("button");
testTroisChiffre.innerHTML = 3;

testTroisChiffre.onclick = function(){testAfficher(3)};
document.getElementById("oneLigne").append(testTroisChiffre);

//multiplication
let testMultiplicationChiffre = document.createElement("button");
testMultiplicationChiffre.innerHTML = "x";

testMultiplicationChiffre.onclick = function(){testAfficher("*")};
document.getElementById("oneLigne").append(testMultiplicationChiffre);

// chiffre 4
let testQuatreChiffre = document.createElement("button");
testQuatreChiffre.innerHTML = 4;

testQuatreChiffre.onclick = function(){testAfficher(4)};
document.getElementById("twoLigne").append(testQuatreChiffre);
console.log(testQuatreChiffre);

//chiffre 5
let testCinqChiffre = document.createElement("button");
testCinqChiffre.innerHTML = 5;

testCinqChiffre.onclick = function(){testAfficher(5)};
document.getElementById("twoLigne").append(testCinqChiffre);

//chiffre 6
let testSixChiffre = document.createElement("button");
testSixChiffre.innerHTML = 6;

testSixChiffre.onclick = function(){testAfficher(6)};
document.getElementById("twoLigne").append(testSixChiffre);

// chiffre 7
let testSeptChiffre = document.createElement("button");
testSeptChiffre.innerHTML = 7;

testSeptChiffre.onclick = function(){testAfficher(7)};
document.getElementById("threeLigne").append(testSeptChiffre);

// chiffre huit
let testHuitChiffre = document.createElement("button");
testHuitChiffre.innerHTML = 8;

testHuitChiffre.onclick = function(){testAfficher(8)};
document.getElementById("threeLigne").append(testHuitChiffre);

// chiffre Neuf
let testNeufChiffre = document.createElement("button");
testNeufChiffre.innerHTML = 9;

testNeufChiffre.onclick = function(){testAfficher(9)};
document.getElementById("threeLigne").append(testNeufChiffre);



// addition
let testPlusChiffre = document.createElement("button");
testPlusChiffre.innerHTML = "+";
testPlusChiffre.onclick = function(){testAfficher("+")};
document.getElementById("oneLigne").append(testPlusChiffre);

//Soustraction
let testMoinsChiffre = document.createElement("button");
testMoinsChiffre.innerHTML = "-";

testMoinsChiffre.onclick = function(){testAfficher("-")};
document.getElementById("oneLigne").append(testMoinsChiffre);

//racine carré
/*
let racineCarre = document.createElement("button");
racineCarre.innerHTML = "√";
racineCarre.setAttribute("id","racineC")
racineCarre.onclick =function(){testAfficher("√")};;
document.getElementById("oneLigne").append(racineCarre);
*/
//division
let testDivisionChiffre = document.createElement("button");
testDivisionChiffre.innerHTML = "/";

testDivisionChiffre.onclick = function(){testAfficher("/")};
document.getElementById("twoLigne").append(testDivisionChiffre);



//parantheseOuverture
let parantheseOuverture = document.createElement("button");
parantheseOuverture.innerHTML = "(";
parantheseOuverture.onclick = function(){testAfficher("(")};
document.getElementById("twoLigne").append(parantheseOuverture);


//parantheseFermeture
let parantheseFermeture = document.createElement("button");
parantheseFermeture.innerHTML = ")";
parantheseFermeture.onclick = function(){testAfficher(")")};
document.getElementById("twoLigne").append(parantheseFermeture);

// chiffre zéro
let testzeroChiffre = document.createElement("button");
testzeroChiffre.innerHTML = 0;
testzeroChiffre.onclick = function(){testAfficher(0)};
document.getElementById("threeLigne").append(testzeroChiffre);

//egal
let egal = document.createElement("button");
egal.innerHTML = "=";
egal.onclick = function(){calculer()};
document.getElementById("threeLigne").append(egal);

//reset
let reset = document.createElement("button");
reset.innerHTML = "c";
reset.style.backgroundColor = "orange";
reset.onclick = function(){effacer()};
document.getElementById("threeLigne").append(reset);


// fonction qui affiche les valeur dans l'input
function testAfficher(val) 
{ 
    document.getElementById("calcul").value+=val ;
    //document.getElementById("calcul").Math.round(Math.sqrt(2)*1000)/1000;
    
} 



// calcul de l'input
function calculer() 
{ 
    let calculInput = document.getElementById("calcul").value ;
    let resultatInput = eval(calculInput) ;
    document.getElementById("calcul").value = resultatInput;

    affichageCalcul.style.backgroundColor = "blue";
    affichageCalcul.style.color = "white";
} 


//effacer l'input
function effacer() 
{ 
    document.getElementById("calcul").value = "" 
    affichageCalcul.style.backgroundColor = "white";
    affichageCalcul.style.color = "black";
} 

function calRacine(a, b) {
    return (Math.sqrt((a * a) + (b * b)));
  }
  