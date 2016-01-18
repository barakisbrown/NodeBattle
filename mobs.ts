/// <reference path="base.ts" />
/// <reference path="mob.ts" />

module NodeBattle {

  var defaultMobs = [
        {Name: "A", HP:10, ATK:1, DEF:1, ATKDICE: Dice.D4, DEFDICE : Dice.D4, xp: 2},
        {Name: "B", HP:10, ATK:3, DEF:1, ATKDICE: Dice.D4, DEFDICE : Dice.D4, xp: 2},
        {Name: "C", HP:10, ATK:1, DEF:3, ATKDICE: Dice.D4, DEFDICE : Dice.D4, xp: 2},
    ];

  export class Mobs {
    private list : Array<NodeBattle.Mob> = [];

    constructor() { }

    loadList() {

        for (var single of defaultMobs) {
          this.addMob(single.Name,single.HP,single.ATK,single.DEF,
                      single.ATKDICE,single.DEFDICE,single.xp);
        }
    }

    addMob(_name : string, _hp: number,
           _atk: number, _def:number,
           _atkDice : Dice, _defDice : Dice,
           _xp : number)
    {

           var single = new NodeBattle.Mob()
           single.Name = _name;
           single.HP = _hp;
           single.ATK = _atk;
           single.DEF = _def;
           single.ATKDICE = _atkDice;
           single.DEFDICE = _defDice;
           single.XP = _xp;
           this.list.push(single);
    }

    getMob(_name:string) : Mob {
      throw "Not Impleted Yet!!";
    }
}

}
