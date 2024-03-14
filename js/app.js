/* riportale le classi e gli id ceh mi servono */
const gridElement = document.querySelector('.grid');
const easy = document.querySelector('.easy')
const medium = document.querySelector('.medium')
const hard = document.querySelector('.hard')
const playbut = document.getElementById('play')
const difficulty = document.getElementById('difficulty')

/* settare i valori alle costanti */
const easyvalue = easy.value
const difficultyvalue = difficulty.value
/* difficoltà predefenita su easy */
if (difficultyvalue === easyvalue) {
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
			cellElement.classList.add('bg-darkacquamarine', 'white');
			console.log(num);
		})
		
		gridElement.append(cellElement);
		
	}
}
/* assegno al tasto play la funzione di creare la tabella con il determinato livello di difficoltà selezionato  */
playbut.addEventListener('click', function () {
	/* settare i valori alle costanti */
	const easyvalue = easy.value
	const mediumvalue = medium.value
	const hardvalue = hard.value
	const difficultyvalue = difficulty.value
	/* se la difficoltà è impostata su easy allora ricarica la tabella con i seguenti valori */
	if (difficultyvalue === easyvalue) {
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
				cellElement.classList.add('bg-darkacquamarine', 'white');
				console.log(num);
			})
			
			gridElement.append(cellElement);
			
		}
	}
	/* se la difficoltà è impostata su medium allora ricarica la tabella con i seguenti valori */
	else if (difficultyvalue === mediumvalue) {
		/* do il valore alle mie costanti per creare i quadratini della tabella */
		const stringNum = 9;
		const Numsquares = stringNum ** 2;
	/* creo il ciclo per avere la tabella e il cambio colore quando viene cliccato ogni quadratino */
		for (let i = 0; i < Numsquares; ++i) {
			const num = i + 1;
			const cellElement = document.createElement('div');

			cellElement.className = 'cell';
			cellElement.innerHTML = num;
			cellElement.classList.add('medium-difficulty');

			cellElement.addEventListener('click', function () {
				cellElement.classList.add('bg-darkacquamarine', 'white');
				console.log(num);
			});

			gridElement.append(cellElement);
		
		
		}
	}
		/* se la difficoltà è impostata su hard allora ricarica la tabella con i seguenti valori */
	else if (difficultyvalue === hardvalue) {
		/* do il valore alle mie costanti per creare i quadratini della tabella */
		const stringNum = 7;
		const Numsquares = stringNum ** 2;
	/* creo il ciclo per avere la tabella e il cambio colore quando viene cliccato ogni quadratino */
		for (let i = 0; i < Numsquares; ++i) {
			const num = i + 1;
		
			const cellElement = document.createElement('div');
			cellElement.className = 'cell';
			cellElement.innerHTML = num;
			cellElement.classList.add('hard-difficulty');

			cellElement.addEventListener('click', function () {
				cellElement.classList.add('bg-darkacquamarine', 'white');
				console.log(num);
			})

			gridElement.append(cellElement);
		
		}
	}
	
})














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