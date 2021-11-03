document.body.addEventListener("keypress",changedirection)
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
    let pacman= {
        x:1,
        y:2,
        direction: 0 //si = 0 alors pacman bouge vers la droite
        // si = 1 alors pacman ira as gauche
        // si = 2 alors pacman descendra 
        // si = 3 pacman montera
    }
    let phantom= {
        x:10,
        y:11,
        direction: 0
    }
    let tablephantom=[
        
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
    sortie();
    bonbon();
    affichescore();
    affichepacman();
    affichephantom();
    bougephantom();
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
            console.log("mur")
        }
                                    }
        if(grille[phantom.y-1][phantom.x-1]==0) {
            if(phantom.direction ==0) 
            { 
            phantom.x-- 
            }
            else if(phantom.direction ==1)
            { 
                    phantom.x++
            }
            else if (phantom.direction ==2)
            { 
            phantom.y-- 
            }
            else  if (phantom.direction ==3) 
            {
            phantom.y++
            console.log("mur")
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
function affichephantom(){
    let divphantom= document.createElement("div")
    divphantom.className= "phantom"
    document.getElementById("grille").appendChild(divphantom)
    divphantom.style.gridColumnStart=phantom.x
    divphantom.style.gridRowStart=phantom.y
}
function bougephantom(){
phantom.direction=getRandomInt(4)
    if(phantom.direction ==0) { //si = 0 alors pacman bouge vers la droite
        phantom.x++ //x = axe horizontale
    }
    else if(phantom.direction ==1){ // si = 1 alors pacman ira as gauche
        phantom.x--
    }
    else if (phantom.direction ==2){ // si = 2 alors pacman descendra 
        phantom.y++ // y = axe vertical
    }
    else  if (phantom.direction ==3) {// si = 3 alors pacman montera
        phantom.y--
    }
}
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }