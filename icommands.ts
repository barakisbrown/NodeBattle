/// <reference path="base.ts" />

module NodeBattle {

  export interface icommands {
    
    attackTN : number;
    numDice : number;
    dice : Dice;

    attack(_def:number) : boolean;
    dealDmg() : number;
    takeDmg(_dmg: number);
  
 }
}
