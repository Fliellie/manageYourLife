// Đợi giao diện tải xong hoàn toàn
document.addEventListener('DOMContentLoaded', () => {
    
    // Lấy toàn bộ các nút bấm có class 'menu-btn'
    const buttons = document.querySelectorAll('.menu-btn');

    // Lặp qua từng nút để cài đặt sự kiện click
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            // Lấy ra đường dẫn HTML tương ứng đã lưu trong data-url
            const targetUrl = button.getAttribute('data-url');
            
            // Nếu nút đó có cấu hình đường dẫn thì mới chuyển trang
            if (targetUrl) {
                window.location.href = targetUrl;
                
                // Mẹo: Nếu m muốn mở file HTML đó ở một TAB MỚI thay vì đè lên trang cũ,
                // hãy bỏ dấu // ở dòng phía dưới và comment dòng phía trên lại nhé:
                // window.open(targetUrl, '_blank');
            } else {
                console.warn('Nút này chưa được cấu hình thuộc tính data-url!');
            }
        });
    });

});