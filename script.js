function checkPassword() {
    const input = document.getElementById('passwordInput').value;
    if (input === 'password') {
        alert('Success');
    } else {
        alert('Incorrect password');
    }
}
