console.log('funguju');

let hrac = 'circle';

const imgKoloElm = document.querySelector('.krouzek');

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
}
