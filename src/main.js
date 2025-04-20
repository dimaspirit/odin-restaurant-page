import "./styles/base.css";

import { renderPage as renderPageAbout } from "./pages/about";
import { renderPage as renderPageContacts }from "./pages/contacts";
import { renderPage as renderPageMenu } from "./pages/menu";

const pages = {
  about: renderPageAbout,
  contacts: renderPageContacts,
  menu: renderPageMenu,
}

const navBtns = document.querySelectorAll('.nav');
const contentNode = document.querySelector('#content');

const renderPage = (event) => {
  event.preventDefault();
  const pageName = event.target.dataset.item;

  while(contentNode.firstChild) {
    contentNode.removeChild(contentNode.lastChild);
  }

  contentNode.appendChild(pages[pageName]());
} 

navBtns.forEach(navBtn => {
  navBtn.addEventListener('click', renderPage);
});