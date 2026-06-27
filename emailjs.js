(function(){
    emailjs.init("pA1qeAlZDgevk8-It");
})();

export function sendEmail(data) {
    return emailjs.send(
        "service_1hlp5ii",
        "__ejs-test-mail-service__",
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
    .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("✅ Message sent successfully! We will contact you soon.");
        return response;
    })
    .catch((error) => {
        console.error("FAILED...", error);
        alert("❌ Message failed to send. Please try again.");
        throw error;
    });
}
