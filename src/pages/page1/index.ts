import Handlebars from 'handlebars';
import tpl from 'bundle-text:./tpl.hbs';
import './style.scss';

Handlebars.registerPartial('page1', tpl);

export default (props = {}) => {
  return Handlebars.compile(tpl)(props);
}


const authButton = document.querySelector("#authButton");

export function page1Scripts() {
  const form = document.querySelector("#loginData") as HTMLFormElement;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const formValues = Object.fromEntries(formData);
    if (formValues.login.length < 3) {
      // alert("ERROR")
      form.querySelector("[name='login']").style.outline = "2px solid red";
      return;
    }
    if (formValues.login.length > 20) {
      // alert("ERROR")
      form.querySelector("[name='login']").style.outline = "10px solid red";
      return;
    }

    console.log(formValues);
  });
}

window.addEventListener("click", (e) => {
  if (e.target.id !== "authButton") {
    return;
  }
  const loginInput = document.querySelector("#login");
  // console.log(loginInput.value);
  if (loginInput.value.length === 0) {
    return
  }

  window.location.href = "./#page10"
})

