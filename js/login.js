document.getElementById('submit-button').addEventListener('click', function () {
    const email = document.getElementById('email-address').value;
    const password = document.getElementById('password').value;
    if (email == 'partha@gmail.com' && password == 'partha') {
        window.location.href = "banking.html";
    }
})