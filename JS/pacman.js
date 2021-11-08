document.body.addEventListener("keypress",changedirection)
document.getElementById("restart").addEventListener(
    "click" , rejouer
)
let score= 0
let grille=new Grille()
    let copiegrille = JSON.parse(JSON.stringify(grille));
    let pacman= new Pacman(1,2,0)
    let tablephantom=[ new Phantom(10,11,0), new Phantom(10,11,0), new Phantom(10,11,0), new Phantom(10,11,0)]
    let numinterval = setInterval(tourdejeu,350)

function tourdejeu(){
    grille.affichegrille(pacman,tablephantom);
    pacman.bougepacman();
    pacman.colision(grille);
    for(let i =0;i<tablephantom.length;i++){
        tablephantom[i].colisionphantom(grille);
        tablephantom[i].sortiephantom(grille);
        tablephantom[i].affichephantom(i);
        tablephantom[i].perdu(pacman,grille);
        tablephantom[i].bougephantom();
        tablephantom[i].perdu(pacman,grille);
    }
    pacman.sortie();
    pacman.bonbon(grille);
    affichescore();
    pacman.affichepacman();
    setTimeout(()=>{
        pacman.gagné(grille)
    },50);
    
}
function changedirection (event){
    if(event.key=="d" || event.key=="D"){
        pacman.direction =0
    }
    else if (event.key== "q" || event.key=="Q"){
        pacman.direction =1
    }
    else if (event.key== "s" || event.key== "S"){
        pacman.direction =2
    }
    else if (event.key== "z" || event.key== "Z") {
        pacman.direction =3
    }
    else {
            console.log("Touche Non Gerée")
    }
}
function affichescore(){
let divscore= document.querySelector(".score")
divscore.innerHTML = "Score : "+ score
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
function rejouer (){
    let nombrephantom = document.getElementById("restphantom").value
console.log(nombrephantom)

    clearInterval(numinterval)
    grille= new Grille
 
        pacman.x = 1 
        pacman.y = 2
    tablephantom = []
    for(let i =0;i<nombrephantom;i++){
        tablephantom.push(new Phantom(10,11,0))
    }
    score = 0
    numinterval=setInterval(tourdejeu, 350)
}
