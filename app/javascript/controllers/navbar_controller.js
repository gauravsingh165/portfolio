// app/javascript/controllers/navbar_controller.js
import { Controller } from "@hotwired/stimulus"

export default class NavbarController extends Controller {
  static targets = ["menu"]

  toggle() {
    this.menuTarget.classList.toggle("open")
  }
}
