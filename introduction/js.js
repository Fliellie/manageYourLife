// Hàm xử lý nút Back quay lại trang trước đó trong lịch sử trình duyệt
function goBack() {
    window.history.back();
}

// Hàm cũ của bạn (giữ nguyên nếu cần dùng)
function getText(){
    let myText = document.getElementById("myTextBox").value;
    alert(myText);
}