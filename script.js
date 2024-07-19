function checkPassword() {
    const input = document.getElementById('passwordInput').value;
    const hashedInput = CryptoJS.SHA256(input).toString();
    const correctHash = '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8'; 
    if (hashedInput === correctHash) {
        alert("You shouldn't be here yet... but you guessed well! Come back when the website is done.");
    } else {
        alert('Incorrect!');
    }
}
