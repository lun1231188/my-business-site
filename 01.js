document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault(); // 防止頁面重新整理

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // 簡單的驗證邏輯
    if (name.length < 2){
        alert("請輸入正確的姓名");
        return ;
    }

    // 模擬送出成功的反饋
    const btn = e.target.querySelector('button');
    btn.innerText = "傳送中...";
    btn.disabled = true;

    setTimeout(() => {
        alert(`謝謝您，${name}！我們已收到您的訊息，將儘速回覆至 ${email}。`);
        btn.innerText = "送出訊息";
        btn.disabled = false;
        e.target.reset(); // 清空表單
    }, 1500);
});