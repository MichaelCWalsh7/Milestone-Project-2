function sendMail(contactForm) {
    emailjs.send("gmail","Anagrammer", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        "message": contactForm.message.value
    }) 
return false;
} 