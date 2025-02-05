document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.getElementById('hamburger');
    const navList = document.getElementById('nav-list');

    hamburger.addEventListener('click', () => {
        navList.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
});

// Initialize EmailJS with your Public API Key
emailjs.init("Rfh_ZAZ6NyYG2RtUG");

// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); 

    // Send the form data to EmailJS
    emailjs.sendForm("service_sid3z64", "template_ocziwf4", this)
        .then(function (response) {
            // Success callback
            console.log("SUCCESS!", response);
            alert("Your message has been sent!"); 
            document.getElementById("contact-form").reset(); 
        }, function (error) {
            console.log("FAILED...", error);
            alert("Oops! Something went wrong. Please try again.");
        });
});
