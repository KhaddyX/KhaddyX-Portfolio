(function () {
       emailjs.init("Jzsq54bcALJtGoHoG"); // from emailjs dashboard
})();

document.getElementById("contact-form").addEventListener("submit", function (e) {
       e.preventDefault();

       emailjs.sendForm("service_ghgu1pv", "template_q0xsltn", this)
              .then(() => {
                     alert("✅ Your message has been sent successfully!");
                     this.reset();
              }, (error) => {
                     alert("❌ Failed to send message. Try again!");
                     console.error("EmailJS Error:", error);
              });
});