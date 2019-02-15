"use strict"
class Coureur {
  constructor (naam, land, teamID){
    this._naam = naam;
    this._land = lamd;
    this._teamID = teamID;
  }
  get naam(){
    return this._naam;
  }
  get land(){
    return this._land;
  }
  get teamID(){
    return this._teamID;
  }
  set naam(string){
    return this._naam = string;
  }
  set land(string){
    return this._land = string;
  }
  set teamID(integer){
    return this._teamID = integer;
  }
}
