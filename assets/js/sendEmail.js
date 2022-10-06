function sendMail(contactForm) {
    emailjs.send("service_olhcmjf","template_zft7f4f", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "message": contactForm.other.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}