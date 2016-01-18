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
        function ask(question, format, callback) {
            var stdin = process.stdin;
            var stdout = process.stdout;
            stdin.resume();
            stdout.write(question, " > ");
            stdin.once('data', function (data) {
                data = data.toString().trim();
                if (format.test(data)) {
                    callback(data);
                }
                else {
                    stdout.write('\n oops try again');
                    ask(question, format, data);
                }
            });
        }
        misc.ask = ask;
        function getDice(start, added) {
            if (added === 0)
                return start;
            else {
                switch (start) {
                    case NodeBattle.Dice.D4: {
                        return getDice(NodeBattle.Dice.D6, added - 1);
                    }
                    case NodeBattle.Dice.D6: {
                        return getDice(NodeBattle.Dice.D8, added - 1);
                    }
                    case NodeBattle.Dice.D8: {
                        return getDice(NodeBattle.Dice.D10, added - 1);
                    }
                    case NodeBattle.Dice.D10: {
                        return getDice(NodeBattle.Dice.D12, added - 1);
                    }
                    case NodeBattle.Dice.D12: {
                        return getDice(NodeBattle.Dice.D20, added - 1);
                    }
                    case NodeBattle.Dice.D20: {
                        return getDice(NodeBattle.Dice.D100, added - 1);
                    }
                    case NodeBattle.Dice.D100: {
                        return getDice(NodeBattle.Dice.D100, 0);
                    }
                }
            }
        }
        misc.getDice = getDice;
    })(misc = NodeBattle.misc || (NodeBattle.misc = {}));
})(NodeBattle || (NodeBattle = {}));
