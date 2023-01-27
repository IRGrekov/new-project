import Handlebars from 'handlebars';
import tpl from 'bundle-text:./tpl.hbs';
import './style.scss';

Handlebars.registerPartial('page2', tpl);

export default (props = {}) => {
  return Handlebars.compile(tpl)(props);
}

const authButtonPage2 = document.querySelector("#authButton1");

export function page2Scripts() {
  const form = document.querySelector("#createLogin") as HTMLFormElement;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData);
    console.log(formValues);
  });
}



window.addEventListener("click", (e) => {
  if (e.target.id !== "authButton1") {
    return;
  }
  const loginInput = document.querySelector("#login");
  console.log(loginInput.value);


  window.location.href = "./#page10"
})

