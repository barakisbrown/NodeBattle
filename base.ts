module NodeBattle {

/** Common Enum that I will use throughout this application */
export enum Dice {D4 = 4,D6 = 6,D8 = 8,D10 = 10,D12 = 12, D20 = 20, D100 = 100};

/** Base Module which is what other classes will extend */
export class Base {

    protected name: string;
    protected hp: number = 10;
    protected atk: number;
    protected def: number;
    protected attDice : number = Dice.D4;
    protected defDice : number = Dice.D4;
    protected dead : boolean = false;

    constructor() {}

    protected isValidDice(_die : Dice) : boolean {

      switch(_die) {
        case Dice.D4:
        case Dice.D6:
        case Dice.D8:
        case Dice.D10:
        case Dice.D12:
        case Dice.D20:
        case Dice.D100: {
          return true;
        }
        default: {
          return false;
        }

      }
    }

    get Name(): string { return this.name; }
    get HP(): number { return this.hp; }
    get ATK(): number { return this.atk; }
    get DEF(): number { return this.def; }
    get ATKDICE(): Dice { return this.attDice; }
    get DEFDICE(): Dice { return this.defDice; }
    get isDead(): boolean { return this.dead;}

    set Name(_name: string) {
      this.name = _name;
    }

    set HP(_hp: number) {
      this.hp = _hp;
    }

    set ATK(_atk: number) {
      this.atk = _atk;
    }

    set DEF(_def: number) {
      this.def = _def;
    }

    set ATKDICE(_atkDice : Dice) {
      if (this.isValidDice(_atkDice)) {
        this.attDice = _atkDice;
      } else {
        throw "_atkDice is not vaid Dice used.";
      }
    }

    set DEFDICE(_defDice : Dice) {
      if (this.isValidDice(_defDice)) {
        this.defDice = _defDice;
      } else {
        throw "_atkDice is not vaid Dice used.";
      }      
    }
  }
}
