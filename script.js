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
            console.log("SUCCESS!", response);

            // Inform user form submitted successfully
            alert("Your message has been sent!"); 

            // Reset form for future use/messages
            document.getElementById("contact-form").reset(); 
        }, function (error) {
            console.log("FAILED...", error);
            
            // Alert user something has gone wrong
            alert("Oops! Something went wrong. Please try again.");
        });
});
