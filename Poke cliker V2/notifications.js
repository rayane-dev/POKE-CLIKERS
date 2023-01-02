var notificationContainer = document.getElementById("notification-ctn");

function createFirstUpgradeNotification() {
    var firstUpgradeNotification = document.createElement("div");

    firstUpgradeNotification.classList.remove("fail-notification");
    firstUpgradeNotification.classList.add("first-upgrade-notification");

    var firstUpgradeNotificationImgCtn = document.createElement("div");
    var firstUpgradeNotificationImg = document.createElement("img");

    firstUpgradeNotificationImg.src = "./image/success" + "4" + ".png";
    firstUpgradeNotificationImg.classList.add("notification-image");

    var firstUpgradeNotificationTextCtn = document.createElement("div");

    firstUpgradeNotificationTextCtn.classList.add("notification-text-ctn");

    var firstUpgradeNotificationText = document.createElement("p");

    firstUpgradeNotificationText.innerHTML = "Vous avez débloqué le succès 'Améliorateur' !";
    firstUpgradeNotificationText.classList.add("notification-text");

    var firstUpgradeNotificationCloseCtn = document.createElement("div");
    var firstUpgradeNotificationClose = document.createElement("img");

    firstUpgradeNotificationClose.src = "./image/icons8-multiplier-64.png";
    firstUpgradeNotificationClose.classList.add("btn-croix-notification");

    notificationContainer.appendChild(firstUpgradeNotification);
    firstUpgradeNotification.appendChild(firstUpgradeNotificationImgCtn);
    firstUpgradeNotificationImgCtn.appendChild(firstUpgradeNotificationImg);
    firstUpgradeNotification.appendChild(firstUpgradeNotificationTextCtn);
    firstUpgradeNotificationTextCtn.appendChild(firstUpgradeNotificationText);
    firstUpgradeNotification.appendChild(firstUpgradeNotificationCloseCtn);
    firstUpgradeNotificationCloseCtn.appendChild(firstUpgradeNotificationClose);

    clearTimeout();

    setTimeout(() => {
        closeFirstUpgradeNotification();
    }, 5000);

    upgradeNotificationClose.addEventListener("click", () => {
        closeFirstUpgradeNotification();
        clearTimeout();
    });
}

function createUpgradeNotification(upgrade) {
    var upgradeNotification = document.createElement("div");

    upgradeNotification.classList.remove("fail-notification");
    upgradeNotification.classList.add("upgrade-notification");

    var upgradeNotificationImgCtn = document.createElement("div");
    var upgradeNotificationImg = document.createElement("img");

    upgradeNotificationImg.src = "./image/amelioration" + upgrade.id + ".png";
    upgradeNotificationImg.classList.add("notification-image");

    var upgradeNotificationTextCtn = document.createElement("div");

    upgradeNotificationTextCtn.classList.add("notification-text-ctn");

    var upgradeNotificationText = document.createElement("p");

    upgradeNotificationText.innerHTML = "Vous avez acheté l'améioration '" + upgrade.name + "' avec succès !";
    upgradeNotificationText.classList.add("notification-text");

    var upgradeNotificationCloseCtn = document.createElement("div");
    var upgradeNotificationClose = document.createElement("img");

    upgradeNotificationClose.src = "./image/icons8-multiplier-64.png";
    upgradeNotificationClose.classList.add("btn-croix-notification");

    notificationContainer.appendChild(upgradeNotification);
    upgradeNotification.appendChild(upgradeNotificationImgCtn);
    upgradeNotificationImgCtn.appendChild(upgradeNotificationImg);
    upgradeNotification.appendChild(upgradeNotificationTextCtn);
    upgradeNotificationTextCtn.appendChild(upgradeNotificationText);
    upgradeNotification.appendChild(upgradeNotificationCloseCtn);
    upgradeNotificationCloseCtn.appendChild(upgradeNotificationClose);

    clearTimeout();

    setTimeout(() => {
        closeUpgradeNotification();
    }, 5000);

    upgradeNotificationClose.addEventListener("click", () => {
        closeUpgradeNotification();
        clearTimeout();
    });
}

function createSuccessNotification(success) {
    var successNotification = document.createElement("div");

    successNotification.classList.add("success-notification");

    var successNotificationImgCtn = document.createElement("div");
    var successNotificationImg = document.createElement("img");
    
    successNotificationImg.src = "./image/success" + success.id + ".png";
    successNotificationImg.classList.add("notification-image");

    var successNotificationTextCtn = document.createElement("div");

    successNotificationTextCtn.classList.add("notification-text-ctn");

    var successNotificationText = document.createElement("p");

    successNotificationText.innerHTML = "Bravo vous avez atteint " + success.goal + " points ! Vous avez débloqué le succès '" + success.name + "' !";
    successNotificationText.classList.add("notification-text");

    var successNotificationCloseCtn = document.createElement("div");
    var successNotificationClose = document.createElement("img");

    successNotificationClose.src = "./image/icons8-multiplier-64.png";
    successNotificationClose.classList.add("btn-croix-notification");

    notificationContainer.appendChild(successNotification);
    successNotification.appendChild(successNotificationImgCtn);
    successNotificationImgCtn.appendChild(successNotificationImg);
    successNotification.appendChild(successNotificationTextCtn);
    successNotificationTextCtn.appendChild(successNotificationText);
    successNotification.appendChild(successNotificationCloseCtn);
    successNotificationCloseCtn.appendChild(successNotificationClose);

    clearTimeout();

    setTimeout(() => {
        closeSuccessNotification();
    }, 5000);

    successNotificationClose.addEventListener("click", () => {
        console.log("test");
        closeSuccessNotification();
        clearTimeout();
    });

}

function createFailNotification(upgrade) {
    var failNotification = document.createElement("div");

    failNotification.classList.add("fail-notification");

    var failNotificationImgCtn = document.createElement("div");
    var failNotificationImg = document.createElement("img");

    failNotificationImg.src = "./image/amelioration" + upgrade.id + ".png";
    failNotificationImg.classList.add("notification-image");

    var failNotificationTextCtn = document.createElement("div");

    failNotificationTextCtn.classList.add("notification-text-ctn");

    var failNotificationText = document.createElement("p");

    failNotificationText.innerHTML = "Vous n'avez pas assez de baies pour acheter l'amélioration '" + upgrade.name + "'...";
    failNotificationText.classList.add("notification-text");

    var failNotificationCloseCtn = document.createElement("div");
    var failNotificationClose = document.createElement("img");

    failNotificationClose.src = "./image/icons8-multiplier-64.png";
    failNotificationClose.classList.add("btn-croix-notification");

    notificationContainer.appendChild(failNotification);
    failNotification.appendChild(failNotificationImgCtn);
    failNotificationImgCtn.appendChild(failNotificationImg);
    failNotification.appendChild(failNotificationTextCtn);
    failNotificationTextCtn.appendChild(failNotificationText);
    failNotification.appendChild(failNotificationCloseCtn);
    failNotificationCloseCtn.appendChild(failNotificationClose);

    clearTimeout();

    setTimeout(() => {
        closeFailNotification();
    }, 5000);

    failNotificationClose.addEventListener("click", () => {
        closeFailNotification();
        clearTimeout();
    });

}

function closeFirstUpgradeNotification() {
    var firstUpgradeNotification = document.querySelector(".first-upgrade-notification");
    firstUpgradeNotification.remove();
}

function closeUpgradeNotification() {
    var upgradeNotification = document.querySelector(".upgrade-notification");
    upgradeNotification.remove();
}

function closeSuccessNotification() {
    var successNotification = document.querySelector(".success-notification");
    successNotification.remove();
}

function closeFailNotification() {
    var failNotification = document.querySelector(".fail-notification");
    failNotification.remove();
}