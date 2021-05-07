console.log('funguju');

let soucastnyHrac = 'circle';

const herniPoleElm = document.querySelector('.tlacitkaHerniPole');
const imgElm = document.querySelector('.krouzek');
const ctverec = document.querySelector('.ctverecek');

//neco
const getSymbol = (policko) => {
  if (policko.classList.contains('policko-krizek')) {
    return 'cross';
  } else if (policko.classList.contains('policko-kolecko')) {
    return 'circle';
  }
};

const velikostPlochy = 10;

const vsechnyCtverecky = document.querySelectorAll('.ctverecek');

const vratCtverecek = (row, column) => {
  return vsechnyCtverecky[row * velikostPlochy + column];
};

const getPosition = (ctverec) => {
  let ctverecekIndex = 0;
  while (ctverecekIndex < vsechnyCtverecky.length) {
    if (ctverec === vsechnyCtverecky[ctverecekIndex]) {
      break;
    }
    ctverecekIndex++;
  }
  //console.log('getPosition', ctverec);
  return {
    row: Math.floor(ctverecekIndex / velikostPlochy),
    column: ctverecekIndex % velikostPlochy,
  };
};

const pocetWinSymbolu = 5;
const vyherniTah = (ctverec) => {
  //console.log('kontroluj vyhru');
  const pozice = getPosition(ctverec);
  const symbol = getSymbol(ctverec);
  //console.log('pozice', pozice);
  //console.log('symbol', symbol);
  let i;
  let inRow = 1; // Jednička pro právě vybrané políčko
  // Koukni doleva
  i = pozice.column;
  while (i > 0 && symbol === getSymbol(vratCtverecek(pozice.row, i - 1))) {
    inRow++;
    i--;
  }

  // Koukni doprava
  i = pozice.column;
  while (
    i < velikostPlochy - 1 &&
    symbol === getSymbol(vratCtverecek(pozice.row, i + 1))
  ) {
    inRow++;
    i++;
  }

  if (inRow >= pocetWinSymbolu) {
    return true;
  }

  let inColumn = 1;
  // Koukni nahoru
  i = pozice.row;
  while (i > 0 && symbol === getSymbol(vratCtverecek(i - 1, pozice.column))) {
    inColumn++;
    i--;
  }

  // Koukni dolu
  i = pozice.row;
  while (
    i < velikostPlochy - 1 &&
    symbol === getSymbol(vratCtverecek(i + 1, pozice.column))
  ) {
    inColumn++;
    i++;
  }

  if (inColumn >= pocetWinSymbolu) {
    return true;
  }
  return false;
};

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

    if (vyherniTah(event.target)) {
      potvrzeniVyhra();
    }
  }
});
const potvrzeniVyhra = () => {
  let vyherce = '';
  if (soucastnyHrac === 'circle') {
    vyherce = `krizky`;
  }
  if (soucastnyHrac === 'cross') {
    vyherce = `kolecky`;
  }
  let vyhra = confirm(`Vyhral hrac s ${vyherce} , chcete hrat znovu?`);
  if (vyhra === true) {
    location.reload();
  } else {
    vyhra === false;
  }
};
//Piskvorky 5/5
/*const getSymbol = (field) => {
    // Název třídy přizpůsob tvému kódu.
    if (field.classList.contains('board__field--cross')) {
      return 'cross'
    } else if (field.classList.contains('board__field--circle')) {
      return 'circle'
    }
  }*/

/*const boardSize = 10 // 10x10
  const fields = document.querySelectorAll('.board__field') // Selektor pozměň tak, aby odpovídal tvému kódu.
  
  const getField = (row, column) => fields[row * boardSize + column]*/

//najdiCtverecek(1, 3);

//Napiš funkci getPosition(field), která naopak pro dané políčko vrátí objekt s číslem řádku a sloupce. Pro levé horní políčko vrať {row: 0, column: 0}, pro pravé dolní {row: 9, column: 9}, pro levé dolní {row: 9, column: 0}, …

/*const getPosition = (field) => {
    let fieldIndex = 0
    while (fieldIndex < fields.length && field !== fields[fieldIndex]) {
      fieldIndex++
    }
    
    return {
      row: Math.floor(fieldIndex / boardSize),
      column: fieldIndex % boardSize,
    }
  }*/

//getPosition({ row: 1, columnn: 3 });

//zjisti při každém tahu, jestli se nejedná o výherní. Nový kód navaž na event listener ze čtvrtého úkolu.
