"use strict";
class Auto {
  constructor (merk, motor, teamID){
    this._merk = merk;
    this._motor = motor;
    this._teamID = teamID;
  }
  get merk(){
    return this._merk;
  }
  get motor(){
    return this._motor;
  }
  get teamID(){
    return this._teamID;
  }
  set merk(string){
    return this._merk = string;
  }
  set motor(string){
    return this._motor = string;
  }
  set teamID(integer){
    return this._teamID = integer;
  }
}
