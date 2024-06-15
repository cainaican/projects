import { area, position } from "../figures/figures";
import { activeShape } from "../main";

export function checkForStop() {

	let shouldStopByBlock = false;

	/**
	 * поиск индекса нижнего кубика активной фигуры
	 */
	const lastIndex = activeShape
		.map(el => [...el.map(elInner => elInner.cube)])
		.map((item) => item.includes(1))
		.lastIndexOf(true);

	/**
	 * проход по каждому кубику теторимны, 
	 * и проверка каждого нижележащего кубика 
	 * на наличие "стоящего" блока
	 */

	for(let i = position.row, a = 0; i < position.row + activeShape.length; i++, a++){
		for(let j = position.column, b = 0; j < position.column + activeShape[0].length; j++, b++){
			if(i + 1 >= 42) continue;
			if(area[i + 1][j].block === "stay" && activeShape[a][b].cube === 1) shouldStopByBlock = true;
		}
	}
	/**
	 * условие остановки активного блока
	 * либо дошли до нижнего края доски
	 * либо встретили блок
	 */
	const shouldStop = position.row + lastIndex >= area.length - 1 || shouldStopByBlock;

	/**
	 * отображение в модели доски - area
	 * нового "стоящего" блока
	 */

	if (shouldStop) {
		for(let i = position.row, a = 0; i < position.row + activeShape.length; i++, a++){
			for(let j = position.column, b = 0; j < position.column + activeShape[0].length; j++, b++){
				if(activeShape[a][b].cube === 1) area[i][j] = activeShape[a][b];
			}
		}
		return true
	}

	return false;

}