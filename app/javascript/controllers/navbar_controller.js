import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["desktop", "mobile"];

  connect() {}

  toggle() {
    if (
      this.desktopTarget.classList.contains("hidden") ||
      this.mobileTarget.classList.contains("hidden")
    ) {
      this.open();
    } else {
      this.close();
    }
  }

  open() {
    this.desktopTarget.classList.remove("hidden");
    this.mobileTarget.classList.remove("hidden");
  }

  close() {
    this.desktopTarget.classList.add("hidden");
    this.mobileTarget.classList.add("hidden");
  }
}
