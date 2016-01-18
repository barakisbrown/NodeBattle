/// <reference path="typing/node/node.d.ts" />
/// <reference path="base.ts" />
declare module NodeBattle {
    function singleDiceToss(dice: number): number;
    function manyDiceToss(times: number, dice: number): number;
    function ask(question:string, format, callback);
    function getDice(start:Dice, added:number) : Dice;
}
