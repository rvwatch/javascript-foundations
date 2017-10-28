function Unicorn(name, color, says) {
  this.name = name;
  this.color = color || 'white';
  
}


 Unicorn.prototype.isWhite = function() {
  if (this.color === 'white'){
      return true;
    } else {
      return false;
    }
 }

Unicorn.prototype.says = function(string) {
  return "**;* " + string + " *;**";
}

module.exports = Unicorn;