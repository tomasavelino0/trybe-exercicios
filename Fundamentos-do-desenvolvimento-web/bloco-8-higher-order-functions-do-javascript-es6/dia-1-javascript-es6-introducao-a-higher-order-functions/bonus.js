const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: dmgDragon(dragon),
};


const battleMembers = { mage, warrior, dragon };

const dmgDragon = (dragon) => Math.floor(Math.random() * (dragon.strength - 15 + 1) ) + 15;

const dmgWarrior = (warrior) => Math.floor(Math.random() * (warrior.strength * warrior.weaponDmg - warrior.strength + 1) ) + warrior.strength;

const dmgMage = (mage) => {
    let dmg = Math.floor(Math.random() * (mage.intelligence * 2 - mage.intelligence + 1) ) + mage.intelligence;
    let mana = mage.mana;

    const turnMage = {
        damage: 'Não possui mana suficiente',
        mana: 0,
    };
    if(mana >= 15){
        turnMage.damage = dmg;
        turnMage.mana = 15;
        return turnMage;
    }
    return turnMage;
};

const gameActions = {
    warriorTurn: () =>{
        warrior.damage = dmgWarrior(warrior);
        dragon.healthPoints -= warrior.damage;
    },
    mageTurn: () => {
        mage.damage = dmgMage(mage);
        dragon.healthPoints -= mage.damage;
        mage.mana - 15;    
    },
    dragonTurn: () => {
        dragon.damage = dmgDragon(dragon);
        mage.healthPoints - dragon.damage;
        warrior.healthPoints - dragon.damage;
    },
    battleTurn: () => battleMembers,
    
  };
    gameActions.warriorTurn(dmgWarrior);
    gameActions.mageTurn(dmgMage);
    gameActions.dragonTurn(dmgDragon);
    console.log(gameActions.battleTurn());