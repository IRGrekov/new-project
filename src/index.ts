import Handlebars from "handlebars";
import tpl from 'bundle-text:./index.hbs';
import './style.css';
import './components/button';
import './components/line_button';
import './components/button_search';
import './components/button_to-profile';
import './components/button_add-content';
import './components/inputform';
import './components/inputform_profile';
import './components/chat_profile';
import './components/chat_footer-content';
import './components/chat_element';
import './components/chat_text';
import './components/chat_img';
import './components/title';
import './components/text _transition';
import './components/avatar';
import './pages/page1';
import './pages/page2';
import './pages/page3';
import './pages/page4';
import './pages/page5';
import './pages/page6';
import './pages/page7';
import './pages/page9';
import './pages/page10';
import './pages/page404';
import './pages/page500';
import Block from '../src/demo/Block';;
import './components/loginPage';
import '../src/demo/Block';
import '../src/demo/EventBus';
import '../src/demo/registerComponent';
import '../src/demo/renderDom';

import { page1Scripts } from "./pages/page1";
import { TButtonRender } from "./components/button";
import { page2Scripts } from "./pages/page2";
import inputform from "./components/inputform";

console.log(tpl);
console.log('text')

const comp = Handlebars.compile(tpl);
const res = comp({
  fname: 'students',
});

const root = document.getElementById('root')
if (root !== null) {
  root.innerHTML = res;
}

window.location.href = "./#page2"

const buttonOpenAploadAvater = document.querySelector(".profile__circle")
const modalWindowOfAscentAvater = document.getElementById("profilemodal")

if (buttonOpenAploadAvater !== null && modalWindowOfAscentAvater !== null) {
  buttonOpenAploadAvater.addEventListener("click", () => {
    modalWindowOfAscentAvater.classList.add("profilemodal_open")
  })
}

const modalWindowOfAscentAvater1 = document.querySelector(".profilemodal__wrapperr")
const modalWindowOfAscentAvater2 = document.getElementById("profilemodal")

if (modalWindowOfAscentAvater1 !== null && modalWindowOfAscentAvater2 !== null) {
  modalWindowOfAscentAvater1.addEventListener("click", () => {
    modalWindowOfAscentAvater2.classList.remove("profilemodal_open")
  })
}

// document.querySelector(".chat__meny").addEventListener("click", () => {
//   document.getElementById("meny_content").classList.toggle("meny_show")
// })

// document.querySelector(".chat__bottom_icon").addEventListener("click", () => {
//   document.getElementById("clip").classList.toggle("show_clip")
// })
// document.querySelector("#add_user_profile").addEventListener("click", () => {
//   document.getElementById("add_user_form").classList.add("show_clip")
// })
// document.querySelector("#remove_user_form").addEventListener("click", () => {
//   document.getElementById("add_user_form").classList.remove("show_clip")
// })
// document.querySelector("#del_user_profile").addEventListener("click", () => {
//   document.getElementById("dell_user_form").classList.add("show_clip")
// })
// document.querySelector("#remove_user_form_update").addEventListener("click", () => {
//   document.getElementById("dell_user_form").classList.remove("show_clip")
// })

const chatMenyButton = document.querySelector(".chat__meny")
const menyContentForm = document.querySelector(".chat__meny")
if (chatMenyButton !== null && menyContentForm !== null) {

  chatMenyButton.addEventListener("click", () => {
    menyContentForm.classList.toggle("meny_show")
  })
}

const buttontoNewChat = document.querySelector(".chat__meny")
const formNewChat = document.getElementById("meny_content")
if (buttontoNewChat !== null && formNewChat !== null) {

  buttontoNewChat.addEventListener("click", () => {
    formNewChat.classList.toggle("meny_show")
  })
}

const addUserButton = document.querySelector("#add_user_profile")
const addUserForm = document.getElementById("add_user_form")
if (addUserButton !== null && addUserForm !== null) {

  addUserButton.addEventListener("click", () => {
    addUserForm.classList.add("show_clip")
  })
}
const removeUserButton = document.querySelector("#remove_user_form")
if (removeUserButton !== null && addUserForm !== null) {

  removeUserButton.addEventListener("click", () => {
    addUserForm.classList.remove("show_clip")
  })
}

const delUserButton = document.querySelector("#del_user_profile")
const delUserForm = document.getElementById("dell_user_form")
if (delUserButton !== null && delUserForm !== null) {

  delUserButton.addEventListener("click", () => {
    delUserForm.classList.add("show_clip")
  })
}

const removeUserButtonUpdate = document.querySelector("#remove_user_form_update")
if (delUserForm !== null && removeUserButtonUpdate !== null) {
  removeUserButtonUpdate.addEventListener("click", () => {
    delUserForm.classList.remove("show_clip")
  })
}

const buttonForFileSubmission = document.querySelector(".chat__bottom_icon")
const formFileSubmission = document.getElementById("clip")
if (buttonForFileSubmission !== null && formFileSubmission !== null) {

  buttonForFileSubmission.addEventListener("click", () => {
    formFileSubmission.classList.toggle("show_clip")
  })
}



page1Scripts();
TButtonRender();
page2Scripts();
