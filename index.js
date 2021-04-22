console.log('funguju');

let soucastnyHrac = 'circle';

const herniPoleElm = document.querySelector('.tlacitkaHerniPole');
const imgElm = document.querySelector('.krouzek');

herniPoleElm.addEventListener('click', (event) => {
  console.log(event);
  if (event.target.tagName === 'BUTTON') {
    if (soucastnyHrac === 'circle') {
      event.target.classList.add('policko-kolecko');
      imgElm.src = 'Obrazky/krizek.svg';
      soucastnyHrac = 'cross';
      event.target.disabled = true;
    } else {
      event.target.classList.add('policko-krizek');
      imgElm.src = 'Obrazky/krouzek.svg';
      soucastnyHrac = 'circle';
      event.target.disabled = true;
    }
  }
});

/*const imgKoloElm = document.querySelector('.krouzek');

const pridejZnak = (event) => {
  if (hrac === 'circle') {
    event.target.classList.add('.ctverecek_krouzek--krouzek');
    hrac = 'cross';
    imgKoloElm.src = 'Obrazky/krizek.svg';
  } else {
    event.target.classList.add('.ctverecek_krizek--krizek');
    hrac = 'circle';
    imgKoloElm.src = 'Obrazky/krouzek.svg';
  }
  //event.target.removeListener('click', pridejZnak);
  //event.target.disabled = true;
};
const buttonElm = document.querySelectorAll('.ctverecek');
for (let i = 0; i < buttonElm.length; i++) {
  buttonElm[i].addEventListener('click', pridejZnak);
}*/
