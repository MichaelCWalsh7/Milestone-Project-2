function sendMail(contactForm) {
    emailjs.send("gmail", "Anagrammer", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "message": contactForm.message.value
    }) .then(
        $("#modal").modal('toggle')
    );
    return false;
}
