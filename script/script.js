// console.log('connected');
const loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click',function(){
    const userInput = document.getElementById('user').value;
    const passInput = document.getElementById('pass').value;
    if(userInput === 'admin' && passInput === 'admin123')
    {
        alert("Login Successful");
        window.location.href= 'home.html';
    }
    else{
        alert('wrong credentials');
        return;
    }
})