function Enemy(name, maxhealth, weapon){
    var me = this;
    this.name = name || `Bandit`;

    this.maxhealth = maxhealth || Math.round( getRandomFloat( getMaxHealth()/2, getMaxHealth()*1.25 ) );
    this.health = this.maxhealth;

    this.setLocation(Room);

    this.changeWeapon(weapon || getItemFromName(`Iron`,`Sword`));
    setInterval(function(){ me.attack(); }, 5000);
    updateActions();
}

Enemy.prototype.attack = function (){
    if(this.health < 1){
        return;
    }
    this.dealDamage( Math.round(getRandomFloat(this.mindamage, this.maxdamage)) );
};
Enemy.prototype.dealDamage = function (amount){
    if(Health - amount < 1){
        Health = 0;
        return;
    }
    Health -= amount;
    error(`<w><d>${this.name}</d></w> dealt <w>${amount}</w> damage to you.`);
    updateActions();
};

Enemy.prototype.setLocation = function (location){
    this.location = location || Room;
    Room.enemies.push(this);
};
Enemy.prototype.changeWeapon = function (weapon) {
    this.weapon = weapon;
    this.weapon.enchant = enchantments[0];
    this.mindamage = this.weapon.minDamage;
    this.maxdamage = this.weapon.maxDamage;

    this.inventory = getRandomCurrency(0,Math.round(this.maxhealth * 2.5));
    this.inventory.push(this.weapon);
    this.inventory.push(getLevelLoot());
};

function attack(enemy){
    let wep = Equipped[0];

    if(Room.enemies.length < 1){ error(`There are <w>no enemies</w> nearby!`); return; }
    if(wep == null){ error(`You do not have any weapon <w>equipped</w>!`); return; }

    if(attackCooldown < 1){
        attackCooldown = 5;
        dealDamage( Math.round(getRandomFloat(wep.minDamage, wep.maxDamage)), enemy );
    }
}
function dealDamage(amount, enemy){
    if(enemy.health - amount < 1){
        enemy.health = 0;
        Room.enemies.splice(Room.enemies.indexOf(enemy),1);

        changeExperience(Math.round( ((enemy.maxhealth * 10) / MaxHealth) * 2.5 ));
        addChestItems([ getRandomFromArray(enemy.inventory) ], Room.loot);
        Room.loot = removeDuplicates(Room.loot,`displayName`);

        info(`<w><d>${enemy.name}</d></w> died.`);
        updateActions();
        return;
    }
    let crit_p = Math.random();
    if(crit_p > 0.98){
        amount = Math.round(amount*2);
        info(`Critical hit x2! You dealt <w>${amount} (+${amount - Math.round(amount/2)})</w> damage to <w><d>${enemy.name}</d></w>.`);
    } else if(crit_p > 0.90){
        amount = Math.round(amount*1.25);
        info(`Critical hit! You dealt <w>${amount} (+${amount - Math.round(amount/1.25)})</w> damage to <w><d>${enemy.name}</d></w>.`);
    } else {
        info(`You dealt <w>${amount}</w> damage to <w><d>${enemy.name}</d></w>.`);
    }

    enemy.health -= amount;
    updateActions();
}

function spawnEnemy(){
    let p = Math.random();
    if(p < Room.enemySpawnChance && Room != locations[0] && Room != locations[1] && Room.city == null && Room.shop == null && Room.inn == null){
        let e_ = getRandomFromProbability(enemies);
        let e = new Enemy(e_.name, e_.maxhealth, getItemFromName(e_.weapon.mat,e_.weapon.item));

        //e.changeWeapon( getLevelLootChest(50).filter(function(a){ if(a.itemType == `Weapon` && a.level <= Level+1){ return a; } })[0] );
        //console.dir(e);
        error(`Enemy spotted: <w><d>${e_.name}</d></w>.`);
    }
}