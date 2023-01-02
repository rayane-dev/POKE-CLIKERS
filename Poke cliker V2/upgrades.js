var upgrades = [
    {   
        id: 1,
        name: "Renforcement de la baie",
        description: 'Vous gagnez 10 baies de plus par clic.',
        cost: 100,
        level: 1,
        multiplier: 1.5,
        pokemonUnlocked: "dracolosse",
        themeUnlocked: "1",
        func: addPointsPerClick
    },
    {
        id: 2,
        name: "Renforcement de la récolte automatique",
        description: 'Vous gagnez 10 baies de plus par seconde.',
        cost: 100,
        level: 1,
        multiplier: 1.5,
        pokemonUnlocked: "mewtwo",
        themeUnlocked: "1",
        func: addPointsPerSecond
    },
    {
        id: 3,
        name: "Renforcement ultime",
        description: 'Vous gagnez 1000 baies de plus par clic et par seconde.',
        cost: 10000,
        level: 1,
        multiplier: 3,
        pokemonUnlocked: "mewtwo",
        themeUnlocked: "4",
        func: addPointsPerSecondxaddPointsPerClick
    }
];

var upgradeList = document.getElementById("modal-container-amelioration");

function updateUpgradeCost(upgrade) {
    upgrade.cost = Math.round(upgrade.cost);
    var cost = document.getElementById("upgrade-cost" + upgrade.id);
    var lvl = document.getElementById("upgrade-name" + upgrade.id);
    cost.innerHTML = upgrade.cost;
    lvl.innerHTML = upgrade.name + " - lvl " + upgrade.level;
}

function buyUpgrade(upgrade) {
    if (points >= upgrade.cost) {
        launchUpgrade(upgrade);
        createUpgradeNotification(upgrade);
    } else {
        createFailNotification(upgrade);
    }
}

function launchUpgrade(upgrade) {
    if (upgrade.level == 1) {
        points -= upgrade.cost;
        upgrade.level++;
        upgrade.cost *= upgrade.multiplier;
        unlockPokemon = document.getElementById(upgrade.pokemonUnlocked);
        unlockPokemon.style.transitionDuration = "1s";
        unlockPokemon.style.opacity = "100%";
        var activeTheme = document.getElementsByTagName("body")[0];
        activeTheme.style.backgroundImage = "url('./image/theme" + upgrade.themeUnlocked + ".png')";
        updateUpgradeCost(upgrade);
        upgrade.func();
        firstUpgradeUnlocked = "true";
        checkFirstUpgrade();
        upgradeUnlocked++;
    } else {
        points -= upgrade.cost;
        upgrade.level++;
        upgrade.cost *= upgrade.multiplier;
        updateUpgradeCost(upgrade);
        upgrade.func();
    }
}

function checkFirstUpgrade() {
    if (upgradeUnlocked >= 1) {
        firstUpgradeUnlocked = "unlocked";
    }
}


function init() {
    for (var i = 0; i < upgrades.length; i++) {
        var upgrade = upgrades[i];

        var div1 = document.createElement("div");
        div1.classList.add("notifications");

        var left = document.createElement("div");
        left.classList.add("left");

        var img = document.createElement("img");
        img.src = "image/amelioration" + upgrade.id +".png";

        var right = document.createElement("div");
        right.classList.add("right");

        var p = document.createElement("p");
        p.id = "upgrade-name" + upgrade.id;
        p.innerHTML = upgrade.name + " - lvl " + upgrade.level;

        var bonus = document.createElement("div");
        bonus.classList.add("bonus");

        var img2 = document.createElement("img");
        img2.src = "./image/baie finale v2 2.png";

        var price = document.createElement("p");
        price.id = "upgrade-cost" + upgrade.id;
        price.innerHTML = upgrade.cost;

        var description = document.createElement("p");
        description.id = "upgrade-desc";
        description.innerHTML = upgrade.description;

        div1.onclick = (function(upgrade) {
            return function() {
                buyUpgrade(upgrade);
            };
        })(upgrade);

        upgradeList.appendChild(div1);
        div1.appendChild(left);
        left.appendChild(img);
        div1.appendChild(right);
        right.appendChild(p);
        right.appendChild(bonus);
        bonus.appendChild(img2);
        bonus.appendChild(price);
        right.appendChild(description);
    }
}

init();