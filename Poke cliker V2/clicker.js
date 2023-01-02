var username = sessionStorage.getItem('Username');
var points = 0;
var totalScore = 0;
var totalClicks = 0;
var pointsPerClick = 1;
var pointsPerSecond = 1;
var pointsPerSecondInterval = 1000;
var successUnlocked = 0;
var upgradeUnlocked = 0;

var clickButton = document.getElementById("clickButton");
var pps = document.getElementById("pps");
var balance = document.getElementById("balance");
var paramStat = document.getElementById("nb-baies");
var paramStat2 = document.getElementById("nb-baies-sec");
var paramStat3 = document.getElementById("nb-success");
var paramStat4 = document.getElementById("nb-clicks");

var elementSuccessList = document.getElementById("modal-container-succes");
var clicker = document.getElementById("clickButton");
var activeTheme = document.getElementsByTagName("body")[0];

var firstUpgradeUnlocked = "false";

function checkUsername () {
    if (username == null) {
        window.location.href = "form.html";
    }
}


function click() {
    animateBaie();
    setTimeout(function() {
        clickButton.style.animation = "none";
    }, 100);
    totalClicks++;
    points += pointsPerClick;
    totalScore += pointsPerClick;
    updatePoints();
}

function animateBaie() {
    clickButton.style.animation = "baie 0.1s";
}

function PointsPerSecond() {
    animateBaie();
    setTimeout(function() {
        clickButton.style.animation = "none";
    }, 100);
    points += pointsPerSecond;
    totalScore += pointsPerSecond;
    updatePoints();
}

function updatePoints() {
    balance.innerHTML = points + " ";
    pps.innerHTML = pointsPerSecond + " ";
    paramStat.innerHTML = totalScore;
    paramStat2.innerHTML = pointsPerSecond;
    paramStat3.innerHTML = successUnlocked;
    paramStat4.innerHTML = totalClicks;

    for (var i = 0; i < 3; i++) {
        var success = successList[i];
        var successDesc = document.getElementById("success-desc" + success.id);
        successDesc.innerHTML = totalScore + " / " + success.goal + " baies récoltées au total !";
    }
    unlockSuccess();
    isFirstUpgradeBought();
    savePoints();
    checkUpgradeCost1();
    checkUpgradeCost2();
    checkUpgradeCost3();
}

function addPointsPerClick() {
    pointsPerClick += 10;
    updatePoints();
}

function addPointsPerSecond() {
    pointsPerSecond += 10;
    updatePoints();
}

function addPointsPerSecondxaddPointsPerClick() {
    pointsPerClick += 1000;
    pointsPerSecond += 1000;
    updatePoints();
}

var successList = [
    {
        id: 1,
        name: "Dresseur débutant",
        cssName: "success1",
        goal: 100,
        desc: " / 100 baies récoltées au total !",
        isUnlocked: false,
    },
    {
        id: 2,
        name: "Dresseur intermédiaire",
        cssName: "success2",
        goal: 200,
        desc: " / 200 baies récoltées au total !",
        isUnlocked: false,
    },
    {
        id: 3,
        name: "Maître Pokemon",
        cssName: "success3",
        goal: 10000,
        desc: " / 10 000 baies récoltées au total !",
        isUnlocked: false,
    },
    {
        id: 4,
        name: "Améliorateur",
        cssName: "success4",
        goal: 0,
        desc: "Vous avez acheté votre première amélioration !",
        isUnlocked: false,
    },
];

function unlockSuccess() {
    for (var i = 0; i < successList.length; i++) {
        var success = successList[i];

        if (totalScore >= success.goal && success.isUnlocked == false && success.goal > 0) {
            successUnlocked++;
            var successCtn = document.querySelector('#notifications-locked' + success.id);
            var successImg = document.querySelector('#success-img-locked' + success.id);
            successCtn.classList.toggle('notifications-unlocked');
            successImg.classList.toggle('success-img-unlocked');
            success.isUnlocked = true;
            createSuccessNotification(success);
        } else {
        }
    }
}

function isFirstUpgradeBought() {

    switch (firstUpgradeUnlocked) {
        case "true":
            successUnlocked++;
            var firstUpgradeSuccessCtn = document.querySelector('#notifications-locked4');
            var firstUpgradeSuccessImg = document.querySelector('#success-img-locked4');
            firstUpgradeSuccessCtn.classList.toggle('notifications-unlocked');
            firstUpgradeSuccessImg.classList.toggle('success-img-unlocked');
            firstUpgradeUnlocked = "unlocked";
            createFirstUpgradeNotification();
            break;

        case "false":
            break;

        case "unlocked":
            break;

        default:
            break;
    }
}

function checkUpgradeCost1() {
    var upgradeCost1 = document.getElementById("upgrade-cost1");
    if (points >= upgradeCost1.innerHTML) {
        upgradeCost1.classList.add('upgrade-cost-unlocked');
    } else {
        upgradeCost1.classList.remove('upgrade-cost-unlocked');
        upgradeCost1.classList.toggle('upgrade-cost-locked');
    }
}

function checkUpgradeCost2() {
    var upgradeCost2 = document.getElementById("upgrade-cost2");
    if (points >= upgradeCost2.innerHTML) {
        upgradeCost2.classList.add('upgrade-cost-unlocked');
    } else {
        upgradeCost2.classList.remove('upgrade-cost-unlocked');
        upgradeCost2.classList.toggle('upgrade-cost-locked');
    }
}

function checkUpgradeCost3() {
    var upgradeCost3 = document.getElementById("upgrade-cost3");
    if (points >= upgradeCost3.innerHTML) {
        upgradeCost3.classList.add('upgrade-cost-unlocked');
    } else {
        upgradeCost3.classList.remove('upgrade-cost-unlocked');
        upgradeCost3.classList.toggle('upgrade-cost-locked');
    }
}


function traitement(){
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
    } else {
    }
    }
}

function savePoints(){

    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = traitement;
    httpRequest.open('POST', 'https://sae-301.azurewebsites.net/save-score.php', true);
    httpRequest.setRequestHeader('Content-Type', 'application/json');
    var datas = JSON.stringify({"username": username, "score": totalScore});
    httpRequest.send(datas);
}

var themeList = [
    {
        id: 1,
        name: "Forêt de Kanto",
        css: "active",
        isUnlocked: true,
        isSelected: true,
    },
    {
        id: 2,
        name: "Ville des maîtres",
        css: "inactive",
        isUnlocked: false,
        isSelected: false,
    },
    {
        id: 4,
        name: "Canyon de Kalos",
        css: "inactive",
        isUnlocked: false,
        isSelected: false,
    },
    {
        id: 5,
        name: "Plage Carapuce",
        css: "inactive",
        isUnlocked: false,
        isSelected: false,
    }
];

function createTheme() {
    var themeCtn = document.createElement("div");
    themeCtn.classList.add("theme-ctn");
    var themeSelect = document.getElementById("section-title-theme");
    for (var i = 0; i < themeList.length; i++) {
        var theme = themeList[i];
        var themeOption = document.createElement("div");
        themeOption.id = "theme" + theme.id;
        themeOption.classList.add("theme-" + theme.css);
        themeOption.innerHTML = theme.name;

        var themeImgCtn = document.createElement("div");
        themeImgCtn.classList.add("theme-img-ctn");


        var themeImg = document.createElement("img");
        themeImg.classList.add("theme-img");
        themeImg.src = "image/theme" + theme.id + ".png";

        themeSelect.appendChild(themeCtn);
        themeCtn.appendChild(themeOption);
        themeOption.appendChild(themeImgCtn);
        themeImgCtn.appendChild(themeImg);

        themeOption.onclick = (function(theme) {
            return function() {
            chooseTheme(theme);
            };
        })(theme);
    }
}

function chooseTheme(theme) {

    themeActive = document.querySelector(".theme-active");
    themeActive.setAttribute("class", "theme-inactive");

    themeClicked = document.getElementById("theme" + theme.id);
    themeClicked.setAttribute("class", "theme-active");
    activeTheme.style.backgroundImage = "url(./image/theme" + theme.id + ".png)";
    
}

var baieList = [
    {
        id: 1,
        name: "Baie framby (Dessin animé)",
        css: "active",
        isUnlocked: true,
        isSelected: true,
    },
    {
        id: 2,
        name: "Baie framby dorée",
        css: "inactive",
        isUnlocked: true,
        isSelected: true,
    },
    {
        id: 3,
        name: "Baie oran",
        css: "inactive",
        isUnlocked: false,
        isSelected: false,
    },
    {
        id: 4,
        name: "Baie nanana (Rétro)",
        css: "inactive",
        isUnlocked: false,
        isSelected: false,
    },
    {
        id: 5,
        name: "Baie framby",
        css: "inactive",
        isUnlocked: false,
        isSelected: false,
    },
    {
        id: 6,
        name: "Baie mepo",
        css: "inactive",
        isUnlocked: false,
        isSelected: false,
    }
];

function createBaie() {
    var baiesCtn = document.createElement("div");
    baiesCtn.classList.add("baies-ctn");
    var baieSelect = document.getElementById("section-title-baie");
    for (var i = 0; i < baieList.length; i++) {
        var baie = baieList[i];
        var baieOption = document.createElement("div");
        baieOption.id = "baie" + baie.id;
        baieOption.classList.add("baie-" + baie.css);
        baieOption.innerHTML = baie.name;

        var baieImgCtn = document.createElement("div");
        baieImgCtn.classList.add("baie-img-ctn");


        var baieImg = document.createElement("img");
        baieImg.classList.add("baie-img");
        baieImg.src = "image/baie" + baie.id + ".png";

        baieSelect.appendChild(baiesCtn);
        baiesCtn.appendChild(baieOption);
        baieOption.appendChild(baieImgCtn);
        baieImgCtn.appendChild(baieImg);

        baieOption.onclick = (function(baie) {
            return function() {
            chooseBaie(baie);
            };
        })(baie);
    }
}

function chooseBaie(baie) {

    baieActive = document.querySelector(".baie-active");
    baieActive.setAttribute("class", "baie-inactive");

    baieClicked = document.getElementById("baie" + baie.id);
    baieClicked.setAttribute("class", "baie-active");
    clicker.src = "image/baie" + baie.id + ".png";
    
}

function init() {
    checkUsername();
    for (var i = 0; i < successList.length; i++) {
        var success = successList[i];

        var successCtn = document.createElement("div");
        successCtn.id = "notifications-locked" + success.id;
        successCtn.classList.add("notifications-locked" + success.id);

        var leftSuccess = document.createElement("div");
        leftSuccess.classList.add("left");

        var rightSuccess = document.createElement("div");
        rightSuccess.classList.add("right");

        var successName = document.createElement("p");
        successName.classList.add("success-name");
        successName.innerHTML = success.name;

        var successImg = document.createElement("img");
        successImg.id = "success-img-locked" + success.id;
        successImg.classList.add("success-img-locked" + success.id);
        successImg.src = "./image/success" + success.id + ".png";

        var successDesc = document.createElement("p");
        successDesc.id = "success-desc" + success.id;
        successDesc.innerHTML = success.desc;

        // successCtn.innerHTML = success.name + totalScore + " / " + success.goal ;
        // successCtn.setAttribute('id', 'success-locked-' + success.cssName)
        // successCtn.classList.add('success-locked-' + success.cssName)
        
        elementSuccessList.appendChild(successCtn);
        successCtn.appendChild(leftSuccess);
        successCtn.appendChild(rightSuccess);
        leftSuccess.appendChild(successName);
        leftSuccess.appendChild(successDesc);
        rightSuccess.appendChild(successImg);
    }
    clickButton.onclick = click;
    setInterval(PointsPerSecond, pointsPerSecondInterval);
    createBaie();
    createTheme();
}

init();



