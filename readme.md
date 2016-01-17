This is the readme file for the NodeBattle Application. 
NodeBattle is a javascript game. I will also be using Node.js so that I can use the following modules:

	Socket.IO
	Socket.io-client


All Players and Mobs have the following stats and the descriptions:  
1. NAME : The name of the Object in general aka 'Julian' or 'Blood Orc'  
2. HP   : Hit Points. Always a positive number which represents health.  
3. ATK  : The Object attack skill    
4. DEF  : The Object defense skill  
5. ATKDICE : The dice used if an attack was successful for damage  
6. DEFDICE : Dice used to negate damage rolled.  
7. Dead : Boolean flag to set if the Object is dead or not.  

Simplified Combat for Now  
Combat(ex. Player A attacking Player B):  
A. Initiative Rolled  
B. Attacker  
	1. Player A swings at Player B.  
	2. Player A rolls a D20 + Attack Skill vs Defense Skill plus 10.  
	3. If result is positive then Player A rolls their Attack Dice to determine damage.  
	4. Player B then rolls their defense dice to determine how much went through.  
C. Defender Turn  
D. Rinse and Repeat until death  
