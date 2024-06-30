import {Chip} from "@mui/material";
import {Email, Phone, WhatsApp} from "@mui/icons-material";
import React from "react";

const Contact = ({phone, message, email, type}: {
    type: string | "email" | "phone" | "whatsapp",
    phone: string,
    message?: string,
    email?: string
}) => {

    function openMailTo(mail: string) {
        window.location.href = `mailto:${message}`
    }

    function sendWhatsapp(phone: string, message: string) {
        window.open(`https://wa.me/${phone}?text=${message}`, '_blank')
    }

    function makePhoneCall(phone: string) {
        window.open(`tel:${phone}`)
    }

    return <div>
        {type === "whatsapp" && <Chip icon={<WhatsApp/>}
                                      onClick={()=>sendWhatsapp(phone, message || "")}
                                      style={{cursor: "pointer"}}
                                      label={phone}
                                      variant="outlined" color={"success"}/>}

        {type === "phone" && <Chip icon={<Phone/>}
                                   label={phone}
                                   onClick={()=> makePhoneCall(phone)}
                                   variant="outlined" color={"primary"}/>}

        {type === "email" && <Chip icon={<Email/>}
                                   onClick={()=>openMailTo(email || "winstyngyen@gmail.com")}
                                   label={email}
                                   style={{cursor: "pointer"}}
                                   variant="outlined" color={"primary"}/>}
    </div>

}

export default Contact;
