//button
document.getElementById('login-submit').addEventListener('click', function(){

    const emailField = document.getElementById('user-email');
    const UserEmail = emailField.value;

    const passwordField = document.getElementById('user-password');
    const UserPassword = passwordField.value;

    if(UserEmail == 'shaiadul96@gmail.com' && UserPassword == "12345#"){
        window.location.href='banking.html';
    }
    else{
        alert('Sorry, Your Email or Password is not valid !');
        UserEmail.value='';
        UserPassword.value='';
    }
});



