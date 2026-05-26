const roll=document.getElementById("btn");
const label=document.getElementById("label");
const dice=document.getElementById("dice");
let num;
// doi thoi gian
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
}
// quay dice
async function roll_the_dice(){
    spin();
    num= Math.floor(Math.random()*6)+1;
    label.textContent="...";
    await sleep(400);
    dice.src="dice("+String(num)+").png";
    label.textContent=num;
}
// quay khi gieo xuc xac
function spin(){
    dice.classList.add("spin");
    setTimeout(() => {
        dice.classList.remove("spin");
    },1000);
}


