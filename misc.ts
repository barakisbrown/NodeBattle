/// <reference path="typing\node\node.d.ts" />

module NodeBattle.misc {
  /**
    function singleDiceToss(number)
    returns a number beteen 1 and dice once.
    IE: 1D6
  */
  export function singleDiceToss(dice: number) : number {
    return Math.floor(Math.random() * dice) + 1;
  }

  /**
     function manyDiceToss(number.number)
     returns total of rolling numberDnumber
     IE: 5D6
  */
  export function manyDiceToss(times: number, dice:number) : number {
     var total = 0;

     for (var i = 0; i < times; i++) {
       total += singleDiceToss(dice);
     }

     return total;
  }

  export function ask(question, format, callback) {

    var stdin = process.stdin;
    var stdout = process.stdout;

    stdin.resume();
    stdout.write(question, " > ");

    stdin.once('data', function(data) {

        data = data.toString().trim();
        if (format.test(data)) {
          callback(data);
        } else {
          stdout.write('\n oops try again');
          ask(question, format, data);
        }

    });

  }
}
