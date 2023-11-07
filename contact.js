// H. Tretuens 578003 K.G. Smith 577999 J.R. Joubert 578085 Z. Luo 600287
// Start of contact script
const Name =document.getElementById('name');
const Emails =document.getElementById('email');
const Subject =document.getElementById('sbjt');
const Message =document.getElementById('msg');
const submit =document.getElementsByClassName('contactform')[0];

submit.addEventListener('submit', (i)=>{
    i.preventDefault();
    let emailformatting = `
    <h1>Contact Form Entry</h1>
    <h1>Information Systems 181: Hayley Treutens, Kyle G. Smith, Zirong Luo, Jonathan R. Joubert.</h1>
    <br>
    <h2>Sender Information:
    <h2>
    <b>Name: </b>${Name.value}
    <br>
    <b>Email: </b>${Emails.value}
    <br>
    <b>Message: </b>${Message.value}
    </h2>
    `
    Email.send({
        SecureToken : "1df566a6-7fd8-4955-b8f0-94fa503caf40",
        To : 'rjjoubert007@gmail.com',
        From : "help@thebusinessconsultants.fibco.co.za",
        Subject : "Subject: " + Subject.value,
        Body : emailformatting
    }).then(window.open('index.html'));
});
    
