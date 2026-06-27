// Initialize EmailJS
(function () {
    emailjs.init({
        publicKey: "pA1qeAlZDgevk8-It"
    });
})();

// Get HTML elements
const form = document.getElementById("contact-form");
const status = document.getElementById("status");
const btn = document.getElementById("submitBtn");

// Send email function
export function sendEmail(data) {

    // Disable button while sending
    btn.disabled = true;
    btn.innerText = "Sending...";

    status.innerText = "Please wait, sending your booking request...";
    status.style.color = "#0f766e";

    return emailjs.send(
        "service_1hlp5ii",
        "template_vs01t7d",
        {
            name: data.name,
            email: data.email,
            phone: data.phone,
            country: data.country,
            destination: data.destination,
            arrival: data.arrival,
            departure: data.departure,
            clients: data.clients,
            days: data.days,
            parks: data.parks,
            message: data.message
        }
    )
    .then(function (response) {

        console.log("SUCCESS!", response);

        status.innerText = "✅ Booking request sent successfully. We will contact you shortly.";
        status.style.color = "green";

        form.reset();

        btn.disabled = false;
        btn.innerText = "Send Booking Request";

    })
    .catch(function (error) {

        console.error("FAILED!", error);

        status.innerText = "❌ Failed to send booking request. Please try again.";
        status.style.color = "red";

        btn.disabled = false;
        btn.innerText = "Send Booking Request";
    });

}

// Listen for form submit
form.addEventListener("submit", function (e) {

    e.preventDefault();

    const data = {
        name: form.name.value,
        email: form.email.value,
        phone: form.phone.value,
        country: form.country.value,
        destination: form.destination.value,
        arrival: form.arrival.value,
        departure: form.departure.value,
        clients: form.clients.value,
        days: form.days.value,
        parks: form.parks.value,
        message: form.message.value
    };

    sendEmail(data);

});
