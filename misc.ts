/// <reference path="typing\node\node.d.ts" />
/// <reference path="base.ts" />

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

  /**
    function ask(question, format, callback)
    Asks a question to the console and awaits input.
    It then validates the input.
  */
  export function ask(question:string, format, callback) {

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

  /**
    function getDice(start: Dice, added:number) : Dice
    Helper function that allows me to get the dice value back since Dice is
    an enum that I use. It takes the starting dice and then adds a value to
    get the new Dice value that it needs to be done.
  */
  export function getDice(start:Dice, added:number) : Dice {
      if (added === 0)
          return start;
      else {

          switch(start) {

            case Dice.D4: {
                return getDice(Dice.D6, added - 1);
            }
            case Dice.D6: {
                return getDice(Dice.D8, added - 1);
            }
            case Dice.D8: {
                return getDice(Dice.D10, added - 1);
            }
            case Dice.D10: {
                return getDice(Dice.D12, added - 1);
            }
            case Dice.D12: {
                return getDice(Dice.D20, added - 1);
            }
            case Dice.D20: {
                return getDice(Dice.D100, added - 1);
            }
            case Dice.D100: {
                return getDice(Dice.D100, 0);
            }
        }
    }
  }
}
