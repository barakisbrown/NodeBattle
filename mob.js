var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var NodeBattle;
(function (NodeBattle) {
    var Mob = (function (_super) {
        __extends(Mob, _super);
        function Mob() {
            _super.call(this);
            this.attackTN = 11;
            this.numDice = 3;
            this.dice = NodeBattle.Dice.D6;
        }
        Mob.prototype.attack = function (_def) {
            var tn = this.attackTN + this.ATK - _def;
            var rolled = NodeBattle.misc.manyDiceToss(this.numDice, this.dice);
            console.info('TOTAL TN = ' + tn);
            console.info('Rolled = ' + rolled);
            return (rolled < tn) ? true : false;
        };
        Mob.prototype.dealDmg = function () {
            return NodeBattle.misc.singleDiceToss(this.ATKDICE);
        };
        Mob.prototype.takeDmg = function (_dmg) {
            var rolled = NodeBattle.misc.singleDiceToss(this.DEFDICE);
            var totalDmg = _dmg - rolled;
            if (totalDmg > 0) {
                this.hp -= totalDmg;
            }
        };
        return Mob;
    }(NodeBattle.Base));
    NodeBattle.Mob = Mob;
})(NodeBattle || (NodeBattle = {}));
