document.getElementById('loginButton').addEventListener('click', function(){
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username == 'admin' && password == '12345'){
        window.location.href = 'registered.html';
    }else{
        alert('Username or Password are incorrect');
    }
});