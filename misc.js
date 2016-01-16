var NodeBattle;
(function (NodeBattle) {
    var misc;
    (function (misc) {
        function singleDiceToss(dice) {
            return Math.floor(Math.random() * dice) + 1;
        }
        misc.singleDiceToss = singleDiceToss;
        function manyDiceToss(times, dice) {
            var total = 0;
            for (var i = 0; i < times; i++) {
                total += singleDiceToss(dice);
            }
            return total;
        }
        misc.manyDiceToss = manyDiceToss;
    })(misc = NodeBattle.misc || (NodeBattle.misc = {}));
})(NodeBattle || (NodeBattle = {}));
