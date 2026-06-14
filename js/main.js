import "./script.js"
import "./homework-5.js"
import "./homework-6.js"
import "./homework-7.js"
import "./homework-8.js"
import "./homework-9.js"
import Modal from "./Modal.js"
import Form from "./Form.js"
import "./furniture.js"

// Modal

const modal = new Modal(".modal");
const form = new Form("#registration-form");

const openModalButton = document.getElementById("open-modal-button");
openModalButton.addEventListener("click", () => {
  modal.open();
});

// Form

form.form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!form.isValid()) {
    form.form.reportValidity();
    return;
  }

  const values = form.getValues();

  if (values.password !== values.repeatPassword) {
  alert("Пароли не совпадают!");
  return;
  }

  const user = {
    ...values,
    dateCreated: new Date()
  };

  console.log(user);

  modal.close();
  form.reset();
});

// Subscribe

const subscribeForm = new Form(".subscribe-form");

subscribeForm.form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (!subscribeForm.isValid()) {
    subscribeForm.form.reportValidity();
    return;
  }

  const values = subscribeForm.getValues();

  console.log(values);

  subscribeForm.reset();
});