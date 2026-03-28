document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const btn = event.target.querySelector('button');
    const originalText = btn.innerText;
    
    // 1. 防止重複點擊 (專業細節)
    btn.innerText = '傳送中...';
    btn.disabled = true;

    // 2. 準備要寄出的資料 (名稱要跟 EmailJS 後台 Template 一樣)
    const templateParams = {
        user_name: document.getElementById('name').value,
        user_email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // 3. 正式寄出
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then(function() {
            alert('感謝您的聯絡！訊息已成功傳送。');
            event.target.reset(); // 清空表單
        }, function(error) {
            alert('傳送失敗，請檢查網路或稍後再試：' + JSON.stringify(error));
        })
        .finally(() => {
            // 4. 恢復按鈕狀態
            btn.innerText = originalText;
            btn.disabled = false;
        });
});