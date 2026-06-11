export default class Modal {
  constructor(modalClass) {
    this.modal = document.querySelector(modalClass);
    this.closeButton = this.modal.querySelector(".close-modal-button");
    this.listenCloseButton();
  }
  open() {
    this.modal.classList.add("modal-showed");
  }
  close() {
    this.modal.classList.remove("modal-showed");
  }
  isOpen() {
    return this.modal.classList.contains("modal-showed");
  }
  listenCloseButton() {
    this.closeButton.addEventListener("click", () => {
      this.close();
    });
  }
}