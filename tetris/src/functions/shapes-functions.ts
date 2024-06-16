import { shapes, colors, TFigure } from "../figures/figures";

export let activeShape: TFigure = [];

export function createActiveShape(): void {
	
	const index =  Math.floor((Math.random() * shapes.length));

	const indexForColor = Math.floor((Math.random() * colors.length));

	// const as = shapes[index];
	const as = shapes[1];

	as.forEach(el => el.forEach(elInner => elInner.color = colors[indexForColor]));

	activeShape = as;
	  
}

export function rotate() {

	let n_arr = []; // новый перевёрнутый массив
    let n_rows = activeShape[0].length;   // количество новых строк
    let n_cols = activeShape.length;      // количество новых столбцов

    for(let x = 0; x < n_rows; x++){
        let row_arr = []; // это элемент из нового массива
		for(let y = (n_cols - 1), z = 0; y>=0; y--, z++) {
            row_arr[z] = activeShape[y][x];
        }
		n_arr[x] = row_arr;
    };

    activeShape = n_arr;

}



