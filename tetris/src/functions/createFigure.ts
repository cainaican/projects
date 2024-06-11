import { area } from "../figures/figures";

export function createFigure(shape: Array<any>){

    const lines  = shape.length;
    const cubesInLine = shape[0].length;
	const middleArea= Math.round((area[0].length / 2) - (cubesInLine / 2));
	
    for (let i = 0 ; i < lines ; i++){
        for (let j = middleArea, k = 0; j < cubesInLine + middleArea; j++, k++){
            area[i][j] = shape[i][k];
        }
    }
}