<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dargak - پیام‌رسان دارک</title>
    <link rel="stylesheet" href="styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <div class="app-container">
        <!-- صفحه ورود -->
        <div id="login-page" class="page active">
            <div class="login-container">
                <div class="logo">
                    <i class="fas fa-comments"></i>
                    <h1>Dargak</h1>
                </div>
                <form id="login-form">
                    <div class="input-group">
                        <label for="phone">شماره تلفن</label>
                        <input type="tel" id="phone" placeholder="+989123456789" required>
                    </div>
                    <div class="input-group">
                        <label for="password">رمز عبور</label>
                        <input type="password" id="password" required>
                    </div>
                    <button type="submit" class="btn-primary">ورود</button>
                    <button type="button" id="register-btn" class="btn-secondary">ثبت‌نام</button>
                </form>
                <div id="login-message" class="message"></div>
            </div>
        </div>

        <!-- صفحه ثبت‌نام -->
        <div id="register-page" class="page">
            <div class="login-container">
                <div class="logo">
                    <i class="fas fa-comments"></i>
                    <h1>Dargak</h1>
                </div>
                <form id="register-form">
                    <div class="input-group">
                        <label for="reg-phone">شماره تلفن</label>
                        <input type="tel" id="reg-phone" placeholder="+989123456789" required>
                    </div>
                    <div class="input-group">
                        <label for="reg-name">نام کامل</label>
                        <input type="text" id="reg-name" required>
                    </div>
                    <div class="input-group">
                        <label for="reg-password">رمز عبور</label>
                        <input type="password" id="reg-password" required>
                    </div>
                    <div class="input-group">
                        <label for="reg-language">زبان</label>
                        <select id="reg-language">
                            <option value="fa">فارسی</option>
                            <option value="en">English</option>
                            <option value="ar">العربية</option>
                            <option value="es">Español</option>
                            <option value="fr">Français</option>
                        </select>
                    </div>
                    <button type="submit" class="btn-primary">ثبت‌نام</button>
                    <button type="button" id="back-to-login" class="btn-secondary">بازگشت به ورود</button>
                </form>
                <div id="register-message" class="message"></div>
            </div>
        </div>

        <!-- صفحه اصلی چت -->
        <div id="chat-page" class="page">
            <div class="sidebar">
                <div class="sidebar-header">
                    <div class="user-profile">
                        <img id="user-avatar" src="https://via.placeholder.com/40" alt="User Avatar">
                        <span id="user-name">کاربر</span>
                    </div>
                    <button id="logout-btn" class="icon-btn"><i class="fas fa-sign-out-alt"></i></button>
                </div>
                <div class="search-container">
                    <input type="text" id="search-contacts" placeholder="جستجوی مخاطبین...">
                    <i class="fas fa-search"></i>
                </div>
                <div class="contacts-list" id="contacts-list">
                    <!-- مخاطبین به صورت داینامیک اضافه می‌شوند -->
                </div>
            </div>
            <div class="chat-container">
                <div class="chat-header">
                    <div class="chat-info">
                        <img id="chat-avatar" src="https://via.placeholder.com/40" alt="Chat Avatar">
                        <div>
                            <h3 id="chat-title">انتخاب مکالمه</h3>
                            <p id="chat-status">آخرین بازدید: اخیراً</p>
                        </div>
                    </div>
                    <div class="chat-actions">
                        <button class="icon-btn"><i class="fas fa-phone"></i></button>
                        <button class="icon-btn"><i class="fas fa-video"></i></button>
                        <button class="icon-btn"><i class="fas fa-ellipsis-v"></i></button>
                    </div>
                </div>
                <div class="messages-container" id="messages-container">
                    <!-- پیام‌ها به صورت داینامیک اضافه می‌شوند -->
                    <div class="no-chat-selected">
                        <i class="fas fa-comments"></i>
                        <p>مکالمه‌ای انتخاب نشده است</p>
                    </div>
                </div>
                <div class="message-input-container">
                    <div class="input-actions">
                        <button class="icon-btn"><i class="fas fa-paperclip"></i></button>
                        <button class="icon-btn"><i class="fas fa-smile"></i></button>
                    </div>
                    <input type="text" id="message-input" placeholder="پیام خود را بنویسید...">
                    <button id="send-btn" class="icon-btn"><i class="fas fa-paper-plane"></i></button>
                </div>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
/* Reset و تنظیمات پایه */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: #f5f5f5;
    color: #333;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.app-container {
    width: 100%;
    max-width: 1200px;
    height: 100vh;
    max-height: 800px;
    background-color: #fff;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    overflow: hidden;
    position: relative;
}

.page {
    display: none;
    width: 100%;
    height: 100%;
}

.page.active {
    display: flex;
}

/* استایل‌های صفحه ورود و ثبت‌نام */
.login-container {
    width: 100%;
    max-width: 400px;
    margin: auto;
    padding: 30px;
    text-align: center;
}

.logo {
    margin-bottom: 30px;
    color: #4a6fa5;
}

.logo i {
    font-size: 50px;
    margin-bottom: 15px;
}

.logo h1 {
    font-size: 28px;
    font-weight: 700;
}

.input-group {
    margin-bottom: 20px;
    text-align: right;
}

.input-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: #555;
}

.input-group input,
.input-group select {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 16px;
    transition: border-color 0.3s;
}

.input-group input:focus,
.input-group select:focus {
    border-color: #4a6fa5;
    outline: none;
}

.btn-primary {
    width: 100%;
    padding: 12px;
    background-color: #4a6fa5;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-top: 10px;
}

.btn-primary:hover {
    background-color: #3a5a8f;
}

.btn-secondary {
    width: 100%;
    padding: 12px;
    background-color: transparent;
    color: #4a6fa5;
    border: 1px solid #4a6fa5;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s;
    margin-top: 10px;
}

.btn-secondary:hover {
    background-color: #f0f4f9;
}

.message {
    margin-top: 20px;
    padding: 10px;
    border-radius: 5px;
    font-size: 14px;
}

.message.error {
    background-color: #ffebee;
    color: #d32f2f;
}

.message.success {
    background-color: #e8f5e9;
    color: #388e3c;
}

/* استایل‌های صفحه چت */
.sidebar {
    width: 300px;
    height: 100%;
    background-color: #f8f9fa;
    border-right: 1px solid #e0e0e0;
    display: flex;
    flex-direction: column;
}

.sidebar-header {
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #4a6fa5;
    color: white;
}

.user-profile {
    display: flex;
    align-items: center;
}

.user-profile img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-left: 10px;
}

.icon-btn {
    background: none;
    border: none;
    color: inherit;
    font-size: 18px;
    cursor: pointer;
    padding: 5px;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s;
}

.icon-btn:hover {
    background-color: rgba(255, 255, 255, 0.2);
}

.search-container {
    position: relative;
    padding: 15px;
}

.search-container input {
    width: 100%;
    padding: 10px 15px 10px 35px;
    border: 1px solid #ddd;
    border-radius: 20px;
    font-size: 14px;
}

.search-container i {
    position: absolute;
    left: 25px;
    top: 25px;
    color: #888;
}

.contacts-list {
    flex: 1;
    overflow-y: auto;
}

.contact-item {
    display: flex;
    align-items: center;
    padding: 12px 15px;
    cursor: pointer;
    transition: background-color 0.3s;
    border-bottom: 1px solid #eee;
}

.contact-item:hover {
    background-color: #e9ecef;
}

.contact-item.active {
    background-color: #e0e7ff;
}

.contact-item img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin-left: 10px;
}

.contact-info {
    flex: 1;
}

.contact-name {
    font-weight: 600;
    margin-bottom: 3px;
}

.contact-last-message {
    font-size: 13px;
    color: #777;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.contact-time {
    font-size: 12px;
    color: #999;
    text-align: left;
}

.chat-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
}

.chat-header {
    padding: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e0e0e0;
}

.chat-info {
    display: flex;
    align-items: center;
}

.chat-info img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
    margin-left: 10px;
}

.chat-info h3 {
    font-size: 16px;
    font-weight: 600;
}

.chat-info p {
    font-size: 13px;
    color: #777;
}

.chat-actions {
    display: flex;
    gap: 10px;
}

.messages-container {
    flex: 1;
    padding: 20px;
    overflow-y: auto;
    background-color: #e5ddd5;
    background-image: url('https://web.whatsapp.com/img/bg-chat-tile-light_a4be512e7195b6b733d9110b408f075d.png');
    background-repeat: repeat;
}

.no-chat-selected {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    color: #777;
}

.no-chat-selected i {
    font-size: 60px;
    margin-bottom: 20px;
    color: #ccc;
}

.message-input-container {
    padding: 10px 15px;
    display: flex;
    align-items: center;
    background-color: #f0f2f5;
    border-top: 1px solid #e0e0e0;
}

.message-input-container input {
    flex: 1;
    padding: 12px 15px;
    border: none;
    border-radius: 20px;
    font-size: 14px;
    margin: 0 10px;
}

.message-input-container input:focus {
    outline: none;
}

.input-actions {
    display: flex;
    gap: 5px;
}

/* استایل‌های پیام‌ها */
.message {
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
}

.message-incoming {
    align-items: flex-start;
}

.message-outgoing {
    align-items: flex-end;
}

.message-bubble {
    max-width: 70%;
    padding: 10px 15px;
    border-radius: 8px;
    position: relative;
    word-wrap: break-word;
}

.message-incoming .message-bubble {
    background-color: white;
    border-top-right-radius: 0;
}

.message-outgoing .message-bubble {
    background-color: #dcf8c6;
    border-top-left-radius: 0;
}

.message-sender {
    font-weight: 600;
    font-size: 13px;
    margin-bottom: 3px;
}

.message-text {
    font-size: 15px;
    line-height: 1.4;
}

.message-time {
    font-size: 11px;
    color: #777;
    text-align: left;
    margin-top: 3px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.message-outgoing .message-time {
    color: #4a6fa5;
}

.message-status {
    margin-right: 3px;
    font-size: 10px;
}

/* حالت تایپینگ */
.typing-indicator {
    display: flex;
    padding: 10px 15px;
    background-color: white;
    border-radius: 8px;
    border-top-right-radius: 0;
    width: fit-content;
    margin-bottom: 15px;
}

.typing-dot {
    width: 8px;
    height: 8px;
    background-color: #999;
    border-radius: 50%;
    margin: 0 2px;
    animation: typingAnimation 1.4s infinite ease-in-out;
}

.typing-dot:nth-child(1) {
    animation-delay: 0s;
}

.typing-dot:nth-child(2) {
    animation-delay: 0.2s;
}

.typing-dot:nth-child(3) {
    animation-delay: 0.4s;
}

@keyframes typingAnimation {
    0%, 60%, 100% { transform: translateY(0); }
    30% { transform: translateY(-5px); }
}

/* رسپانسیو */
@media (max-width: 768px) {
    .app-container {
        border-radius: 0;
        max-height: none;
    }
    
    .sidebar {
        width: 100%;
        display: none;
    }
    
    .sidebar.active {
        display: flex;
    }
    
    .chat-container {
        display: none;
    }
    
    .chat-container.active {
        display: flex;
    }
    
    .back-to-contacts {
        display: block;
    }
                          }
// داده‌های نمونه
const sampleContacts = [
    {
        id: '1',
        name: 'علی محمدی',
        avatar: 'https://via.placeholder.com/45/4a6fa5/ffffff?text=AM',
        lastMessage: 'سلام چطوری؟',
        time: '10:30',
        unread: 2
    },
    {
        id: '2',
        name: 'گروه خانواده',
        avatar: 'https://via.placeholder.com/45/8e44ad/ffffff?text=F',
        lastMessage: 'مادر: فردا میایید خونه؟',
        time: 'دیروز',
        unread: 0
    },
    {
        id: '3',
        name: 'سارا احمدی',
        avatar: 'https://via.placeholder.com/45/e74c3c/ffffff?text=SA',
        lastMessage: 'فایل رو برات فرستادم',
        time: 'سه‌شنبه',
        unread: 0
    },
    {
        id: '4',
        name: 'کانال اخبار',
        avatar: 'https://via.placeholder.com/45/2ecc71/ffffff?text=N',
        lastMessage: 'آخرین اخبار فناوری...',
        time: 'یکشنبه',
        unread: 5
    }
];

const sampleMessages = {
    '1': [
        {
            id: '101',
            sender: 'علی محمدی',
            text: 'سلام چطوری؟',
            time: '10:30',
            incoming: true
        },
        {
            id: '102',
            sender: 'شما',
            text: 'سلام علی جان، خوبم ممنون! تو چطوری؟',
            time: '10:32',
            incoming: false,
            status: 'read'
        },
        {
            id: '103',
            sender: 'علی محمدی',
            text: 'منم خوبم. فردا ساعت 4 میتونیم باهم ملاقات کنیم؟',
            time: '10:33',
            incoming: true
        },
        {
            id: '104',
            sender: 'شما',
            text: 'بله حتما، ساعت 4 دفترم حاضر میشم',
            time: '10:35',
            incoming: false,
            status: 'read'
        }
    ],
    '2': [
        {
            id: '201',
            sender: 'مادر',
            text: 'فردا میایید خونه؟',
            time: 'دیروز',
            incoming: true
        }
    ],
    '3': [
        {
            id: '301',
            sender: 'سارا احمدی',
            text: 'فایل رو برات فرستادم',
            time: 'سه‌شنبه',
            incoming: true
        }
    ],
    '4': [
        {
            id: '401',
            sender: 'کانال اخبار',
            text: 'آخرین اخبار فناوری: انتشار نسخه جدید سیستم عامل...',
            time: 'یکشنبه',
            incoming: true
        }
    ]
};

// وضعیت برنامه
let currentUser = null;
let currentChat = null;
let isTyping = false;

// DOM Elements
const loginPage = document.getElementById('login-page');
const registerPage = document.getElementById('register-page');
const chatPage = document.getElementById('chat-page');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const registerBtn = document.getElementById('register-btn');
const backToLoginBtn = document.getElementById('back-to-login');
const logoutBtn = document.getElementById('logout-btn');
const loginMessage = document.getElementById('login-message');
const registerMessage = document.getElementById('register-message');
const contactsList = document.getElementById('contacts-list');
const messagesContainer = document.getElementById('messages-container');
const messageInput = document.getElementById('message-input');
const sendBtn = document.getElementById('send-btn');
const searchContacts = document.getElementById('search-contacts');
const userAvatar = document.getElementById('user-avatar');
const userName = document.getElementById('user-name');
const chatTitle = document.getElementById('chat-title');
const chatStatus = document.getElementById('chat-status');
const chatAvatar = document.getElementById('chat-avatar');

// رویدادها
document.addEventListener('DOMContentLoaded', initApp);
loginForm.addEventListener('submit', handleLogin);
registerForm.addEventListener('submit', handleRegister);
registerBtn.addEventListener('click', showRegisterPage);
backToLoginBtn.addEventListener('click', showLoginPage);
logoutBtn.addEventListener('click', handleLogout);
sendBtn.addEventListener('click', sendMessage);
messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') sendMessage();
});
searchContacts.addEventListener('input', filterContacts);

// توابع
function initApp() {
    // بررسی اگر کاربر لاگین کرده است
    const loggedInUser = localStorage.getItem('dargak_user');
    if (loggedInUser) {
        currentUser = JSON.parse(loggedInUser);
        showChatPage();
        loadContacts();
    } else {
        showLoginPage();
    }
}

function showLoginPage() {
    loginPage.classList.add('active');
    registerPage.classList.remove('active');
    chatPage.classList.remove('active');
}

function showRegisterPage() {
    loginPage.classList.remove('active');
    registerPage.classList.add('active');
    chatPage.classList.remove('active');
}

function showChatPage() {
    loginPage.classList.remove('active');
    registerPage.classList.remove('active');
    chatPage.classList.add('active');
    
    // نمایش اطلاعات کاربر
    if (currentUser) {
        userName.textContent = currentUser.name || 'کاربر';
        userAvatar.src = currentUser.avatar || 'https://via.placeholder.com/40';
    }
}

function handleLogin(e) {
    e.preventDefault();
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    
    // اعتبارسنجی ساده
    if (!phone || !password) {
        showMessage(loginMessage, 'لطفا شماره تلفن و رمز عبور را وارد کنید', 'error');
        return;
    }
    
    // در حالت واقعی باید به سرور درخواست بفرستیم
    // اینجا فقط شبیه‌سازی می‌کنیم
    currentUser = {
        id: 'user_' + Math.random().toString(36).substr(2, 9),
        phone: phone,
        name: 'کاربر تست',
        avatar: 'https://via.placeholder.com/40/4a6fa5/ffffff?text=ME',
        language: 'fa'
    };
    
    localStorage.setItem('dargak_user', JSON.stringify(currentUser));
    showChatPage();
    loadContacts();
    
    // شبیه‌سازی تاخیر برای لاگین
    setTimeout(() => {
        showMessage(loginMessage, 'ورود با موفقیت انجام شد', 'success');
    }, 1000);
}

function handleRegister(e) {
    e.preventDefault();
    const phone = document.getElementById('reg-phone').value;
    const name = document.getElementById('reg-name').value;
    const password = document.getElementById('reg-password').value;
    const language = document.getElementById('reg-language').value;
    
    if (!phone || !name || !password) {
        showMessage(registerMessage, 'لطفا تمام فیلدها را پر کنید', 'error');
        return;
    }
    
    // در حالت واقعی باید به سرور درخواست بفرستیم
    // اینجا فقط شبیه‌سازی می‌کنیم
    currentUser = {
        id: 'user_' + Math.random().toString(36).substr(2, 9),
        phone: phone,
        name: name,
        avatar: 'https://via.placeholder.com/40/4a6fa5/ffffff?text=' + name.charAt(0),
        language: language
    };
    
    localStorage.setItem('dargak_user', JSON.stringify(currentUser));
    showChatPage();
    loadContacts();
    
    // شبیه‌سازی تاخیر برای ثبت‌نام
    setTimeout(() => {
        showMessage(registerMessage, 'ثبت‌نام با موفقیت انجام شد', 'success');
    }, 1000);
}

function handleLogout() {
    localStorage.removeItem('dargak_user');
    currentUser = null;
    currentChat = null;
    showLoginPage();
}

function loadContacts() {
    if (!contactsList) return;
    
    contactsList.innerHTML = '';
    
    sampleContacts.forEach(contact => {
        const contactItem = document.createElement('div');
        contactItem.className = 'contact-item';
        contactItem.dataset.contactId = contact.id;
        contactItem.addEventListener('click', () => openChat(contact.id));
        
        contactItem.innerHTML = `
            <img src="${contact.avatar}" alt="${contact.name}">
            <div class="contact-info">
                <div class="contact-name">${contact.name}</div>
                <div class="contact-last-message">${contact.lastMessage}</div>
            </div>
            <div class="contact-time">${contact.time}</div>
            ${contact.unread > 0 ? `<div class="unread-count">${contact.unread}</div>` : ''}
        `;
        
        contactsList.appendChild(contactItem);
    });
}

function filterContacts() {
    const searchTerm = searchContacts.value.toLowerCase();
    const contactItems = document.querySelectorAll('.contact-item');
    
    contactItems.forEach(item => {
        const name = item.querySelector('.contact-name').textContent.toLowerCase();
        const lastMessage = item.querySelector('.contact-last-message').textContent.toLowerCase();
        
        if (name.includes(searchTerm) || lastMessage.includes(searchTerm)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

function openChat(contactId) {
    currentChat = contactId;
    
    // برجسته کردن مخاطب انتخاب شده
    document.querySelectorAll('.contact-item').forEach(item => {
        item.classList.remove('active');
        if (item.dataset.contactId === contactId) {
            item.classList.add('active');
        }
    });
    
    // نمایش اطلاعات چت
    const contact = sampleContacts.find(c => c.id === contactId);
    if (contact) {
        chatTitle.textContent = contact.name;
        chatAvatar.src = contact.avatar;
        chatStatus.textContent = contact.time === '10:30' ? 'آنلاین' : `آخرین بازدید: ${contact.time}`;
    }
    
    // نمایش پیام‌ها
    loadMessages(contactId);
}

function loadMessages(chatId) {
    if (!messagesContainer) return;
    
    messagesContainer.innerHTML = '';
    
    const messages = sampleMessages[chatId] || [];
    
    if (messages.length === 0) {
        messagesContainer.innerHTML = `
            <div class="no-chat-selected">
                <i class="fas fa-comments"></i>
                <p>هیچ پیامی در این مکالمه وجود ندارد</p>
            </div>
        `;
        return;
    }
    
    messages.forEach(message => {
        const messageElement = document.createElement('div');
        messageElement.className = `message message-${message.incoming ? 'incoming' : 'outgoing'}`;
        
        messageElement.innerHTML = `
            ${message.incoming ? `<div class="message-sender">${message.sender}</div>` : ''}
            <div class="message-bubble">
                <div class="message-text">${message.text}</div>
                <div class="message-time">
                    ${!message.incoming ? `<span class="message-status">${message.status === 'read' ? '✓✓' : '✓'}</span>` : ''}
                    ${message.time}
                </div>
            </div>
        `;
        
        messagesContainer.appendChild(messageElement);
    });
    
    // اسکرول به پایین
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function sendMessage() {
    const text = messageInput.value.trim();
    if (!text || !currentChat) return;
    
    // اضافه کردن پیام به لیست
    const newMessage = {
        id: 'msg_' + Date.now(),
        sender: 'شما',
        text: text,
        time: 'هم اکنون',
        incoming: false,
        status: 'sent'
    };
    
    if (!sampleMessages[currentChat]) {
        sampleMessages[currentChat] = [];
    }
    
    sampleMessages[currentChat].push(newMessage);
    loadMessages(currentChat);
    messageInput.value = '';
    
    // شبیه‌سازی پاسخ
    setTimeout(() => {
        const replyMessage = {
            id: 'msg_' + Date.now(),
            sender: sampleContacts.find(c => c.id === currentChat).name,
            text: getRandomReply(),
            time: 'هم اکنون',
            incoming: true
        };
        
        sampleMessages[currentChat].push(replyMessage);
        loadMessages(currentChat);
    }, 1000 + Math.random() * 2000);
}

function getRandomReply() {
    const replies = [
        'ممنون از پیامت!',
        'بله، درست می‌گی',
        'فعلا مشغولم، بعدا صحبت می‌کنیم',
        'خیلی خوبه!',
        'نظرت در مورد این چیه؟',
        'می‌تونیم فردا ببینیمت',
        'فایل رو دریافت کردی؟',
        'لطفا کمی صبر کن',
        'دقیقا متوجه نشدم، میشه بیشتر توضیح بدی؟',
        'خوشحالم که باهات صحبت می‌کنم'
    ];
    
    return replies[Math.floor(Math.random() * replies.length)];
}

function showMessage(element, text, type) {
    if (!element) return;
    
    element.textContent = text;
    element.className = 'message ' + type;
    
    setTimeout(() => {
        element.textContent = '';
        element.className = 'message';
    }, 3000);
}

// شبیه‌سازی تایپینگ
function simulateTyping() {
    if (isTyping || !currentChat) return;
    
    isTyping = true;
    const typingElement = document.createElement('div');
    typingElement.className = 'typing-indicator';
    typingElement.innerHTML = `
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
        <div class="typing-dot"></div>
    `;
    
    messagesContainer.appendChild(typingElement);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    setTimeout(() => {
        typingElement.remove();
        isTyping = false;
    }, 2000 + Math.random() * 2000);
}

// هر 5-10 ثانیه یکبار تایپینگ را شبیه‌سازی کن
setInterval(() => {
    if (currentChat && Math.random() > 0.7) {
        simulateTyping();
    }
}, 5000);
