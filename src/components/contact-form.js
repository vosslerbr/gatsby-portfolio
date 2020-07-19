import React from "react";
import "../styles/contact-form-styles.css";


export default function ContactForm() {
    return (
        <form action="https://formspree.io/bradyvosslerwebdev@gmail.com" method="POST" class="column">
            <label for="email">Your Email</label>
            <input type="email" id="email" name="_replyto" placeholder="Your email" required/>

            <label for="subject">Subject</label>
            <input type="text" id="subject" name="Subject" placeholder="Subject" required/>

            <label for="message">Message</label>
            <textarea name="message" id="message" name="message" cols="30" rows="10" placeholder="Type your message here!" required></textarea>

            <input type="text" name="_gotcha" style={{display: `none` }} />

            <button type="submit">Send</button>
        </form>
    )
  }