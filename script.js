function checkPassword() {
    const input = document.getElementById('passwordInput').value.toLowerCase().trim();
    const hashedInput = CryptoJS.SHA256(input).toString();
    const correctHash = 'b133a0c0e9bee3be20163d2ad31d6248db292aa6dcb1ee087a2aa50e0fc75ae2'; 
    if (hashedInput === correctHash) { 
        alert('Correct! Go to tinyurl.com/' + input + "-boyfriend");
    } else {
        alert('Incorrect!');
    }
}
