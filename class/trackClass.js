"use strict";
class Track {
  constructor (afstand, snelsteTijd, land){
    this._afstand = afstand;
    this._snelsteTijd = snelsteTijd;
    this._land = land;
  }
  get afstand(){
    return this._afstand;
  }
  get snelsteTijd(){
    return this._snelsteTijd;
  }
  get land(){
    return this._land;
  }
  set afstand(float){
    return this._afstand = float;
  }
  set snelsteTijd(float){
    return this._snelsteTijd = float;
  }
  set land(string){
    return this._land = string;
  }
}
