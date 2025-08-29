
export function contactForm(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <form id="contact-form" class="space-y-4"
      data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-duration="800">

      <input type="text" name="from_name" placeholder="Your Name" required
        class="form-input w-full text-gray-400 dark:text-gray-50" />

      <input type="email" name="from_email" placeholder="Your Email" required
        class="form-input w-full text-gray-400 dark:text-gray-50" />

      <input type="text" name="subject" placeholder="Subject" required
        class="form-input w-full text-gray-400 dark:text-gray-50" />

      <textarea name="message" placeholder="Your Message" required
        class="form-textarea w-full h-40 text-gray-400 dark:text-gray-50"></textarea>

      <div class="flex justify-center">
        <button type="submit" id="emailButton" class="btn-primary">Send Message</button>
      </div>
    </form>
  `;
}




