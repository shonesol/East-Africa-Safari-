(function(){
    emailjs.init("pA1qeAlZDgevk8-It");
})();

const form = document.getElementById("contact-form");
const status = document.getElementById("status");
const btn = document.getElementById("submitBtn");

export function sendEmail(data) {
    btn.disabled = true;
    btn.innerText = "Sending... ⏳";
    status.innerText = "Please wait, sending your request...";
    status.style.color = "#0f766e";

    return emailjs.send(
        "service_1hlp5ii",
        "template_vs01t7d
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
    .then((response) => {
        console.log("SUCCESS!", response.status, response.text);

        status.innerText = "✅ Booking sent successfully! We will contact you soon.";
        status.style.color = "green";

        form.reset();
        btn.disabled = false;
        btn.innerText = "Send Booking Request";

        return response;
    })
    .catch((error) => {
        console.error("FAILED...", error);

        status.innerText = "❌ Failed to send. Please try again.";
        status.style.color = "red";

        btn.disabled = false;
        btn.innerText = "Send Booking Request";

        throw error;
    });
}
