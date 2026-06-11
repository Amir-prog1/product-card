export default class Form {
  constructor(formId) {
    this.form = document.getElementById(formId);
  }
  
  // Метод для получения всех значений формы
  getValues() {
    const formData = new FormData(this.form);
    return Object.fromEntries(formData.entries());
  }

  // Проверка валидности формы
  isValid() {
    return this.form.checkValidity();
  }

  // Сброс формы
  reset() {
    this.form.reset();
  }
}