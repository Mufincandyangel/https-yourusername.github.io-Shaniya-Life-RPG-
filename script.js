let xp = 0;
let level = 1;
let coins = 0;


function completeQuest(amount){

    xp += amount;
    coins += 5;


    if(xp >= 100){

        level++;
        xp = xp - 100;

        alert("🎉 Level Up! You are now Level " + level);
    }


    document.getElementById("xp").innerHTML = xp;
    document.getElementById("level").innerHTML = level;
    document.getElementById("coins").innerHTML = coins;


    document.getElementById("xp-bar").style.width = xp + "%";

}
