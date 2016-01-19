/// <reference path="base.ts" />
/// <reference path="misc.ts" />
/// <reference path="icommands.ts"/>

module NodeBattle {

  export class Mob extends Base implements icommands {

    attackTN : number = 11;
    numDice : number = 3;
    dice : Dice = Dice.D6;

    constructor() { super(); }

    attack(_def : number) : boolean {
        var tn = this.attackTN + this.ATK - _def;

        var rolled = NodeBattle.misc.manyDiceToss(this.numDice,this.dice);
        /** log values to the console */
        console.info('TOTAL TN = ' + tn);
        console.info('Rolled = ' + rolled);
        /** return results */
        return (rolled < tn) ? true : false;
    }

    dealDmg() : number {
      return NodeBattle.misc.singleDiceToss(this.ATKDICE);
    }

    takeDmg(_dmg : number) {
      var rolled = NodeBattle.misc.singleDiceToss(this.DEFDICE);
      var totalDmg = _dmg - rolled;
      if (totalDmg > 0) {
        this.hp -= totalDmg;
      }
    }
  }
}
