let user = null

// Модальное окно

// const openModalButton = document.getElementById(`open-modal-button`);
// const modal = document.querySelector(`.modal`);
// const closeModalButton = document.querySelector(`.close-modal-button`);
// openModalButton.addEventListener(`click`, function() {
//   modal.classList.add(`modal-showed`);
// });
// closeModalButton.addEventListener(`click`, function() {
//   modal.classList.remove(`modal-showed`);
// });

// // Регистрация формы

// const registrationForm = document.getElementById(`registration-form`);
// registrationForm.addEventListener(`submit`, function (event) {
//   event.preventDefault();
// if (!registrationForm.checkValidity()) {
//   registrationForm.reportValidity();
//   return;
// }
//   const firstName = document.getElementById("first-name").value;
//   const lastName = document.getElementById("last-name").value;
//   const birthDate = document.getElementById("birth-date").value;
//   const login = document.getElementById("login").value;
//   const password = document.getElementById("password").value;
//   const repeatPassword = document.getElementById("repeat-password").value;
// if (password !== repeatPassword) {
//   alert("Пароли не совпадают!");
//   return;
// }
// if (!registrationForm.checkValidity()) {
//   registrationForm.reportValidity();
//   return;
// }
// user = {
//   имя: firstName,
//   фамилия: lastName,
//   датаРождения: birthDate,
//   логин: login,
//   пароль: password,
//   датаСоздания: new Date()
// };
//   console.log(user);
//   modal.classList.remove("modal-showed");
//   registrationForm.reset();
// });
// const subscribeForm = document.querySelector('.subscribe-form');
// const emailInput = document.getElementById('email');
// subscribeForm.addEventListener('submit', (e) => {
//   e.preventDefault();
//   if (!emailInput.value || !emailInput.checkValidity()) {
//     alert('Введите корректный email');
//     return;
//   }
//   console.log({
//     email: emailInput.value
//   });
//   subscribeForm.reset();
// });