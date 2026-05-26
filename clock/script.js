



function clock(){
    const now=new Date();
    
    let hours=now.getHours();
    let minutes=now.getMinutes();
    let seconds=now.getSeconds();
    let ampm=hours>=12?"PM":"AM";
    
    hours = hours % 12;
    hours = hours ? hours : 12;


    hours=String(hours).padStart(2,"0");
    minutes=String(minutes).padStart(2,"0");
    seconds=String(seconds).padStart(2,"0");

    let clockNum=`${hours}:${minutes}:${seconds}:${ampm}`;
    let theClock=document.getElementById("theClock").textContent=clockNum;



}

setInterval(clock,1000);
clock();


function back(){
    window.location.href="../Main/main.html";
}