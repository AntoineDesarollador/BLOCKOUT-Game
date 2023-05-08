
//! MISE EN PLACE DU CANVAS 2D

let canvas = document.getElementById("play-area");
ctx= canvas.getContext("2d");

//! TAILLE DE LA BALLE

ballRadius= 9;

//! POSITION DE DÉPART DE LA BALLE - POSITION ALÉATOIRE 

//_ position x de départ de la balle
x= canvas.width/(Math.floor(Math.random()*Math.random()*10)+3);

//_ position y de départ de la balle = hateur du canvas - 40px
y = canvas.height -40;

//! ÉTAPES MOUVEMENT BALLE 
dx=2;
dy=-2;


//! TAILLE DU PADDLE

let paddleHeight = 12;
    paddleWidth=72;

//!  PADDLE POSITION x AU START

let paddleX = (canvas.width - paddleWidth)/2;

//! POSITION DES BLOCK / NON LE DRAW / 

let rowCount = 5,
    columnCount = 9,
    brickWidth = 54,
    brickHeight = 18,
    brickPadding = 12,
    topOffset = 40,
    leftOffset = 33,
    score = 0;


//, BRIKS EST L'ENSEMBLE DES BLOCKS SOUS FORME D'UN ARRAY

let briks = [];


//, MISE EN PLACE DE CHAQUE COLONNE ET CHAQUE LIGNE DANS LE BRIKS

//_ Tant que c < columnCount est vrai 
//_ tu continues le deuxieme for 

for (let c = 0; c < columnCount; c++){
    briks[c]=[];

//_ quand le r < rowCount devient faux 
//_ la premiere vérification du premier for est terminée 
//_ donc ==> c++, et ainsi de suite jusqu'a ce que c < columnCount soit faux

    for (let r = 0; r < rowCount; r++){

        //_ S'occupe d'ajouter chaque ligne dans la colonne actuelle 
        
        briks[c][r]= {x:0, y:0, status:1};
    }
}

//! DRAW BRICKS 



