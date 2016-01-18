var NodeBattle;
(function (NodeBattle) {
    (function (Dice) {
        Dice[Dice["D4"] = 4] = "D4";
        Dice[Dice["D6"] = 6] = "D6";
        Dice[Dice["D8"] = 8] = "D8";
        Dice[Dice["D10"] = 10] = "D10";
        Dice[Dice["D12"] = 12] = "D12";
        Dice[Dice["D20"] = 20] = "D20";
        Dice[Dice["D100"] = 100] = "D100";
    })(NodeBattle.Dice || (NodeBattle.Dice = {}));
    var Dice = NodeBattle.Dice;
    ;
    var Base = (function () {
        function Base() {
            this.hp = 10;
            this.attDice = Dice.D4;
            this.defDice = Dice.D4;
            this.dead = false;
        }
        Base.prototype.isValidDice = function (_die) {
            switch (_die) {
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
        };
        Object.defineProperty(Base.prototype, "Name", {
            get: function () { return this.name; },
            set: function (_name) {
                this.name = _name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Base.prototype, "HP", {
            get: function () { return this.hp; },
            set: function (_hp) {
                this.hp = _hp;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Base.prototype, "ATK", {
            get: function () { return this.atk; },
            set: function (_atk) {
                this.atk = _atk;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Base.prototype, "DEF", {
            get: function () { return this.def; },
            set: function (_def) {
                this.def = _def;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Base.prototype, "ATKDICE", {
            get: function () { return this.attDice; },
            set: function (_atkDice) {
                if (this.isValidDice(_atkDice)) {
                    this.attDice = _atkDice;
                }
                else {
                    throw "_atkDice is not vaid Dice used.";
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Base.prototype, "DEFDICE", {
            get: function () { return this.defDice; },
            set: function (_defDice) {
                if (this.isValidDice(_defDice)) {
                    this.defDice = _defDice;
                }
                else {
                    throw "_atkDice is not vaid Dice used.";
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Base.prototype, "isDead", {
            get: function () { return this.dead; },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Base.prototype, "XP", {
            get: function () { return this.xp; },
            set: function (_xp) {
                this.xp = _xp;
            },
            enumerable: true,
            configurable: true
        });
        return Base;
    }());
    NodeBattle.Base = Base;
})(NodeBattle || (NodeBattle = {}));
