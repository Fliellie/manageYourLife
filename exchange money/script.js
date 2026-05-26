const text = document.getElementById("text");
const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementById("checkbox2");
const thongbao = document.getElementById("thongbao");
const btn = document.getElementById("btn");
const backBtn=document.getElementById("backBtn")

// doi tien
function btnclicked(){
    let amount = Number(text.value);
    let convert;
    // chon ca hai
    if(checkbox1.checked && checkbox2.checked){
        thongbao.textContent =
            "Ban khong duoc chon ca hai";
    }
    // khong chon gi
    else if(!checkbox1.checked && !checkbox2.checked){
        thongbao.textContent =
            "Ban chua chon kieu quy doi";
    }
    // USD -> VND
    else if(checkbox1.checked){
        convert = dolarToVnd(amount);
        thongbao.textContent =
            `${convert} VND`;
    }
    // VND -> USD
    else if(checkbox2.checked){
        convert = vndToDolar(amount);
        thongbao.textContent =
            `${convert} USD`;
    }
}
// VND -> USD
function vndToDolar(num){
    return num / 25000;
}
// USD -> VND
function dolarToVnd(num){
    return num * 25000;
}


function back(){
    window.location.href = "../Main/main.html";
}