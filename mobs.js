var NodeBattle;
(function (NodeBattle) {
    var defaultMobs = [
        { Name: "A", HP: 10, ATK: 1, DEF: 1, ATKDICE: NodeBattle.Dice.D4, DEFDICE: NodeBattle.Dice.D4, xp: 2 },
        { Name: "B", HP: 10, ATK: 3, DEF: 1, ATKDICE: NodeBattle.Dice.D4, DEFDICE: NodeBattle.Dice.D4, xp: 2 },
        { Name: "C", HP: 10, ATK: 1, DEF: 3, ATKDICE: NodeBattle.Dice.D4, DEFDICE: NodeBattle.Dice.D4, xp: 2 },
    ];
    var Mobs = (function () {
        function Mobs() {
            this.list = [];
        }
        Mobs.prototype.loadList = function () {
            for (var _i = 0, defaultMobs_1 = defaultMobs; _i < defaultMobs_1.length; _i++) {
                var single = defaultMobs_1[_i];
                this.addMob(single.Name, single.HP, single.ATK, single.DEF, single.ATKDICE, single.DEFDICE, single.xp);
            }
        };
        Mobs.prototype.addMob = function (_name, _hp, _atk, _def, _atkDice, _defDice, _xp) {
            var single = new NodeBattle.Mob();
            single.Name = _name;
            single.HP = _hp;
            single.ATK = _atk;
            single.DEF = _def;
            single.ATKDICE = _atkDice;
            single.DEFDICE = _defDice;
            single.XP = _xp;
            this.list.push(single);
        };
        Mobs.prototype.getMob = function (_name) {
            throw "Not Impleted Yet!!";
        };
        return Mobs;
    }());
    NodeBattle.Mobs = Mobs;
})(NodeBattle || (NodeBattle = {}));
