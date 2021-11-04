document.body.addEventListener("keypress",changedirection)
document.getElementById("restart").addEventListener(
    "click" , rejouer
)
let score= 0
let grille=[
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,0],
    [0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],
    [0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],
    [0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
    [0,2,0,0,2,0,2,0,0,0,0,0,2,0,2,0,0,2,0],
    [0,2,2,2,2,0,2,2,2,0,2,2,2,0,2,2,2,2,0],
    [0,0,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,0,0],
    [0,1,1,0,2,0,2,2,2,2,2,2,2,0,2,0,1,1,0],
    [0,0,0,0,2,0,2,0,0,1,0,0,2,0,2,0,0,0,0],
    [2,2,2,2,2,2,2,0,1,1,1,0,2,2,2,2,2,2,2],
    [0,0,0,0,2,0,2,0,0,1,0,0,2,0,2,0,0,0,0],
    [0,1,1,0,2,0,2,2,2,2,2,2,2,0,2,0,1,1,0],
    [0,0,0,0,2,0,2,0,0,0,0,0,2,0,2,0,0,0,0],
    [0,2,2,2,2,2,2,2,2,0,2,2,2,2,2,2,2,2,0],
    [0,2,0,0,2,0,0,0,2,0,2,0,0,0,2,0,0,2,0],
    [0,2,2,0,2,2,2,2,2,2,2,2,2,2,2,0,2,2,0],
    [0,0,2,0,2,0,2,0,0,0,0,0,2,0,2,0,2,0,0],
    [0,2,2,2,2,0,2,2,2,0,2,2,2,0,2,2,2,2,0],
    [0,2,0,0,0,0,0,0,2,0,2,0,0,0,0,0,0,2,0],
    [0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    ];
    let copiegrille = JSON.parse(JSON.stringify(grille));
    let pacman= {
        x:1,
        y:2,
        direction: 0 //si = 0 alors pacman bouge vers la droite
        // si = 1 alors pacman ira as gauche
        // si = 2 alors pacman descendra 
        // si = 3 pacman montera
    }
    // let phantom= {
    //     x:10,
    //     y:11,
    //     direction: 0
    // }
    let tablephantom=[
        {
            x:10,
            y:11,
            direction: 0
        },{
            x:10,
            y:11,
            direction: 0
        },{
            x:10,
            y:11,
            direction: 0
        },{
            x:10,
            y:11,
            direction: 0
        }
    ]
    pacman.x
    function affichegrille(){
        document.getElementById("grille").innerHTML=""
    for(let i=0;i<22;i++){
        for(let j=0;j<19;j++){
            let element= document.createElement("div")
            if(grille[i][j]==0)
            {
                element.className="mur"
            }
            else if(grille[i][j]==1) {
                element.className="sol"
            }
            else{
                element.className="bonbon"
            }
            document.getElementById("grille").appendChild(element)
            element.style.gridRowStart=i+1
            element.style.gridColumnStart=j+1
        }
    }
    }
    let numinterval = setInterval(tourdejeu,350)

function tourdejeu(){
    affichegrille();
    bougepacman();
    colision();
    for(let i =0;i<tablephantom.length;i++){
        colisionphantom(i);
        sortiephantom(i);
        affichephantom(i);
        perdu(i);
        bougephantom(i);
        perdu(i);
    }
    sortie();
    bonbon();
    affichescore();
    affichepacman();
    setTimeout(gagné,50);
    
}
function affichepacman(){
    let divpacman= document.createElement("div")
    divpacman.className= "pacman"
    document.getElementById("grille").appendChild(divpacman)
    divpacman.style.gridColumnStart=pacman.x
    divpacman.style.gridRowStart=pacman.y
    divpacman.style.transform="rotate(90deg)"
    if(pacman.direction ==0) 
    { 
        divpacman.style.transform= "rotate(0deg)"
    }
    else if(pacman.direction ==1)
    { 
        divpacman.style.transform= "rotate(180deg)"
    }
    else if (pacman.direction ==2)
    {
        divpacman.style.transform= "rotate(90deg)"
    }
    else  if (pacman.direction ==3) 
    {
        divpacman.style.transform= "rotate(270deg)"
    }
}
function bougepacman(){
    if(pacman.direction ==0) { //si = 0 alors pacman bouge vers la droite
        pacman.x++ //x = axe horizontale
    }
    else if(pacman.direction ==1){ // si = 1 alors pacman ira as gauche
        pacman.x--
    }
    else if (pacman.direction ==2){ // si = 2 alors pacman descendra 
        pacman.y++ // y = axe vertical
    }
    else  if (pacman.direction ==3) {// si = 3 alors pacman montera
        pacman.y--
    }
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
function colision(){
    if(grille[pacman.y-1][pacman.x-1]==0) {
        if(pacman.direction ==0) { //si = 0 alors pacman bouge vers la droite
            pacman.x-- //x = axe horizontale
        }
        else if(pacman.direction ==1){ // si = 1 alors pacman ira as gauche
           pacman.x++
        }
        else if (pacman.direction ==2){ // si = 2 alors pacman descendra 
            pacman.y-- // y = axe vertical
        }
        else  if (pacman.direction ==3) {// si = 3 alors pacman montera
            pacman.y++
            //console.log("mur")
        }
                                    }
}
function bonbon(){
    if(grille[pacman.y-1][pacman.x-1]==2) {
        grille[pacman.y-1][pacman.x-1]=1
        score+= +10
    }
}
function affichescore(){
let divscore= document.querySelector(".score")
divscore.innerHTML = "Score : "+ score
}
function sortie(){
if (pacman.x<1){
    pacman.x = 19
}
if(pacman.x>19){
    pacman.x = 1
}
}
function gagné(){
let testgagné = true
for(let i=0;i<22;i++){
    for(let j=0;j<19;j++){
            if (grille[i][j] ==2){
                testgagné = false
            }
    }
} 
if(testgagné==true){
    alert("Vous Avez gagné")
    clearInterval(numinterval)
}   
}
function affichephantom(num){
    let divphantom= document.createElement("div")
    divphantom.className= "phantom"+(num%4)
    document.getElementById("grille").appendChild(divphantom)
    divphantom.style.gridColumnStart=tablephantom[num].x
    divphantom.style.gridRowStart=tablephantom[num].y
}
function bougephantom(num){
tablephantom[num].direction=getRandomInt(4)
    if(tablephantom[num].direction ==0) { //si = 0 alors pacman bouge vers la droite
        tablephantom[num].x++ //x = axe horizontale
    }
    else if(tablephantom[num].direction ==1){ // si = 1 alors pacman ira as gauche
        tablephantom[num].x--
    }
    else if (tablephantom[num].direction ==2){ // si = 2 alors pacman descendra 
        tablephantom[num].y++ // y = axe vertical
    }
    else  if (tablephantom[num].direction ==3) {// si = 3 alors pacman montera
        tablephantom[num].y--
    }
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
function colisionphantom(num){
      if(grille[tablephantom[num].y-1][tablephantom[num].x-1]==0) {
         if(tablephantom[num].direction ==0) 
        { 
            tablephantom[num].x-- 
           }
             else if(tablephantom[num].direction ==1)
             { 
                     tablephantom[num].x++
             }
             else if (tablephantom[num].direction ==2)
             { 
             tablephantom[num].y-- 
             }
             else  if (tablephantom[num].direction ==3) 
             {
             tablephantom[num].y++
             }
             }
}
function sortiephantom(num){
     if (tablephantom[num].x<1){
     tablephantom[num].x = 19
 }
 if(tablephantom[num].x>19){
     tablephantom[num].x = 1
 }
}
function perdu(num){
    if ( pacman.x== tablephantom[num].x && pacman.y == tablephantom[num].y){
        alert("Vous Avez Perdu")
        clearInterval(numinterval)
    }
}
function rejouer (){
    let nombrephantom = document.getElementById("restphantom").value
console.log(nombrephantom)

    clearInterval(numinterval)
    grille = JSON.parse(JSON.stringify(copiegrille));
 
        pacman.x = 1 
        pacman.y = 2
    tablephantom = []
    for(let i =0;i<nombrephantom;i++){
        tablephantom.push({
            x:10, y:11, direction:0
        })
    }
    score = 0
    numinterval=setInterval(tourdejeu, 350)
}
