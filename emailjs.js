// emailjs.js

// Initialize EmailJS
emailjs.init({
    publicKey: "pA1qeAlZDgevk8-It"
});

// Send booking email
export async function sendEmail(data) {

    try {

        const response = await emailjs.send(
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
        );

        console.log("SUCCESS", response);

        return response;

    } catch (error) {

        console.error("EMAILJS ERROR:", error);

        throw error;
    }
}
