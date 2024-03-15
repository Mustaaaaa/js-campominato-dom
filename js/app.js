/* questo è il lavoro fatto fino ad ora, ci ho perso un sacco di tempo ma alcune cose continuo a non capirle e infatti non le ho fatte,
 per quanto riguarda il codice qui presente mi è abbastanza chiaro tutto.
 Magari lunedì apro un ticket per avere un feedback */



/* riportale le classi e gli id ceh mi servono */
const gridElement = document.querySelector('.grid');
const playbut = document.getElementById('play')
const difficulty = document.getElementById('difficulty')

/*riprendo la funzione che ho creato sotto per far apparire gia all'utente una versione del gioco*/
startgame()

/* assegno al tasto play la funzione di creare la tabella con il determinato livello di difficoltà selezionato  */
playbut.addEventListener('click', startgame) 
function startgame(bomb, clickedcells) {
	const clickedcell = [];
	/* settare i valori alle costanti */
	const difficultyvalue = difficulty.value;
	/* se la difficoltà è impostata su easy allora ricarica la tabella con i seguenti valori */
	if (difficultyvalue === 'Easy') {
		gridElement.innerHTML = '';
		const bomb = ramdomsbomb(16, 1, 100);
		console.log(bomb);
		/* do il valore alle mie costanti per creare i quadratini della tabella */
		const stringNum = 10;
		const Numsquares = stringNum ** 2;
		/* creo il ciclo per avere la tabella e il cambio colore quando viene cliccato ogni quadratino */
		for (let i = 0; i < Numsquares; ++i) {
			const num = i + 1;
			const cellElement = document.createElement('div');
			
			cellElement.className = 'cell';
			cellElement.innerHTML = num;
			cellElement.classList.add('easy-difficulty');
			
			cellElement.addEventListener('click', function () {
				/* se la cella va cliccata una volta non da più input */
				if (clickedcell.includes(num)) {
					return
				}
				/* creo il mio if
				se il numero cliccato contiene una bomba la cella si colora di rosso */	
				if (bomb.includes(num)) {
					console.log('è una bomba');
					cellElement.classList.add('bg-danger');
				}
				/*
				se il numero cliccato non contiene una bomba la cella si colora di di blue*/
				else {
					clickedcell.push(num);
					console.log('Non è una bomba');
					cellElement.classList.add('bg-darkacquamarine', 'white');
					console.log('Il tuo punteggio:', clickedcell.length);
				}
			})
			gridElement.append(cellElement);
		}
		
	}
	/* se la difficoltà è impostata su medium allora ricarica la tabella con i seguenti valori */
	else if (difficultyvalue === 'Medium') {
		gridElement.innerHTML = '';
		/* do il valore alle mie bombe*/
		const bomb = ramdomsbomb(16, 1, 81);
		console.log(bomb);
		const stringNum = 9;
		const Numsquares = stringNum ** 2;
		for (let i = 0; i < Numsquares; ++i) {
			const num = i + 1;
			const cellElement = document.createElement('div');
			
			cellElement.className = 'cell';
			cellElement.innerHTML = num;
			cellElement.classList.add('medium-difficulty');
		
			cellElement.addEventListener('click', function () {
				if (clickedcell.includes(num)) {
					return
				}
					
				if (bomb.includes(num)) {
					console.log('è una bomba');
					cellElement.classList.add('bg-danger');
				} else {
					clickedcell.push(num);
					console.log('Non è una bomba');
					cellElement.classList.add('bg-darkacquamarine', 'white');
					console.log('Il tuo punteggio:', clickedcell.length);
				}
			})
			gridElement.append(cellElement);
		}
	}
	/* se la difficoltà è impostata su hard allora ricarica la tabella con i seguenti valori */
	else if (difficultyvalue === 'Hard') {
		gridElement.innerHTML = '';

		const bomb = ramdomsbomb(16, 1, 49);
		console.log(bomb);
		const stringNum = 7;
		const Numsquares = stringNum ** 2;
		for (let i = 0; i < Numsquares; ++i) {
			const num = i + 1;
			const cellElement = document.createElement('div');
			
			cellElement.className = 'cell';
			cellElement.innerHTML = num;
			cellElement.classList.add('hard-difficulty');
			
			cellElement.addEventListener('click', function () {
				if (clickedcell.includes(num)) {
					return
				}
					
				if (bomb.includes(num)) {
					console.log('è una bomba');
					cellElement.classList.add('bg-danger');
				} else {
					clickedcell.push(num);
					console.log('Non è una bomba');
					cellElement.classList.add('bg-darkacquamarine', 'white');
					console.log('Il tuo punteggio:', clickedcell.length);
				}
			})
			gridElement.append(cellElement);
		}
	}
}


function ramdomsbomb(length, min, max) {

	const numberbomb = []
	while (numberbomb.length < length) {
		const num = getRandomIntInclusive(min, max);

		if (!numberbomb.includes(num)) {
			numberbomb.push(num)
		}
	}
	return numberbomb
}
	
	

function getRandomIntInclusive(min, max) {
	const minCeiled = Math.ceil(min)
	const maxFloored = Math.floor(max)
	return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled)
}

// const stringNum = 10;
// const Numsquares = stringNum ** 2;

// 	for (let i = 0; i < Numsquares; ++i) {
// 		const num = i + 1;
// 		console.log(num);
		
// 		const cellElement = document.createElement('div');
// 		cellElement.className = 'cell';
// 		cellElement.innerHTML = num;
		
// 		gridElement.append(cellElement)
		
// 		cellElement.addEventListener('click', function () {
// 			cellElement.classList.add('bg-darkacquamarine', 'white')
// 			console.log(num)
// 		})
// }