/// <reference path="base.ts" />
/// <reference path="misc.ts" />
/// <reference path="icommands.ts"/>

module NodeBattle {

  export class Player extends Base implements icommands {

    attackTN : number = 11;
    numDice : number = 3;
    dice : Dice = Dice.D6;

    constructor() { super(); }

    attack(_def:number) : boolean {
      var tn = this.attackTN + this.ATK - _def;
      var rolled = misc.manyDiceToss(this.numDice,this.dice);

      console.info('Total TN = ' + tn);
      console.info('Rolled = ' + rolled);

      return (rolled < tn) ? true : false;
    }

    dealDmg() : number {
      return misc.singleDiceToss(this.ATKDICE);
    }

    takeDmg(_dmg : number) {
      var rolled = misc.singleDiceToss(this.DEFDICE);
      var totalDmg = _dmg - rolled;
      if (totalDmg > 0) {
        this.hp -= totalDmg;
      }
    }
  }
}
