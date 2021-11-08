class Pacman {

    x
    y
    direction
    constructor(x,y,direction){
        this.x = x 
        this.y = y
        this.direction = direction
    }

     affichepacman(){
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
    
     bougepacman(){
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
    colision(grille){
    if(grille.grille[pacman.y-1][pacman.x-1]==0) {
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
     sortie(){
    if (pacman.x<1){
        pacman.x = 19
    }
    if(pacman.x>19){
        pacman.x = 1
    }
    }
    bonbon(grille){
    if(grille.grille[pacman.y-1][pacman.x-1]==2) {
        grille.grille[pacman.y-1][pacman.x-1]=1
        score+= +10
    }
}
    gagné(grille){
    let testgagné = true
    for(let i=0;i<22;i++){
        for(let j=0;j<19;j++){
                if (grille.grille[i][j] ==2){
                    testgagné = false
                }
        }
    } 
    if(testgagné==true){
        alert("Vous Avez gagné")
        clearInterval(numinterval)
    }   
    }
}
