import {
  nameTitleAndSubtitle,
  subtitleText,
  titleText,
  header,
  heigthHeader,
  headerLinks
} from "../utils/constants.js";


function updateMainTitles () {
  let currentNumber = -1;
  let previousNumber = -1;
  do {
    currentNumber = Math.floor(Math.random() * nameTitleAndSubtitle.length);
  } while(currentNumber === previousNumber)
  const randomCard = nameTitleAndSubtitle[currentNumber];

  titleText.classList.remove('world__animation');
  subtitleText.classList.remove('world__animation');

  setTimeout(() => {
    subtitleText.textContent = randomCard.name;
    titleText.textContent = randomCard.title;
    subtitleText.classList.add('world__animation');
    titleText.classList.add('world__animation');
  }, 500)


  previousNumber = currentNumber;
}



function stickyHeader() {
  if(window.scrollY > heigthHeader) {
    header.classList.add('header_sticky-active');
    headerLinks.forEach(link => {
      link.classList.add('header__links_white');
    })
  } else {
    header.classList.remove('header_sticky-active');
    headerLinks.forEach(link => {
      link.classList.remove('header__links_white');
    });
  }
}

headerLinks.forEach(link => {
  link.addEventListener('click', (evt) => {
    evt.preventDefault();
    const targetId = link.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    targetElement.scrollIntoView({behavior: 'smooth'});
  })
})

window.addEventListener('scroll', stickyHeader);
stickyHeader();

updateMainTitles();
setInterval(updateMainTitles, 5000);
