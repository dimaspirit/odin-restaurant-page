import "./styles/base.css";

const navBtns = document.querySelectorAll('.nav');

const renderPage = (event) => {
  event.preventDefault();
  const pageName = event.target.dataset.item;
  console.log('pageName', pageName);
} 

navBtns.forEach(navBtn => {
  navBtn.addEventListener('click', renderPage);
});