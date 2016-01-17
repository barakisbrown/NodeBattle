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
    })(misc = NodeBattle.misc || (NodeBattle.misc = {}));
})(NodeBattle || (NodeBattle = {}));
