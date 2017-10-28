function Dragon(name, rider, color){
    this.name = name;
    this.rider = 'Eragon';
    this.color = 'blue';
    this.hungry = true;
    this.timesEaten = 0;
}

Dragon.prototype.eat = function(){
  this.timesEaten++; 
      if(this.timesEaten > 2){
        this.hungry = false;
      }
}


module.exports = Dragon;