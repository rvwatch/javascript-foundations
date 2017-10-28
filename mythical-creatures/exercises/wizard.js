function Wizard(obj, bearded){
    this.name = obj.name;
    this.counter = 0;
    this.isRested = true;
    this.bearded = true || bearded;

}


Wizard.prototype.cast = function(spell) {
  this.counter++;
  if (this.counter > 2){
    this.isRested = false;
    return 'I SHALL NOT CAST';
  } 
  return spell.toUpperCase();
};


module.exports = Wizard;