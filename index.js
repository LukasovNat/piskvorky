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
