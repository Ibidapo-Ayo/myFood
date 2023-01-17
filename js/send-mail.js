function sendMail() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "ibidapoayomide754@gmail.com",
        Password : "Ay0mide@123$$$",
        To : 'ayomideibidapo76@gmail.com',
        From : document.getElementById("email").value,
        Subject : "Contact us",
        Body : "Hi"
    }).then(
      message => alert(message)
    );
}