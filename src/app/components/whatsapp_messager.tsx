'use client'
export default function WhatsAppMessenger() {

    async function sendTextMessage() {
            console.log("Sending WhatsApp message...");
            const response = await fetch("/api/whatsapp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    to: "27824460590",
                    message: "Hello from WhatsApp!",
                }),
            });

            if (response.ok) {
                console.log("WhatsApp sent");
            } else {
                console.error("Error sending WhatsApp");
            }
    }

    return (
        <div className="size-10 bg-gray-900 absolute bottom-20 right-10 z-10 hex flex justify-center items-center group cursor-pointer" onClick={sendTextMessage}>
            <div className="hex inset-0 size-9 bg-green-600 group-hover:size-8 transition-all duration-100">
            </div>
        </div>
    );
}