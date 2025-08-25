export function initAOS() {
  if (window.AOS) {
    // AOS.init({ once: false, duration: 800, mirror: true });
    AOS.init({
      startEvent: 'DOMContentLoaded', // Event to initialize AOS
      once: false, // Whether animation should happen only once
      mirror: false, // animate on scroll up
      debounceDelay: 33, // Delay in milliseconds for debouncing scroll events
      throttleDelay: 66, // Delay in milliseconds for throttling scroll events
    });

    AOS.refresh();
  }
}
