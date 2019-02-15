"use stric";
class Team {
  constructor (teamNaam, coureurID){
    this._teamNaam = teamNaam;
    this._coureurID = coureurID;
  }
  get teamNaam(){
    return this._teamNaam;
  }
  get coureurID(){
    return this._coureurID;
  }
  set teamNaam(string){
    return this._teamNaam = string;
  }
  set coureurID(integer){
    return this._coureurID = integer;
  }
}
