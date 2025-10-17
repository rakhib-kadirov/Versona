import { useRef, useState } from 'react';
import emailjs from "emailjs-com";
import '../../../styles/Main_Block_1/styles.css'

export function Main_Block_6() {
    const formRef = useRef();
    const [status, setStatus] = useState(null);

    const sendEmail = async (e) => {
        e.preventDefault();
        setStatus("sending");

        try {
            await emailjs.sendForm(
                "service_5xhu34a",
                "template_04kpkmk",
                formRef.current,
                "QwdRN7dATa2WJ7rB0"
            );

            setStatus("success");
            formRef.current.reset();
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    return (
        <section className='main-block-container'>
            <div className='block-container'>
                <div className='block-text-header'>
                    <h2>Contact us</h2>
                </div>
                <div className='block-cases-contact' id="contact">
                    <div class="form-container">
                        <form ref={formRef} onSubmit={sendEmail} class="contact-form" autocomplete="off">
                            <input type="hidden" name="csrf_token" value="<?php echo bin2hex(random_bytes(32)); ?>" />

                            <input type="text" name="name" id="name" placeholder='Your Name' required maxlength="50" />

                            <input type="email" name="email" id="email" placeholder='Email' required maxlength="100" />

                            <textarea name="message" id="message" placeholder='Message' required maxlength="2000"></textarea>

                            <button type="submit" disabled={status === "sending"}>
                                {status === "sending" ? "Sending..." : "Send Message"}
                            </button>

                            {status === "success" && <p className="success-msg">✅ Message sent successfully!</p>}
                            {status === "error" && <p className="error-msg">❌ Failed to send message.</p>}
                        </form>
                    </div>
                </div>
            </div>
        </section >
    )
}