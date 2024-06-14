import { activeShape } from "../main";

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

    return n_arr;

}