let xp = 0;
let level = 1;
let coins = 0;


function chooseStyle(style){

let name =
document.getElementById("name").value;


if(name === ""){
name="Player";
}


document.getElementById("playerName").innerHTML=name;


document.getElementById("style").innerHTML=style;


document.body.className=style;


document.getElementById("creator").style.display="none";

document.getElementById("game").style.display="block";


}



function completeQuest(amount){

xp += amount;
coins += 5;


if(xp >=100){

level++;
xp=0;

alert("🎉 Level Up!");

}


document.getElementById("xp").innerHTML=xp;

document.getElementById("level").innerHTML=level;

document.getElementById("coins").innerHTML=coins;


document.getElementById("xp-bar").style.width=xp+"%";

}
