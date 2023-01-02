var leaderboardCtn = document.getElementById('leaderboard-ctn')

function traitement(){
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
    data = JSON.parse(httpRequest.responseText);
    console.log(data);
    for (var i = 0; i < data.length; i++) {
        var userResult = data[i];
        console.log(userResult);
        var resultCtn = document.createElement('div');
        var nameCtn = document.createElement('div');
        var scoreCtn = document.createElement('div');
        resultCtn.classList.add('result-ctn');
        scoreCtn.classList.add('score-ctn');
        nameCtn.classList.add('name-ctn');
        nameCtn.innerHTML = userResult.username;
        scoreCtn.innerHTML = userResult.score + ' points';
        leaderboardCtn.appendChild(resultCtn);
        resultCtn.appendChild(nameCtn);
        resultCtn.appendChild(scoreCtn);
    }
    } else {
    alert('Il y a eu un problème avec la requête.');
    }
    }
   }

function getLeaderboard (){
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = traitement;
    httpRequest.open('GET', 'https://sae-301.azurewebsites.net/get-leaderboard.php', true);
    httpRequest.setRequestHeader('Content-Type', 'application/json');
    httpRequest.send();
}

function init(){
    getLeaderboard();
}

init();
