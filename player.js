var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var NodeBattle;
(function (NodeBattle) {
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player() {
            _super.call(this);
            this.attackTN = 11;
            this.numDice = 3;
            this.dice = NodeBattle.Dice.D6;
        }
        Player.prototype.attack = function (_def) {
            var tn = this.attackTN + this.ATK - _def;
            var rolled = NodeBattle.misc.manyDiceToss(this.numDice, this.dice);
            console.info('Total TN = ' + tn);
            console.info('Rolled = ' + rolled);
            return (rolled < tn) ? true : false;
        };
        Player.prototype.dealDmg = function () {
            return NodeBattle.misc.singleDiceToss(this.ATKDICE);
        };
        Player.prototype.takeDmg = function (_dmg) {
            var rolled = NodeBattle.misc.singleDiceToss(this.DEFDICE);
            var totalDmg = _dmg - rolled;
            if (totalDmg > 0) {
                this.hp -= totalDmg;
            }
        };
        return Player;
    }(NodeBattle.Base));
    NodeBattle.Player = Player;
})(NodeBattle || (NodeBattle = {}));
