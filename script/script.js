// console.log('connected');
const loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click',function(){
    const userInput = document.getElementById('user').value;
    const passInput = document.getElementById('pass').value;
    if(userInput === 'admin' && passInput === 'admin123')
        console.log('yes');
})