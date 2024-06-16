import { checkForStop } from './functions/check-for-stop';
import { createTable, updateTable } from './functions/create-table';
import { clear, draw } from './functions/clear-draw-functions';
import { activeShape, createActiveShape, rotate } from './functions/shapes-functions';
import { checkForDeleteLine } from './functions/check-for-delete-line';
import './style.css';
import { TFigure } from './figures/figures';


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main class = "container">
      <div class="container__gradient">
        <div class ="conteiner__section">  
          <section class ="section__game">
            <table class="section__table">

            </table>
          </section>    <!--игра-->
          <section class="section__tools">
            <div class = "container__tools">
              <div class="tools__element"></div>   <!--рамка-->
              <div class="tools__table">
                <div class="table__body">
                  <div class="table__row">
                    <div class="table__row__level">level</div>
                    <div class="table__row__level-number">1</div>
                  </div>
                </div>
                <tbody class="table__body">
                  <div class="table__row">
                    <div class="table__row__lines">lines</div>
                    <div class="table__row__lines-number">0</div>
                  </div>
                  <div class="table__row">
                    <div class="table__row__score">score</div>
                    <div class="table__row__score-number">238</div>
                  </tr>
                </tbody>
              </div> 
            </div>
              <ul class ="table__row__button">
                <li><a href="#">quit</a></li>
                <li><a href ="#">pause</a></li>
              </ul>
              <h1 class="tools__element-header">tetris</h1>
          </section>
        </div>
      </div>
      <!-- <div id="app"></div> -->
    </main>
`
export const rows = 42;
export const columns = 21;
export const velocity = 400;
export let area: (0 | TFigure)[][] = new Array(rows).fill(0).map((el) => new Array(columns).fill(0));
export const position = {
  row: 1,
  column: Math.floor((columns / 2) - (activeShape.length / 2))
}

export function avtomateMove(){

	if (checkForStop()) {

		activeShape.forEach((el) => el.forEach(elInner => elInner.block = "stay"));

    const deletingLinesArray = checkForDeleteLine();

		if(deletingLinesArray.length > 0) {
      deletingLinesArray.forEach((el) => {
        area.splice(el,1);
        area = [area[0], ...area];
      })
			updateTable();
		}

		position.column = Math.floor((columns / 2) - (activeShape.length / 2));
		position.row = 0;
		createActiveShape()

		return;
	}
	  clear();
	  position.row++;
	  draw();
}

function findLeftActiveBlockIndex() {
  const array: number[] = activeShape
    .map(el => [...el.map(elInner => elInner.cube)])
    .map((el) => el.findIndex((elInner) => elInner === 1))
    .filter((el) => el >= 0)

  return Math.min(...array)
}

function findRightActiveBlockIndex() {
  const array: number[] = activeShape
    .map(el => [...el.map(elInner => elInner.cube)])
    .map((el) => el.lastIndexOf(1))
    .filter((el) => el >= 0)

  return Math.max(...array) + 1
}

createTable();

createActiveShape();

draw();

addEventListener("keydown", (e) => {

  if (e.code === "ArrowLeft") {
    if (position.column + findLeftActiveBlockIndex() <= 0) return;
    clear();
    position.column--;
    draw();
    return;
  }

  if (e.code === "ArrowRight") {
    if (position.column + findRightActiveBlockIndex() >= columns) return;
    clear();
    position.column++;
    draw();
    return;
  }

  let shouldStopByBlock = checkForStop();

  if(position.row + activeShape.length >= rows - 1 || shouldStopByBlock) return;

  if (e.code === "ArrowDown") {
    clear();
    position.row++;
  }

  if (e.code === "ArrowUp") {
    clear();
    rotate();
  }

  draw();
})

setInterval(avtomateMove, velocity);




