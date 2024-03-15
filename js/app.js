/* riportale le classi e gli id ceh mi servono */
const gridElement = document.querySelector('.grid');
const playbut = document.getElementById('play')
const difficulty = document.getElementById('difficulty')

/*riprendo la funzione che ho creato sotto per far apparire gia all'utente una versione del gioco*/
startgame()

/* assegno al tasto play la funzione di creare la tabella con il determinato livello di difficoltà selezionato  */
playbut.addEventListener('click', startgame) 
function startgame(bombe, clickedcells) {
	const clickedcell = []
	/* settare i valori alle costanti */
	const difficultyvalue = difficulty.value;
	/* se la difficoltà è impostata su easy allora ricarica la tabella con i seguenti valori */
	if (difficultyvalue === 'Easy') {
		gridElement.innerHTML = '';
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
				// console.log(num);
				
	            if (clickedcell.includes(num)) {
		        return
	            }
	            clickedcell.push(num)
	            console.log(clickedcell)
			})
			gridElement.append(cellElement);
		}
		
	}
	/* se la difficoltà è impostata su medium allora ricarica la tabella con i seguenti valori */
	else if (difficultyvalue === 'Medium') {
		gridElement.innerHTML = '';
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
				// console.log(num);
				
	            if (clickedcell.includes(num)) {
		        return
	            }
	            clickedcell.push(num)
	            console.log(clickedcell)
			});

			gridElement.append(cellElement);
		}
	}
	/* se la difficoltà è impostata su hard allora ricarica la tabella con i seguenti valori */
	else if (difficultyvalue === 'Hard') {
		gridElement.innerHTML = '';
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
				// console.log(num);
				
	            if (clickedcell.includes(num)) {
		        return
	            }
	            clickedcell.push(num)
	            console.log(clickedcell)
			})

			gridElement.append(cellElement);
		}
	}
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