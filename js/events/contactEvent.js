import { showToastMessage } from "./toastEvent.js";

export function initContactUs() {
  const form = document.getElementById("contact-form");
  if (!form) return;

  const button = document.getElementById("emailButton");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Disable button & show loader
    button.disabled = true;
    button.innerHTML = `
      <span class="flex items-center gap-2">
        <svg class="w-5 h-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
        </svg>
        Sending...
      </span>
    `;

    // Collect form values
    let params = {
      from_name: form.from_name.value,
      from_email: form.from_email.value,
      reply_to: form.from_email.value,
      subject: form.subject.value,
      message: form.message.value
    };


    const serviceID = "service_9foyvdz";
    const templateID = "template_zwqs4w5";

    emailjs.send(serviceID, templateID, params).then(() => {
      showToastMessage("✅ Email sent successfully!", 3000);

      form.reset();

      // Restore button
      button.disabled = false;
      button.innerHTML = "Send Message";
    }, (err) => {
      showToastMessage("❌ Failed to send email.", 3000);
      console.error("EmailJS error:", err);

      // Restore button
      button.disabled = false;
      button.innerHTML = "Send Message";
    });
  });
}
