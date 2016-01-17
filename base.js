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
        }
        return Base;
    }());
    NodeBattle.Base = Base;
})(NodeBattle || (NodeBattle = {}));
