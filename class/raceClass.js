"use strict";
class Race {
  constructor (trackID, teamID){
    this._trackID = trackID;
    this._teamID = teamID;
  }
  get trackID(){
    return this._trackID;
  }
  get teamID(){
    return this._teamID;
  }
  set trackID(integer){
    return this._trackID = integer;
  }
  set teamID(integer){
    return this._teamID = integer;
  }
}
