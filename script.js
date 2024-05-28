// JavaScript代码，用于控制广告的显示和关闭
document.addEventListener('DOMContentLoaded', function() {
    const messageForm = document.getElementById('messageForm');
    const messageInput = document.getElementById('messageInput');
    const messages = document.getElementById('messages');
  
    // 模拟已有的留言数据
    const existingMessages = [
      "感谢您的留言！"
    ];
  
    // 初始化显示已有留言
    existingMessages.forEach(function(message) {
      displayMessage(message);
    });
  
    // 提交留言
    messageForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const newMessage = messageInput.value;
      displayMessage(newMessage);
      messageInput.value = '';
    });
  
    // 显示留言
    function displayMessage(message) {
      const messageElement = document.createElement('div');
      messageElement.innerText = message;
      messages.appendChild(messageElement);
    }
  });


  function closeAd() {
    const adContainer = document.getElementById('adContainer');
    adContainer.style.display = 'none';
  }


  function searchArticles() {
    const keyword = document.getElementById('keywordBox').value.toLowerCase();
    const date = document.getElementById('dateBox').value;
    const articles = document.querySelectorAll('.article');

    articles.forEach(article => {
        const title = article.getAttribute('data-title').toLowerCase();
        const articleDate = article.getAttribute('data-date');

        const matchesKeyword = keyword ? title.includes(keyword) : true;
        const matchesDate = date ? articleDate === date : true;

        if (matchesKeyword && matchesDate) {
            article.style.display = '';
        } else {
            article.style.display = 'none';
        }
    });
}