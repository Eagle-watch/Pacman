class Phantom {
   x
   y
   direction
   constructor(x,y,direction){
       this.x =x
       this.y = y
       this.direction = direction
   }
   affichephantom(num){
    let divphantom= document.createElement("div")
    divphantom.className= "phantom"+(num%4)
    document.getElementById("grille").appendChild(divphantom)
    divphantom.style.gridColumnStart=this.x
    divphantom.style.gridRowStart=this.y
   }
   bougephantom(){
    this.direction=getRandomInt(4)
        if(this.direction ==0) { //si = 0 alors pacman bouge vers la droite
            this.x++ //x = axe horizontale
        }
        else if(this.direction ==1){ // si = 1 alors pacman ira as gauche
            this.x--
        }
        else if (this.direction ==2){ // si = 2 alors pacman descendra 
            this.y++ // y = axe vertical
        }
        else  if (this.direction ==3) {// si = 3 alors pacman montera
            this.y--
        }
    }
    colisionphantom(grille){
        if(grille.grille[this.y-1][this.x-1]==0) {
           if(this.direction ==0) 
          { 
            this.x-- 
             }
               else if(this.direction ==1)
               { 
                this.x++
               }
               else if (this.direction ==2)
               { 
                this.y-- 
               }
               else  if (this.direction ==3) 
               {
                this.y++
               }
               }
  }
  perdu(pacman){
    if ( pacman.x== this.x && pacman.y== this.y){
        alert("Vous Avez Perdu")
        clearInterval(numinterval)
    }
}
sortiephantom(){
    if (this.x<1){
        this.x = 19
}
if(this.x>19){
    this.x = 1
}
}
}
