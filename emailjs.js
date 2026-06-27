(function(){
    emailjs.init("YOUR_PUBLIC_KEY");
})();

export function sendEmail(data){
    return emailjs.send("YOUR_SERVICE_ID","YOUR_TEMPLATE_ID",{
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
    });
}
